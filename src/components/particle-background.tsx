"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Particles() {
  const particlesRef = useRef<THREE.InstancedMesh>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hovered, setHovered] = useState(false);

  const mousePosition = useRef({ x: 0, y: 0 });

  // Create particles data
  const particlesData = useMemo(() => {
    const count = 1500;
    const particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 30,
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
        ),
        color: new THREE.Color(
          Math.random() > 0.5
            ? `hsl(${263 + Math.random() * 20}, 70%, ${50 + Math.random() * 20}%)` // Purple
            : Math.random() > 0.5
              ? `hsl(${189 + Math.random() * 10}, 94%, ${45 + Math.random() * 15}%)` // Cyan
              : `hsl(${326 + Math.random() * 10}, 100%, ${50 + Math.random() * 15}%)`, // Pink
        ),
        scale: Math.random() * 0.5 + 0.3,
      });
    }

    return particles;
  }, []);

  // Mouse move handler
  useMemo(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation loop
  useFrame((state) => {
    if (!particlesRef.current) return;

    const time = state.clock.getElapsedTime();
    const dummy = new THREE.Object3D();

    particlesData.forEach((particle, i) => {
      // Update particle position
      particle.position.add(particle.velocity);

      // Bounce particles at boundaries
      if (Math.abs(particle.position.x) > 25) particle.velocity.x *= -1;
      if (Math.abs(particle.position.y) > 25) particle.velocity.y *= -1;
      if (Math.abs(particle.position.z) > 15) particle.velocity.z *= -1;

      // Mouse interaction
      const distance = particle.position.distanceTo(
        new THREE.Vector3(
          mousePosition.current.x * 10,
          mousePosition.current.y * 10,
          0,
        ),
      );

      if (distance < 5) {
        const force = (5 - distance) / 5;
        particle.position.x +=
          (particle.position.x - mousePosition.current.x * 10) * force * 0.02;
        particle.position.y +=
          (particle.position.y - mousePosition.current.y * 10) * force * 0.02;
      }

      // Wave motion
      const wave = Math.sin(time + i * 0.1) * 0.3;

      dummy.position.set(
        particle.position.x,
        particle.position.y + wave,
        particle.position.z,
      );

      dummy.scale.set(particle.scale, particle.scale, particle.scale);
      dummy.rotation.x = time * 0.5;
      dummy.rotation.y = time * 0.3;

      dummy.updateMatrix();
      if (particlesRef.current) {
        particlesRef.current.setMatrixAt(i, dummy.matrix);
        particlesRef.current.setColorAt(i, particle.color);
      }
    });

    if (particlesRef.current) {
      particlesRef.current.instanceMatrix.needsUpdate = true;
      if (particlesRef.current.instanceColor) {
        particlesRef.current.instanceColor.needsUpdate = true;
      }
    }
  });

  return (
    <instancedMesh
      ref={particlesRef}
      args={[undefined, undefined, particlesData.length]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial
        emissive="#ffffff"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </instancedMesh>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const { positions, colors } = useMemo(() => {
    const lineCount = 100;
    const positions = new Float32Array(lineCount * 6);
    const colors = new Float32Array(lineCount * 6);

    for (let i = 0; i < lineCount; i++) {
      const idx = i * 6;

      // Random start point
      positions[idx] = (Math.random() - 0.5) * 40;
      positions[idx + 1] = (Math.random() - 0.5) * 40;
      positions[idx + 2] = (Math.random() - 0.5) * 20;

      // Random end point
      positions[idx + 3] = (Math.random() - 0.5) * 40;
      positions[idx + 4] = (Math.random() - 0.5) * 40;
      positions[idx + 5] = (Math.random() - 0.5) * 20;

      // Color gradient (purple to cyan)
      const color = Math.random();
      if (color > 0.5) {
        colors[idx] = 0.54;
        colors[idx + 1] = 0.36;
        colors[idx + 2] = 0.96; // Purple
        colors[idx + 3] = 0.02;
        colors[idx + 4] = 0.71;
        colors[idx + 5] = 0.83; // Cyan
      } else {
        colors[idx] = 0.02;
        colors[idx + 1] = 0.71;
        colors[idx + 2] = 0.83; // Cyan
        colors[idx + 3] = 0.93;
        colors[idx + 4] = 0.28;
        colors[idx + 5] = 0.6; // Pink
      }
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (!linesRef.current) return;
    linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <lineBasicMaterial vertexColors transparent opacity={0.2} />
    </lineSegments>
  );
}

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#06b6d4"
        />

        <Particles />
        <ConnectionLines />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
