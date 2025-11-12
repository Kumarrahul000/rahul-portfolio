export default function Experience() {
  const experiences = [
    {
      role: "React Associate Developer",
      company: "Cross ML Software Pvt Ltd, Chandigarh",
      period: "Oct 2024 – Present",
      highlights: [
        "Led UI development for multiple projects, enhancing user experience by 30%",
        "Implemented AI-powered features with machine learning model integration",
        "Developed AI-based recommendation engine, increasing user engagement by 15%",
        "Ensured 100% adherence to UI/UX best practices across platforms",
      ],
    },
    {
      role: "Software Engineer",
      company: "Costa Cloud (Apollo Computer), New Delhi",
      period: "May 2022 – Sep 2024",
      highlights: [
        "Engineered paperless office solution, reducing approval processing time by 50%",
        "Developed Google Drive-like Data Management System using React & Redux",
        "Led team of 5 developers on AI-powered search system using Elasticsearch",
        "Built scalable algorithms handling 50K+ daily transactions with 99% accuracy",
      ],
    },
  ]

  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Experience</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded" />
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-400 pl-6 py-2">
            <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
            <p className="text-slate-300 font-semibold mt-1">{exp.company}</p>
            <p className="text-slate-500 text-sm mb-4">{exp.period}</p>
            <ul className="space-y-3">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 text-slate-300">
                  <span className="text-blue-400 font-bold mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="mt-12 pt-8 border-t border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6">Achievements</h3>
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-lg p-6">
          <p className="text-lg text-slate-200">
            <span className="text-blue-400 font-semibold">🏆 Young Frontend Developer of the Month</span>
            <br />
            <span className="text-slate-400 text-base mt-2 block">
              Recognized for exceptional frontend development skills in React.js & Material-UI (June - August 2022)
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
