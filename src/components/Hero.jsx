import React, { useEffect, useState } from "react";
import {
  FiMail,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";
import { FaMedium } from "react-icons/fa";

const professions = [
  "Aspiring System Analyst",
  "Product & Project Management Enthusiast",
  "Web Developer",
  "Writer",
];

const statuses = [
  { text: "Open to Collaborate", active: true },
  { text: "Looking for Opportunities as Project Management Officer", active: true },
];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [professionIndex, setProfessionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1200;

    if (!isDeleting && charIndex === professions[professionIndex].length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setProfessionIndex((prev) => (prev + 1) % professions.length);
    }

    const timeout = setTimeout(() => {
      setTypedText(
        professions[professionIndex].substring(
          0,
          charIndex + (isDeleting ? -1 : 1)
        )
      );
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, professionIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 gap-24 md:gap-32 relative z-10 bg-transparent"
    >
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col items-start justify-center text-white drop-shadow-md mt-8 md:mt-0 space-y-6 pb-8">
        {/* TEXT */}
        <div className="flex flex-col space-y-3 min-w-[20rem] md:min-w-[28rem]">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-200 tracking-wide">
            Hi, I am
          </h2>

          <div className="leading-none">
            <h1 className="text-5xl md:text-7xl font-extrabold">
              <span className="block text-green-400 drop-shadow-[0_0_15px_#22c55e]">
                Sufiana
              </span>
              <span className="block text-white">Arumdita</span>
            </h1>
          </div>
        </div>

        {/* PROFESSION (typed) */}
        <h3 className="text-2xl md:text-3xl font-medium mt-2 md:mt-4 min-h-[2.5rem] md:min-h-[3rem]">
          <span className="text-white">{typedText}</span>
          <span className="text-green-400 animate-pulse">|</span>
        </h3>

        {/* STATUS */}
        <ul className="flex flex-col space-y-2 mt-4">
          {statuses.map((status, i) => (
            <li
              key={i}
              className={`flex items-center gap-2 font-medium ${
                status.active ? "text-green-400" : "text-gray-400/60 italic"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  status.active
                    ? "bg-green-400 animate-[pulseGlow_1.5s_ease-in-out_infinite] shadow-[0_0_8px_#22c55e]"
                    : "bg-gray-600"
                }`}
              ></span>
              {status.text}
            </li>
          ))}
        </ul>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-white rounded-md text-white hover:text-black hover:bg-white transition-all duration-300"
          >
            <FiMail size={20} /> Get in Touch
          </a>

          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_0_16px_#3b82f6] transition-all duration-300"
          >
            <FiDownload size={20} /> Download CV
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6 mt-8 text-white">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FiGithub size={26} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FiLinkedin size={26} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FiInstagram size={26} />
          </a>
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaMedium size={26} />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - PROFILE IMAGE */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-green-400 shadow-[0_0_25px_#22c55e]">
          <img
            src="/image/profile.png"
            alt="Sufiana Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 6px #22c55e, 0 0 12px #22c55e;
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 12px #22c55e, 0 0 20px #22c55e;
            opacity: 0.6;
          }
        }

        @keyframes sway {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }

        .social-icon {
          transition: all 0.3s ease;
          animation: sway 3s ease-in-out infinite;
          display: inline-flex;
        }

        .social-icon:hover {
          color: #22c55e;
          transform: scale(1.2) rotate(0deg);
          text-shadow: 0 0 10px #22c55e;
        }
      `}</style>
    </section>
  );
};

export default Hero;