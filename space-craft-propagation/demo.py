import orekit

vm = orekit.initVM()

from orekit.pyhelpers import setup_orekit_curdir

setup_orekit_curdir() # looks for orekit-data.zip

# grab two line elements from celestrak:
# https://celestrak.com/NORAD/elements/active.txt
iss_tle = [
    "1 25544U 98067A   20168.72989583  .00000038  00000-0  87409-5 0  9992",
    "2 25544  51.6465 350.7306 0002347  64.4399 115.7370 15.49444406231948"
]
