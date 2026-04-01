import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import AllProjects from './components/AllProjects'
import AllExperience from './components/AllExperience'
import Footer from './components/Footer'
import SectionReveal from './components/SectionReveal'

function HomePage() {
  return (
    <>
      <SectionReveal>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <Experience />
      </SectionReveal>
      <SectionReveal>
        <Projects />
      </SectionReveal>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#f5f0e6] text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/experience" element={<AllExperience />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
