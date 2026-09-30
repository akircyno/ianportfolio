import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col-reverse items-center justify-center gap-12 px-6 py-20 md:flex-row md:gap-24 md:px-12 md:py-28">
      {/* Left: Text */}
      <section className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
        {/* Name */}
        <h1 className="mb-4 text-5xl font-black uppercase leading-[0.9] tracking-tight text-[#E2E8F0] md:text-7xl lg:text-[5.5rem]">
          Ian
          <br />
          <span
            className="text-[#00F5FF]"
            style={{
              textShadow:
                "0 0 20px rgba(0,245,255,0.5), 0 0 60px rgba(0,245,255,0.2)",
            }}
          >
            Aquino
          </span>
        </h1>

        {/* Roles */}
        <p className="mb-8 text-base font-medium tracking-wider text-[#64748B] md:text-lg">
          Graphic Designer&nbsp;&nbsp;·&nbsp;&nbsp;UI/UX Designer&nbsp;&nbsp;·&nbsp;&nbsp;Web Developer
        </p>

        {/* Tagline */}
        <p className="mb-10 max-w-md text-base font-light leading-relaxed text-[#94A3B8] md:max-w-lg md:text-lg">
          I Design. I Edit. I Build. I Create.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full border border-[#00F5FF] bg-[#00F5FF] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-[#0A0A0F] shadow-[0_0_20px_rgba(0,245,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(0,245,255,0.55)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[#1E1E2E] bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-[#E2E8F0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00F5FF] hover:text-[#00F5FF]"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Right: Profile image with spinning rings */}
      <section className="relative flex flex-1 items-center justify-center">
        {/* Outer spinning ring */}
        <div
          className="absolute h-[300px] w-[300px] animate-[spin_20s_linear_infinite] rounded-full border border-[#00F5FF]/20 md:h-[420px] md:w-[420px]"
          style={{ boxShadow: "0 0 30px rgba(0,245,255,0.05)" }}
        />
        {/* Inner spinning ring */}
        <div className="absolute h-[340px] w-[340px] animate-[spin_30s_linear_infinite_reverse] rounded-full border border-[#7C3AED]/20 md:h-[470px] md:w-[470px]" />

        {/* Glow blob behind image */}
        <div
          className="absolute h-56 w-56 rounded-full md:h-80 md:w-80"
          style={{
            background:
              "radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Profile image */}
        <div
          className="relative z-10 h-60 w-60 overflow-hidden rounded-full border-2 border-[#00F5FF]/30 bg-[#111118] shadow-[0_0_40px_rgba(0,245,255,0.15)] md:h-[22rem] md:w-[22rem]"
          style={{ boxShadow: "0 0 40px rgba(0,245,255,0.15), 0 20px 60px rgba(0,0,0,0.5)" }}
        >
          <Image
            src="/images/profile/profile.png"
            alt="Ian Aquino"
            width={384}
            height={384}
            priority
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
}

