import ReactDOM from 'react-dom'
import React, { Suspense, useState } from 'react'

import { Canvas, extend } from 'react-three-fiber'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GridHelper } from "three";

import Model from "./Model"
import Controls from "./Controls"


import './styles.css'

extend({ OrbitControls ,GridHelper})

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}






function App() {
  const [clicked, set] = useState(false)
  return (
    <>
      <Canvas camera={{ position: [-120, 100, 200] }}>
        <Controls enableDamping enablePan={false} dampingFactor={0.1} rotateSpeed={0.1} maxPolarAngle={Math.PI / 2} />
        <gridHelper args={[1000, 30]} />
        <ambientLight intensity={1} />
        <Suspense fallback={<Box />}>{clicked && <Model file="Duck.gltf" />}</Suspense>
      </Canvas>
      {!clicked && <button onClick={() => set(true)}>Load duck w/ 2s delay</button>}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
