import React from 'react'
import "./Metodos2.css"
import apoyo from "../../../assets/apoyo.png"
import determinacion from "../../../assets/determinacion.png"
import compañerismo from "../../../assets/compañerismo.png"
import liderazgo from "../../../assets/liderazgo.png"


const Metodos2 = () => {

return (
    <div className='metodos2'>
      <div className='metodos2-texto'>
        <h2>Los valores son primordiales para hacer crecer un negocio</h2>
        <h1>Tenemos siempre en cuenta nuestros valores</h1>
      </div>
      <div className='metodos2-imagenestodo'>
        <div className="metodos2-imagenes1">
          <div className='metodos2-bloque'>
            <img src={apoyo} alt=""/>
            <button className='btncuadro'>Apoyo</button>
          </div>
          <div className='metodos2-bloque'>
            <img src={determinacion} alt="" className='imagenX'/>
            <button className='btncuadro'>Determinación</button>
          </div> 
        </div>
        <div className="metodos2-imagenes2">
          <div className='metodos2-bloque'>
            <img src={compañerismo} alt=""/>
            <button className='btncuadro'>Compañerismo</button>
          </div>
          <div className='metodos2-bloque'>
            <img src={liderazgo} alt="" className='imagenX'/>
            <button className='btncuadro'>Liderazgo</button>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Metodos2
