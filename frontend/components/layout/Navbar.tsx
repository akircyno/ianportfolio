"use client";

import { useEffect, useState } from "react";

const navItems = ["About", "Work", "Skills", "Services", "Contact"];

const navHrefByItem: Record<string, string> = {
  About: "#about",
  Work: "#work",
  Skills: "#skills",
  Services: "#services",
  Contact: "#contact",
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header
        data-site-navbar
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#1E1E2E] bg-[#0A0A0F]/90 shadow-[0_12px_35px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : "border-b border-transparent bg-[#0A0A0F]/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 transition-[height] duration-300 md:px-12">
          {/* Logo */}
          <div className="text-lg font-extrabold uppercase tracking-widest md:text-xl">
            <span className="text-[#E2E8F0]">Ira</span>
            <span
              className="text-[#00F5FF]"
              style={{ textShadow: "0 0 12px rgba(0,245,255,0.7)" }}
            >
              .dev
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden gap-10 text-sm font-medium tracking-wide md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={navHrefByItem[item]}
                className="group relative text-[#94A3B8] transition-colors duration-300 hover:text-[#00F5FF]"
              >
                {item}
                <span className="absolute bottom-[-4px] left-1/2 h-[2px] w-0 bg-[#00F5FF] shadow-[0_0_8px_rgba(0,245,255,0.8)] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="rounded-full border border-[#1E1E2E] bg-[#111118] p-3 text-[#00F5FF] transition-colors hover:border-[#00F5FF] hover:shadow-[0_0_12px_rgba(0,245,255,0.3)] md:hidden"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 6l12 12M18 6 6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen ? (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="fixed inset-0 z-[90] bg-[#0A0A0F]/60 backdrop-blur-sm md:hidden"
          />
          <nav
            aria-label="Mobile navigation"
            className="fixed left-0 top-20 z-[100] w-full border-b border-[#1E1E2E] bg-[#0A0A0F] px-6 pb-6 pt-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={navHrefByItem[item]}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#94A3B8] transition-colors hover:bg-[#111118] hover:text-[#00F5FF]"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </>
      ) : null}

      {/* Spacer */}
      <div className="h-20 shrink-0" aria-hidden="true" />
    </>
  );
}

