import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const Stars = () => {
  const myMesh = useRef<Mesh>(null!)
  useFrame(({clock}, delta) => {
    // console.log(delta)
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
