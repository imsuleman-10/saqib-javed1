"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, type ReactNode } from "react";
import { Stars, PerspectiveCamera } from "@react-three/drei";

interface Props {
  children?: ReactNode;
  cameraPos?: [number, number, number];
}

export default function ThreeDScene({ children, cameraPos = [0, 0, 5] }: Props) {
  return (
    <div className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
      <Canvas
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPos} />
          <ambientLight intensity={0.4} />
          <pointLight position={[8, 8, 8]} intensity={0.8} />
          <Stars
            radius={80}
            depth={40}
            count={3000}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
          />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
