import { motion } from 'framer-motion'
import { FiMapPin, FiMail } from 'react-icons/fi'
import { personal, education } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="text-center mb-14"
      >
        <h2 className="section-heading">About Me</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6" />
        <p className="text-textSecondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {personal.bio}
        </p>
        <div className="flex items-center justify-center gap-6 mt-6 text-textSecondary text-sm flex-wrap">
          <span className="flex items-center gap-1.5">
            <FiMapPin size={14} className="text-accent" />
            {personal.location}
          </span>
          <span className="flex items-center gap-1.5">
            <FiMail size={14} className="text-accent" />
            {personal.email}
          </span>
        </div>
      </motion.div>

      {/* Education cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="grid md:grid-cols-2 gap-6"
      >
        {education.map((edu) => (
          <motion.div
            key={edu.school}
            variants={fadeUp}
            className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-textPrimary font-bold text-lg">{edu.shortName}</h3>
                <p className="text-textSecondary text-sm">{edu.school}</p>
              </div>
              <span className="text-textSecondary text-xs font-medium whitespace-nowrap bg-bg px-3 py-1 rounded-full border border-border">
                {edu.date}
              </span>
            </div>

            <p className="text-accent font-semibold text-sm mb-1">{edu.degree}</p>
            <p className="text-textSecondary text-sm mb-4">GPA: {edu.gpa}</p>

            <div>
              <p className="text-textSecondary text-xs uppercase tracking-wider mb-2">Coursework</p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2.5 py-1 rounded-full bg-bg border border-border text-textSecondary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
