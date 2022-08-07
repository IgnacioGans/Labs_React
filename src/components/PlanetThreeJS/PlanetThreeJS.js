import './PlanetThreeJS.css'
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
//https://codesandbox.io/s/textureloader-rusfd?file=/src/App.js
//https://docs.pmnd.rs/react-three-fiber/tutorials/loading-textures

const name = (type) => `PavingStones092_1K_${type}.jpg`;
function Scene() {
  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    aoMap
  ] = useLoader(TextureLoader, [
    name("Color"),
    name("Displacement"),
    name("Normal"),
    name("Roughness"),
    name("AmbientOcclusion")
  ]);
  // const [
  //   colorMap,
  //   displacementMap,
  //   normalMap,
  //   roughnessMap,
  //   aoMap
  // ] = useTexture([
  //   name("Color"),
  //   name("Displacement"),
  //   name("Normal"),
  //   name("Roughness"),
  //   name("AmbientOcclusion")
  // ]);
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

const PlanetThreeJS = () => {
  
  return(
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </>
  ) 
    };

export default PlanetThreeJS;