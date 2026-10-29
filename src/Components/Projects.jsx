
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import './Projects.css'
import { FiExternalLink } from 'react-icons/fi'

import BookAppImage from '../assets/BookApp.png'
import KafeSolglimtImage from '../assets/KafeSolglimt.png'
import Toma4KImage from '../assets/TOMA4K.png'
import JupiterImage from '../assets/JupiterPlanet.png'
import CraftsVillaImage from '../assets/Craft3.png'
import MovableObjectImage from '../assets/MovableObject.png'
import BookDashboardImage from '../assets/Dashboard.png'
import NeonSyndicateImage from '../assets/NeonSyndicate.png'
import GhibliStudioImage from '../assets/GhibliStudio.png'
import CountriesDashboardImage from '../assets/Countries.png'
import CryptoTrackerImage from '../assets/CryptoTracker.JPG'
import PortfolioWebsiteImage from '../assets/Portfolio.png'
import PMSImage from '../assets/PMS.png'
import ColorPickerImage from '../assets/ColorPicker.png'
import FigmaImage from '../assets/CraftsVillaFigma.png'

const ProjectsArray = [
  {
    id: 1,
    title: 'CraftsVilla',
    description: 'A creative website for exploring and booking art workshops for all ages.',
    image: CraftsVillaImage,
    technologies: ['CSS', 'HTML'],
    liveDemo: 'https://fatimah-sk.github.io/CRAFTVILLA/',
    github: 'https://github.com/Fatimah-sk/CRAFTVILLA',
  },
  {
    id: 2,
    title: 'Kafe Solglimt',
    description: 'A modern and responsive coffee shop website with a clean, elegant design.',
    image: KafeSolglimtImage,
    technologies: ['CSS', 'HTML'],
    liveDemo: 'https://fatimah-sk.github.io/Kafe-Solglimt/',
    github: 'http://github.com/Fatimah-sk/Kafe-Solglimt',
  },
  {
    id: 3,
    title: 'TOMA 4K',
    description: 'A movie and TV platform for discovering the latest entertainment content.',
    image: Toma4KImage,
    technologies: ['CSS', 'HTML'],
    liveDemo: 'https://fatimah-sk.github.io/TOMA-4K/',
    github: 'https://github.com/Fatimah-sk/TOMA-4K',
  },
  {
    id: 4,
    title: 'Jupiter Planet',
    description: 'An educational website exploring Jupiter through engaging visuals and content.',
    image: JupiterImage,
    technologies: ['CSS', 'HTML'],
    liveDemo: 'https://fatimah-sk.github.io/planet-Oppgave3/',
    github: 'https://github.com/Fatimah-sk/planet-Oppgave3',
  },
  {
    id: 5,
    title: 'Book App',
    description: 'A React app for discovering and exploring books using the Gutendex API.',
    image: BookAppImage,
    technologies: ['React', 'JavaScript', 'API', 'CSS', 'HTML'],
    liveDemo: 'https://fatimah-sk.github.io/react-book-app/',
    github: 'https://github.com/Fatimah-sk/react-book-app',
  },
  {
    id: 6,
    title: 'Movable Object',
    description: 'An interactive JavaScript app that lets users move an object on the screen.',
    image: MovableObjectImage,
    technologies: ['CSS', 'HTML', 'JavaScript'],
    liveDemo: 'https://fatimah-sk.github.io/Creat-a-movable-object/',
    github: 'https://github.com/Fatimah-sk/Creat-a-movable-object',
  },
  {
    id: 7,
    title: 'Book Dashboard',
    description: 'An interactive dashboard for displaying and managing data in a clear interface.',
    image: BookDashboardImage,
    technologies: ['CSS', 'HTML', 'JavaScript'],
    liveDemo: 'https://fatimah-sk.github.io/Personlig-Data-Dashboard/',
    github: 'https://github.com/Fatimah-sk/Personlig-Data-Dashboard',
  },
  {
    id: 8,
    title: 'Neon Syndicate',
    description: 'A cyberpunk trading game with dynamic prices, inventory and district-based markets.',
    image: NeonSyndicateImage,
    technologies: ['CSS', 'HTML', 'JavaScript'],
    liveDemo: 'https://fatimah-sk.github.io/Neon-Syndicate/',
    github: 'https://github.com/Fatimah-sk/Neon-Syndicate',
  },
  {
    id: 9,
    title: 'Ghibli Studio',
    description: 'A web app for exploring Studio Ghibli movies using API data.',
    image: GhibliStudioImage,
    technologies: ['CSS', 'HTML', 'JavaScript', 'API'],
    liveDemo: 'https://fatimah-sk.github.io/API-Projekt--Ghibli-Studio-/',
    github: 'http://github.com/Fatimah-sk/API-Projekt--Ghibli-Studio-',
  },
  {
    id: 10,
    title: 'Countries Dashboard',
    description: 'A web application for exploring information about different countries using API data.',
    image: CountriesDashboardImage,
    technologies: ['CSS', 'HTML', 'JavaScript', 'API'],
    liveDemo: 'https://fatimah-sk.github.io/Countries-dashboard/',
    github: 'https://github.com/Fatimah-sk/Countries-dashboard',
  },
  {
    id: 11,
    title: 'Crypto Tracker',
    description: 'A web app for exploring cryptocurrency prices and market information.',
    image: CryptoTrackerImage,
    technologies: ['CSS', 'HTML', 'JavaScript', 'API'],
    liveDemo: 'https://fatimah-sk.github.io/Crypto-tracker/',
    github: 'https://github.com/Fatimah-sk/Crypto-tracker/tree/main',
  },
  {
    id: 12,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my skills, projects, and experience.',
    image: PortfolioWebsiteImage,
    technologies: ['CSS', 'HTML', 'JavaScript', 'React'],
    liveDemo: 'https://fatimah-sk.github.io/Portfolio/',
    github: 'https://github.com/Fatimah-sk/Portfolio',
  },
  {
    id: 13,
    title: 'Product Management System',
    description: 'A JavaScript app for adding, editing, searching and managing products.',
    image: PMSImage,
    technologies: ['CSS', 'HTML', 'JavaScript'],
    liveDemo: 'https://fatimah-sk.github.io/Products-Management-System/',
    github: 'https://github.com/Fatimah-sk/Products-Management-System',
  },
  {
    id: 14,
    title: 'Color Picker',
    description: 'A simple color picker application for selecting and customizing colors.',
    image: ColorPickerImage,
    technologies: ['CSS', 'HTML', 'JavaScript', 'React'],
    liveDemo: 'https://fatimah-sk.github.io/Color-Picker/',
    github: 'https://github.com/Fatimah-sk/Color-Picker',
  },
  {
    id: 15,
    title: 'CraftsVilla Figma Design',
    description: 'A Figma UI design created for the CraftsVilla web project.',
    image: FigmaImage,
    technologies: ['Figma'],
    liveDemo: 'https://www.figma.com/design/EQpBW7qldR4WPTyfX3mjcB/Craftsvilla-project?node-id=0-1&t=Vh0nXgpXs0ZFo10n-1',
    github: 'https://github.com/Fatimah-sk/CraftsVilla-Figma-Design',
  },
]

function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [animationMode, setAnimationMode] = useState('static')

  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  // Remember which cards have already been initialized.
  const initializedCardsRef = useRef(new Set())

  // Section heading and Show More button animations.
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let previousY = window.scrollY
    let enteredFromAbove = false

    const update = () => {
      const y = window.scrollY
      const direction = Math.sign(y - previousY)
      previousY = y

      const rect = section.getBoundingClientRect()
      const trigger = window.innerHeight * 0.7

      if (rect.top > trigger) {
        enteredFromAbove = false
        setAnimationMode('ready')
      } else if (direction < 0) {
        setAnimationMode('static')
      } else if (
        direction > 0 &&
        !enteredFromAbove &&
        rect.bottom > trigger
      ) {
        enteredFromAbove = true
        setAnimationMode('playing')
      }
    }

    setAnimationMode(
      section.getBoundingClientRect().top >
        window.innerHeight * 0.7
        ? 'ready'
        : 'static'
    )

    window.addEventListener('scroll', update, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', update)
    }
  }, [])

  // Card animations, including newly added Show More cards.
  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const cards = [...grid.querySelectorAll('.project-reveal')]
    let previousY = window.scrollY
    let frame = 0

    const setCardState = (card, state) => {
      card.classList.remove(
        'project-waiting',
        'project-visible',
        'project-seen'
      )

      card.classList.add(state)
    }

    cards.forEach((card) => {
      const id = card.dataset.projectId

      // Preserve the state of cards that already existed.
      if (initializedCardsRef.current.has(id)) return

      initializedCardsRef.current.add(id)

      const rect = card.getBoundingClientRect()

      if (showAll && Number(id) > 6) {
        // New cards visible on screen animate immediately.
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setCardState(card, 'project-visible')
        } else {
          setCardState(card, 'project-waiting')
        }
      } else {
        // Original cards keep their initial behavior.
        setCardState(
          card,
          rect.top >= window.innerHeight
            ? 'project-waiting'
            : 'project-seen'
        )
      }
    })

    const update = () => {
      frame = 0

      const currentY = window.scrollY
      const direction = Math.sign(currentY - previousY)
      previousY = currentY

      if (direction === 0) return

      const trigger = window.innerHeight * 0.82

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()

        if (direction < 0 && rect.top >= window.innerHeight) {
          if (!card.classList.contains('project-waiting')) {
            setCardState(card, 'project-waiting')
          }
        } else if (rect.top <= trigger && rect.bottom > 0) {
          if (
            direction > 0 &&
            card.classList.contains('project-waiting')
          ) {
            setCardState(card, 'project-visible')
          } else if (
            direction < 0 &&
            card.classList.contains('project-waiting')
          ) {
            setCardState(card, 'project-seen')
          }
        }
      })
    }

    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)

      if (frame) {
        cancelAnimationFrame(frame)
      }
    }
  }, [showAll])

  // Close image preview using Escape.
  useEffect(() => {
    if (!previewImage) return

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setPreviewImage(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [previewImage])

  const visibleProjects = showAll
    ? ProjectsArray
    : ProjectsArray.slice(0, 6)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects-section projects-${animationMode}`}
    >
      <div className="section-title projects-reveal-title">
        <p>MY WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-grid" ref={gridRef}>
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            data-project-id={project.id}
            className={`project-reveal project-from-${
              index % 3 === 0
                ? 'left'
                : index % 3 === 1
                  ? 'bottom'
                  : 'right'
            }`}
          >
            <div className="project-card">
              <div
                className="project-image"
                onClick={() => setPreviewImage(project)}
              >
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <FiExternalLink className="project-arrow" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <FiExternalLink className="project-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-more-container projects-reveal-button">
        <button
          className="view-more-btn"
          type="button"
          onClick={() => {
            if (showAll) {
              // Forget only the extra projects when showing less.
              ProjectsArray.slice(6).forEach((project) => {
                initializedCardsRef.current.delete(String(project.id))
              })
            }

              setShowAll((previous) => !previous)
            }}
          >
          {showAll ? 'Show Less ↑' : 'Show More ↓'}
        </button>
      </div>

      {previewImage && (
        <div
          className="image-preview"
          onClick={() => setPreviewImage(null)}
        >
          <button
            className="preview-close"
            type="button"
            aria-label="Close preview"
            onClick={() => setPreviewImage(null)}
          >
            ×
          </button>

          <img
            src={previewImage.image}
            alt={previewImage.title}
            onClick={(event) => event.stopPropagation()}
          />

          <p>{previewImage.title}</p>
        </div>
      )}
    </section>
  )
}

export default Projects
