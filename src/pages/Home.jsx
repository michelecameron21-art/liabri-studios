import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Worlds from '../components/Worlds'
import WorldDetail from '../components/WorldDetail'
import About from '../components/About'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <Helmet>
        <title>Liabri Studios | Children's Picture Books About Courage, Being Different & Faith</title>
        <meta name="description" content="Liabri Studios is an independent children's book publisher. Picture books for ages 4 to 8 about being different (Finding Your Spark), bravery (Frankie & Henry) and faith (Seen by Jesus). Author Michele Cameron." />
        <meta name="keywords" content="children's picture books, picture books for ages 4-8, books about being different, dyspraxia picture book, DCD children's book, Christian picture books for kids, books about courage for children, Yorkshire terrier children's book, independent children's book publisher, Michele Cameron author, Liabri Studios" />
        <link rel="canonical" href="https://liabristudios.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Liabri Studios" />
        <meta property="og:title" content="Liabri Studios | Children's Picture Books That Inspire" />
        <meta property="og:description" content="Independent children's book publisher. Picture books for ages 4 to 8 that celebrate what makes children unique, give them courage, and remind them they are loved." />
        <meta property="og:url" content="https://liabristudios.com/" />
        <meta property="og:image" content="https://liabristudios.com/assets/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Liabri Studios logo on a starry night sky" />
        <meta property="og:locale" content="en_GB" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Liabri Studios | Children's Picture Books That Inspire" />
        <meta name="twitter:description" content="Independent children's book publisher. Picture books for ages 4 to 8 about being different, courage, and faith." />
        <meta name="twitter:image" content="https://liabristudios.com/assets/og-image.jpg" />
        <meta name="twitter:image:alt" content="Liabri Studios logo on a starry night sky" />
      </Helmet>
      <Hero />
      <Worlds />
      <WorldDetail />
      <About />
      <Contact />
    </>
  )
}

export default Home
