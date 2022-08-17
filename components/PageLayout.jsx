import Head from 'next/head'
import Link from 'next/link'

export default function PageLayout ({ children, title = 'NewsApp' }) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="NewsApp - Aprendiendo Next.js" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <Link href='/'>NewsApi</Link>
    </header>
    <main>
      {children}
    </main>
    </>
  )
}