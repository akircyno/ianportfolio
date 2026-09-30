import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import GridBackground from "@/components/ui/GridBackground";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#0A0A0F] font-sans text-[#E2E8F0] selection:bg-[rgba(0,245,255,0.25)] selection:text-[#00F5FF]">
      <GridBackground />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
}
