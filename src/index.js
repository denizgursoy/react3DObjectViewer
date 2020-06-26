import ReactDOM from 'react-dom'
import React, { Suspense, useState } from 'react'


import Model from "./Model"

import Scene from "./Scene"

import './styles.css'



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
      <Scene camera={{ position: [-120, 100, 200] }}>
        <Suspense fallback={<Box />}>{clicked && <Model file="Duck.gltf" />}</Suspense>
      </Scene>
      {!clicked && <button onClick={() => set(true)}>Load duck w/ 2s delay</button>}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
