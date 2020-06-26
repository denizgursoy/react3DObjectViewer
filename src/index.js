import ReactDOM from 'react-dom'
import React, { Suspense, useState } from 'react'

import Model from "./Model"
import Scene from "./Scene"



function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}

function App() {
  const [clicked, set] = useState(true)
  return (
    <>
      <Scene>
        <Suspense fallback={<Box />}>{clicked && <Model file="Duck.gltf" />}</Suspense>
      </Scene>

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
