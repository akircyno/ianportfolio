const highlights = [
  { value: "3", label: "Core Expertise" },
  { value: "6", label: "Projects Built" },
  { value: "12+", label: "Tools & Tech" },
];

const tools = [
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "Canva",
  "Figma",
  "VS Code",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "WordPress",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-20 px-6 py-24 md:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section label */}
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00F5FF]">
          About Me
        </p>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Bio */}
          <div>
            <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight text-[#E2E8F0] md:text-5xl">
              Designing the{" "}
              <span
                className="text-[#00F5FF]"
                style={{ textShadow: "0 0 20px rgba(0,245,255,0.4)" }}
              >
                Digital
              </span>{" "}
              World
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#94A3B8]">
              <p>
                I&apos;m <strong className="text-[#E2E8F0]">Ian</strong>, a multidisciplinary creative and web developer passionate about crafting engaging visual designs and functional digital experiences.
              </p>
              <p>
                My work spans graphic design, UI/UX prototyping, and modern front-end web development with tools like Next.js, React, and Figma.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#1E1E2E] bg-[#111118] p-5 text-center"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                >
                  <p
                    className="text-3xl font-black text-[#00F5FF]"
                    style={{ textShadow: "0 0 15px rgba(0,245,255,0.4)" }}
                  >
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#64748B]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tools */}
          <div>
            <div className="rounded-3xl border border-[#1E1E2E] bg-[#111118] p-8 md:p-10">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#64748B]">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[#1E1E2E] bg-[#16161F] px-4 py-2 text-sm font-medium text-[#94A3B8] transition-all duration-200 hover:border-[#00F5FF]/50 hover:text-[#00F5FF]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-[#1E1E2E]" />

              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#64748B]">
                Specializations
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Graphic Design", pct: 90 },
                  { label: "Web Development", pct: 90 },
                  { label: "Social Media Content", pct: 85 },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="mb-1.5 flex justify-between text-xs font-medium">
                      <span className="text-[#94A3B8]">{skill.label}</span>
                      <span className="text-[#00F5FF]">{skill.pct}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1E1E2E]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#00F5FF] to-[#0EA5E9]"
                        style={{
                          width: `${skill.pct}%`,
                          boxShadow: "0 0 8px rgba(0,245,255,0.4)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
