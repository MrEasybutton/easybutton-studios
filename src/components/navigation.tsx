import Link from "next/link";
import DigitalClock from './DigitalClock';

export const Navigation = () => {
    return (
        <div className="bg-slate-800">
            <nav
                className=
                    "flex justify-between items-center py-2.5 px-2 space-x-2 text-slate-50 drop-shadow font-bold bg-gradient-to-r from-slate-900 to-slate-700 font-mono border-2 border-slate-500 rounded-lg">

                {/* Main Navigation Links */}
                <div className="space-x-2 drop-shadow-2xl px-0.5 py-1">
                    <Link href="/" className={
                        "bg-slate-900 border rounded-md px-4 py-1.5 border-slate-200 hover:text-indigo-200 hover:bg-blue-900 transition duration-600"}>
                        Home
                    </Link>
                    <Link href="/about" className={
                        "bg-slate-900 border rounded-md px-4 py-1.5 border-slate-200 hover:text-indigo-200 hover:bg-[#8a8066] transition duration-600"}>
                        About
                    </Link>
                    <Link href="/projects" className={
                        "bg-slate-900 border rounded-md px-4 py-1.5 border-slate-200 hover:text-indigo-200 hover:bg-[#6a8a66] transition duration-600"}>
                        Projects
                    </Link>
                    <Link href="/login" className={
                        "bg-slate-900 border rounded-md px-4 py-1.5 border-slate-200 hover:text-indigo-200 hover:bg-[#7a4279] transition duration-600"}>
                        Login
                    </Link>
                </div>

                {/* External Links and Clock */}
                <div className="flex items-center space-x-6">
                    <div className="space-x-4 rounded-lg border px-2 bg-slate-800 shadow-md">
                        <a href="https://easybutton-studios.itch.io/">
                            <button
                                className="bg-slate-900 text-slate-100 rounded-lg border border-slate-100 shadow-md my-2 px-0.5 py-0.5 hover:-translate-y-0.5 transition duration-200">
                                🛒
                            </button>
                        </a>
                        <a href="http://x.com/EZBTN_Studios">
                            <button
                                className="bg-slate-900 text-slate-100 rounded-lg border border-slate-100 shadow-md my-2 py-0.5 px-2 hover:-translate-y-0.5 transition duration-200">
                                𝕏
                            </button>
                        </a>
                        <a href="https://www.youtube.com/@EasybuttonStudiosOfficial">
                            <button
                                className="bg-slate-900 text-slate-100 rounded-lg border border-slate-100 shadow-md my-2 px-0.5 py-0.5 hover:-translate-y-0.5 transition duration-200">
                                ▶️
                            </button>
                        </a>
                    </div>
                    <div className="drop-shadow-2xl hover:translate-x-0.5 hover:-translate-y-0.5 transition duration-200">
                        <DigitalClock/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
