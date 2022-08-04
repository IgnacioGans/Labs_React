import React, { useState } from "react";
import "./RenderComponent.css";
import Card from "../Card/Card";
import Data from "../../data/data-card.js";
const RenderComponent = () => {
  const [active, setActive] = useState("FirstCard");
  return (
    <div className="RenderComponent">
      <nav>
        <button onClick={() => setActive("FirstCard")}>One</button>
        <button onClick={() => setActive("SecondCard")}>Two</button>
        <button onClick={() => setActive("ThreeCard")}>Three</button>
      </nav>
      <div>
        {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Card data={Data} cardIndex={1} />}
        {active === "ThreeCard" && <Card data={Data} cardIndex={2} />}
      </div>
    </div>
  );

  // return (
  //   <div className='RenderComponent'>
  //     <nav>
  //       <button onClick={()=>setActive("FirstCard")}>One</button>
  //       <button onClick={()=>setActive("SecondCard")}>Two</button>
  //       <button onClick={()=>setActive("ThreeCard")}>Three</button>
  //     </nav>
  //     <div>
  //       {active === "FirstCard" && <Card title="1" />}
  //       {active === "SecondCard" && <Card title="2" />}
  //       {active === "ThreeCard" && <Card title="3" />}
  //     </div>
  //   </div>
  // );
};

export default RenderComponent;
