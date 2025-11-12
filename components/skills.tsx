export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Material-UI",
        "shadcn-ui",
        "Redux",
        "React Native",
      ],
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "LangChain"],
    },
    {
      title: "AI & Tools",
      skills: ["AI Implementation", "Machine Learning", "Git & GitHub", "Jest", "Jira", "Elasticsearch"],
    },
  ]

  return (
    <section className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Skills</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-slate-800/40 border border-slate-700 rounded-lg p-6 hover:border-blue-400/50 hover:bg-slate-800/60 transition"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-6">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-slate-700/40 text-slate-200 text-sm rounded-full hover:bg-blue-500/20 hover:text-blue-300 transition border border-slate-600 hover:border-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
