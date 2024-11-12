import Link from "next/link"

export const Dock = () => {
    return (
        <div className="bg-slate-800">
            <nav
                className=
                    "flex justify-center items-center py-2.5 px-2 space-x-2 text-slate-50 drop-shadow font-bold bg-gradient-to-r from-slate-800 to-slate-700 font-mono border-2 border-slate-500 rounded-lg">
                <div className=
                         "space-x-2 drop-shadow-2xl px-0.5 py-1">
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


            </nav>
        </div>
    )
}

