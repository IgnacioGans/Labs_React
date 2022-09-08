import React from 'react'

export default function IdSorteoRoulette(dataRoulettes) {
  return (
     <div className="card" >
          <div className='card-header'>idSorteo</div>
          <div className="card-body">
              {dataRoulettes.idSorteo}
          </div>
      </div>
  )
}
