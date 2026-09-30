"use client";

import { useState } from "react";

const EMAIL = "rcyaquinoian@gmail.com";
const PHONE = "+63 991 248 9776";
const FACEBOOK_URL = "https://www.facebook.com/rcyaquinoian";
const LINKEDIN_URL = "https://www.linkedin.com/in/ian-aquino-170081374/";

const sitemap = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <footer id="contact" className="relative z-10 scroll-mt-20 px-6 py-24 md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* CTA Headline */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00F5FF]">Contact</p>
          <h2 className="mb-4 text-4xl font-black uppercase leading-tight tracking-tight text-[#E2E8F0] md:text-6xl">
            Interested?{" "}
            <span className="text-[#00F5FF]" style={{ textShadow: "0 0 20px rgba(0,245,255,0.4)" }}>
              Let&apos;s Talk!
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#64748B]">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard color="#00F5FF" label="Email" icon={<MailIcon />}>
            <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-[#E2E8F0] transition-colors hover:text-[#00F5FF]">
              {EMAIL}
            </a>
            <button type="button" onClick={handleCopyEmail} className="mt-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#00F5FF] transition-opacity hover:opacity-70">
              {copied ? "Copied!" : "Copy"} <CopyIcon />
            </button>
          </ContactCard>

          <ContactCard color="#00F5FF" label="Phone" icon={<PhoneIcon />}>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="text-sm font-medium text-[#E2E8F0] transition-colors hover:text-[#00F5FF]">
              {PHONE}
            </a>
          </ContactCard>

          <ContactCard color="#7C3AED" label="Facebook" icon={<FacebookIcon />}>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#E2E8F0] transition-colors hover:text-[#7C3AED]">
              Ian Aquino
            </a>
          </ContactCard>

          <ContactCard color="#00F5FF" label="LinkedIn" icon={<LinkedInIcon />}>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-sm font-medium text-[#E2E8F0] transition-colors hover:text-[#00F5FF]">
              Ian Aquino
            </a>
          </ContactCard>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#1E1E2E]" />

        {/* Footer bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-lg font-black uppercase tracking-widest text-[#E2E8F0]">
              Ian<span className="text-[#00F5FF]" style={{ textShadow: "0 0 10px rgba(0,245,255,0.6)" }}>.dev</span>
            </p>
            <p className="mt-1 text-xs text-[#64748B]">Graphic Designer · Web Developer · Social Media Content Creator</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[#64748B]">
            {sitemap.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-[#00F5FF]">{link.label}</a>
            ))}
          </nav>
          <p className="text-xs text-[#64748B]">Ian Aquino &copy;2026</p>
        </div>
      </div>
    </footer>
  );
}


function ContactCard({ color, label, icon, children }: { color: string; label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#1E1E2E] bg-[#111118] p-6">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>
        {icon}
      </div>
      <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#64748B]">{label}</p>
      {children}
    </div>
  );
}


function MailIcon() {
  return (
    <svg className="h-5 w-5 text-[#00F5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 text-[#00F5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4c0 1-1 2-2 2A15 15 0 0 1 3 6c0-1 1-2 2-2Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2M8 4a2 2 0 012-2h4a2 2 0 012 2M8 4h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5 text-[#7C3AED]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5 text-[#00F5FF]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

