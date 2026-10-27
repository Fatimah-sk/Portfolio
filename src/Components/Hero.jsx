
import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { FiExternalLink, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  const animationRef = useRef(null)

  useEffect(() => {
    if (!animationRef.current) return

    const animation = lottie.loadAnimation({
      container: animationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `${import.meta.env.BASE_URL}developer-animation-purple.json`,
    })

    return () => animation.destroy()
  }, [])

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hello">HELLO, I'M</p>
        <h1>Fatimah</h1>
        <h2>Frontend Developer</h2>

        <div className="hero-description">
          <h3>Turning ideas into digital experiences.</h3>

          <p className="intro">
            I create responsive, interactive and user-friendly websites,
            combining clean design with modern web technologies.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            My Projects
            <FiExternalLink className="hero-arrow" />
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
            <FiMail className="contact-btn-icon" />
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Fatimah-sk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/fatimah-sakhnine-510b83318"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a href="mailto:fatimah.sakhnine@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-animation-wrapper">
          <div ref={animationRef} className="hero-lottie" />
        </div>
      </div>
    </section>
  )
}

export default Hero
