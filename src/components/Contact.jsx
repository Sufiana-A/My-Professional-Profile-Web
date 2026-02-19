import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { FaMedium } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(t('contact.form.sending'));

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus(t('contact.form.success'));
          form.current.reset();
        },
        () => {
          setStatus(t('contact.form.error'));
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative z-10 flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20 gap-14"
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col justify-center text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 drop-shadow-[0_0_8px_#22c55e] mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-slate-300 max-w-md leading-relaxed mb-4 mx-auto md:mx-0">
          {t('contact.subtitle')}
        </p>
        <p className="text-slate-400 italic mb-6">
          {t('contact.collaborate')}
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center md:justify-start gap-6 mt-2 text-white">
          <a 
            href="https://github.com/Sufiana-A" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            title={t('contact.social.github')}
          >
            <FiGithub size={26} />
          </a>
          <a 
            href="https://linkedin.com/in/sufiana-arumdita-7a3310307/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            title={t('contact.social.linkedin')}
          >
            <FiLinkedin size={26} />
          </a>
          <a 
            href="https://www.instagram.com/arumditasufiana" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            title={t('contact.social.instagram')}
          >
            <FiInstagram size={26} />
          </a>
          <a 
            href="https://medium.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            title={t('contact.social.medium')}
          >
            <FaMedium size={26} />
          </a>
        </div>

        {/* QUOTE */}
        <div className="mt-8 border-l-4 border-green-400 pl-4">
          <p className="text-slate-300 italic text-sm">
            {t('contact.quote')}
          </p>
        </div>
      </motion.div>

      {/* RIGHT SIDE - FORM */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex-1 bg-slate-800/60 border border-slate-700/40 rounded-2xl p-8 w-full max-w-lg shadow-lg group overflow-hidden"
      >
        {/* Floating Icon - Center top bubble */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 border border-green-400/60 rounded-full p-3 shadow-lg z-20 transition-all duration-500 animate-float">
            <span className="group-hover:hidden block">
                <FiMessageSquare className="w-6 h-6 text-green-400 drop-shadow-[0_0_8px_#22c55e]" />
            </span>
            <span className="hidden group-hover:block">
                <FaRegEnvelope className="w-6 h-6 text-pink-400 drop-shadow-[0_0_8px_#ec4899]" />
            </span>
        </div>

        <div className="mb-5">
          <label className="block text-sm text-slate-300 mb-2">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full p-3 rounded-md bg-slate-900/70 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm text-slate-300 mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-md bg-slate-900/70 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm text-slate-300 mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-slate-900/70 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-md transition-all duration-300"
        >
          {t('contact.form.send')}
        </button>

        {status && (
          <p
            className={`text-center text-sm mt-4 ${
              status === t('contact.form.error')
                ? "text-red-400"
                : status === t('contact.form.success')
                ? "text-green-400"
                : "text-slate-300"
            }`}
          >
            {status}
          </p>
        )}
      </motion.form>

      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
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
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;