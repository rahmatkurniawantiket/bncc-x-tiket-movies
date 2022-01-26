import Head from 'next/head'
import {useEffect, useState} from "react";

export default function Home() {
  const [data, setData] = useState("");
  useEffect(() => {

  }, [])
  return (
    <>
      <Head>
        <title>BNCC Movies</title>
        <meta name="description" content="BNCC Movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Landing</main>

      <input  onChange={ (e) => setData(e.target.value)}/>
      <h4>{data}</h4>
    </>
  )
}
