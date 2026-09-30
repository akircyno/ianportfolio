"use client";

import { useState } from "react";
import Image from "next/image";

type WorkCategory = "all" | "apps" | "websites";

interface WorkItem {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "all">;
  description: string;
  thumbnail: string;
  type: "image" | "video";
  link?: string;
}

const workItems: WorkItem[] = [
  {
    id: "trizsa",
    title: "Trizsa Reign Portfolio",
    category: "websites",
    description:
      "Personal portfolio website for Trizsa Reign Mabugay — Social Media Manager & Content Creator. Built with Next.js, TypeScript, and Tailwind CSS.",
    thumbnail: "/images/work/trizsaportfolio.png",
    type: "image",
    link: "https://trizsareignportfolio.vercel.app/",
  },
  {
    id: "kadaserve",
    title: "KadaServe",
    category: "apps",
    description:
      "Full-stack coffee ordering web application for Kada Cafe PH featuring live order tracking, menu customization, and smart drink recommendations.",
    thumbnail: "/images/work/kadaserve.png",
    type: "image",
    link: "https://kadaserve.vercel.app",
  },
  {
    id: "ourlife",
    title: "OurLife",
    category: "apps",
    description:
      "Personal daily life and productivity web application built for habit tracking and personal workflow management.",
    thumbnail: "/images/work/ourlife.png",
    type: "image",
  },
  {
    id: "pinned-marketing",
    title: "Pinned Marketing",
    category: "websites",
    description:
      "Official agency website for a Social Media Marketing Agency, featuring digital marketing services, campaign highlights, and client results.",
    thumbnail: "/images/work/pinnedmarketing.png",
    type: "image",
  },
];

const tabs: { label: string; value: WorkCategory }[] = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "apps" },
  { label: "Websites", value: "websites" },
];

const categoryColors: Record<Exclude<WorkCategory, "all">, string> = {
  apps: "#00F5FF",
  websites: "#0EA5E9",
};

const categoryLabels: Record<Exclude<WorkCategory, "all">, string> = {
  apps: "Web App",
  websites: "Website",
};

export default function Work() {
  const [activeTab, setActiveTab] = useState<WorkCategory>("all");

  const filtered =
    activeTab === "all"
      ? workItems
      : workItems.filter((item) => item.category === activeTab);

  return (
    <section id="work" className="relative z-10 scroll-mt-20 px-6 py-24 md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00F5FF]">
            Portfolio
          </p>
          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#E2E8F0] md:text-5xl">
            Featured{" "}
            <span
              className="text-[#00F5FF]"
              style={{ textShadow: "0 0 20px rgba(0,245,255,0.4)" }}
            >
              Projects
            </span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748B] md:text-base">
            Selected web applications and client projects built with modern web technologies.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                activeTab === tab.value
                  ? "bg-[#00F5FF] text-[#0A0A0F] shadow-[0_0_16px_rgba(0,245,255,0.4)]"
                  : "border border-[#1E1E2E] bg-[#111118] text-[#64748B] hover:border-[#00F5FF]/40 hover:text-[#00F5FF]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filtered.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-[#64748B]">
            No projects in this category yet. Check back soon!
          </div>
        )}
      </div>
    </section>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  const color = categoryColors[item.category];
  const label = categoryLabels[item.category];

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#1E1E2E] bg-[#111118] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00F5FF]/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,245,255,0.07)]">
      <div className="relative h-56 w-full overflow-hidden bg-[#16161F]">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111118]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0A0A0F]"
          style={{ backgroundColor: color }}
        >
          {label}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-[#E2E8F0]">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-[#64748B]">{item.description}</p>

        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
            style={{ color }}
          >
            View Live
            <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#64748B]/50">
            In Development
          </p>
        )}
      </div>
    </article>
  );
}
