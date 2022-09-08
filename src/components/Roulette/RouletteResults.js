import React,  {useEffect, useState} from 'react';
export default function RouletteResults() {
    const getApiData = async () => {
        const response = await fetch(
          "https://ca02-vm03.sagcit.com/AppsCAB/apiLucky/api/Lottery/ResultsHoy",
          // "https://ca02-vm03.sagcit.com/AppsCAB/apiLucky/api/Lottery/Proximo",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'SecretKey': 'AIzaSyB3p2Wc2KztsOUFbC01egc0e8skMxlIJbo'
            }
          }
          ).then((response) => {
            return response.json();
          });
          
          // update the state
          let getArrResultsRouletteToday = response.data
          // console.log(getArrResultsRouletteToday)
          setRoulettes(getArrResultsRouletteToday);
        };
      
      const [roulettes, setRoulettes] = useState([]);
      useEffect(() => {
        getApiData()
      }, []);
    
  return (
    <div className="RouletteResults">
      <div className="app">
        {
          roulettes.map((ro) => (
            <div key={ro.idlottery} className="item-container">
              Id:{ro.resultado} <div className="title">Title:{ro.animal}</div>
            </div>
          ))}
      </div>
    </div>
  )
}
