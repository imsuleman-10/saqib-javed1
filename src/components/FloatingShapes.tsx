"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Icosahedron } from "@react-three/drei";
import type { Mesh } from "three";

function RotatingIco() {
  const ref = useRef<Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.15;
    ref.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <Icosahedron ref={ref} args={[1.1, 0]} position={[2.8, 0.5, -2]}>
      <meshStandardMaterial
        color="#00e5ff"
        wireframe
        opacity={0.35}
        transparent
        roughness={0}
        metalness={1}
      />
    </Icosahedron>
  );
}

export function FloatingShapes() {
  return (
    <>
      {/* Distorted cyan sphere */}
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.5}>
        <Sphere args={[0.9, 48, 48]} position={[-2.2, 0.2, -1]}>
          <meshStandardMaterial
            color="#00e5ff"
            roughness={0.15}
            metalness={0.9}
            opacity={0.7}
            transparent
          />
        </Sphere>
      </Float>

      {/* Wireframe icosahedron */}
      <RotatingIco />

      {/* Small purple accent sphere */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={2}>
        <Sphere args={[0.4, 24, 24]} position={[0.5, -1.8, -0.5]}>
          <meshStandardMaterial
            color="#a855f7"
            roughness={0}
            metalness={1}
            emissive="#a855f7"
            emissiveIntensity={0.4}
          />
        </Sphere>
      </Float>
    </>
  );
}
