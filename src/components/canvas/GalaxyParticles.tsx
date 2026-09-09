'use client';

import React, { useMemo, useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { galaxyVertexShader, galaxyFragmentShader } from '@/shaders/galaxyShaders';

interface GalaxyParticlesProps {
  scrollProgress?: number;
  mousePos?: { x: number; y: number };
}

export default function GalaxyParticles({ scrollProgress = 0, mousePos = { x: 0, y: 0 } }: GalaxyParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const count = 14000; // Particle count (8,000 - 15,000 range)
  const branches = 4;   // 4 Logarithmic spiral arms
  const radius = 6.5;   // Radius of galaxy

  const { positions, colors, randomness, scales } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const randomness = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    // Warm & Cool palette
    const colorInsideWarm = new THREE.Color('#E2C48D'); // Warm golden beige
    const colorInsideOlive = new THREE.Color('#94A17C'); // Accent olive
    const colorOutsideCool = new THREE.Color('#9FD8FF'); // Deep glow blue
    const colorCoreWhite = new THREE.Color('#FFFFFF');   // Core bright star

    for (let i = 0; i < count; i++) {
      // Position along spiral arm
      const r = Math.pow(Math.random(), 1.6) * radius;
      const spinAngle = r * 1.4;
      const branchAngle = ((i % branches) / branches) * Math.PI * 2;

      const randomX = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * r);
      const randomY = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * r);
      const randomZ = (Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.5 * r);

      const x = Math.cos(branchAngle + spinAngle) * r;
      const y = (Math.random() - 0.5) * 0.3 * (1.2 - r / radius);
      const z = Math.sin(branchAngle + spinAngle) * r;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      randomness[i * 3] = randomX;
      randomness[i * 3 + 1] = randomY;
      randomness[i * 3 + 2] = randomZ;

      // Color interpolation: Core is warm/white, edges are deep cool blue
      const mixedColor = colorInsideWarm.clone();
      const ratio = r / radius;

      if (ratio < 0.2) {
        mixedColor.lerp(colorCoreWhite, 0.7);
      } else if (ratio < 0.55) {
        mixedColor.lerp(colorInsideOlive, (ratio - 0.2) / 0.35);
      } else {
        mixedColor.lerp(colorOutsideCool, (ratio - 0.55) / 0.45);
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      // Scale variation
      scales[i] = Math.random() * 0.8 + 0.4;
    }

    return { positions, colors, randomness, scales };
  }, [count, branches, radius]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uResolution: { value: new THREE.Vector2(1000, 1000) },
      uPixelRatio: { value: 1 },
      uSize: { value: 34.0 },
      uScroll: { value: 0 },
    }),
    []
  );

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    }
  }, []);

  const mouseLerp = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (materialRef.current) {
      // Time uniform update
      materialRef.current.uniforms.uTime.value += delta;

      // Smooth mouse position lerping
      mouseLerp.current.x += (mousePos.x - mouseLerp.current.x) * 0.05;
      mouseLerp.current.y += (mousePos.y - mouseLerp.current.y) * 0.05;

      materialRef.current.uniforms.uMouse.value.set(
        mouseLerp.current.x,
        mouseLerp.current.y
      );

      // Scroll progress uniform
      materialRef.current.uniforms.uScroll.value = scrollProgress;
    }

    if (pointsRef.current) {
      // Idle rotation & subtle tilt breathing
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.04 + scrollProgress * 0.8;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.08 - scrollProgress * 0.3;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-aRandomness"
          args={[randomness, 3]}
        />
        <bufferAttribute
          attach="attributes-aScale"
          args={[scales, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={galaxyVertexShader}
        fragmentShader={galaxyFragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
