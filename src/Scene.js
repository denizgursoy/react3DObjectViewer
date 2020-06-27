import React from "react";
import { Canvas, extend } from 'react-three-fiber';
import MouseControl from "./Controls";
import Light from "./Light";


import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GridHelper } from "three";
import './styles.css'

extend({ OrbitControls, GridHelper })

function Scene(props) {
    const lightBrightness=8;
    return (
      <React.Fragment>
        <Canvas camera={{ position: [1, 1, -3] }} >
            <MouseControl enableDamping enablePan={true} dampingFactor={0.1} rotateSpeed={0.1} maxPolarAngle={Math.PI / 2} />
            <gridHelper args={[20, 20]} />
            <ambientLight intensity={lightBrightness} />
            <Light brightness={lightBrightness} color={"white"} position={[1, 0.5, 0]} />
            <Light brightness={lightBrightness} color={"white"} position={[-1, 0.5, 0]}/>
            <Light brightness={lightBrightness} color={"white"} position={[0,0.5, 1]} />
            <Light brightness={lightBrightness} color={"white"} position={[0, 0.5, -1]} />
            {props.children}
           
        </Canvas>


         </React.Fragment>
    );
}



export default Scene;