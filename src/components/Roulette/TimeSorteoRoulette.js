import React from 'react'

export default function TimeSorteoRoulette(dataRoulettes) {
  return (
     <div className="card" >
          <div className='card-header'>HoraSorteo</div>
          <div className="card-body">
              {dataRoulettes.horaSorteo}
          </div>
      </div>
  )
}
