import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-pink-100 via-white to-blue-100">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">
          Vedamanikanta Vanga
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-4 text-xl">
          MERN Stack Developer | 2.5+ Years Experience
        </motion.p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-2xl shadow">View Projects</a>
          <a href="#contact" className="border border-white px-4 py-2 rounded-2xl">Contact Me</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-lg text-center text-gray-700">
          I am a passionate MERN Stack Developer with 2.5+ years of experience in building scalable web applications.
          Skilled in React.js, Next.js, Node.js, FastAPI, and MongoDB. I enjoy writing clean, reusable code and solving
          complex problems with simple solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-gradient-to-r from-green-100 via-white to-yellow-100">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {["React.js", "Next.js", "Node.js", "FastAPI", "MongoDB", "Redux", "JavaScript", "TailwindCSS"].map(skill => (
            <div key={skill} className="text-center p-6 bg-white rounded-xl shadow font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 max-w-6xl mx-auto bg-gradient-to-r from-pink-50 via-white to-blue-50">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Healthcare Diagnostics Platform</h3>
            <p className="text-gray-700 mb-4">Built a diagnostics tool that allows doctors to manage patient data, visualize reports, and automate workflows using React, Redux, and Node.js.</p>
            <a href="#" className="text-indigo-600 underline">View Project</a>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Cybercrime Investigation Tool</h3>
            <p className="text-gray-700 mb-4">Developed case investigation tool (Hyderabad CC) to handle cybercrime and fraud detection with data visualization and graph-based insights.</p>
            <a href="#" className="text-indigo-600 underline">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 text-center bg-gradient-to-r from-yellow-100 via-white to-green-100">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <div className="flex flex-col items-center gap-4">
          
          <p className="flex items-center gap-2"><Mail /> vedamanikanta.dali@gmail.com</p>
          <p className="flex items-center gap-2"><Phone /> +91 8790785047</p>
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/" target="_blank" className="hover:text-indigo-600"><Github /></a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-indigo-600"><Linkedin /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300">
        <p>© {new Date().getFullYear()} Vedamanikanta Vanga. All rights reserved.</p>
      </footer>
    </div>
  );
}