import React, { Suspense, Fragment } from 'react'
import Model from './Model'


function ModelLoader(props) {


    return (
        <Suspense fallback={<Box />}>
            {
                <Fragment>
                    <Model {...props} />
            
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