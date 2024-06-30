import React from 'react'
import '../styles/about.css'
import { NextSection } from './statics/NextSection'

export default function About() {
  
  return (
    <section className="container-page" id="about" >
      <h1 style={{ textAlign: "center", color: "white" }}><b>Sobre Mi</b></h1>
      <div className="grid grid-flow-row-dense grid-cols-2 content-about" style ={{justifyItems:"center",padding:"2.5rem"}} >
        <div className="col-span-1 about-content-1">
          <div className="square-box">

            <div className="square square-1">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" width={100} height={100} />
            </div>

            <div className="square square-2">
              <img src="https://trellat.es/wp-content/webp-express/webp-images/uploads/spring-boot-logo.png.webp"/>
            </div>
            
            <div className="square square-3">
              <img src="https://logos-world.net/wp-content/uploads/2021/10/Python-Symbol.png" alt="Python" width={100} height={100} />
            </div>
            
            <div className="square square-4">
              <img src="https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png" alt="React" width={100} height={100} />
            </div>
            
            
            

          </div>
          <div className="eclipse-box"></div>
           
        </div>
        <div className="col-span-1 about-content-2" style={{ color: "white" }}>

        

          <p style={{ paddingLeft: '1rem', paddingRight: '3rem' , letterSpacing:"3px" }}>
            En el mundo del desarrollo web, he trabajado con tecnologías modernas
            como React y Next.js para construir interfaces de usuario
            dinámicas y altamente interactivas. Mi habilidad para implementar
            soluciones frontend eficientes se complementa con una experiencia
            extensa en el desarrollo de backend utilizando frameworks y lenguajes
            robustos como Spring Boot, Python y Express. Estos me han permitido crear
            aplicaciones escalables y de alto rendimiento.
          </p>
          
          <div style={{position :"relative", marginTop:"17%"}}>
          <NextSection section ="#proyects" />
          </div>









        </div>

      </div>
    </section>
  )
}
