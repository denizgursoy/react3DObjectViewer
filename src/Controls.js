import React, { useRef } from "react";
import { useThree, useFrame } from 'react-three-fiber'

function Controls(props) {
  const { camera } = useThree()
  const controls = useRef()
  useFrame(() => controls.current && controls.current.update())
  return <orbitControls ref={controls} args={[camera]} {...props} />
}

export default Controls


