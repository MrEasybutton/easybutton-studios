"use client";
import React, { useState, useEffect } from 'react';
import BG_Comp from '../../components/bg';

export default function About() {
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
        return Math.max(0, (50 - distance) / 50) * 0.8;
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Doto&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

            <div
                className="bg-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ml-20 relative"
                onMouseMove={handleMouseMove}
            >
                <div className="fixed inset-0">
                    <BG_Comp/>
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
                            ABOUT
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
                            EASYBUTTON STUDIOS is an independent software development studio dedicated to <b>cool ass</b> software.
                        </p>
                    </section>

                    <section
                        className="space-y-8 transition-all duration-300"
                        style={{
                            transform: `translateX(${(mousePosition.x - 50) * distortionIntensity() * -0.05}px)`
                        }}
                    >
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p
                                className="text-lg leading-loose text-slate-400 mb-6"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    lineHeight: '1.9',
                                    maxWidth: '70ch'
                                }}
                            >
                                I create unique software in a myriad of languages, for a multitude of fascinating purposes. As you&#39;ll see, the projects I embark on are not those you&#39;d observe in other portfolios, but I hope you enjoy them.
                            </p>

                            <p
                                className="text-lg leading-loose text-slate-400 mb-6"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    lineHeight: '1.9',
                                    maxWidth: '70ch'
                                }}
                            >
                                Regarding my background, I have zero formal training in anything other than Python and Java, but I&#39;ve dabbled in many architectures since then, and I&#39;m looking to explore even more.
                            </p>

                            <p
                                className="text-lg leading-loose text-slate-400 mb-6"
                                style={{
                                    fontFamily: 'Inter, sans-serif',
                                    lineHeight: '1.9',
                                    maxWidth: '70ch'
                                }}
                            >
                                Apart from programming bizarre software I&#39;m also a fan of the Vtuber community and music production.
                            </p>
                        </div>
                    </section>

                    <section
                        className="mt-8 transition-all duration-300 w-full"
                        style={{
                            transform: `translateY(${distortionIntensity() * -1}px)`
                        }}
                    >
                        <h2
                            className="text-2xl font-light tracking-wide text-slate-300 mb-8 text-center sm:text-left"
                            style={{
                                fontFamily: 'Doto, monospace',
                                textShadow: `0 0 15px rgba(148, 163, 184, ${0.2 + distortionIntensity() * 0.3})`
                            }}
                        >
                            TOPICS AND SKILLS I ENJOY
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'OSdev',
                                    description: 'Operating systems are just cool as fuck. I\'ve been working on my Koseki Bijou themed operating system, kOSeki, for around a year and it\'s been such an insightful experience.'
                                },
                                {
                                    title: 'Game Development with UE5',
                                    description: 'I use both Unity and Unreal Engine to code games, but professionally I stick to Unreal Engine as I\'ve grown accustomed to its ease-of-use. \nI hope to try out Godot one day as well.'
                                },
                                {
                                    title: 'Liminal Spaces',
                                    description: 'This ain\'t that Backrooms BS. I find liminal spaces to be way more nuanced and rich if you gaze at them right. To me, the most beautiful liminal spaces come from the pursuit of the afterlife, and I\'m looking to reflect this in my upcoming debut game PSEUDOMENTO.'
                                },
                                {
                                    title: 'Experimentals',
                                    description: 'This moreso reflects the breakthroughs I want to achieve. A great example is my work in JavaFX, which I would typically hate. However, I\'ve managed to create several interesting (albeit gimmicky) components with it, such as a Liquid Glass material.'
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group p-6 border border-slate-700/30 bg-slate-900/20 backdrop-blur-sm transition-all duration-300 hover:border-slate-600/50 hover:bg-slate-800/30"
                                    style={{
                                        transform: `scale(${1 + distortionIntensity() * 0.01})`,
                                        filter: `blur(${distortionIntensity() * 0.1}px)`
                                    }}
                                >
                                    <h3
                                        className="text-sm font-medium tracking-widest text-slate-300 mb-3 group-hover:text-slate-200 transition-colors duration-300"
                                        style={{ fontFamily: 'Doto, monospace' }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            lineHeight: '1.7'
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
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
}