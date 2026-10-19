import { Metadata } from 'next';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Anuroshan B | Software Developer Portfolio - MERN & Mobile',
  description: 'Explore the portfolio of Anuroshan B, Software Developer with 3.5 years of experience in MERN stack, React Native, Next.js, and Node.js with scalable enterprise organization projects.',
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
