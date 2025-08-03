"use client";
import React, { useState, useEffect, useRef } from 'react';

const BG_Comp = ({
                     title = "",
                     subtitle = "",
                     backgroundImage = "PSD_1.png"
                 }) => {
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);
    const [, setTime] = useState(0);
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
        if (containerRef.current) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: ((e.clientX - rect.left) / rect.width) * 100,
                y: ((e.clientY - rect.top) / rect.height) * 100
            });
        }
    };

    const distortionIntensity = () => {
        const centerX = 50;
        const centerY = 50;
        const distance = Math.sqrt(
            Math.pow(mousePosition.x - centerX, 2) + Math.pow(mousePosition.y - centerY, 2)
        );
        return Math.max(0, (50 - distance) / 50);
    };

    const chromaticOffset = distortionIntensity() * 3;

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Doto&display=swap" rel="stylesheet" />

            <div
                ref={containerRef}
                className="relative w-full h-screen overflow-hidden bg-black cursor-none"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{fontFamily: 'Doto, monospace'}}
            >
                <div
                    className="absolute inset-0 transition-all duration-300 ease-out"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(0, 0, 0, 0.3) 0%, 
                rgba(0, 0, 0, 0.1) 30%, 
                rgba(50, 40, 60, 0.12) 60%, 
                rgba(120, 110, 125, 0.2) 100%
              ),
              url('./${backgroundImage}')
            `,
                        backgroundSize: 'cover, cover',
                        backgroundPosition: 'center, center',
                        backgroundRepeat: 'no-repeat, no-repeat',
                        transform: `
              scale(${1 + distortionIntensity() * 0.024}) 
              rotate(${distortionIntensity() * 0.88}deg)
            `,
                        filter: `
              blur(${distortionIntensity() * 5}px) 
              contrast(${1 + distortionIntensity() * 0.55})
              saturate(${1.25 + distortionIntensity() * 0.45})
            `
                    }}
                />

                <div
                    className="absolute inset-0 opacity-80 mix-blend-screen transition-all duration-200 ease-out"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x + chromaticOffset}% ${mousePosition.y}%, 
              rgba(12, 12, 236, ${distortionIntensity() * 0.2}) 0%, 
              transparent 40%
            )`
                    }}
                />
                <div
                    className="absolute inset-0 opacity-80 mix-blend-screen transition-all duration-200 ease-out"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x - chromaticOffset}% ${mousePosition.y}%, 
              rgba(255, 121, 120, ${distortionIntensity() * 0.18}) 0%, 
              transparent 40%
            )`
                    }}
                />
                <div
                    className="absolute inset-0 opacity-60 mix-blend-overlay transition-all duration-200 ease-out"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y + chromaticOffset * 0.5}%, 
              rgba(0, 255, 0, ${distortionIntensity() * 0.1}) 0%, 
              transparent 35%
            )`
                    }}
                />

                <div
                    className="absolute inset-0 opacity-20 transition-all duration-300 ease-out"
                    style={{
                        backgroundImage: `
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px',
                        transform: `
              perspective(1000px) 
              rotateX(${distortionIntensity() * 1.2}deg) 
              rotateY(${(mousePosition.x - 50) * distortionIntensity() * 0.1}deg)
              translateZ(${distortionIntensity() * 20}px)
            `,
                        filter: `blur(${distortionIntensity() * 0.5}px)`
                    }}
                />

                <div
                    className="absolute transition-all duration-200 ease-out pointer-events-none"
                    style={{
                        left: `${mousePosition.x}%`,
                        top: `${mousePosition.y}%`,
                        width: `${200 + distortionIntensity() * 100}px`,
                        height: `${200 + distortionIntensity() * 100}px`,
                        transform: 'translate(-50%, -50%)',
                        background: `
              radial-gradient(circle, 
                rgba(148, 163, 184, ${distortionIntensity() * 0.1}) 0%, 
                rgba(100, 116, 139, ${distortionIntensity() * 0.05}) 30%,
                transparent 60%
              )
            `,
                        filter: `blur(${5 + distortionIntensity() * 10}px)`,
                        borderRadius: '50%'
                    }}
                />

                <div className="relative z-10 flex items-center justify-center h-full">
                    <div
                        ref={textRef}
                        className="text-center space-y-6 px-8 transition-all duration-300 ease-out"
                        style={{
                            transform: `
                translateX(${(mousePosition.x - 50) * distortionIntensity() * 0.3}px)
                translateY(${(mousePosition.y - 50) * distortionIntensity() * 0.2}px)
                scale(${1 + distortionIntensity() * 0.02})
              `,
                            filter: `
                ${chromaticOffset > 0.5 ? `
                  drop-shadow(${chromaticOffset * 0.5}px 0px 0px rgba(255, 0, 0, 0.5))
                  drop-shadow(-${chromaticOffset * 0.5}px 0px 0px rgba(0, 255, 255, 0.5))
                ` : ''}
                blur(${distortionIntensity() * 0.3}px)
              `
                        }}
                    >
                        <h1
                            className="text-7xl font-normal text-slate-100 tracking-widest relative"
                            style={{
                                textShadow: `
                  ${chromaticOffset}px 0px 0px rgba(255, 0, 0, ${distortionIntensity() * 0.6}),
                  -${chromaticOffset}px 0px 0px rgba(0, 255, 255, ${distortionIntensity() * 0.6}),
                  0px ${chromaticOffset * 0.5}px 0px rgba(0, 255, 0, ${distortionIntensity() * 0.3}),
                  0px 0px 20px rgba(148, 163, 184, ${0.3 + distortionIntensity() * 0.4})
                `
                            }}
                        >
                            {title}
                        </h1>

                        <p
                            className="text-lg text-slate-300 font-light tracking-wide max-w-md mx-auto"
                            style={{
                                textShadow: `
                  ${chromaticOffset * 0.3}px 0px 0px rgba(255, 0, 0, ${distortionIntensity() * 0.3}),
                  -${chromaticOffset * 0.3}px 0px 0px rgba(0, 255, 255, ${distortionIntensity() * 0.3}),
                  0px 0px 10px rgba(148, 163, 184, ${0.2 + distortionIntensity() * 0.3})
                `,
                                opacity: 0.8 + distortionIntensity() * 0.2
                            }}
                        >
                            {subtitle}
                        </p>

                        <div
                            className="w-32 h-px mx-auto mt-8 transition-all duration-300"
                            style={{
                                background: `linear-gradient(90deg, 
                  transparent, 
                  rgba(148, 163, 184, ${0.4 + distortionIntensity() * 0.4}), 
                  transparent
                )`,
                                transform: `scaleX(${1 + distortionIntensity() * 0.3})`,
                                filter: `blur(${distortionIntensity() * 0.5}px)`,
                                boxShadow: `
                  0 0 10px rgba(148, 163, 184, ${distortionIntensity() * 0.5}),
                  ${chromaticOffset * 0.5}px 0px 5px rgba(255, 0, 0, ${distortionIntensity() * 0.3}),
                  -${chromaticOffset * 0.5}px 0px 5px rgba(0, 255, 255, ${distortionIntensity() * 0.3})
                `
                            }}
                        />
                    </div>
                </div>

                {isHovering && (
                    <div
                        className="absolute pointer-events-none transition-all duration-100 ease-out z-20"
                        style={{
                            left: `${mousePosition.x}%`,
                            top: `${mousePosition.y}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <div
                            className="w-4 h-4 rounded-full border border-slate-300"
                            style={{
                                background: `radial-gradient(circle, 
                  rgba(255, 255, 255, 0.8) 0%, 
                  rgba(148, 163, 184, 0.4) 50%, 
                  transparent 100%
                )`,
                                boxShadow: `
                  0 0 20px rgba(255, 255, 255, 0.5),
                  ${chromaticOffset}px 0px 10px rgba(255, 0, 0, 0.5),
                  -${chromaticOffset}px 0px 10px rgba(0, 255, 255, 0.5)
                `,
                                filter: `blur(${distortionIntensity() * 2.2}px)`
                            }}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default BG_Comp;