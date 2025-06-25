import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLBModel = ({ modelPath, position = [0, 0, 0], scale = 1 }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const gltf = useLoader(GLTFLoader, modelPath);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.003;
  });

  return (
    <group position={position}>
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  );
};

const ModelsGallery = () => {
  return (
    <div style={{ width: '100%', height: '100%', background: '#111', overflowY: 'auto' }}>
      {/* Instruction Text */}
      <div style={{
        position: 'absolute',
        top: 5,
        width: '100%',
        textAlign: 'center',
        color: 'white',
        zIndex: 1,
        fontSize: '1rem'
      }}>
        Click and drag to explore the model. Hover to zoom!
      </div>

      {/* First Model Section */}
      <div style={{ width: '50vh', height: '50vh', background: '#111' }}>
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls />
          <Suspense fallback={null}>
            <GLBModel modelPath="models/Keyboard.glb" position={[0, 0, 0]} scale={2} />
          </Suspense>
          <Html position={[0, 1.5, 0]} center>
            <div style={{
              color: 'white',
              background: 'rgba(0,0,0,0.5)',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '1rem'
            }}>
              Keyboard
            </div>
          </Html>
        </Canvas>
      </div>

      {/* Second Model Section */}
      <div style={{ width: '100vh', height: '50vh', background: '#111' }}>
        <Canvas camera={{ position: [2, 5, 20], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls />
          <Suspense fallback={null}>
            <GLBModel modelPath="models/OR_map.glb" position={[0, 0, 0]} scale={2} />
          </Suspense>
          <Html position={[0, 1.5, 0]} center>
            <div style={{
              color: 'white',
              background: 'rgba(0,0,0,0.5)',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '1rem'
            }}>
              Oregon hazard score
            </div>
          </Html>
          <Html position={[-10,10 , 0]}>
            <a href="https://media.oregonstate.edu/media/t/1_nbnh680d" target="_blank" rel="noopener noreferrer">
              <button style={{
                padding: '8px 16px',
                fontSize: '1rem',
                fontWeight: 'bold',
                backgroundColor: '#004b91',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Animation
              </button>
            </a>
          </Html>
        </Canvas>
      </div>
      {/* Third Model Section */}
<div style={{ width: '100vh', height: '50vh', background: '#111' }}>
  <Canvas camera={{ position: [2, 5, 20], fov: 50 }}>
    <ambientLight intensity={0.8} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <OrbitControls />
    <Suspense fallback={null}>
      <GLBModel modelPath="models/Fire.glb" position={[0, 0, 0]} scale={2} />
    </Suspense>
    <Html position={[0, 1.5, 0]} center>
      <div style={{
        color: 'white',
        background: 'rgba(0,0,0,0.5)',
        padding: '6px 12px',
        borderRadius: '8px',
        fontSize: '1rem'
      }}>
        Oregon fire with forest
      </div>
    </Html>
    <Html position={[-30,10 , 0]}>
            <a href="https://media.oregonstate.edu/media/t/1_vuxkg36k" target="_blank" rel="noopener noreferrer">
              <button style={{
                padding: '8px 16px',
                fontSize: '1rem',
                fontWeight: 'bold',
                backgroundColor: '#004b91',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                Animation
              </button>
            </a>
          </Html>
  </Canvas>
</div>

      
    </div>
  );
};

export default ModelsGallery;
