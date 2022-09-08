import React from 'react'
import DateRoulette from './DateRoulette'
import TimeServerRoulette from './TimeServerRoulette'
import TimeSorteoRoulette from './TimeSorteoRoulette'
import IdSorteoRoulette from './IdSorteoRoulette'
import MensajeRoulette from './MensajeRoulette'


export default function BoxInfoRoulette(props) {
  return (
    <div className="box-info" >
      <DateRoulette dataRoulettes={props.dataRoulettes}/>
      <TimeServerRoulette dataRoulettes={props.dataRoulettes}/>
      <TimeSorteoRoulette dataRoulettes={props.dataRoulettes}/>
      <IdSorteoRoulette dataRoulettes={props.dataRoulettes}/>
      <MensajeRoulette dataRoulettes={props.dataRoulettes}/>
    </div>
  )
}
