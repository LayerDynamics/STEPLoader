// /src/STEP.tsx
// /src/STEP.tsx
import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { createThreeGeometry } from './createThreeGeometry';
import { parseStepFile, StepData } from './parseSTEP';

interface STEPProps {
  url: string;
  materialProps?: THREE.MeshStandardMaterialParameters;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const STEP: React.FC<STEPProps> = ({ url, materialProps, position, rotation, scale }) => {
  const stepData = useLoader(THREE.FileLoader, url, (loader) => {
    loader.setResponseType('text');
  }) as string;

  const parsedData = useMemo<StepData>(() => parseStepFile(stepData), [stepData]);

  const geometry = useMemo(() => {
    const bufferGeometry = createThreeGeometry(parsedData);
    return bufferGeometry;
  }, [parsedData]);

  const material = useMemo(() => new THREE.MeshStandardMaterial(materialProps), [materialProps]);

  return (
    <mesh geometry={geometry} material={material} position={position} rotation={rotation} scale={scale}>
      {/* Add any additional child components or properties */}
    </mesh>
  );
};

export default STEP;
