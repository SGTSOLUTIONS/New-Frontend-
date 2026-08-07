// Home.jsx
import React, { useEffect, useRef } from 'react';
import * as Cesium from 'cesium';

const Home = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    // Set your Cesium Ion access token
    Cesium.Ion.defaultAccessToken = 'YOUR_ION_TOKEN_HERE';
    
    const viewer = new Cesium.Viewer(viewerRef.current, {
      animation: false,
      timeline: false,
      baseLayerPicker: true,
      imageryProvider: new Cesium.IonImageryProvider({ assetId: 2 }), // Bing Maps imagery
      terrainProvider: new Cesium.createWorldTerrain(),
    });

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        80.2707,
        13.0827,
        3000
      ),
    });

    return () => {
      if (!viewer.isDestroyed()) {
        viewer.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{ width: '100%', height: '100vh' }}
    />
  );
};

export default Home;