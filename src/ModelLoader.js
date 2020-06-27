import React, { Suspense, Fragment } from 'react'
import Model from './Model'
import Dimention from './Dimention'
import * as THREE from "three";
function ModelLoader(props) {


    return (
        <Suspense fallback={<Box />}>
            {

                <Fragment>
                    <Model {...props} />
                    <Dimention start={new THREE.Vector3(0.3, 0,  -0.35)} objectHeight={2} objectWidth={1} objectDepth={1} />
                </Fragment>

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