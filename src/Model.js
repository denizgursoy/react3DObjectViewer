import React from "react";
import { unstable_createResource as createResource } from './react-cache/index'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import delay from 'delay'

// Creates a cached async resource

const resource = createResource(file => new Promise(async res => (await delay(2000), new GLTFLoader().load( file, res))))

function Model(props) {
  // Read from cache ... this will throw an exception which will be caught by <Suspense />
  const { scene } = resource.read(props.file)
  // It won't come to this point until the resource has been fetched
  scene.position.set(props.position.x,props.position.y,props.position.z)
  scene.scale.set(props.scale.x,props.scale.y,props.scale.z)
  return <primitive object={scene} onClick={props.onClick} />
}

export default Model;