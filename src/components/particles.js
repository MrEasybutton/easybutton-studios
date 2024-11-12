"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleCanvas = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvas.appendChild(renderer.domElement);

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 480;

        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10;
        }
        particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        const listColors = [
            0xFFD700,  // Gold
            0xFFFFFF,  // White
            0xFFFFE0   // Light Yellow
        ];

        const allColors = [...listColors];
        const colors = [];
        for (let i = 0; i < particlesCount; i++) {
            const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
            colors.push(((randomColor >> 16) & 0xff) / 255);  // Red channel
            colors.push(((randomColor >> 8) & 0xff) / 255);   // Green channel
            colors.push((randomColor & 0xff) / 255);          // Blue channel
        }


        particlesGeometry.setAttribute(
            "color",
            new THREE.BufferAttribute(new Float32Array(colors), 3)
        );

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            transparent: true,
            vertexColors: true,
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        const animate = () => {
            particles.rotation.y += 0.001;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            canvas.removeChild(renderer.domElement);
            renderer.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
        };
    }, []);

    return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default ParticleCanvas;
