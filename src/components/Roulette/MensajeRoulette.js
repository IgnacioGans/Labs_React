import React from 'react'

export default function MensajeRoulette(dataRoulettes) {
  return (
     <div className="card" >
          <div className='card-header'>Mensaje</div>
          <div className="card-body">
              {dataRoulettes.mensaje}
          </div>
      </div>
  )
}
