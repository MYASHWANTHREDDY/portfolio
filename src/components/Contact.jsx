import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiCopy, FiCheck } from 'react-icons/fi'
import { personal } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const cards = [
    {
      icon: <FiMail size={22} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      action: (
        <button
          onClick={copyEmail}
          className="p-2 text-textSecondary hover:text-accent transition-colors"
          aria-label="Copy email"
        >
          {copied ? <FiCheck size={16} className="text-emerald-400" /> : <FiCopy size={16} />}
        </button>
      ),
      color: 'hover:border-accent/60',
    },
    {
      icon: <FiLinkedin size={22} />,
      label: 'LinkedIn',
      value: 'yashwanthreddymallareddygari',
      href: personal.linkedin,
      color: 'hover:border-sky/60',
    },
    {
      icon: <FiGithub size={22} />,
      label: 'GitHub',
      value: 'MYASHWANTHREDDY',
      href: personal.github,
      color: 'hover:border-textPrimary/40',
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <h2 className="section-heading">Let's Connect</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-textSecondary text-base leading-relaxed max-w-xl mx-auto">
            I'm actively looking for full-time software engineering roles. Whether you have an
            opportunity, a question, or just want to say hi — my inbox is open.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-col gap-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.label}
              variants={fadeUp}
              className={`bg-card border border-border rounded-2xl p-5 flex items-center gap-4 transition-all ${card.color} group`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                {card.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-textSecondary text-xs uppercase tracking-widest">{card.label}</p>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-textPrimary font-medium text-sm hover:text-accent transition-colors truncate block"
                >
                  {card.value}
                </a>
              </div>
              {card.action}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center text-textSecondary text-xs mt-16"
        >
          Built with React + Vite + Tailwind CSS · {new Date().getFullYear()} Yashwanth Reddy
        </motion.p>
      </div>
    </section>
  )
}
