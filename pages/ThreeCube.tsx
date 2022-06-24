import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'

const ThreeCube = () => (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]}/>
        <meshStandardMaterial />
      </mesh>
    </Canvas>
);

export { ThreeCube };
