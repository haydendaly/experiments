import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [title, setTitle] = useState("hi");

  const handleChange = (e) => {
    const text = e.target.value;
    setTitle(text);
  };

  useEffect(() => {
    console.log(title);
  }, [title]);

  const onMount = async () => {
    const data = await fetch("https://hcdaly.dev/about");
    console.log(data);
  };

  useEffect(() => {
    onMount();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input onChange={handleChange} />

        <h2>{title}</h2>
      </main>
    </div>
  );
}
