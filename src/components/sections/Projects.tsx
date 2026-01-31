'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '@/lib/data/projects';

export default function Projects() {

  return (
    <section id="projects" className="py-20 md:py-32 bg-[var(--surface)]/30">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-sm text-[var(--accent-primary)] font-medium"
            >
              💼 Portfolio
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-display font-bold">
              My Projects
            </h2>

            <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
              A selection of projects demonstrating my Full Stack development,
              Cloud architecture and DevOps skills
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {/* Empty State */}
          {projects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-lg text-[var(--foreground)]/60">
                Projects coming soon...
              </p>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
