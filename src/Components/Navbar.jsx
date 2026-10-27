
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const sections = ['home', 'about', 'skills', 'projects', 'contact']

function Navbar() {
  const [activeLink, setActiveLink] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35

      let currentSection = 'home'

      sections.forEach((id) => {
        const section = document.getElementById(id)

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id
        }
      })

      setActiveLink(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  const handleLinkClick = (id) => {
    setActiveLink(id)
    setMenuOpen(false)
  }

  return (
    <nav>
      <h2>Fatimah.Sk</h2>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="nav-links"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <ul id="nav-links" className={menuOpen ? 'menu-open' : ''}>
        {sections.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeLink === id ? 'active' : ''}
              onClick={() => handleLinkClick(id)}
              aria-current={activeLink === id ? 'location' : undefined}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
