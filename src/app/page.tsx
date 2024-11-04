import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f5f5]">
      {/* Navigation */}
      <nav className="fixed w-full p-6 backdrop-blur-sm bg-[#1a1a1a]/80 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-light">YOUR NAME</h1>
          <div className="space-x-8">
            <a href="#about" className="hover:text-[#a0a0a0] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#a0a0a0] transition-colors">Projects</a>
            <a href="#contact" className="hover:text-[#a0a0a0] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-6">
            Computer Science Student
          </h2>
          <p className="text-[#a0a0a0] text-lg md:text-xl max-w-2xl mx-auto">
            Focused on creating elegant solutions through clean code and thoughtful design.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-light mb-12">About</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-[#a0a0a0]">
                Your introduction goes here. Describe your journey, interests, and goals
                in computer science.
              </p>
            </div>
            <div className="bg-[#252525] p-6">
              <h4 className="text-xl mb-4">Skills</h4>
              <div className="grid grid-cols-2 gap-4 text-[#a0a0a0]">
                <div>• JavaScript</div>
                <div>• Python</div>
                <div>• React</div>
                <div>• Node.js</div>
                {/* Add more skills */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#212121]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-light mb-12">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-[#252525] p-6 hover:bg-[#2a2a2a] transition-colors">
              <h4 className="text-xl mb-2">Project Name</h4>
              <p className="text-[#a0a0a0] mb-4">
                Brief project description goes here.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-sm text-[#a0a0a0] hover:text-white">
                  View Project →
                </a>
              </div>
            </div>
            {/* Add more project cards */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-light mb-8">Get in Touch</h3>
          <p className="text-[#a0a0a0] mb-8">
            Open to opportunities and collaborations.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block border border-[#f5f5f5] px-8 py-3 hover:bg-[#f5f5f5] hover:text-[#1a1a1a] transition-colors"
          >
            Email Me
          </a>
          <div className="mt-12 space-x-6">
            <a href="#" className="text-[#a0a0a0] hover:text-white">GitHub</a>
            <a href="#" className="text-[#a0a0a0] hover:text-white">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 text-center text-[#a0a0a0]">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}