import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaMedium } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  // Real-time validation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    let error = '';
    
    if (name === 'name' && !value.trim()) {
      error = t('contact.validation.nameRequired');
    }
    
    if (name === 'email') {
      if (!value.trim()) {
        error = t('contact.validation.emailRequired');
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = t('contact.validation.emailInvalid');
      }
    }
    
    if (name === 'message' && !value.trim()) {
      error = t('contact.validation.messageRequired');
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || name.trim() === "") {
      newErrors.name = t('contact.validation.nameRequired');
    }
    if (!email || email.trim() === "") {
      newErrors.email = t('contact.validation.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t('contact.validation.emailInvalid');
    }
    if (!message || message.trim() === "") {
      newErrors.message = t('contact.validation.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Ganti sendEmail dengan Web3Forms
  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) { 
      return;
    }
    setStatus(t('contact.form.sending'));

    // Buat FormData dari form
    const formData = new FormData(form.current);
    
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus(t('contact.form.success'));
        form.current.reset();
      } else {
        setStatus(t('contact.form.error'));
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus(t('contact.form.error'));
    }
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
            href="mailto:work.sufiana42@gmail.com?subject=Contact%20from%20WebProfile" 
            className="social-icon"
            title={t('contact.social.email')}
          >
            <FaRegEnvelope size={26} />
          </a>
          <a 
            href="https://medium.com/@sufi.arum24" 
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
        noValidate
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
            name="name"
            className={`w-full p-3 rounded-md bg-slate-900/70 text-white border ${
              errors.name ? 'border-red-500' : 'border-slate-700'
            } focus:outline-none focus:ring-2 focus:ring-green-400`}
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-5">
          <label className="block text-sm text-slate-300 mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            name="email"
            className={`w-full p-3 rounded-md bg-slate-900/70 text-white border ${
              errors.email ? 'border-red-500' : 'border-slate-700'
            } focus:outline-none focus:ring-2 focus:ring-green-400`}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-5">
          <label className="block text-sm text-slate-300 mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            name="message"
            rows="5"
            className={`w-full p-3 rounded-md bg-slate-900/70 text-white border ${
              errors.message ? 'border-red-500' : 'border-slate-700'
            } focus:outline-none focus:ring-2 focus:ring-green-400`}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
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
        @keyframes wiggle {
          0%,100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-8deg) scale(1.1); }
          75% { transform: rotate(8deg) scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .social-icon {
          transition: all 0.3s ease;
          display: inline-flex;
        }
        .social-icon:hover {
          color: #22c55e;
          animation: wiggle 0.4s ease;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;