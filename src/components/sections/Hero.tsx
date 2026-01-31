'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-[var(--accent-secondary)]/5" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-secondary)]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center space-y-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm cursor-default shadow-lg hover:shadow-[var(--accent-primary)]/20 transition-shadow"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                <span className="animate-pulse relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/50"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              <span className="block text-[var(--foreground)]">Ismaël AÏHOU</span>
              <span className="block text-gradient-animated mt-2">Full Stack Engineer | DevOps & Cloud</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[var(--foreground)]/70 max-w-3xl mx-auto font-body">
              <span className="text-base sm:text-lg text-[var(--foreground)]/60">
                Building and deploying complete solutions, from concept to production
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button variant="primary" size="lg" href="#projects">
              View My Projects
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <motion.a
              href="https://github.com/Nathan-c-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all group relative overflow-hidden"
              aria-label="GitHub"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-[var(--accent-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Github className="w-5 h-5 relative z-10" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ismael-aihou"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all group relative overflow-hidden"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-[var(--accent-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Linkedin className="w-5 h-5 relative z-10" />
            </motion.a>
            <motion.a
              href="/cv.pdf"
              download
              className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all group relative overflow-hidden"
              aria-label="Download CV"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-[var(--accent-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Download className="w-5 h-5 relative z-10" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="cursor-pointer"
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown className="w-6 h-6 text-[var(--foreground)]/50" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
