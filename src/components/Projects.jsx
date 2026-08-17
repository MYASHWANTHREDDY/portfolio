import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown } from 'react-icons/fi'
import { projects } from '../data/portfolioData'
import ProjectCarousel from './ProjectCarousel'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      className="bg-card border border-border rounded-2xl p-7 flex flex-col hover:border-accent/50 transition-colors duration-200 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <h3 className="font-display text-textPrimary font-semibold text-lg leading-snug group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-textSecondary text-xs mt-1">{project.dates}</p>
        </div>
        <div className="flex gap-1 shrink-0 -mr-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-textSecondary hover:text-accent transition-colors"
              aria-label={`${project.title} — live site`}
            >
              <FiExternalLink size={17} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-textSecondary hover:text-textPrimary transition-colors"
            aria-label={`${project.title} — source on GitHub`}
          >
            <FiGithub size={17} />
          </a>
        </div>
      </div>

      {/* Headline metrics — the first thing a skimmer should land on */}
      {project.stats && (
        <div className="grid grid-cols-3 gap-2 mb-5">
          {project.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-semibold text-accent leading-none">
                {stat.value}
              </div>
              <div className="text-textSecondary text-[11px] mt-1.5 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* One-line summary */}
      <p className="text-textSecondary text-sm leading-relaxed mb-5 flex-1">
        {project.summary}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-md bg-accent/10 text-accent/90 border border-accent/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Details toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-xs font-medium text-textSecondary hover:text-accent transition-colors pt-4 border-t border-border w-full"
      >
        <FiChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
        {open ? 'Hide details' : 'Details'}
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            // Height only — the reveal must never depend on an opacity
            // animation landing, or the details can end up invisible.
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-2.5 pt-4">
              {project.description.map((point, i) => (
                <li key={i} className="flex gap-2 text-textSecondary text-sm leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">▹</span>
                  {point}
                </li>
              ))}
            </ul>
            <ProjectCarousel screenshots={project.screenshots} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="text-center mb-14"
      >
        <h2 className="section-heading">Projects</h2>
        <div className="section-rule mx-auto" />
        <p className="text-textSecondary">Things I've built</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
