"use client"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <Phone className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-white font-semibold">Phone</h3>
              <a href="tel:+918076853275" className="text-slate-300 hover:text-blue-400 transition mt-1">
                +91 8076853275
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-white font-semibold">Email</h3>
              <a href="mailto:rahulpandat433@gmail.com" className="text-slate-300 hover:text-blue-400 transition mt-1">
                rahulpandat433@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-white font-semibold">Location</h3>
              <p className="text-slate-300 mt-1">Faridabad, Haryana, India</p>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/rahul"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/rahul"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hello, feel free to reach out!
          </p>
          <div className="space-y-3 text-slate-300 text-sm">
            <p>✓ Response time: Usually within 24 hours</p>
            <p>✓ Available for freelance projects</p>
            <p>✓ Open to full-time opportunities</p>
            <p>✓ Based in Faridabad, Haryana</p>
          </div>
        </div>
      </div>
    </section>
  )
}
