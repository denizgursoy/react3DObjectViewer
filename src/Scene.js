import React from "react";
import { Canvas, extend } from 'react-three-fiber';
import Controls from "./Controls";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GridHelper } from "three";
import './styles.css'

extend({ OrbitControls, GridHelper })

function Scene(props) {
    return (
        <Canvas camera={{ position: [1, 1, -3] }}>
            <Controls enableDamping enablePan={false} dampingFactor={0.1} rotateSpeed={0.1} maxPolarAngle={Math.PI / 2} />
            <gridHelper args={[20, 20]} />
            <ambientLight intensity={5} />
            <Light brightness={10} color={"white"} />
            {props.children}
        </Canvas>
    );
}

function Light({ brightness, color }) {
    return (
      <spotLight
        width={3}
        height={3}
        color={color}
        intensity={brightness}
        position={[1, 1, -3]}
        lookAt={[0, 0, 0]}
        penumbra={4}
        castShadow
      />
    );
  }

export default Scene;