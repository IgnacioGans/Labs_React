import './PlanetThreeJS.css'
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import EarthColor from "./../../Img/PlanetEarth/remking_layersEarthColor.jpg"
import EarthBgBlack from "./../../Img/PlanetEarth/remking_layersEarthBgBlack.jpg"
import EarthBgWhite from "./../../Img/PlanetEarth/remking_layersEarthBgWhite.jpg"
//https://codesandbox.io/s/textureloader-rusfd?file=/src/App.js
//https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures

function Scene() {
  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    aoMap
  ] = useLoader(TextureLoader, [
    EarthColor,
    EarthBgBlack,
    EarthBgWhite,
  ]);
  return (
    <> 
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial
          displacementScale={0.2}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
}

const PlanetEarthThreeJS = () => {
  return(
    <>
    <div className='rk-box-canva'>
      <Canvas camera={{ fov: 35, zoom: 1.3, near: 1, far: 1000 }}>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </div>
    </>
  ) 
};

export default PlanetEarthThreeJS;