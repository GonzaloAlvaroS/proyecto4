import React from 'react'
import "./InfoEmpresa2.css"
import instalaciones from "../../../assets/instalaciones.mp4"

const InfoEmpresa2 = () => {

return (
    <div className='infoempresa2'>
      <h1>- NUESTROS INICIOS | NUESTRA TRAYECTORIA -</h1>
      <p>En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante. En The White Company ayudamos a los mejores negocios con un potencial absoluto. Tenemos la mision de apoyar a las valientes y determinadas personas que decidieron empezar un negocio con un futuro brillante, pero que no tienen los recursos o la ayuda necesaria para sacar ese negocio adelante.</p>
      <video src={instalaciones}  width={710} height={400} muted autoPlay controls></video>
      <button className='btn btnunete'>¡UNIRSE AHORA!</button>
    </div>
  )
}

export default InfoEmpresa2
