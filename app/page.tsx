import { Github, Linkedin, Mail } from "lucide-react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Fixed Navigation */}
      <Navigation />

      {/* Content Sections */}
      <div id="home" className="pt-20">
        <Hero />
      </div>

      <div id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <About />
      </div>

      <div id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <Skills />
      </div>

      <div id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <Experience />
      </div>

      <div id="projects" className="py-20   px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <Projects />
      </div>

      <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 Rahul. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:rahulpandat433@gmail.com" className="text-slate-400 hover:text-blue-400 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
