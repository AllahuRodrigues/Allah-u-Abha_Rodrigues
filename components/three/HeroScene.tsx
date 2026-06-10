'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene + Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 7;

    // ── Particle cloud ──────────────────────────────────────────
    const COUNT = 2800;
    const positions = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      // Spherical distribution with varied radii
      const r = 2.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      sizes[i] = 0.018 + Math.random() * 0.022;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const pMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.025,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ── Wireframe geometries ────────────────────────────────────
    const wireMat = () =>
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.1,
      });

    const shapes: { mesh: THREE.Mesh; rx: number; ry: number; baseY: number; phase: number }[] = [
      {
        mesh: new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 1), wireMat()),
        rx: 0.18, ry: 0.28, baseY: 0.4, phase: 0,
      },
      {
        mesh: new THREE.Mesh(new THREE.OctahedronGeometry(0.75), wireMat()),
        rx: 0.30, ry: 0.18, baseY: -1.2, phase: 1.4,
      },
      {
        mesh: new THREE.Mesh(new THREE.TetrahedronGeometry(0.7), wireMat()),
        rx: 0.15, ry: 0.38, baseY: 2.2, phase: 2.6,
      },
    ];

    const positions3d = [
      [3.8, 0.4, -1.5],
      [-3.8, -1.2, -1.0],
      [0.8, 2.2, -2.5],
    ];

    shapes.forEach((s, i) => {
      s.mesh.position.set(...(positions3d[i] as [number, number, number]));
      scene.add(s.mesh);
    });

    // ── Grid plane (subtle floor) ───────────────────────────────
    const gridHelper = new THREE.GridHelper(20, 20, 0x222222, 0x111111);
    gridHelper.position.y = -4;
    (gridHelper.material as THREE.LineBasicMaterial).transparent = true;
    (gridHelper.material as THREE.LineBasicMaterial).opacity = 0.3;
    scene.add(gridHelper);

    // ── Mouse parallax ──────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ── Animation loop ──────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Particle cloud slow rotation
      particles.rotation.y = t * 0.04;
      particles.rotation.x = Math.sin(t * 0.025) * 0.08;

      // Camera subtle parallax from mouse
      camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Wireframe shapes
      shapes.forEach((s, i) => {
        s.mesh.rotation.x += s.rx * 0.016;
        s.mesh.rotation.y += s.ry * 0.016;
        s.mesh.position.y = s.baseY + Math.sin(t * 0.45 + s.phase) * 0.28;
        // Pulse opacity
        (s.mesh.material as THREE.MeshBasicMaterial).opacity =
          0.07 + Math.sin(t * 0.6 + i) * 0.04;
      });

      // Grid drift
      gridHelper.position.x = Math.sin(t * 0.05) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize ──────────────────────────────────────────────────
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      pGeo.dispose();
      pMat.dispose();
      shapes.forEach(s => {
        s.mesh.geometry.dispose();
        (s.mesh.material as THREE.Material).dispose();
      });
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
}
