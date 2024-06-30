"use client";

import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        };

        const links = document.querySelectorAll('.navbar-sections a');
        console.log(links);
        links.forEach(link => link.addEventListener('click', handleScroll));

        // Cleanup function to remove event listeners
        return () => {
            links.forEach(link => link.removeEventListener('click', handleScroll));
        };
    }, []);

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        };

        if (!isMenuOpen) return;
        const links = document.querySelectorAll('.navbar-sections-mobile a');
        console.log(links);
        links.forEach(link => link.addEventListener('click', handleScroll));

        // Cleanup function to remove event listeners
        return () => {
            links.forEach(link => link.removeEventListener('click', handleScroll));
        };
    }, [isMenuOpen]);


    useEffect(() => {
        let audio = new Audio('/lofi.mp3');

        // Control de volumen
        audio.volume = 0.2;

        // Función para manejar la reproducción de audio
        const handlePlayAudio = async () => {
            try {
                // Verificar permisos para reproducir audio
                await audio.play();
            } catch (error) {
                // Si no hay permisos, lanzar una alerta
                // alert('No se pudo reproducir el audio. Por favor, asegúrate de haber dado permiso para la reproducción.');
            }
        };

        // Verificar si el audio está en pausa antes de intentar reproducirlo
        if (audio.paused) {
            handlePlayAudio();
        }

        // Limpiar el audio cuando el componente se desmonte
        return () => {
            audio.pause();
            audio = null;
        };
    }, []);
    const [isMobile, setIsMobile] = useState(false);
    // comprobar si es pantalla pequeña
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsLoading(false);
        };

        // Set initial state
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isLoading) {
        return <header style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: "#181f28f2",
        }} > <nav className="navbar">

                <ul className="navbar-list">
                    <li>
                        <h1>
                            <b>Jhon </b>
                            <b style={{ color: "#3EDBFD" }}>Guevara</b>
                        </h1>
                    </li>
                </ul>
            </nav></header>; // Componente de carga
    }
    return (
        <header style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: "#181f28f2",
        }} >
            <nav className="navbar">


                <ul className="navbar-list">
                    <li>
                        <h1>
                            <b>Jhon </b>
                            <b style={{ color: "#3EDBFD" }}>Guevara</b>
                        </h1>
                    </li>
                    {!isMobile ? (
                        <div className="navbar-sections">
                            <li>
                                <h2>
                                    <b>
                                        <a href="#about">Sobre mi</a>
                                    </b>
                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <b>
                                        <a href="#proyects">Proyectos</a>
                                    </b>
                                </h2>
                            </li>
                            <li>
                                <h2>
                                    <b>
                                        <a href="#contact">Contacto</a>
                                    </b>
                                </h2>
                            </li>
                        </div>
                    ) : (
                        <>
                            <div className="hamburger-menu space-y-2" onClick={() => setIsMenuOpen(true)} >
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>

                            </div>

                            {isMenuOpen && (
                                <div className="mobile-menu ">

                                    <div className="close-menu" role="button" aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>
                                        <span className="close-menu__icon">×</span>
                                    </div>

                                    <ul className="navbar-sections-mobile">
                                        <li>
                                            <h2>
                                                <b>
                                                    <a href="#about">Sobre mi</a>
                                                </b>
                                            </h2>
                                        </li>
                                        <li>
                                            <h2>
                                                <b>
                                                    <a href="#proyects">Proyectos</a>
                                                </b>
                                            </h2>
                                        </li>
                                        <li>
                                            <h2>
                                                <b>
                                                    <a href="#contact">Contacto</a>
                                                </b>
                                            </h2>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </>

                    )}

                </ul>
            </nav>
        </header>
    );
}
