import React from "react";
import AsteroidBackground from "./AsteroidBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background tetap menutupi semua */}
      <AsteroidBackground />

      {/* Header di atas background */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Konten yang bisa di-scroll */}
      {/* Hero Section */}
      <main className="relative z-10 scroll-smooth">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[70vh] flex items-center justify-center"
        >
          <Hero />
        </section>

        {/* About Section */}
        {/* About Section - pull it up */}
        <section
          id="about"
          className="relative -mt-10 md:-mt-32 scroll-mt-24 md:scroll-mt-32"
        >
          <About />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="flex flex-col justify-start pt-10 pb-10 px-6 md:px-20 scroll-mt-24 md:scroll-mt-32"
        >
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="pt-16 pb-16 px-6 md:px-20 scroll-mt-24 md:scroll-mt-32">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-16 pb-16 px-6 md:px-20 scroll-mt-24 md:scroll-mt-32">
          <Contact />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
}