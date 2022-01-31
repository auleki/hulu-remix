import Head from 'next/head'
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu Remix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      {/* Nav */ }
        <Navbar />

      {/* Results */ }

      {/* Footer */ }
    </div>
  )
}
