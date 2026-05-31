import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

const categoryColors = {
  Languages: 'border-indigo-500/40 text-indigo-300',
  Frontend: 'border-sky-500/40 text-sky-300',
  'Backend & APIs': 'border-emerald-500/40 text-emerald-300',
  'Databases & Cloud': 'border-orange-500/40 text-orange-300',
  'Data & Tools': 'border-purple-500/40 text-purple-300',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Technical Skills</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-textSecondary">Technologies I work with</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col gap-6"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-textSecondary text-xs font-semibold uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg border bg-bg/50 transition-all duration-150 hover:scale-105 cursor-default ${
                      categoryColors[group.category] || 'border-border text-textSecondary'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
