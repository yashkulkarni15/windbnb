import Head from 'next/head'
import Header from '../components/Header'
import Card from '../components/Card';

export default function Home() {
  const cards = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"
  , "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", 
  "twenty-seven", "twenty-eight", "twenty-nine", "thirty"];
  return (
    <div>
      <Head>
        <title>Windbnd</title>
        <meta name="description" content="Airbnb Clone" />
        <link rel="icon" href='https://img.icons8.com/color/48/000000/airbnb.png' />
        <script src="./node_modules/dist/js/index.min.js"></script>
      </Head>
      <Header/>
      <div className='grid 2xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 p-8'>
        {
          cards.map(card => {
            return <Card id={card} />
          })
        }
      </div>
    </div>
  )
}
