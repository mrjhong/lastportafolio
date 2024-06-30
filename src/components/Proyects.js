import React from 'react'
import { ListProyects } from '@/assets/ListProyects'
import Card from './Card'
import '../styles/proyects.css'

const Proyects = () => {
  return (
    <section className="section-proyects" id="proyects">
      <h1 style={{ textAlign: "center", color: "white" }}><b>Proyectos</b></h1>

      <div className="grid grid-flow-row-dense grid-cols-3 proyect-container" style={{ justifyItems: "center", padding: "2.5rem" }}>

        {ListProyects.map((proyect)  => (
            <div className="col-span-1" key={proyect.id} style={{marginBottom:"3rem"}}>
            <Card proyect={proyect}/>
          </div>
          
        ))}

      </div>
    </section>
  )
}

export default Proyects