import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Leadership', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          YR
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNav(link)}
                className="text-textSecondary hover:text-textPrimary text-sm font-medium transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/Yashwanth_Reddy_Resume.pdf"
              download
              className="px-4 py-2 text-sm font-semibold rounded-lg bg-accent hover:bg-indigo-400 hover:scale-105 active:scale-95 text-white transition-all duration-150"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-textSecondary hover:text-textPrimary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-left text-textSecondary hover:text-textPrimary font-medium transition-colors"
            >
              {link}
            </button>
          ))}
          <a
            href="/Yashwanth_Reddy_Resume.pdf"
            download
            className="w-fit px-4 py-2 text-sm font-semibold rounded-lg bg-accent hover:bg-indigo-400 text-white transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  )
}
