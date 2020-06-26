import ReactDOM from 'react-dom'
import Scene from "./Scene"
import ModelLoader from './ModelLoader'
import React from "react"

function App() {

  return (
    <>
      <Scene>
        <ModelLoader file="Duck.gltf" />
      </Scene>

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
