import React from "react";
import { Canvas, extend } from 'react-three-fiber';
import Controls from "./Controls";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GridHelper } from "three";
import './styles.css'

extend({ OrbitControls ,GridHelper})

function Scene (props){
    return(
        <Canvas camera={{ position: [-120, 100, 200] }}>
        <Controls enableDamping enablePan={false} dampingFactor={0.1} rotateSpeed={0.1} maxPolarAngle={Math.PI / 2} />
        <gridHelper args={[1000, 30]} />
        <ambientLight intensity={1} />
        {props.children}
      </Canvas>
    );
}

export default Scene;