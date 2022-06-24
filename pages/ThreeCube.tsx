import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function inSphere(buffer: any, sphereRadius: number) {
  // var _defaultSphere$sphere2 = _objectSpread2(_objectSpread2({}, defaultSphere), sphere),
  //     radius = _defaultSphere$sphere2.radius,
  //     center = _defaultSphere$sphere2.center;

  // const center = [0, 0, 0];

  for (let i = 0; i < buffer.length; i += 3) {
    const u = Math.random() ** (1 / 3);
    let x = Math.random() * 2 - 1;
    let y = Math.random() * 2 - 1;
    let z = Math.random() * 2 - 1;
    const mag = Math.sqrt(x * x + y * y + z * z);
    x = (u * x) / mag;
    y = (u * y) / mag;
    z = (u * z) / mag;

    // buffer[i] = x * sphereRadius + center[0];
    // buffer[i + 1] = y * sphereRadius + center[1];
    // buffer[i + 2] = z * sphereRadius + center[2];
    // eslint-disable-next-line no-param-reassign
    buffer[i] = x * sphereRadius;
    // eslint-disable-next-line no-param-reassign
    buffer[i + 1] = y * sphereRadius;
    // eslint-disable-next-line no-param-reassign
    buffer[i + 2] = z * sphereRadius;
  }

  return buffer;
}

const Stars = () => {
  const myMesh = useRef<Mesh>(null!)
  const [sphere] = useState(() => inSphere(new Float32Array(5000), 1.5))
  useFrame(({clock}, delta) => {
    myMesh.current.rotation.x -= delta / 10
    myMesh.current.rotation.y -= delta / 15
  })
  return(  
    <mesh ref={myMesh}>
      <boxGeometry args={[2, 2, 2]}/>
      <meshStandardMaterial />
    </mesh>
  );
}

const ThreeCube = () => (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Stars />
    </Canvas>
);

export { ThreeCube };
