import Typewriter from "@/components/Typewriter";
import Reveal from "@/components/Reveal";
import TechCard from "@/components/TechCard";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute top-1/4 left-1/4 size-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 size-96 bg-primary/5 rounded-full blur-[120px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <Reveal delay={200}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for New Projects
              </div>
            </Reveal>

            <Reveal delay={400}>
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight dark:text-white">
                Võ Duy Bình
              </h1>
            </Reveal>

            <Reveal delay={600}>
              <div className="h-12 flex items-center justify-center">
                <div className="text-xl md:text-3xl font-medium text-slate-600 dark:text-slate-400">
                  <Typewriter text="Full Stack Developer | AI Engineer | Content Creator" speed={50} delay={1000} />
                </div>
              </div>
            </Reveal>

            <Reveal delay={800} className="mt-12">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#projects" className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(96,98,246,0.4)] transition-all">
                  View Portfolio
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a href="#contact" className="bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                  Get in Touch
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-6 bg-slate-50 dark:bg-background/50" id="about">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <Reveal className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3 scale-105 transition-transform group-hover:rotate-6"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden glass border-2 border-primary/20 bg-cover bg-center"
                style={{ backgroundImage: 'url("/images/avatar.png")' }}>
              </div>
            </Reveal>
            <div className="space-y-8">
              <Reveal>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Introduction</h2>
                <h3 className="text-4xl font-bold text-white leading-tight">Engineering the Future, <br />Creatively Driven.</h3>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-slate-400 leading-relaxed">
                  A 19-year-old visionary student at Hoa Sen University, bridging the gap between cutting-edge technology and human creativity. Specializing in building robust digital ecosystems while exploring AI and legal technology.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: 'language', title: 'Multilingual', desc: 'VN, EN, CN, JP, KR' },
                  { icon: 'music_note', title: 'Production', desc: 'FL Studio, Ableton' },
                  { icon: 'fitness_center', title: 'Healthy Living', desc: 'Wellness & Balance' },
                  { icon: 'gavel', title: 'Future Focus', desc: 'IT & Tech Law' },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={300 + i * 100}>
                    <div className="glass p-4 rounded-xl">
                      <span className="material-symbols-outlined text-primary mb-2">{item.icon}</span>
                      <h4 className="font-bold mb-1 text-white">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Section */}
        <section className="py-24 px-6" id="tech">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-white">Technical Arsenal</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <TechCard icon="web" title="Frontend" desc="React, Next.js, Tailwind, TypeScript" delay={100} />
              <TechCard icon="database" title="Backend" desc="Node.js, Python, Java, Go, PostgreSQL" delay={200} />
              <TechCard icon="devices" title="Mobile" desc="React Native, Flutter, Firebase" delay={300} />
              <TechCard icon="cloud" title="Cloud/DevOps" desc="AWS, Docker, CI/CD, Nginx" delay={400} />
              <TechCard icon="psychology" title="AI/ML" desc="PyTorch, LLMs, Computer Vision" delay={500} />
            </div>
          </div>
        </section>

        {/* Creative Section */}
        <section className="py-24 px-6 bg-primary/5" id="ai-creative">
          <div className="max-w-7xl mx-auto">
            <Reveal className="mb-16">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">AI & Creative</h2>
              <h3 className="text-4xl font-bold text-white">Augmenting Reality through Generative Arts</h3>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="AI Content Mastery"
                desc="Expertise in leveraging state-of-the-art LLMs and visual generation tools to automate creative workflows."
                image="/images/ai-mastery.png"
                tags={['Midjourney', 'ElevenLabs']}
                delay={100}
              />
              <ProjectCard
                title="Sound Design & Scoring"
                desc="Crafting immersive auditory experiences. From background scores to independent music production."
                image="/images/sound-design.png"
                tags={['FL Studio', 'Ableton']}
                delay={200}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 px-6" id="projects">
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4 text-white">Featured Projects</h2>
              <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="AI Content Generator Pro"
                desc="Full-stack platform for automated social media asset generation using GPT-4 and Stable Diffusion."
                image="/images/ai-gen.png"
                tags={['Next.js', 'OpenAI', 'AWS']}
                delay={100}
              />
              {/* Additional dummy projects */}
              <ProjectCard
                title="LegalTech AI"
                desc="AI-driven legal document analyzer and citation assistant for law students and professionals."
                image="/images/legaltech.png"
                tags={['Python', 'LangChain', 'PostgreSQL']}
                delay={200}
              />
              <ProjectCard
                title="Cyber Command Hub"
                desc="A futuristic dashboard for monitoring system health and AI agent activities."
                image="/images/dashboard.png"
                tags={['React', 'Go', 'Docker']}
                delay={300}
              />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-24 px-6" id="roadmap">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h2 className="text-4xl font-bold mb-12 text-white">The Roadmap</h2>
            </Reveal>
            <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
              {[
                { step: 1, title: 'Academic Foundation', time: 'Current', desc: "Pursuing Bachelor's at Hoa Sen University, focusing on CS fundamentals." },
                { step: 2, title: 'SaaS Framework Evolution', time: 'Next Phase', desc: "Developing the digital products marketplace and payment integration." },
                { step: 3, title: 'AI Research Integration', time: 'Future', desc: "Publishing papers on AI automation and ethical technology implementation." },
              ].map((item, i) => (
                <Reveal key={item.step} delay={i * 200} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background text-primary font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {item.step}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-primary/10 shadow-xl text-left">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-white">{item.title}</div>
                      <time className="text-xs font-bold text-primary">{item.time}</time>
                    </div>
                    <div className="text-slate-500 text-sm">{item.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
