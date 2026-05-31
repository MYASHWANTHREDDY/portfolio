import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="text-center mb-14"
      >
        <h2 className="section-heading">Projects</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
        <p className="text-textSecondary">Things I've built</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            className="bg-card border border-border rounded-2xl p-7 flex flex-col hover:border-accent/50 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/15 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-5">
              <div>
                <h3 className="text-textPrimary font-bold text-lg group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-textSecondary text-xs mt-1">{project.dates}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-textSecondary hover:text-sky transition-colors"
                    aria-label="Live site"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-textSecondary hover:text-textPrimary transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={18} />
                </a>
              </div>
            </div>

            {/* Description bullets */}
            <ul className="flex flex-col gap-2 mb-6 flex-1">
              {project.description.map((point, i) => (
                <li key={i} className="flex gap-2 text-textSecondary text-sm leading-relaxed">
                  <span className="text-accent mt-1 shrink-0">▹</span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Stats */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-3 mb-4 pt-4 border-t border-border">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center text-center bg-bg/60 rounded-xl py-2.5 px-1 border border-border relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-sky opacity-60" />
                    <span className="text-lg font-extrabold gradient-text leading-none">{stat.value}</span>
                    <span className="text-textSecondary text-xs mt-1 leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
