import React from 'react'
import "./Servicio4.css"
import instalaciones from "../../assets/instalaciones.mp4"

const Servicio4 = () => {

return (
    <div className='servicio4'>
      <h1>-NO PIERDAS LA OPORTUNIDAD DE CRECER-</h1>
      <video src={instalaciones}  width={710} height={400} muted autoPlay controls></video>
      <button className='btn btnunete'>¡UNIRSE AHORA!</button>
    </div>
  )
}

export default Servicio4
