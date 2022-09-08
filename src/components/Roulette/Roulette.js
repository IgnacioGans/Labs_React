import React, { useEffect, useState } from 'react';
// import BoxInfoRoulette from './BoxInfoRoulette';
// import DateRoulette from './DateRoulette';
// import TimeServerRoulette from './TimeServerRoulette';
// import TimeSorteoRoulette from './TimeSorteoRoulette';
// import IdSorteoRoulette from './IdSorteoRoulette';
// import MensajeRoulette from './MensajeRoulette';
//import RouletteJS from './fortune.converted';
import './Roulette.css';
const Roulette = () => {

const [dataRoulettes, setDataRoulettes]= useState({});
 useEffect(()=>{
  fetch(
    "https://ca02-vm03.sagcit.com/AppsCAB/apiLucky/api/Lottery/Proximo",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'SecretKey': 'AIzaSyB3p2Wc2KztsOUFbC01egc0e8skMxlIJbo'
      }
    }
    ).then((response) => {
      if(response.ok){
        return response.json();
      }
    }).then((data) =>{
      // console.log(data)
      setDataRoulettes(data);
    
    }).catch((error) => {
      console.error('Error:', error);
    });
 })
console.log(dataRoulettes)
 return(
    <div className="Roulette">
      {/* <BoxInfoRoulette dataRoulettes={dataRoulettes}/> */}
      {/* <DateRoulette dataRoulettes={dataRoulettes}/>
      <TimeServerRoulette dataRoulettes={dataRoulettes}/>
      <TimeSorteoRoulette dataRoulettes={dataRoulettes}/>
      <IdSorteoRoulette dataRoulettes={dataRoulettes}/>
      <MensajeRoulette dataRoulettes={dataRoulettes}/> */}
      <div className="Roulette">
    <div className="card" >
          <div className='card-header'>Fecha</div>
          <div className="card-body">
              {dataRoulettes.horaServer}
          </div>
      </div>
      <div className="card" >
          <div className='card-header'>HoraServer</div>
          <div className="card-body">
              {dataRoulettes.horaServer}
          </div>
      </div>
      <div className="card" >
          <div className='card-header'>HoraSorteo</div>
          <div className="card-body">
              {dataRoulettes.horaSorteo}
          </div>
      </div>
      <div className="card" >
          <div className='card-header'>idSorteo</div>
          <div className="card-body">
              {dataRoulettes.idSorteo}
          </div>
      </div>
      <div className="card" >
          <div className='card-header'>Mensaje</div>
          <div className="card-body">
              {dataRoulettes.mensaje}
          </div>
      </div>
    </div>

    </div>
  )
};

export default Roulette;
