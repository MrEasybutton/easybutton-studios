"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const navItems = [
        { label: 'HOME', id: 'home', href: '/' },
        { label: 'ABOUT', id: 'about', href: '/about' },
        { label: 'PROJECTS', id: 'projects', href: '/projects' },
        { label: 'CONTACTS', id: 'contacts', href: '/contacts' }
    ];

    const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
        });
    };

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Doto&display=swap" rel="stylesheet" />

            <nav
                className="fixed left-0 top-0 h-screen w-20 bg-black/80 backdrop-blur-md border-r border-slate-700/30 z-50 transition-all duration-200 hover:w-64 group"
                onMouseMove={handleMouseMove}
                style={{ fontFamily: 'Doto, monospace' }}
            >
                <div
                    className="absolute inset-0 opacity-10 transition-all duration-300"
                    style={{
                        background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(148, 163, 184, 0.3) 0%, 
                rgba(100, 116, 139, 0.2) 30%,
                transparent 60%
              )
            `,
                        filter: 'blur(20px)'
                    }}
                />

                <div className="absolute inset-0 opacity-20">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-px h-full bg-gradient-to-b from-transparent via-slate-400/40 to-transparent transition-all duration-[3000ms]"
                            style={{
                                left: `${20 + i * 30}%`,
                                transform: `translateY(${Math.sin(time * 0.01 + i) * 10}px)`,
                                opacity: 0.2 + Math.sin(time * 0.008 + i) * 0.1
                            }}
                        />
                    ))}
                </div>

                <div className="p-6 border-b border-slate-700/30 relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400/20 to-slate-600/20 border border-slate-500/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <div
                            className="w-2 h-2 rounded-full bg-slate-300/60 transition-all duration-500"
                            style={{
                                boxShadow: `
                  0 0 10px rgba(148, 163, 184, 0.5),
                  0 0 20px rgba(148, 163, 184, 0.2)
                `
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col py-8 space-y-2">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`relative group/item cursor-pointer transition-all duration-200 ${
                                activeItem === index ? 'bg-slate-800/40' : 'hover:bg-slate-800/20'
                            }`}
                            onClick={() => setActiveItem(index)}
                        >
                            <div className="flex items-center h-16 px-6">
                                <div className="relative flex items-center justify-center w-8">
                                    <div
                                        className={`w-3 h-3 border border-slate-400/60 transition-all duration-300 ${
                                            index === 0 ? 'rounded-full' :
                                                index === 1 ? 'rounded-sm rotate-45' :
                                                    index === 2 ? 'rounded-none' : 'rounded-full border-dashed'
                                        } ${
                                            activeItem === index ? 'bg-slate-400/30 scale-125' : 'bg-transparent group-hover/item:bg-slate-400/10'
                                        }`}
                                        style={{
                                            boxShadow: activeItem === index ? '0 0 15px rgba(148, 163, 184, 0.4)' : 'none'
                                        }}
                                    />

                                    <div
                                        className={`absolute w-3 h-3 border border-red-400/20 transition-all duration-200 ${
                                            index === 0 ? 'rounded-full' :
                                                index === 1 ? 'rounded-sm rotate-45' :
                                                    index === 2 ? 'rounded-none' : 'rounded-full border-dashed'
                                        } opacity-0 group-hover/item:opacity-100`}
                                        style={{
                                            transform: 'translate(1px, 0px)'
                                        }}
                                    />
                                    <div
                                        className={`absolute w-3 h-3 border border-cyan-400/40 transition-all duration-200 ${
                                            index === 0 ? 'rounded-full' :
                                                index === 1 ? 'rounded-sm rotate-45' :
                                                    index === 2 ? 'rounded-none' : 'rounded-full border-dashed'
                                        } opacity-0 group-hover/item:opacity-100`}
                                        style={{
                                            transform: 'translate(-1px, 0px)'
                                        }}
                                    />
                                </div>

                                <div className="overflow-hidden ml-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                                    <span
                                        className={`text-sm tracking-widest whitespace-nowrap transition-all duration-200 ${
                                            activeItem === index ? 'text-slate-200' : 'text-slate-400'
                                        } group-hover/item:text-slate-300`}
                                        style={{
                                            textShadow: activeItem === index ?
                                                `1px 0px 0px rgba(255, 0, 0, 0.3), -1px 0px 0px rgba(0, 255, 255, 0.3), 0 0 10px rgba(148, 163, 184, 0.4)` :
                                                'none'
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            </div>

                            <div
                                className="absolute inset-0 opacity-0 group-hover/item:opacity-20 transition-all duration-200 pointer-events-none"
                                style={{
                                    background: `
                    linear-gradient(90deg, 
                      transparent 0%, 
                      rgba(148, 163, 184, 0.1) 50%, 
                      transparent 100%
                    )
                  `,
                                    filter: 'blur(10px)'
                                }}
                            />
                        </Link>
                    ))}
                </div>

                <div
                    className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-slate-400/20 via-slate-500/10 to-slate-400/20 transition-all duration-500"
                    style={{
                        boxShadow: 'inset -1px 0 0 rgba(148, 163, 184, 0.1), 1px 0 10px rgba(148, 163, 184, 0.1)'
                    }}
                />
            </nav>
        </>
    );
};

export default Navigation;