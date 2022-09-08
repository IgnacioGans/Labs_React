import React from 'react'

export default function DateRoulette(dataRoulettes) {
  let date = dataRoulettes;
  return (
    <div className="card" >
          <div className='card-header'>Fecha</div>
          <div className="card-body">
              {date}
          </div>
      </div>
  )
}
