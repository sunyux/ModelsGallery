import React from 'react';
import ModelsGallery from './components/ModelsGallery';

function App() {
  return (
    <div style={{ height: '100%', backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
      <div style={{ position: 'absolute', top: 20, width: '100%', zIndex: 1 }}>
        <h1 style={{ fontSize: '2rem' }}>🧠 Yuxin's 3D Gallery</h1>
      </div>
      <ModelsGallery />
    </div>
  );
}

export default App;

