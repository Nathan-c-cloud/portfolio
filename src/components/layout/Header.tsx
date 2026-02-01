'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import Container from '../ui/Container';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section - completely new simplified logic
      const sections = navItems.map(item => item.href.substring(1));

      // If we're at the very top of the page, no section is active
      if (window.scrollY < 50) {
        setActiveSection('');
        return;
      }

      // Find which section is currently most visible in viewport
      let currentSection = '';

      // Loop through sections in reverse order (bottom to top)
      // This ensures we get the last section that's above the fold
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section top has passed the top of viewport (with offset)
          if (rect.top <= 100) {
            currentSection = section;
            break; // Found the active section, stop looking
          }
        }
      }

      // Always update (no condition)
      setActiveSection(currentSection);
    };

    // Run once on mount
    handleScroll();

    // Add scroll listener with throttling for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-[var(--background)]/60 backdrop-blur-xl border-b border-[var(--border)]/50 shadow-lg shadow-[var(--accent-primary)]/5'
          : 'bg-transparent'
      )}
      style={isScrolled ? {
        boxShadow: '0 8px 32px 0 rgba(14, 165, 233, 0.05)',
      } : undefined}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-display font-bold text-gradient hover:scale-105 transition-transform"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  activeSection === item.href.substring(1)
                    ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                    : 'text-[var(--foreground)] hover:text-[var(--accent-primary)] hover:bg-[var(--surface)]'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-[var(--surface)] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={cn(
                    'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                    activeSection === item.href.substring(1)
                      ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
                      : 'text-[var(--foreground)] hover:text-[var(--accent-primary)] hover:bg-[var(--surface)]'
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
