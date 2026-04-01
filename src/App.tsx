import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f0e6] text-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  )
}

export default App
