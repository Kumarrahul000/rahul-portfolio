export default function About() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded" />
      </div>

      <div className="prose prose-invert max-w-none space-y-6">
        <p className="text-lg text-slate-300 leading-relaxed">
          I'm an innovative and results-driven <span className="text-blue-400 font-semibold">MERN Stack Developer</span>{" "}
          with a strong command of MongoDB, Express.js, React.js, and Node.js. Adept at developing scalable,
          high-performance web applications with seamless UI/UX experiences.
        </p>

        <p className="text-lg text-slate-300 leading-relaxed">
          With expertise in API integrations, AI-powered solutions, and cloud-based architectures, I'm passionate about
          writing clean, maintainable code and collaborating in agile development teams to deliver robust software
          solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-400">2+</div>
            <p className="text-slate-400">Years of Experience</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-cyan-400">50+</div>
            <p className="text-slate-400">UI/UX Improvements</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-400">100%</div>
            <p className="text-slate-400">Code Quality</p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-12 pt-8 border-t border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-blue-400">Bachelor of Computer Applications</h4>
          <p className="text-slate-400 mt-2">Maulana Mazharul Haque Arabic and Persian University</p>
          <p className="text-slate-500 text-sm mt-1">Graduated: 2023</p>
        </div>
      </div>
    </section>
  )
}
