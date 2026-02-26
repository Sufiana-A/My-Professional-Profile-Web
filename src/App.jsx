import React from "react";
import AsteroidBackground from "./AsteroidBackground";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
    <div className="relative min-h-screen text-white">
      {/* Background tetap menutupi semua */}
      <AsteroidBackground />

      {/* Header di atas background */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Konten yang bisa di-scroll */}
      <main className="relative z-10 scroll-smooth pt-16 md:pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[70vh] flex items-center justify-center pt-8 md:pt-0"
        >
          <Hero />
        </section>

        {/* About Section - HAPUS negative margin */}
        <section
          id="about"
          className="scroll-mt-20 md:scroll-mt-24 pt-8 md:pt-16"
        >
          <About />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="flex flex-col justify-start px-6 md:px-20 scroll-mt-20 md:scroll-mt-24 pt-8 md:pt-16 pb-10"
        >
          <Skills />
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          className="px-6 md:px-20 scroll-mt-20 md:scroll-mt-24 pt-8 md:pt-16 pb-16"
        >
          <Projects />
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="px-6 md:px-20 scroll-mt-20 md:scroll-mt-24 pt-8 md:pt-16 pb-16"
        >
          <Contact />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
    </LanguageProvider>
  );
}