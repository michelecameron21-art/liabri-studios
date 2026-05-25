import Header from './components/Header'
import Hero from './components/Hero'
import Worlds from './components/Worlds'
import WorldDetail from './components/WorldDetail'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Worlds />
        <WorldDetail />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
