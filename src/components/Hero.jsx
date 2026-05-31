import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

// Fixed particle positions — seeded so they don't jump on re-render
const PARTICLES = [
  { x: 8,  y: 15, size: 2,   dur: 4.2, delay: 0    },
  { x: 22, y: 72, size: 1.5, dur: 5.8, delay: 0.8  },
  { x: 35, y: 38, size: 3,   dur: 3.6, delay: 1.4  },
  { x: 48, y: 85, size: 1.5, dur: 6.1, delay: 0.3  },
  { x: 60, y: 22, size: 2,   dur: 4.9, delay: 2.1  },
  { x: 73, y: 60, size: 2.5, dur: 3.3, delay: 1.0  },
  { x: 85, y: 10, size: 1.5, dur: 5.4, delay: 0.6  },
  { x: 92, y: 45, size: 2,   dur: 4.7, delay: 1.8  },
  { x: 15, y: 50, size: 1,   dur: 6.5, delay: 2.5  },
  { x: 55, y: 5,  size: 2.5, dur: 3.9, delay: 0.2  },
  { x: 78, y: 88, size: 1.5, dur: 5.1, delay: 1.6  },
  { x: 30, y: 95, size: 2,   dur: 4.4, delay: 0.9  },
  { x: 67, y: 35, size: 1,   dur: 5.7, delay: 2.3  },
  { x: 42, y: 58, size: 3,   dur: 3.2, delay: 1.1  },
  { x: 88, y: 70, size: 1.5, dur: 6.0, delay: 0.5  },
  { x: 5,  y: 80, size: 2,   dur: 4.8, delay: 1.9  },
  { x: 50, y: 45, size: 1,   dur: 5.5, delay: 0.7  },
  { x: 20, y: 28, size: 2.5, dur: 3.8, delay: 2.0  },
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = personal.titles[titleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % personal.titles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: i % 3 === 0 ? '#38bdf8' : '#6366f1',
              boxShadow: `0 0 ${p.size * 4}px ${p.size * 2}px ${i % 3 === 0 ? 'rgba(56,189,248,0.4)' : 'rgba(99,102,241,0.4)'}`,
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Large blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl"
      >
        <p className="text-textSecondary text-sm font-medium tracking-widest uppercase mb-4">
          Hi, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold gradient-text mb-6 leading-tight">
          {personal.name}
        </h1>

        {/* Typing effect */}
        <div className="h-10 mb-6 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-semibold text-textSecondary">
            {displayed}
            <span className="animate-pulse text-accent">|</span>
          </span>
        </div>

        <p className="text-textSecondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {personal.bio}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-accent hover:bg-indigo-400 active:scale-95 text-white font-semibold rounded-xl transition-all duration-150 hover:scale-105 shadow-lg shadow-accent/25"
          >
            View Projects
          </button>
          <a
            href="/Yashwanth_Reddy_Resume.pdf"
            download
            className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-xl transition-all hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-textSecondary hover:border-sky hover:text-sky font-semibold rounded-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <FiLinkedin size={18} /> LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-textSecondary hover:border-textPrimary hover:text-textPrimary font-semibold rounded-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <FiGithub size={18} /> GitHub
          </a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-textSecondary/50"
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
