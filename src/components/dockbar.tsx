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
                        "bg-slate-900 border w-10 h-10 shrink-0 grow-0 rounded-full px-1 py-1.5 border-slate-200 hover:text-indigo-200 hover:bg-blue-900 transition duration-600"}>
                        🌍️
                    </Link>
                    <Link href="/" className={
                        "bg-slate-900 border w-10 h-10 shrink-0 grow-0 rounded-full px-1 py-1.5 border-slate-200 hover:text-indigo-200 hover:bg-blue-900 transition duration-600"}>
                        🕒
                    </Link>
                    <Link href="/" className={
                        "bg-slate-900 border w-10 h-10 shrink-0 grow-0 rounded-full px-1 py-1.5 border-slate-200 hover:text-indigo-200 hover:bg-blue-900 transition duration-600"}>
                        🌤️
                    </Link>
                </div>


            </nav>
        </div>
    )
}

