"use client";
import React, { useState, useEffect } from 'react';
import BG_Comp from "@/components/bg";

const Contacts = () => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
        });
    };

    const distortionIntensity = () => {
        const centerX = 50;
        const centerY = 50;
        const distance = Math.sqrt(
            Math.pow(mousePosition.x - centerX, 2) + Math.pow(mousePosition.y - centerY, 2)
        );
        return Math.max(0, (50 - distance) / 50) * 0.3;
    };

    const contacts = [
        {
            title: 'Github',
            description: 'Personal projects and experimental stuff will be here at my Github. ',
            status: '🔗',
            year: '',
            url: 'https://github.com/MrEasybutton'
        },
        {
            title: 'Twitter/X',
            description: 'My funni Twitter/X, most updates can be found here',
            status: '🔗',
            year: '',
            url: 'https://x.com/EasybuttonDev'
        },
        {
            title: 'Reddit',
            description: 'Mostly for Hololive-related software I want to post',
            status: '🔗',
            year: '',
            url: 'https://www.reddit.com/user/EasybuttonDev/'
        }
    ];

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Doto&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

            <div
                className="bg-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ml-20"
                onMouseMove={handleMouseMove}
            >
                <div className="fixed inset-0">
                    <BG_Comp backgroundImage={"PSD_2.png"}/>
                </div>
                <div
                    className="fixed inset-0 transition-all duration-300 ease-out -z-10"
                    style={{
                        background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(30, 41, 59, 0.4) 0%, 
                rgba(15, 23, 42, 0.6) 30%, 
                rgba(2, 6, 23, 0.8) 60%, 
                rgba(0, 0, 0, 1) 100%
              )
            `,
                        filter: `blur(${distortionIntensity() * 0.5}px)`
                    }}
                />

                <div
                    className="fixed inset-0 opacity-[0.02] -z-10"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundSize: '128px 128px'
                    }}
                />

                <div className="fixed inset-0 opacity-10 -z-10">
                    {[...Array(2)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-full h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent"
                            style={{
                                top: `${((time * 0.2 + i * 40) % 100)}%`,
                                opacity: 0.05 + Math.sin(time * 0.01 + i) * 0.03,
                                filter: `blur(${distortionIntensity() * 0.2}px)`
                            }}
                        />
                    ))}
                </div>

                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-4xl w-full">
                    <header
                        className="mb-8 transition-all duration-300 text-center sm:text-left"
                        style={{
                            transform: `translateY(${distortionIntensity() * 2}px)`,
                            filter: `blur(${distortionIntensity() * 0.1}px)`
                        }}
                    >
                        <h1
                            className="text-6xl md:text-8xl font-light tracking-wider text-slate-200 mb-6"
                            style={{
                                fontFamily: 'Doto, monospace',
                                textShadow: `
                  ${distortionIntensity() * 2}px 0px 0px rgba(255, 0, 0, ${distortionIntensity() * 0.3}),
                  -${distortionIntensity() * 2}px 0px 0px rgba(0, 255, 255, ${distortionIntensity() * 0.3}),
                  0 0 20px rgba(148, 163, 184, ${0.2 + distortionIntensity() * 0.3})
                `
                            }}
                        >
                            CONTACTS
                        </h1>

                        <div
                            className="w-32 h-px bg-gradient-to-r from-slate-400/60 via-slate-300/80 to-transparent transition-all duration-300 mx-auto sm:mx-0"
                            style={{
                                transform: `scaleX(${1 + distortionIntensity() * 0.2})`,
                                boxShadow: `0 0 10px rgba(148, 163, 184, ${0.3 + distortionIntensity() * 0.4})`
                            }}
                        />
                    </header>

                    <section
                        className="transition-all duration-300"
                        style={{
                            transform: `translateX(${(mousePosition.x - 50) * distortionIntensity() * 0.1}px)`
                        }}
                    >
                        <p
                            className="text-xl md:text-2xl leading-relaxed text-slate-300 font-light mb-8 text-center sm:text-left"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                lineHeight: '1.8',
                                textShadow: `0 0 10px rgba(148, 163, 184, ${0.1 + distortionIntensity() * 0.2})`
                            }}
                        >
                            find me at these places.
                        </p>
                    </section>

                    <section
                        className="mt-8 transition-all duration-300 w-full"
                        style={{
                            transform: `translateY(${distortionIntensity() * -1}px)`
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {contacts.map((project, index) => (
                                <a
                                    key={index}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-6 border border-slate-700/30 bg-slate-900/20 backdrop-blur-sm transition-all duration-300 hover:border-slate-600/50 hover:bg-slate-800/30 hover:scale-105 cursor-pointer block"
                                    style={{
                                        transform: `scale(${1 + distortionIntensity() * 0.01})`,
                                        filter: `blur(${distortionIntensity() * 0.1}px)`
                                    }}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h3
                                            className="text-sm font-medium tracking-widest text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                                            style={{ fontFamily: 'Doto, monospace' }}
                                        >
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2 text-xs">
                                            <span
                                                className="text-slate-500"
                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                            >
                                                {project.year}
                                            </span>
                                            <span
                                                className={`
                          px-2 py-1 rounded text-xs
                          ${project.status === 'In Development' ? 'bg-emerald-500/20 text-emerald-300' :
                                                    project.status === 'Prototype' ? 'bg-slate-500/20 text-slate-300' :
                                                        project.status === 'Pre-Alpha' ? 'bg-purple-500/20 text-purple-300' :
                                                            'bg-cyan-500/20 text-cyan-300'}
                        `}
                                                style={{ fontFamily: 'Doto, monospace' }}
                                            >
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                    <p
                                        className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            lineHeight: '1.7'
                                        }}
                                    >
                                        {project.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </section>
                </main>

                <div
                    className="fixed pointer-events-none transition-all duration-100 ease-out z-10"
                    style={{
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        transform: 'translate(-50%, -50%)',
                        width: '200px',
                        height: '200px',
                        background: `radial-gradient(circle, rgba(148, 163, 184, ${distortionIntensity() * 0.03}) 0%, transparent 70%)`,
                        filter: 'blur(20px)'
                    }}
                />
            </div>
        </>
    );
};

export default Contacts;