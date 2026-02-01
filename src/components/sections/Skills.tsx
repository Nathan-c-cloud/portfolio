'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { skillsByCategory, categoryInfo } from '@/lib/data/skills';
import { deviconClasses, techColors } from '@/lib/data/techIcons';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // All skills or filtered by category
  const displayedSkills = selectedCategory
    ? skillsByCategory[selectedCategory as keyof typeof skillsByCategory]
    : Object.values(skillsByCategory).flat();

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-secondary)]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/20 text-sm text-[var(--accent-secondary)] font-medium"
            >
              Skills
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Tech Stack
            </h2>

            <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
              A complete ecosystem of technologies to build robust and scalable solutions
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg'
                  : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)]/70 hover:border-[var(--accent-primary)]'
              }`}
            >
              View All ({Object.values(skillsByCategory).flat().length})
            </motion.button>
            {Object.entries(categoryInfo).map(([key, info]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === key
                    ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg'
                    : 'bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)]/70 hover:border-[var(--accent-primary)]'
                }`}
              >
                {info.title}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid - Uniform display */}
          <motion.div
            key={selectedCategory || 'all'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4"
          >
            {displayedSkills.map((skill, index) => {
              const iconClass = deviconClasses[skill];
              const techColor = techColors[skill] || 'var(--accent-primary)';

              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                    type: 'spring',
                  }}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="relative group"
                >
                  <div
                    className="h-full p-4 rounded-2xl bg-[var(--surface)] border-2 border-[var(--border)] hover:border-transparent transition-all cursor-default flex flex-col items-center justify-center gap-3 min-h-[120px] relative overflow-hidden"
                    style={{
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                  >
                    {/* Glow effect - Multiple layers for more depth */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{
                        background: `radial-gradient(circle at center, ${techColor}20, transparent 70%)`,
                        filter: 'blur(20px)',
                      }}
                    />

                    {/* Border glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        boxShadow: `0 0 30px ${techColor}60, 0 0 60px ${techColor}30, inset 0 0 20px ${techColor}10`,
                      }}
                    />

                    {/* Shine effect - traversing animation */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(45deg, transparent 30%, ${techColor}20 50%, transparent 70%)`,
                        transform: 'translateX(-100%)',
                        animation: 'shine 1.5s ease-in-out',
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-2 w-full">
                      {/* Devicon icon with glow */}
                      <div className="flex items-center justify-center relative">
                        <i
                          className={`${iconClass} transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-2xl`}
                          style={{
                            fontSize: '2.5rem',
                            filter: 'brightness(1) contrast(1)',
                          }}
                        />
                        {/* Glow behind icon */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                          style={{
                            background: `radial-gradient(circle, ${techColor}80, transparent 60%)`,
                            transform: 'scale(1.5)',
                          }}
                        />
                      </div>

                      {/* Technology name */}
                      <p
                        className="font-medium text-xs transition-all duration-300 leading-tight"
                        style={{
                          color: 'var(--foreground)',
                        }}
                      >
                        {skill}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
