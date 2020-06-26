
import React from 'react'
import * as THREE from "three";
import { Canvas, useUpdate, useFrame } from "react-three-fiber";

export default function Line(props) {
    const ref = useUpdate(geometry => {
      console.log(geometry);
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
        <lineBasicMaterial attach="material" color="blue" />
      </line>
    );
  }
