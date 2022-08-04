import { Outlet} from "react-router-dom";
import './App.css';
import NavigationReact from './components/NavigationReact/NavigationReact';
// import AppBarMaterialUI from './components/AppBarMaterialUI/AppBarMaterialUI';
// import PageOne from './components/PageOne/PageOne.js';
// import PageTwo from './components/PageTwo/PageTwo.js';
// import PageThree from './components/PageThree/PageThree.js';
// import ClassRk from './components/ClassRk/ClassRk.js';
// import FunctionRk from './components/FunctionRk/FunctionRk.js';
// import HelloWorldRk from './components/HelloWorldRk/HelloWorldRk.js';
// import Chosen from './components/Chosen/Chosen.js';
// import RenderComponent from './components/RenderComponent/RenderComponent.js';
// import MaterialUI from './components/MaterialUI/MaterialUI';
// import SurveysReact from './components/SurveysReact/SurveysReact';
// import PracticeReact from './components/PracticeReact/PracticeReact';


function App() {
  return (
    <>
      <div className="container pt-5">
        <NavigationReact/> 
        <Outlet />
      </div>
    </>
  );
}
export default App;
