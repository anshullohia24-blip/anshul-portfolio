export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent pointer-events-none" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.12),transparent_50%)]" />

        <p className="uppercase tracking-[0.4em] text-sm text-yellow-400 mb-4">
          AI Automation • Operations • Strategy
        </p>

        <h1 className="text-5xl md:text-7xl font-serif tracking-wide leading-tight max-w-5xl">
          ANSHUL LOHIA
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-300 leading-relaxed">
          Building intelligent systems that simplify business operations,
          automate workflows, and create scalable business experiences.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap justify-center">
          <button className="px-8 py-4 rounded-2xl bg-yellow-500 text-black font-medium hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all">
            Contact Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-sm">
              About
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Calm precision.
              <br />
              Intelligent execution.
            </h2>
          </div>

          <div>
            <p className="text-gray-300 leading-8 text-lg">
              I specialize in operations management, workflow optimization,
              and AI-powered automation systems. My focus is creating
              intelligent processes that help businesses operate with clarity,
              speed, and scalability.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10 text-sm text-gray-400">
              <div className="border border-white/10 rounded-2xl p-4">
                 Delhi / Gurugram
              </div>

              <div className="border border-white/10 rounded-2xl p-4">
                AI Automation
              </div>

              <div className="border border-white/10 rounded-2xl p-4">
                Operations Strategy
              </div>

              <div className="border border-white/10 rounded-2xl p-4">
                CRM Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-6 md:px-16 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Services
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-16">
            What I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI Workflow Automation',
                desc: 'Automating repetitive business tasks using intelligent systems and AI tools.',
              },
              {
                title: 'Operations Management',
                desc: 'Structured execution, coordination, and process optimization for growing businesses.',
              },
              {
                title: 'CRM & Lead Systems',
                desc: 'Lead management pipelines and automated customer workflows.',
              },
              {
                title: 'AI Content Systems',
                desc: 'Scalable AI-powered content and communication workflows.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-[2rem] p-8 hover:border-yellow-500/40 transition-all bg-black/40 backdrop-blur"
              >
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-sm">
          Projects
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-16">
          Selected Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'AI Lead Automation',
              desc: 'Built a smart lead collection and follow-up automation system integrating forms, CRM tools, and AI responses.',
            },
            {
              title: 'Smart Client Dashboard',
              desc: 'Created an organized client workflow management system for project tracking and coordination.',
            },
            {
              title: 'AI Research Assistant',
              desc: 'Developed AI-powered research and summarization workflows for faster information processing.',
            },
            {
              title: 'WhatsApp Business Automation',
              desc: 'Designed automated inquiry handling and lead qualification workflows for businesses.',
            },
          ].map((project, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 p-8 hover:bg-white/[0.03] transition-all"
            >
              <div className="h-56 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-white/5 mb-8 flex items-center justify-center text-gray-500 text-sm tracking-[0.3em] uppercase">
                Project Preview
              </div>

              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 leading-7">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-28 px-6 md:px-16 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-16">
            Professional Journey
          </h2>

          <div className="space-y-8 border-l border-white/10 pl-8">
            {[
              {
                role: 'Operations Associate (Intern)',
                company: 'EE India AI Foods Pvt. Ltd.',
                year: '2024 – 2026',
              },
              {
                role: 'Operations Executive',
                company: 'EE India AI Foods Pvt. Ltd.',
                year: '2021 – 2022',
              },
              {
                role: 'Content Writer',
                company: 'Freelancer / Remote',
                year: '2021',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-yellow-400" />

                <div className="border border-white/10 rounded-2xl p-6 bg-black/40">
                  <p className="text-yellow-400 text-sm mb-2">{item.year}</p>
                  <h3 className="text-2xl font-semibold">{item.role}</h3>
                  <p className="text-gray-400 mt-2">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-28 px-6 md:px-16 max-w-6xl mx-auto text-center">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-sm">
          Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-serif mb-16">
          Skills & Tools
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {[
            'AI Automation',
            'Operations',
            'CRM Systems',
            'Project Management',
            'HubSpot',
            'Excel',
            'Research',
            'Figma',
            'Asana',
            'Workflow Design',
            'Client Coordination',
            'AI Content Systems',
          ].map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:border-yellow-500/40 transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 px-6 text-center border-t border-white/10">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4 text-sm">
         <a
  href="mailto:anshullohia24@gmail.com"
  className="hover:text-white transition-all"
>
  anshullohia24@gmail.com
</a>

<a
  href="https://www.linkedin.com/in/anshul-lohia-259416262/"
  target="_blank"
  className="hover:text-white transition-all"
>
  LinkedIn
</a>

<a
  href="https://wa.me/917503121777"
  target="_blank"
  className="hover:text-white transition-all"
>
  WhatsApp
</a>

<a
  href="tel:+917503121777"
  className="hover:text-white transition-all"
>
  +91 75031 21777
</a>
        </div>

        <p className="mt-12 text-gray-500 text-sm tracking-[0.2em] uppercase">
          Available for collaborations & consulting
        </p>
      </section>
    </div>
  )
}
