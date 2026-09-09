'use client';

import React, { Suspense, useState, useEffect, Component, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import GalaxyParticles from './GalaxyParticles';

interface GalaxySceneProps {
  scrollProgress?: number;
}

// React Error Boundary to catch WebGL Context Creation Failures
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn('WebGL context creation failed. Switching to 2D Fallback Galaxy.', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 2D Canvas Fallback for environments where WebGL hardware acceleration is disabled
function Fallback2DGalaxy({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const particles: { x: number; y: number; r: number; color: string; speed: number; angle: number; dist: number }[] = [];
    const count = 350;
    const colors = ['#D8D2C4', '#E2C48D', '#94A17C', '#9FD8FF', '#FFFFFF'];

    for (let i = 0; i < count; i++) {
      const dist = Math.pow(Math.random(), 1.5) * (Math.min(width, height) * 0.4);
      const angle = Math.random() * Math.PI * 2;
      particles.push({
        x: 0,
        y: 0,
        r: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: (0.002 + Math.random() * 0.003) * (1 - dist / (width * 0.5)),
        angle,
        dist,
      });
    }

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + scrollProgress * 50;

      // Draw galaxy core glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, width * 0.35);
      gradient.addColorStop(0, 'rgba(226, 196, 141, 0.25)');
      gradient.addColorStop(0.4, 'rgba(148, 161, 124, 0.1)');
      gradient.addColorStop(1, 'rgba(10, 10, 8, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render 2D particles in spiral motion
      particles.forEach((p) => {
        p.angle += p.speed;
        const x = centerX + Math.cos(p.angle) * p.dist;
        const y = centerY + Math.sin(p.angle) * p.dist * 0.55;

        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrollProgress]);

  return <canvas ref={canvasRef} className="w-full h-full block bg-[#0A0A08]" />;
}

export default function GalaxyScene({ scrollProgress = 0 }: GalaxySceneProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    // Safely check WebGL availability
    const checkWebGL = () => {
      try {
        const testCanvas = document.createElement('canvas');
        const gl =
          testCanvas.getContext('webgl') ||
          testCanvas.getContext('experimental-webgl') ||
          testCanvas.getContext('webgl2');
        return !!gl && gl instanceof WebGLRenderingContext;
      } catch (e) {
        return false;
      }
    };

    setHasWebGL(checkWebGL());

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const fallbackView = <Fallback2DGalaxy scrollProgress={scrollProgress} />;

  if (hasWebGL === false) {
    return (
      <div className="relative w-full h-full min-h-[500px] pointer-events-none select-none rounded-3xl overflow-hidden">
        {fallbackView}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0A08]/40 to-[#0A0A08] pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[500px] pointer-events-none select-none">
      <WebGLErrorBoundary fallback={fallbackView}>
        <Canvas
          camera={{ position: [0, 2.5, 6.5], fov: 55, near: 0.1, far: 100 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
            alpha: true,
            failIfMajorPerformanceCaveat: false,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor('#0A0A08');
          }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <GalaxyParticles
              scrollProgress={isReducedMotion ? 0 : scrollProgress}
              mousePos={isReducedMotion ? { x: 0, y: 0 } : mousePos}
            />
            
            <EffectComposer enableNormalPass={false}>
              <Bloom
                intensity={1.2}
                luminanceThreshold={0.2}
                luminanceSmoothing={0.85}
                mipmapBlur={true}
                radius={0.7}
              />
            </EffectComposer>
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </WebGLErrorBoundary>

      {/* Depth gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0A08]/40 to-[#0A0A08] pointer-events-none" />
    </div>
  );
}
