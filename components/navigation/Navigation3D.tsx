'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Torus, Float, Text3D, Center } from '@react-three/drei';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/constants';
import { smoothScrollTo } from '@/lib/utils';
import * as THREE from 'three';

// 3D floating objects component
function FloatingObjects() {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <Sphere 
          args={[0.3, 32, 32]} 
          position={[-1, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial 
            color={hovered ? "#8b5cf6" : "#6366f1"} 
            transparent 
            opacity={0.7}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={0.8}>
        <Box args={[0.4, 0.4, 0.4]} position={[1, 0.5, -0.5]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            transparent 
            opacity={0.6}
            roughness={0.3}
            metalness={0.7}
          />
        </Box>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={0.6}>
        <Torus args={[0.2, 0.1, 16, 32]} position={[0, -0.8, 0.5]}>
          <meshStandardMaterial 
            color="#8b5cf6" 
            transparent 
            opacity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </Torus>
      </Float>
    </group>
  );
}

// 3D Logo component
function Logo3D() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]} scale={0.8}>
      <Center>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          AR
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.2}
            metalness={0.8}
          />
        </Text3D>
      </Center>
    </group>
  );
}

export const Navigation3D = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 bg-black/80 backdrop-blur-xl border-b border-white/10' 
          : 'py-4 bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between">
        {/* 3D Logo */}
        <motion.div
          className="relative w-16 h-16"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Logo3D />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              enableRotate={true}
              autoRotate={true}
              autoRotateSpeed={1}
            />
          </Canvas>
        </motion.div>

        {/* Desktop Navigation with 3D Background */}
        <motion.div
          className="hidden md:flex items-center gap-8 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* 3D Background Canvas */}
          <div className="absolute inset-0 w-full h-full -z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.3} />
              <pointLight position={[5, 5, 5]} intensity={0.5} />
              <FloatingObjects />
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>
          
          {/* Navigation Items */}
          <div className="flex items-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 relative z-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => smoothScrollTo(item.href.slice(1))}
                className="relative text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative z-20 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 mt-2 mx-4 p-6 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 md:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              {/* Mobile 3D Background */}
              <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden -z-10">
                <Canvas camera={{ position: [0, 0, 3], fov: 90 }}>
                  <ambientLight intensity={0.2} />
                  <pointLight position={[3, 3, 3]} intensity={0.3} />
                  <FloatingObjects />
                  <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={0.3}
                  />
                </Canvas>
              </div>
              
              <div className="flex flex-col gap-4 relative z-10">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => {
                      smoothScrollTo(item.href.slice(1));
                      setIsOpen(false);
                    }}
                    className="text-left text-white hover:text-purple-400 transition-colors font-medium p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}; 