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
        <title>Liabri Studios | Faith-Based Children's Stories About Courage, Wonder & Being Loved</title>
        <meta name="description" content="Liabri Studios creates faith-based children's stories about courage, wonder, being different, and the truth that every child is seen and loved by Jesus." />
        <meta name="keywords" content="children's picture books, picture books for ages 4-8, books about being different, dyspraxia picture book, DCD children's book, Christian picture books for kids, books about courage for children, Yorkshire terrier children's book, independent children's book publisher, Michele Cameron author, Liabri Studios" />
        <link rel="canonical" href="https://www.liabristudios.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Liabri Studios" />
        <meta property="og:title" content="Liabri Studios | Faith-Based Children's Stories About Courage, Wonder & Being Loved" />
        <meta property="og:description" content="Liabri Studios creates faith-based children's stories about courage, wonder, being different, and the truth that every child is seen and loved by Jesus." />
        <meta property="og:url" content="https://www.liabristudios.com/" />
        <meta property="og:image" content="https://www.liabristudios.com/assets/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Liabri Studios logo on a starry night sky" />
        <meta property="og:locale" content="en_GB" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Liabri Studios | Faith-Based Children's Stories About Courage, Wonder & Being Loved" />
        <meta name="twitter:description" content="Liabri Studios creates faith-based children's stories about courage, wonder, being different, and the truth that every child is seen and loved by Jesus." />
        <meta name="twitter:image" content="https://www.liabristudios.com/assets/og-image.jpg" />
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
