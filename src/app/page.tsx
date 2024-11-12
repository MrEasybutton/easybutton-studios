import { Kalnia_Glaze } from 'next/font/google'
import ParticleCanvas from "@/components/particles"

const titleFont = Kalnia_Glaze({
    subsets: ['latin'],
    display: 'swap',
    weight: "600",
})

export default function Home() {
    return (
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 min-h-screen">
            <ParticleCanvas/>
            <main className="relative z-10 flex flex-col gap-8 items-center justify-center text-center pt-32">
                <div className={`${titleFont.className}`}>
                    <h1 className="text-8xl font-bold p-4 text-transparent bg-gradient-to-br from-amber-200 to-amber-300 bg-clip-text">
                        Easybutton Studios
                    </h1>

                </div>

            </main>
        </div>
    );
}
