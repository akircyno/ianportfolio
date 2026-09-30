const services = [
  {
    title: "Graphic Design",
    color: "#06B6D4",
    hoverBorder: "hover:border-[#06B6D4]/40",
    hoverGlow: "hover:shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(6,182,212,0.1)]",
    titleColor: "text-[#06B6D4]",
    barColor: "bg-[#06B6D4]",
    description:
      "Custom logos, brand identities, marketing materials, posters, flyers, and print-ready designs that make your brand stand out and look professional.",
  },
  {
    title: "UI/UX Design",
    color: "#0EA5E9",
    hoverBorder: "hover:border-[#0EA5E9]/40",
    hoverGlow: "hover:shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(14,165,233,0.1)]",
    titleColor: "text-[#0EA5E9]",
    barColor: "bg-[#0EA5E9]",
    description:
      "User-centered interface design and intuitive user experiences. From wireframes to high-fidelity prototypes using Figma, focused on usability and visual appeal.",
  },
  {
    title: "Website Development",
    color: "#00F5FF",
    hoverBorder: "hover:border-[#00F5FF]/40",
    hoverGlow: "hover:shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,245,255,0.1)]",
    titleColor: "text-[#00F5FF]",
    barColor: "bg-[#00F5FF]",
    description:
      "Clean, modern, and responsive websites built with Next.js, React, and Tailwind CSS. Fast-loading, mobile-friendly, and focused on great user experience.",
  },
  {
    title: "Social Media Content",
    color: "#14B8A6",
    hoverBorder: "hover:border-[#14B8A6]/40",
    hoverGlow: "hover:shadow-[0_8px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(20,184,166,0.1)]",
    titleColor: "text-[#14B8A6]",
    barColor: "bg-[#14B8A6]",
    description:
      "Engaging, branded content for Instagram, Facebook, and TikTok — from eye-catching graphics to compelling captions and reels that grow your audience.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 scroll-mt-20 px-5 py-24 sm:px-6 md:px-10"
    >
      <div className="mx-auto w-full max-w-7xl rounded-3xl border border-[#1E1E2E] bg-[#111118] px-6 py-16 shadow-[0_24px_70px_rgba(0,0,0,0.4)] sm:px-10 md:px-14 lg:px-16">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00F5FF]">
            Services
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tight text-[#E2E8F0] md:text-5xl">
            What I{" "}
            <span
              className="text-[#00F5FF]"
              style={{ textShadow: "0 0 20px rgba(0,245,255,0.4)" }}
            >
              Offer
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className={`group rounded-2xl border border-[#1E1E2E] bg-[#16161F] p-8 pt-9 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 ${service.hoverBorder} ${service.hoverGlow}`}
            >
              <h3 className={`mb-3 text-2xl font-black uppercase tracking-tight ${service.titleColor}`}>
                {service.title}
              </h3>
              <div className={`mb-4 h-0.5 w-10 rounded-full ${service.barColor}`} />
              <p className="text-sm leading-7 text-[#64748B]">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="rounded-full border border-[#00F5FF] bg-[#00F5FF] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-[#0A0A0F] shadow-[0_0_20px_rgba(0,245,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(0,245,255,0.55)]"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
