
import { useLayoutEffect, useRef, useState } from 'react'
import './Skills.css'

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'

import {
  SiVite,
  SiExpress,
  SiMysql,
  SiFigma,
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'SQL', icon: <SiMysql /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Figma', icon: <SiFigma /> },
]

function Skills() {
  const sectionRef = useRef(null)
  const [animationMode, setAnimationMode] = useState('ready')

  useLayoutEffect(() => {
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
      }
    }

    const initialPosition = getPosition()

    if (initialPosition.inZone) {
      setAnimationMode('static')
      wasInZone = true
    } else if (initialPosition.rect.top > initialPosition.triggerLine) {
      setAnimationMode('ready')
    } else {
      setAnimationMode('static')
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
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills-section skills-${animationMode}`}
    >
      <div className="section-title skills-reveal-title">
        <p>WHAT I WORK WITH</p>
        <h2>
          My <span>Skills</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            className="skill-card skills-reveal-card"
            key={skill.name}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
