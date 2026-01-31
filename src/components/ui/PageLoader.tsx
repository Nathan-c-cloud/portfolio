'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  top: number;
  left: number;
  color: string;
  delay: number;
}

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showInitials, setShowInitials] = useState(true);
  const [showFullName, setShowFullName] = useState(false);
  const [displayedName, setDisplayedName] = useState('');

  const fullName = 'Ismaël AÏHOU';

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatch
    setIsMounted(true);
    const generatedParticles: Particle[] = [...Array(6)].map((_, i) => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      color: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
      delay: i * 0.3,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Phase 1: Show initials (0-1200ms)
    const initialsTimer = setTimeout(() => {
      setShowInitials(false);
      setShowFullName(true);
    }, 1200);

    // Phase 2: Typing animation (1200-2800ms)
    const startTyping = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setDisplayedName(fullName.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80); // 80ms per character

      return () => clearInterval(typingInterval);
    }, 1200);

    // Phase 3: End animation (3500ms total)
    const endTimer = setTimeout(() => {
      setIsLoading(false);

      setTimeout(() => {
        setIsVisible(false);
        // Restore scrolling when animation completes
        document.body.style.overflow = 'unset';
      }, 800);
    }, 3500);

    return () => {
      clearTimeout(initialsTimer);
      clearTimeout(startTyping);
      clearTimeout(endTimer);
      // Always restore scrolling on cleanup
      document.body.style.overflow = 'unset';
    };
  }, [fullName]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[var(--background)]"
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.3), transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.3), transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.3), transparent 50%)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Main content */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Phase 1: Initials with multiple animation layers */}
            <AnimatePresence>
              {showInitials && (
                <motion.div
                  className="relative"
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-3xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4), rgba(245, 158, 11, 0.4))',
                      width: '200px',
                      height: '200px',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Middle glow ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-2xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(14, 165, 233, 0.6), rgba(245, 158, 11, 0.6))',
                      width: '150px',
                      height: '150px',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />

                  {/* Initials */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="relative z-10"
                  >
                    <motion.h1
                      className="text-8xl md:text-9xl font-display font-bold text-gradient-animated"
                      animate={{
                        textShadow: [
                          '0 0 20px rgba(14, 165, 233, 0.5)',
                          '0 0 40px rgba(245, 158, 11, 0.5)',
                          '0 0 20px rgba(14, 165, 233, 0.5)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      IA
                    </motion.h1>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase 2: Full name typing animation */}
            <AnimatePresence>
              {showFullName && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.1, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-animated text-center">
                    {displayedName}
                    <motion.span
                      className="inline-block w-1 h-12 md:h-16 lg:h-20 ml-2 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <p className="text-sm md:text-base text-[var(--foreground)]/60 font-medium tracking-wider uppercase">
                Loading Portfolio
              </p>

              {/* Animated loading bar */}
              <div className="w-48 h-1 bg-[var(--border)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                  }}
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>

            {/* Floating particles - only render on client to avoid hydration mismatch */}
            {isMounted && particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: particle.color,
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
