
import { useLayoutEffect, useRef, useState } from 'react'
import { HiOutlineAcademicCap } from 'react-icons/hi2'
import { LuCodeXml, LuBrainCircuit } from 'react-icons/lu'
import { FiDownload } from 'react-icons/fi'
import './About.css'

function About({ introFinished }) {
  const sectionRef = useRef(null)
  const [animationMode, setAnimationMode] = useState('ready')

  useLayoutEffect(() => {
    if (!introFinished) return

    const section = sectionRef.current
    if (!section) return

    let lastY = window.scrollY
    let wasInZone = false

    const getPosition = () => {
      const rect = section.getBoundingClientRect()
      const triggerLine = window.innerHeight * 0.65

      return {
        rect,
        triggerLine,
        inZone:
          rect.top <= triggerLine &&
          rect.bottom > triggerLine,
        visible:
          rect.top < window.innerHeight &&
          rect.bottom > 0,
      }
    }

    const initialPosition = getPosition()

    // If About is already visible alongside Hero,
    // start both entrance animations after Intro.
    if (initialPosition.visible) {
      setAnimationMode('playing')
      wasInZone = initialPosition.inZone
    } else {
      setAnimationMode('ready')
    }

    const handleScroll = () => {
      const currentY = window.scrollY
      const goingDown = currentY > lastY
      const goingUp = currentY < lastY

      lastY = currentY

      const { rect, triggerLine, inZone } = getPosition()

      if (!inZone) {
        wasInZone = false

        setAnimationMode(
          rect.top > triggerLine ? 'ready' : 'static'
        )

        return
      }

      if (!wasInZone) {
        wasInZone = true
        setAnimationMode(goingDown ? 'playing' : 'static')
      } else if (goingUp) {
        setAnimationMode('static')
      }
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [introFinished])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section about-${animationMode}`}
    >
      <div className="section-title about-reveal-title">
        <p>GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-text about-reveal-left">
          <h3>Building my future in tech.</h3>

          <p>
            I'm Fatimah, an IT professional with a Bachelor's degree in
            Information Technology and experience in IT education and
            administration.
          </p>

          <p>
            I'm currently expanding my development skills through Kodehode,
            focusing on modern web development and technologies such as
            JavaScript, React, Node.js and databases.
          </p>

          <p>
            I enjoy turning ideas into practical, user-friendly digital
            solutions and continuously learning new technologies.
          </p>

          <a
            href={`${import.meta.env.BASE_URL}Fatimah-CV.pdf`}
            download="Fatimah-CV.pdf"
            className="primary-btn about-cv-btn"
          >
            Download CV
            <FiDownload className="cv-download-icon" />
          </a>
        </div>

        <div className="about-cards">
          <div className="about-card about-reveal-up">
            <div className="about-icon">
              <HiOutlineAcademicCap />
            </div>
            <div className="about-card-text">
              <h3>Education</h3>
              <p>Bachelor's Degree in Information Technology</p>
            </div>
          </div>

          <div className="about-card about-reveal-up">
            <div className="about-icon">
              <LuCodeXml />
            </div>
            <div className="about-card-text">
              <h3>Development</h3>
              <p>Frontend Development</p>
            </div>
          </div>

          <div className="about-card about-reveal-up">
            <div className="about-icon">
              <LuBrainCircuit />
            </div>
            <div className="about-card-text">
              <h3>Growth</h3>
              <p>Always Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
