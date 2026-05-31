import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Experience</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-textSecondary">Where I've worked</p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="flex flex-col gap-10"
          >
            {experience.map((job, idx) => (
              <motion.div key={idx} variants={fadeUp} className="sm:pl-16 relative">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-card border-2 border-accent items-center justify-center">
                  <FiBriefcase size={18} className="text-accent" />
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-textPrimary font-bold text-lg">{job.title}</h3>
                      <p className="text-accent font-medium text-sm">{job.company}</p>
                    </div>
                    <span className="text-textSecondary text-xs font-medium whitespace-nowrap bg-bg px-3 py-1.5 rounded-full border border-border self-start">
                      {job.dates}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-textSecondary text-sm leading-relaxed">
                        <span className="text-accent mt-1 shrink-0">▹</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

