const skillGroups = [
  {
    category: "Graphic Design",
    color: "#F59E0B",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Figma",
      "Typography",
      "Color Theory",
      "Brand Identity",
      "Print Design",
    ],
  },
  {
    category: "Web Development",
    color: "#00F5FF",
    skills: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Responsive Design",
      "WordPress",
    ],
  },
  {
    category: "Social Media Content",
    color: "#7C3AED",
    skills: [
      "Content Strategy",
      "Instagram & Facebook",
      "TikTok Content",
      "Copywriting",
      "Post Scheduling",
      "Engagement Strategy",
      "Analytics",
      "Branding",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 scroll-mt-20 px-6 py-24 md:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00F5FF]">
            Skills
          </p>
          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#E2E8F0] md:text-5xl">
            What I{" "}
            <span
              className="text-[#00F5FF]"
              style={{ textShadow: "0 0 20px rgba(0,245,255,0.4)" }}
            >
              Bring
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748B] md:text-base">
            A wide range of tools and skills across creative and technical
            disciplines.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-[#1E1E2E] bg-[#111118] p-7 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-5">
                <h3
                  className="text-xl font-black uppercase tracking-tight"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Accent bar */}
              <div
                className="mb-5 h-0.5 w-12 rounded-full"
                style={{
                  backgroundColor: group.color,
                  boxShadow: `0 0 8px ${group.color}`,
                }}
              />

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border px-3 py-1.5 text-xs font-medium text-[#94A3B8] transition-all duration-200"
                    style={{
                      borderColor: `${group.color}30`,
                      backgroundColor: `${group.color}08`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
