import { motion } from 'framer-motion'
import { FiAward, FiUsers } from 'react-icons/fi'
import { leadership, awards } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="text-center mb-14"
      >
        <h2 className="section-heading">Leadership & Awards</h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-4" />
        <p className="text-textSecondary">Beyond the code</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Leadership roles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <h3 className="flex items-center gap-2 text-textPrimary font-semibold text-lg mb-5">
            <FiUsers size={20} className="text-accent" />
            Leadership Roles
          </h3>
          <div className="flex flex-col gap-4">
            {leadership.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
              >
                <p className="text-textPrimary font-semibold text-sm">{item.role}</p>
                <p className="text-accent text-xs mt-0.5">{item.org}</p>
                <p className="text-textSecondary text-xs mt-2 font-medium">{item.dates}</p>
                {item.detail && (
                  <p className="text-textSecondary text-xs mt-2 leading-relaxed border-t border-border pt-2">{item.detail}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <h3 className="flex items-center gap-2 text-textPrimary font-semibold text-lg mb-5">
            <FiAward size={20} className="text-accent" />
            Honors & Awards
          </h3>
          <div className="flex flex-col gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-card border border-accent/30 rounded-xl p-5 relative overflow-hidden hover:border-accent/60 transition-colors"
              >
                {/* Glow accent */}
                <div className="absolute inset-0 bg-accent/5 pointer-events-none" />
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">🏆</span>
                  <div>
                    <p className="text-textPrimary font-semibold text-sm">{award.title}</p>
                    <p className="text-textSecondary text-xs mt-0.5">{award.org}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
