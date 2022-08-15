import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>NewsApp</title>
        <meta name="description" content="NewsApp - Aprendiendo Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Component {...pageProps} />
  </>
}

export default MyApp
