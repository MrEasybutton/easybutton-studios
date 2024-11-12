import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navigation} from "@/components/navigation";
import {Dock} from "@/components/dockbar";

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
    <div className="flex flex-col min-h-screen bg-slate-800 text-slate-50">
      <Navigation/>
      <main className="flex-grow max-h-[81vh] overflow-hidden">
        {children}
      </main>
      <Dock/>
    </div>
    </body>
    </html>
  );
}
