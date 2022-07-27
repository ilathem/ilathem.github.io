import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import React, { Component, ReactElement, useRef } from 'react';

interface StarsRef {
  Rotate: () => void
}

function RotatingStars():ReactElement  {
  const ref = useRef<StarsRef>(null);
  function Rotate(ref: React.RefObject<any>, delta: number) {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  };
  useFrame((state, delta) => {
      // ref.current.rotation.x -= delta / 10;
      // ref.current.rotation.y -= delta / 15;
      if (ref.current) {
        ref.current.Rotate();
      }
  });
  return (
   <Stars ref={ref} fade /> 
  );
}

function Wrapper():ReactElement {
  return (
    <Canvas>
      <RotatingStars />
    </Canvas>
  );
}

export default Wrapper;