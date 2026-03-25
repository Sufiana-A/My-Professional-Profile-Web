import React, { useEffect, useState } from "react";
import {
  FiMail,
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { FaMedium } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState("");
  const [professionIndex, setProfessionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const professions = t("hero.professions") || [];
  const descriptionText = t("hero.description");

  useEffect(() => setLoaded(true), []);

  // ✅ Stable Infinite Typing Loop
  useEffect(() => {
    if (!professions.length) return;

    const currentWord = professions[professionIndex];
    let timeout;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1400);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setProfessionIndex((prev) => (prev + 1) % professions.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, professionIndex, professions]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between 
      px-6 md:px-16 lg:px-24 max-w-screen-xl mx-auto gap-12"
    >
      {/* LEFT */}
      <div
        className={`flex-1 flex flex-col justify-center text-white space-y-6 
        transition-all duration-1000 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-300">
          {t("hero.greeting")}
        </h2>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="text-white">Sufiana </span>
          <span className="text-green-400 glow-text">Arumdita</span>
        </h1>

        {/* Typing */}
        <h3 className="text-2xl md:text-3xl font-medium min-h-[1.6em] flex items-center">
          <span className="whitespace-nowrap">{typedText}</span>
          <span className="cursor-blink ml-1">|</span>
        </h3>

        <p className="text-sm md:text-base text-gray-300 max-w-lg leading-relaxed">
          {descriptionText}
        </p>

        {/* Status */}
        <ul className="space-y-3 mt-4">
          <li className="flex items-center gap-3 text-green-400 font-medium">
            <span className="bullet-glow shrink-0"></span>
            <span>{t("hero.statuses.openToCollaborate")}</span>
          </li>

          <li className="flex items-center gap-3 text-green-400 font-medium">
            <span className="bullet-glow shrink-0"></span>
            <span>{t("hero.statuses.lookingFor")}</span>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-white rounded-lg
            transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
          >
            <FiMail size={20} />
            {t("hero.buttons.getInTouch")}
          </a>

          <a
            href="/portfolio/Sufiana Arumdita_Extended Portfolio.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg
            transition-all duration-300 hover:-translate-y-1 
            hover:shadow-[0_0_20px_#3b82f6]"
          >
            <FiDownload size={20} />
            {t("hero.buttons.downloadSlidePortfolio")}
          </a>
        </div>

        {/* Social without Wiggle */}
        <div className="flex items-center gap-6 mt-8">
          <a href="https://github.com/Sufiana-A" target="_blank" rel="noreferrer" className="social-icon" title={t('hero.social.github')}>
            <FiGithub size={26} />
          </a>

          <a href="https://linkedin.com/in/sufiana-arumdita-7a3310307/" target="_blank" rel="noreferrer" className="social-icon" title={t('hero.social.linkedin')}>
            <FiLinkedin size={26} />
          </a>

          <a href="https://medium.com/@sufi.arum24" target="_blank" rel="noreferrer" className="social-icon" title={t('hero.social.medium')}>
            <FaMedium size={26} />
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className={`flex-shrink-0 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="profile-wrapper">
          <img
            src="./image/profile.png"
            alt="Sufiana Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes glowPulse {
          0%,100% { text-shadow: 0 0 12px #22c55e; }
          50% { text-shadow: 0 0 25px #22c55e; }
        }

        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulseGlow {
          0%,100% { 
            box-shadow: 0 0 6px #22c55e, 0 0 12px #22c55e;
          }
          50% { 
            box-shadow: 0 0 12px #22c55e, 0 0 24px #22c55e;
          }
        }

        @keyframes blink {
          0%,50%,100% { opacity:1; }
          25%,75% { opacity:0; }
        }

        @keyframes wiggle {
          0%,100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-8deg) scale(1.1); }
          75% { transform: rotate(8deg) scale(1.1); }
        }

        .glow-text { animation: glowPulse 3s ease-in-out infinite; }

        .profile-wrapper {
          width: 20rem;
          height: 24rem;
          border-radius: 1.5rem;
          overflow: hidden;
          border: 4px solid #22c55e;
          box-shadow: 0 0 30px #22c55e;
          animation: float 4s ease-in-out infinite;
        }

        .bullet-glow {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: #22c55e;
          animation: pulseGlow 1.5s ease-in-out infinite;
        }

        .cursor-blink {
          color: #22c55e;
          animation: blink 1s infinite;
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #22c55e;
          animation: wiggle 0.4s ease;
        }
      `}</style>
    </section>
  );
};

export default Hero;