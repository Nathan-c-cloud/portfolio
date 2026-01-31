import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-[var(--border)] py-8">
        <div className="container mx-auto px-4 text-center text-sm text-[var(--foreground)]/60">
          <p>© {new Date().getFullYear()} Ismaël AÏHOU. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
