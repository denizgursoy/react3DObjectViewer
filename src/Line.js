
import React from 'react'
import { useUpdate } from "react-three-fiber";

export default function Line(props) {
  const ref = useUpdate(geometry => {

    geometry.vertices.push(props.start);
    geometry.vertices.push(props.end);
    // geometry.setFromPoints(vertices);
    geometry.verticesNeedUpdate = true;
    // geometry.vertices.needsUpdate = true
  });

  // useFrame(() => {
  //   console.log('here')
  //   ref.current.vertices.needsUpdate = true
  // });

  return (
    <line>
      <geometry attach="geometry" ref={ref} />
      <lineBasicMaterial attach="material" color={props.color} />
    </line>
  );
}
