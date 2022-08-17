import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import Image from 'next/image'

export default function Home({ articles }) {

  return (
    <PageLayout title={'Home'}>
              {
        articles.length === 0
          ? <p>Articles not found</p>
          : <ul>
            {articles.map(article => (
              <article key={article.url}>
                {/* Si no registras la URL externa de la que viene la imagen en `next.config.js` el componente `Image` no funciona. Como en esta API las imágenes vienen de distintas URL y solo las puedo conocer en runtime creo que no puedo usarlo. En consecuencia me quedo con el img de toda la vida */}
                {/*eslint-disable-next-line*/}
                <img 
                  alt={`Image for the article ${article.title}`} 
                  src={article.urlToImage}
                  width={500}
                  height={500}
                />
                <h2>{article.title}</h2>
                <p>
                  {article.description}
                </p>
              </article>
            ))}
          </ul>
        }

        <Link href='/about'>Ir a about</Link>
    </PageLayout>
  )
}

// En cada request hace la llamada al endpoint para generar la página en el servidor
export async function getServerSideProps (context) {
  const response = await fetch('https://newsapi.org/v2/everything?q=nextjs&language=en&apiKey=96d8fdc5e2d0441c8299340aa718aff7')
  const { articles } = await response.json()

  return {
    props: {
      articles
    }
  }
}

/*
// Igual que `getServerSideProps` (abajo) pero solo se ejecuta una vez en built time (o para refrescar la página)
export async function getStaticProps () {
  const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-07-16&sortBy=publishedAt&apiKey=96d8fdc5e2d0441c8299340aa718aff7')
  const { articles } = await response.json()

  return {
    props: {
      articles
    }
  }
}
*/
