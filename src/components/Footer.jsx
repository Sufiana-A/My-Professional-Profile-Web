import React from "react";
import { useTranslation } from "../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900/40 backdrop-blur-md border-t border-slate-700/40 text-center py-6 mt-20 text-sm text-slate-300">
      <p className="tracking-wide">
        &copy; {currentYear}{" "}
        <span className="text-green-400 font-semibold">Sufiana Arumdita</span>.{" "}
        {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;