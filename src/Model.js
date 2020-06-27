import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


function Model(props) {
  console.log(props);
  const gltf = useLoader(GLTFLoader, props.file);
  
  const primitiveProps = {

    object: gltf.scene,
    position: props.position || [0, 0, 0],
    rotation: props.rotation || [0, 0, 0],
    scale: props.scale || [1, 1, 1],
    castShadow: true,
  };
  return <primitive {...primitiveProps} />;
}

export default Model;