import React from "react";


// Creates a cached async resource
const path = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/Duck/glTF/'
const resource = createResource(file => new Promise(async res => (await delay(2000), new GLTFLoader().load(path + file, res))))

function Model(props) {
    // Read from cache ... this will throw an exception which will be caught by <Suspense />
    const { scene } = resource.read(props.file)
    // It won't come to this point until the resource has been fetched
    return <primitive object={scene} />
  }

  export default Model;