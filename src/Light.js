import React from "react"

export default function Light({ brightness, color,position }) {


    return (
      <directionalLight    
        width={0.2}
        height={0.2}
        color={color}
        intensity={brightness}
        position={position}
        lookAt={[0, 0, 0]}
        penumbra={0.2}
        castShadow
      />
    );
  }