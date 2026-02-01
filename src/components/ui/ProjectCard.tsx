'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Github, Code2, Server, Cloud, Database } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    production: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    development: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    archived: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
  };

  const statusLabels = {
    production: '🟢 Production',
    development: '🔵 In Development',
    archived: '⚪ Archived',
  };

  const categoryIcons = {
    frontend: <Code2 className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    cloud: <Cloud className="w-4 h-4" />,
    database: <Database className="w-4 h-4" />,
    devops: <Cloud className="w-4 h-4" />,
  };

  // Merge all stacks
  const allStack = Object.entries(project.stack).flatMap(([category, techs]) =>
    techs.map(tech => ({ category, tech }))
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <div className="relative h-full rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden group">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.1), transparent 50%)',
            }}
          />
        </div>

        {/* Header avec image/placeholder */}
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[var(--accent-primary)]/20 via-[var(--accent-secondary)]/20 to-transparent">
          {/* Pattern de fond */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Effet de glow */}
          <motion.div
            className="absolute inset-0"
            animate={isHovered ? {
              background: [
                'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.2), transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.2), transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.2), transparent 50%)',
              ],
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <motion.span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                ⭐ Featured
              </motion.span>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm ${statusColors[project.status]}`}>
              {statusLabels[project.status]}
            </span>
          </div>

          {/* Central icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-7xl font-bold text-gradient opacity-20 font-mono"
              animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.title.charAt(0)}
            </motion.div>
          </div>

          {/* Overlay au survol avec boutons - Toujours visible sur mobile, hover sur desktop */}
          <div
            className={`absolute inset-0 bg-[var(--background)]/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity duration-300 z-30
              opacity-100 md:opacity-0 ${isHovered ? 'md:!opacity-100' : ''}`}
          >
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white shadow-lg hover:shadow-[var(--accent-primary)]/50 transition-all hover:scale-110"
                aria-label="View live demo"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[var(--surface)] border-2 border-[var(--border)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] shadow-lg transition-all hover:scale-110"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-5 space-y-3">
          {/* Title */}
          <div>
            <h3 className="text-xl font-display font-bold mb-1.5 group-hover:text-gradient transition-all">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--foreground)]/60 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Stack Technique */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[var(--foreground)]/50 uppercase tracking-wider">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {allStack.slice(0, 6).map(({ category, tech }, idx) => (
                <motion.div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--background)] border border-[var(--border)] text-xs font-medium group/tag hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-[var(--accent-primary)]">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </span>
                  {tech}
                </motion.div>
              ))}
              {allStack.length > 6 && (
                <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-medium">
                  +{allStack.length - 6}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Effet de bordure brillante au survol */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.3), transparent)',
            backgroundSize: '200% 100%',
          }}
          animate={isHovered ? {
            backgroundPosition: ['200% 0%', '-200% 0%'],
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
