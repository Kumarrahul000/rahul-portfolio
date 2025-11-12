import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Full-Stack Developer
          </span>
          <br />
          <span className="text-slate-100">Building Amazing Experiences</span>
        </h1>

        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          MERN Stack specialist with expertise in React, Node.js, MongoDB, and AI integration. I build scalable web
          applications that deliver exceptional user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105 flex items-center justify-center gap-2"
          >
            View My Work <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Status Badge */}
        <div className="pt-8 flex justify-center">
          <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Available for new opportunities
          </div>
        </div>
      </div>
    </section>
  )
}
