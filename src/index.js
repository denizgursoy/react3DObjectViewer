import ReactDOM from 'react-dom'
import React, { Suspense, useRef, useState } from 'react'
import { unstable_createResource as createResource } from './react-cache/index'
import { Canvas, extend, useThree, useRender } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GridHelper } from "three";
import delay from 'delay'
import './styles.css'

extend({ OrbitControls ,GridHelper})

// Creates a cached async resource
const path = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/Duck/glTF/'
const resource = createResource(file => new Promise(async res => (await delay(2000), new GLTFLoader().load(path + file, res))))

function Model({ file }) {
  // Read from cache ... this will throw an exception which will be caught by <Suspense />
  const { scene } = resource.read(file)
  // It won't come to this point until the resource has been fetched
  return <primitive object={scene} />
}

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" transparent opacity={0.5} />
    </mesh>
  )
}



function Controls(props) {
  const { camera } = useThree()
  const controls = useRef()
  useRender(() => controls.current && controls.current.update())
  return <orbitControls ref={controls} args={[camera]} {...props} />
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
