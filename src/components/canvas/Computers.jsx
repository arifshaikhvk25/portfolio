import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ mobileResponsive }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  // console.log(computer);

  return (
    <mesh>
      {/* <hemisphereLight intensity={1} groundColor="green" /> */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, -10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={mobileResponsive ? 0.4 : 0.55}
        position={mobileResponsive ? [0, -4, -1.1] : [0, -3.9, -1.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [mobileResponsive, setmobileResponsive] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 500px)");
    setmobileResponsive(mobileMediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setmobileResponsive(event.matches);
    };
    mobileMediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotation={[-3.71, -16.2, -1.0]}
        />
        <Computers mobileResponsive={mobileResponsive} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
// export default Computers;
