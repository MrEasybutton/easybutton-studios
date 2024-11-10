import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navigation} from "@/components/navigation";
import {Martian_Mono} from 'next/font/google';

const martianMono = Martian_Mono({ subsets: ['latin'], weight: "500"})
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
  title: "test",
  description: "thats cool",
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
          className={"h-fit px-2 py-4 text-left text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 to-pink-600 drop-shadow-2xl"}>
        <h1 className={martianMono.className}>testing</h1>

      </header>
    </div>
    <Navigation/>
    {children}
    </body>
    </html>
  );
}
