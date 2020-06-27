import ReactDOM from 'react-dom'
import Scene from "./Scene"
import ModelLoader from './ModelLoader'
import React from "react"

function App() {

  return (
    <>
      <Scene>
        <ModelLoader file="scene.gltf"   onClick={() =>console.log("deniz")} />
      </Scene>

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
