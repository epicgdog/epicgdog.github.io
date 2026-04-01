import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import resumePdf from '../assets/gerard_consuelo_resume.pdf'

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const goToSection = (sectionId: string) => {
    const scrollToTarget = () => {
      const target = document.getElementById(sectionId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(scrollToTarget, 80)
    } else {
      scrollToTarget()
    }

    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#d9cfbe] bg-[#f8f2e8]/85 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            GC
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => goToSection(link.id)}
                className="text-stone-600 transition-colors hover:text-stone-900"
              >
                {link.name}
              </button>
            ))}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-stone-900 px-3 py-1.5 text-sm text-white transition-colors hover:bg-stone-700"
            >
              Resume
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#d9cfbe] bg-[#f8f2e8]">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => goToSection(link.id)}
                className="block rounded-md px-3 py-2 text-stone-600 hover:bg-[#eee3d2] hover:text-stone-900"
              >
                {link.name}
              </button>
            ))}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-3 py-2 text-stone-700 hover:bg-[#eee3d2] hover:text-stone-900"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
