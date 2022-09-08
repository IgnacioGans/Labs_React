import React from 'react'

export default function TimeServerRoulette(dataRoulettes) {
  return (
    <div className="card" >
        <div className='card-header'>HoraServer</div>
        <div className="card-body">
            {dataRoulettes.horaServer}
        </div>
    </div>
  )
}
