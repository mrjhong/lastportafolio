"use client"
import React, { useEffect } from 'react';
import '../../styles/nextSection.css';

// Botón para ir a la siguiente sección
export const NextSection = (props) => {
    // Identificador de la sección en la que estamos y a la que queremos ir
    const { section } = props;

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            let targetId = section.replace("#", "");
            console.log(targetId);

            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        };

        // Find the specific link that should handle the scroll event
        const link = document.querySelector(`.next-section a[href="${section}"]`);
        if (link) {
            link.addEventListener('click', handleScroll);

            // Cleanup function to remove event listener
            return () => {
                link.removeEventListener('click', handleScroll);
            };
        }
    }, [section]);

    return (
        <div className="next-section">
            <a href={section}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </a>
        </div>
    );
};
