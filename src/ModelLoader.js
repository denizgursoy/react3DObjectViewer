import React, { Suspense } from 'react'
import Model from './Model'
import Line from './Line'
import * as THREE from "three";
function ModelLoader(props) {
  
        
    return (
        <Suspense fallback={<Box />}>
            {
         
                    <React.Fragment>

<Model {...props}   />

<Line start={new THREE.Vector3(0.5, 0, -0.3)} end={ new THREE.Vector3(0.5, 2,  -0.3)}/>

                    </React.Fragment>
             }
        </Suspense>
    );

}



function Box() {
    return (
        <mesh>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" transparent opacity={0.5} />
        </mesh>
    )
}

export default ModelLoader;