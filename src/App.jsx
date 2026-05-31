import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-textPrimary font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Leadership />
        <Contact />
      </main>
    </div>
  )
}
