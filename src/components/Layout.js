"use client";
import React,{useEffect} from 'react'
import "../styles/layout.css"
import { NextSection } from './statics/NextSection'


export default function Layout() {

  const openLink = (url) => {
    window.open(url, '_blank');
  }

  useEffect(() => {
    const layout = document.getElementById('layout');
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleLayoutChange = () => {
      
      // Intercambiar el orden de las columnas
      let col1 = document.querySelector('.col-span-1:first-child');
      let col2 = document.querySelector('.columna2');
      if (mediaQuery.matches) {
        layout.style.flexDirection = 'column';
        col1.style.order = '2';
        col2.style.order = '1';
        // Añadir un margen entre las columnas
        col1.style.marginBottom = '2rem';
        col2.style.marginBottom = '2rem';
       
      } else {
        layout.style.flexDirection = 'row';
 
        col1.style.order = 'unset';
        col2.style.order = 'unset';
        
      }
      col2.style.visibility = 'visible';
    };

    handleLayoutChange(); // Llamar a la función al cargar la página

    // Escuchar cambios en el tamaño de la ventana y ajustar el diseño
    mediaQuery.addEventListener('change', handleLayoutChange);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      mediaQuery.removeEventListener('change', handleLayoutChange);
    };
  }, []);


  return (
    
      <section className="container-page" id = "layout">
        <div className="grid grid-flow-row-dense grid-cols-2 layout-container">
          <div className="col-span-1" style={{ color: "white" }}>

            <b >
              <h1>¡Hola! Soy <span style={{ color: '#63CFE7' }}>Jhon</span> ,</h1>
              <h1>un apasionado desarrollador <span style={{ color: "#F45151" }}>Full Stack</span></h1>
            </b>
            <h5 style={{ marginTop: '2rem' }}>
              <p style={{letterSpacing:"2px"}}>Mi enfoque va más allá de simplemente escribir código;</p>
              <p style={{letterSpacing:"2px"}}> me esfuerzo por construir experiencias digitales </p>
              <p style={{letterSpacing:"2px"}}>excepcionales que superen las expectativas</p>
            </h5>


            <div className="social-media">
              <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
              onClick={() => openLink('https://github.com/mrjhong')}
              >
                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
                Github
              </button>




              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="text-white  mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium   shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                style={{ backgroundColor: '#0077b5', display: 'flex', alignItems: 'baseline' }}
                onClick={() => openLink('https://www.linkedin.com/in/john-guevara-a9ba371ab/')}
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
                <span style={{ marginLeft: '0.5rem' }}>Linkedin</span>
              </button>
            </div>
          </div>
          <div className="col-span-1 columna2">
            <div className="eclipse-group">
              <div className="eclipse"></div>
              <img className="img-profile" src="/profile2.jpg" alt="jhon" />
            </div>
          </div>
        </div>

        <NextSection section="#about"/>
      </section>

   
  )
}
