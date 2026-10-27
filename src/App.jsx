
import { useEffect, useState } from 'react'

import Navbar from './Components/NavBar'
import Intro from './Components/Intro'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [])

  return (
    <>
      {showIntro && (
        <Intro onFinish={() => setShowIntro(false)} />
      )}

      <div className={showIntro ? 'intro-active' : 'intro-finished'}>
        <Navbar />
        <Hero />
        <About introFinished={!showIntro} />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
