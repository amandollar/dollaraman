import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Sharma | Full-Stack Developer",
  description:
    "Full-stack developer building scalable web applications with React, Next.js, and Node.js. Currently building eventviewz.com and DocIt.",
  icons: {
    icon: "/icon.png",
  },
};

const themeInitScript = `
(function () {
  try {
    var key = "theme";
    var stored = localStorage.getItem(key);
    var dark =
      stored === "dark"
        ? true
        : stored === "light"
          ? false
          : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} min-h-screen font-sans antialiased`}
      >
        <Navigation />
        <div className="relative mx-auto mb-10 mt-3 max-w-7xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[var(--line-gradient)] opacity-90"
          />
          <div className="notion-document rounded-lg px-5 pb-20 pt-0 sm:px-10 lg:px-14">
            <main className="section-container pb-8 pt-10 sm:pt-12">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
