export default function Projects() {
  const projects = [
    {
      title: "Moviesverse",
      description: "A comprehensive movie and TV show search platform with real-time data integration",
      technologies: ["React.js", "Material-UI", "Redux Toolkit", "TMDB API"],
      highlights: [
        "Integrated TMDB API for real-time, accurate movie details",
        "Implemented Redux Toolkit & RTK Query for efficient state management",
      ],
    },
    {
      title: "FlowBoard - JIRA Alternative",
      description: "Centralized task and issue tracking system designed for project management teams",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      highlights: ["Simplified workflow management by 90%", "Enabled seamless task tracking and bug resolution"],
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable MERN-based eCommerce platform with integrated payment processing",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Redux"],
      highlights: [
        "Integrated Stripe Payment Gateway, increasing transactions by 60%",
        "Optimized invoicing processes, reducing billing time by 15%",
      ],
    },
  ]

  return (
    <section className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-slate-800/40 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition"
          >
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">{project.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded border border-blue-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 pt-2 border-t border-slate-600">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-xs text-slate-400 flex gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
