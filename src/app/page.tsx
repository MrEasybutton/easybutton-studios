import { Figtree } from 'next/font/google'

const titleFont = Figtree({
    subsets: ['latin'],
    display: 'swap',
})

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center -translate-y-16">
        <div className={`${titleFont.className}`}>
            <div>
                <h1
                    className="text-7xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-transparent bg-gradient-to-br from-cyan-500 to-fuchsia-500 bg-clip-text hover:drop-shadow-md transition duration-200">
                    Easybutton Studios
                </h1>
                <h2 className="text-2xl font-bold text-slate-200 p-2">
                    top 10 skibidi
                </h2>
                <div className="space-x-5 p-4">
                    <a href="https://easybutton-studios.itch.io/">
                        <button
                            className="bg-slate-950 text-slate-100 border-2 border-cyan-300 shadow-md rounded-full my-2 px-3 py-2.5 hover:-translate-y-0.5 transition duration-200">
                            🛒
                        </button>
                    </a>
                    <a href="http://x.com/EZBTN_Studios">
                        <button
                            className="bg-slate-950 text-slate-100 border-2 border-cyan-300 shadow-md rounded-full my-2 py-2.5 px-4 hover:-translate-y-0.5 transition duration-200">
                            𝕏
                        </button>
                    </a>
                    <a href="https://www.youtube.com/@EasybuttonStudiosOfficial">
                        <button
                            className="bg-slate-950 text-slate-100 border-2 border-cyan-300 shadow-md rounded-full my-2 px-3 py-2.5 hover:-translate-y-0.5 transition duration-200">
                            ▶️
                        </button>
                    </a>
                </div>
            </div>

        </div>
      </main>
    </div>

  );
}
