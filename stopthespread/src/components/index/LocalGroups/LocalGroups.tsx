import React, { useState, useEffect, useRef } from "react"
import * as styles from "./localGroups.module.scss"
import classnames from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import Geocoding from "@mapbox/mapbox-sdk/services/geocoding"

import * as geolib from "geolib"
import { GeolibInputCoordinates } from "geolib/es/types"

import whatsapp from "../../../images/emojis/whatsapp1.png"
import facebook from "../../../images/emojis/facebook1.png"
import nextdoor from "../../../images/emojis/nextdoor1.png"
import link from "../../../images/emojis/link1.png"

interface GroupDetail {
  node: {
    LATITUDE: number
    LONGITUDE: number
    LINK: string
    GROUP_NAME: string
  }
}

const API_KEY =
  "pk.eyJ1IjoiY2JyYWNlZ2lyZGxlLXN0b3B0aGVzcHJlYWQiLCJhIjoiY2s4NHllMnNnMDBobzNlc2pocjRjZzFyaSJ9.jd3ybjG92Rcs4a4sjJJ-2Q"

const geocodingClient = Geocoding({ accessToken: API_KEY })

interface Locations {
  latitude: number
  longitude: number
  uri: string
  name: string
}

const LocalGroupsInner = () => {
  const [position, setPosition] = useState<GeolibInputCoordinates | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [nearbyGroups, setNearbyGroups] = useState<Locations[] | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onPositionReceived = ({ coords }: { coords: Coordinates }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
  }
  const onPositionError = (error: PositionError) => {
    setError(error.message)
  }

  useEffect(() => {
    const geo = navigator.geolocation
    if (!geo) {
      setError("Geolocation is not supported")
      return
    }
    const watcher = geo.watchPosition(onPositionReceived, onPositionError)
    return () => geo.clearWatch(watcher)
  }, [])

  const [userLocation, setUserLocation] = useState<string>("")

  const [formStatus, setFormStatus] = useState<string>("Unsubmitted")

  const data = useStaticQuery(graphql`
    query {
      allStopTheSpreadLocalAidCsv {
        edges {
          node {
            GROUP_NAME
            LINK
            LATITUDE
            LONGITUDE
          }
        }
      }
    }
  `)

  const geolocate = (locationString: string) => {
    geocodingClient
      .forwardGeocode({
        query: locationString,
        limit: 1,
        types: ["postcode"],
        autocomplete: false,
        countries: ["gb"],
        mode: "mapbox.places",
      })
      .send()
      .then(
        response => {
          const match = response.body
          console.log(response)
          try {
            setPosition({
              latitude: match.features[0].center[1],
              longitude: match.features[0].center[0],
            })
            setFormStatus("Success")
            return
          } catch {
            // On location error focus and select the input to allow re-entry.
            if (inputRef && inputRef.current) {
              inputRef.current.select()
            }
            setFormStatus("Location Failure")
          }
        },
        () => setFormStatus("Server Failure")
      )
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormStatus("Submitting")
    geolocate(userLocation)
  }

  const getIcon = (uri: string) => {
    if (uri.includes("facebook")) return facebook
    else if (uri.includes("whatsapp")) return whatsapp
    else if (uri.includes("nextdoor")) return nextdoor
    else return link
  }

  const getNearestGroups = (n: number) => {
    let allLocations: Locations[] = data.allStopTheSpreadLocalAidCsv.edges.map(
      (row: GroupDetail) => ({
        latitude: row.node.LATITUDE,
        longitude: row.node.LONGITUDE,
        uri: row.node.LINK,
        name: row.node.GROUP_NAME,
      })
    )
    allLocations = allLocations.filter(
      (location: { latitude: number | null }) => location.latitude !== null
    )
    if (position !== null) {
      const ordered = geolib.orderByDistance(position, allLocations)
      const locations = ordered
        .slice(0, n)
        .filter(
          location => geolib.getDistance(position, location) < 50000
        ) as Locations[]
      return locations
    }
    return []
  }

  useEffect(() => {
    // Cast position to suppress typescript warnings. Seems to be an issue with accessing values on the GeolibInputCoordinates type.
    const castPosition = position as Partial<Coordinates>
    if (
      position !== null &&
      castPosition.latitude !== undefined &&
      castPosition.longitude !== undefined
    ) {
      setNearbyGroups(getNearestGroups(3))
    }
  }, [position])

  const renderSubmitButton = () => {
    switch (formStatus) {
      case "Unsubmitted":
        return (
          <button className={classnames(styles.submit, styles.unsubmitted)}>
            SUBMIT
          </button>
        )
      case "Submitting":
        return (
          <button
            disabled={true}
            className={classnames(styles.submit, styles.submitting)}
          >
            submitting...
          </button>
        )
      case "Success":
        return (
          <button
            disabled={true}
            className={classnames(styles.submit, styles.success)}
          >
            Success!
          </button>
        )
      case "Location Failure":
        return (
          <div className={styles.errorContainer}>
            <p className={styles.errorMessage}>
              Location could not be found, ensure this is a valid UK postcode
              and retry.
            </p>
            <button className={classnames(styles.submit, styles.submitting)}>
              SUBMIT
            </button>
          </div>
        )
      case "Server Failure":
        return (
          <button
            disabled
            className={classnames(styles.submit, styles.failure)}
          >
            Server Error
          </button>
        )
    }
  }

  return (
    <div className={styles.container}>
      {nearbyGroups !== null && !nearbyGroups.length && (
        <div className={styles.noGroups}>No groups nearby</div>
      )}
      {nearbyGroups && nearbyGroups.length > 0 && (
        <>
          <h4 className={styles.title}>Local Aid Groups</h4>
          <div className={styles.linksContainer}>
            {nearbyGroups.map(group => (
              <a
                className={styles.linkContainer}
                href={group.uri}
                target="_blank"
                rel="noopener noreferrer"
                key={group.name}
              >
                <img className={styles.icon} src={getIcon(group.uri)} alt="" />
                <span className={styles.linkTitle}>{group.name}</span>
              </a>
            ))}
          </div>
        </>
      )}
      {error !== null && position === null && (
        <form onSubmit={event => handleFormSubmit(event)} name="location">
          <div className={styles.locationContainer}>
            <input
              ref={inputRef}
              required={true}
              id="location"
              name="location"
              className={styles.location}
              value={userLocation}
              placeholder="Zip Code"
              onChange={event => setUserLocation(event.target.value)}
            />
          </div>
          <div className={styles.submitContainer}>{renderSubmitButton()}</div>
        </form>
      )}
    </div>
  )
}

const LocalGroups = () => {
  const [active, setActive] = useState(false)

  const renderActivationButton = () => (
    <div className={styles.activateContainer}>
      <button
        onClick={() => setActive(true)}
        className={styles.activateFormButton}
      >
        Find nearest local support group
      </button>
    </div>
  )

  return <div>{active ? <LocalGroupsInner /> : renderActivationButton()}</div>
}

export default LocalGroups
