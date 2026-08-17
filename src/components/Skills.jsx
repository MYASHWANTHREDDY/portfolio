import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

const categoryColors = {
  Languages: 'border-amber-500/40 text-amber-300',
  Frontend: 'border-sky-500/50 text-sky-400',
  'Backend & APIs': 'border-emerald-500/40 text-emerald-300',
  'AI & LLM Systems': 'border-fuchsia-500/40 text-fuchsia-300',
  'Data Engineering': 'border-purple-500/40 text-purple-300',
  'Databases & Cloud': 'border-orange-500/40 text-orange-300',
  'Tools & Testing': 'border-teal-500/40 text-teal-300',
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
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Technical Skills</h2>
          <div className="section-rule mx-auto" />
          <p className="text-textSecondary">Technologies I work with</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              className="bg-card border border-border rounded-2xl p-6 h-full"
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

