import BG_Comp from "@/components/bg";

export default function Home() {
    return (
        <main className="flex justify-center text-center">
            <div style={{width: '100%', height: '100vh', position: 'relative'}}>
                {/* eslint-disable-next-line react/no-children-prop */}
                <BG_Comp
                    title="EASYBUTTON STUDIOS"
                    subtitle="making cool software"
                />

            </div>

        </main>
    );
}
