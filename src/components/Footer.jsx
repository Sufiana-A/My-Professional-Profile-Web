import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900/40 backdrop-blur-md border-t border-slate-700/40 text-center py-6 mt-20 text-sm text-slate-300">
      <p className="tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-green-400 font-semibold">Sufiana Arumdita</span>.{" "}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;