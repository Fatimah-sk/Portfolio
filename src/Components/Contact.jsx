/* import { useEffect, useRef, useState } from 'react'
import './Contact.css'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FiExternalLink } from 'react-icons/fi'

function Contact() {
  const sectionRef = useRef(null)
  const [animationMode, setAnimationMode] = useState('static')

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let lastY = window.scrollY
    let wasInZone = false

    const handleScroll = () => {
      const currentY = window.scrollY
      const goingDown = currentY > lastY
      const goingUp = currentY < lastY
      lastY = currentY

      const rect = section.getBoundingClientRect()
      const triggerLine = window.innerHeight * 0.65
      const inZone = rect.top <= triggerLine && rect.bottom > triggerLine

      if (!inZone) {
        wasInZone = false
        // Reset only when the entire section is below the trigger line.
        // Its content is then off-screen, so the reset is not visible.
        if (rect.top > triggerLine) setAnimationMode('ready')
        else setAnimationMode('static')
        return
      }

      if (!wasInZone) {
        wasInZone = true
        setAnimationMode(goingDown ? 'playing' : 'static')
      } else if (goingUp) {
        // Scrolling upward should show everything, without a replay.
        setAnimationMode('static')
      }
    }

    // Establish the initial state without assuming scroll direction.
    const initialRect = section.getBoundingClientRect()
    if (initialRect.top > window.innerHeight * 0.65) {
      setAnimationMode('ready')
    } else {
      setAnimationMode('static')
      wasInZone = initialRect.bottom > window.innerHeight * 0.65
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="contact" ref={sectionRef} className={`contact-section contact-${animationMode}`}>
      <div className="section-title contact-reveal-title">
        <p>GET IN TOUCH</p>
        <h2>Let's <span>Connect</span></h2>
      </div>

      <div className="contact-container">
        <div className="contact-text contact-reveal-left">
          <h3>Let's build something together.</h3>
          <p>I'm always open to new opportunities, collaborations and interesting projects.</p>
          <p>Feel free to reach out — I'd love to hear from you.</p>
          <p>Fatimah-Sakhnine@hotmail.com</p>
        </div>

        <div className="contact-links">
          <a href="https://github.com/Fatimah-sk" target="_blank" rel="noreferrer" className="contact-card contact-reveal-right">
            <div className="contact-icon github-icon"><FaGithub /></div>
            <div className="contact-info"><h3>GitHub</h3><p>Fatimah-sk</p></div>
            <FiExternalLink className="contact-arrow" />
          </a>
          <a href="https://www.linkedin.com/in/fatimah-sakhnine-510b83318" target="_blank" rel="noreferrer" className="contact-card contact-reveal-right">
            <div className="contact-icon linkedin-icon"><FaLinkedin /></div>
            <div className="contact-info"><h3>LinkedIn</h3><p>View Profile</p></div>
            <FiExternalLink className="contact-arrow" />
          </a>
          <a href="mailto:Fatimah-Sakhnine@hotmail.com" className="contact-card contact-reveal-right">
            <div className="contact-icon email-icon"><MdEmail /></div>
            <div className="contact-info"><h3>Email</h3><p>Send a Message</p></div>
            <FiExternalLink className="contact-arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
 */

import { useEffect, useRef, useState } from 'react'
import './Contact.css'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FiCode } from 'react-icons/fi'

function Contact() {
  const sectionRef = useRef(null)
  const [animationMode, setAnimationMode] = useState('static')

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let lastY = window.scrollY
    let wasInZone = false

    const handleScroll = () => {
      const currentY = window.scrollY
      const goingDown = currentY > lastY
      const goingUp = currentY < lastY
      lastY = currentY

      const rect = section.getBoundingClientRect()
      const triggerLine = window.innerHeight * 0.65
      const inZone = rect.top <= triggerLine && rect.bottom > triggerLine

      if (!inZone) {
        wasInZone = false
        if (rect.top > triggerLine) setAnimationMode('ready')
        else setAnimationMode('static')
        return
      }

      if (!wasInZone) {
        wasInZone = true
        setAnimationMode(goingDown ? 'playing' : 'static')
      } else if (goingUp) {
        setAnimationMode('static')
      }
    }

    const initialRect = section.getBoundingClientRect()

    if (initialRect.top > window.innerHeight * 0.65) {
      setAnimationMode('ready')
    } else {
      setAnimationMode('static')
      wasInZone = initialRect.bottom > window.innerHeight * 0.65
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact-section contact-${animationMode}`}
    >
      <div className="section-title contact-reveal-title">
        <p>GET IN TOUCH</p>
        <h2>Let's <span>Connect</span></h2>
      </div>

      <div className="contact-container">
        <div className="contact-text contact-reveal-left">
          <h3>Let's build something together.</h3>

          <p>
            I'm always open to new opportunities,
            collaborations and interesting projects.
          </p>

          <p>Feel free to reach out — I'd love to hear from you.</p>

          <div className="contact-socials">
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
              <FaLinkedin />
            </a>

            <a
              href="mailto:Fatimah-Sakhnine@hotmail.com"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        <div className="contact-code-visual contact-reveal-right">
          <div className="code-card-wrapper">
            <div className="code-back-layer layer-one"></div>
            <div className="code-back-layer layer-two"></div>

            <div className="code-card">
              <div className="code-card-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>developer.json</span>
              </div>

              <div className="code-card-body">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span>{'{'}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="indent"><span className="json-key">"name"</span>: <span className="json-string">"Fatimah"</span>,</span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="indent"><span className="json-key">"role"</span>: <span className="json-string">"Frontend Developer"</span>,</span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="indent"><span className="json-key">"skills"</span>: [</span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="double-indent json-string">"React",</span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="double-indent json-string">"JavaScript",</span>
                </div>
               
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="double-indent json-string">"Node.js"</span>
                </div>
                <div className="code-line">
                  <span className="line-number">8</span>
                  <span className="indent">],</span>
                </div>
                <div className="code-line">
                  <span className="line-number">9</span>
               <span className="indent">
                <span className="json-key">"available"</span>:
                <span className="json-boolean">true</span>
              </span>
                </div>
                <div className="code-line">
                  <span className="line-number">10</span>
                  <span>{'}'}</span>
                </div>
              </div>
            </div>

            <div className="code-floating-icon">
              <FiCode />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
