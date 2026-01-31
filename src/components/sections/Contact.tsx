'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-[var(--foreground)]/70">
              I'm always open to new opportunities and collaborations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <motion.a
              href="mailto:ismael.aihou@groupe-esigelec.org"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-all cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10">
                <Mail className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </motion.a>

            <motion.a
              href="www.linkedin.com/in/ismael-aihou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-all cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10">
                <Linkedin className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/Nathan-c-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-all cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10">
                <Github className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </motion.a>

            <motion.a
              href="/cv.pdf"
              download
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-all cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-3 rounded-lg bg-[var(--accent-primary)]/10">
                <Download className="w-6 h-6 text-[var(--accent-primary)]" />
              </div>
              <span className="text-sm font-medium">CV</span>
            </motion.a>
          </div>

          <div className="pt-8">
            <Button variant="primary" size="lg" href="mailto:ismael.aihou@groupe-esigelec.org">
              Send a Message
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
