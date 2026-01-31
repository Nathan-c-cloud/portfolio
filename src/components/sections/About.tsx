'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Container from '../ui/Container';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Photo */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl rotate-6"></div>
              <div className="relative bg-[var(--surface)] rounded-2xl overflow-hidden -rotate-3 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/images/profile/photo.jpeg"
                  alt="Professional photo"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-display font-bold mb-4"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 text-[var(--foreground)]/80 leading-relaxed"
            >
              <p>
                Final year engineering student and apprentice at Asystem, I design and
                deploy complete solutions, from front-end to cloud infrastructure.
              </p>
              <p>
                I actively create projects that combine technical innovation and
                user value. Each project is an opportunity to explore
                new technologies and solve real-world problems.
              </p>
              <p>
                My goal: to evolve towards <span className="text-gradient font-semibold">DevOps Engineer</span> or{' '}
                <span className="text-gradient font-semibold">Cloud Architect</span> roles where
                I can design robust, scalable and elegant systems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
