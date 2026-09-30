import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ian Aquino — Graphic Designer & Web Developer",
  description:
    "Portfolio of Ian Aquino — Graphic Designer, Website Developer, and Social Media Content Creator based in the Philippines.",
  icons: {
    icon: "/images/profile/profile.png",
    shortcut: "/images/profile/profile.png",
    apple: "/images/profile/profile.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0A0A0F] font-sans text-[#E2E8F0] antialiased">
        {children}
      </body>
    </html>
  );
}
