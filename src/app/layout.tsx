import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navigation} from "@/components/navigation";
import {Kalnia_Glaze} from 'next/font/google';
import Link from "next/link";

const martianMono = Kalnia_Glaze({ subsets: ['latin'], weight: "600"})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Easybutton Studios",
  description: "The really cool indie gamedev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <div className="bg-gradient-to-br from-slate-900 to-slate-800">
      <header
          className={"flex justify-between items-center h-fit px-2 py-0.5 text-left text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-amber-100 to-yellow-500 drop-shadow-lg hover: drop-shadow-2x1 hover:bg-gradient-to-tr hover:from-amber-200 hover:to-yellow-700"}>
        <h1 className={martianMono.className}>
          <Link href="/">Easybutton Studios</Link>
        </h1>
        <div className="space-x-6 align-top scale-75 translate-x-6">
          <a href="https://easybutton-studios.itch.io/">
            <button
                className="bg-slate-950 text-slate-100 border-2 border-amber-300 shadow-md my-2 px-1.5 py-2.5 hover:-translate-y-0.5 transition duration-200">
              🛒
            </button>
          </a>
          <a href="http://x.com/EZBTN_Studios">
            <button
                className="bg-slate-950 text-slate-100 border-2 border-amber-300 shadow-md my-2 py-2.5 px-5 hover:-translate-y-0.5 transition duration-200">
              𝕏
            </button>
          </a>
          <a href="https://www.youtube.com/@EasybuttonStudiosOfficial">
            <button
                className="bg-slate-950 text-slate-100 border-2 border-amber-300 shadow-md my-2 px-1.5 py-2.5 hover:-translate-y-0.5 transition duration-200">
              ▶️
            </button>
          </a>
        </div>
      </header>
    </div>
    <Navigation/>
    {children}
    </body>
    </html>
  );
}
