import React, { useState } from "react";
import { Cpu, ClipboardCheck, Workflow, Code, ClipboardList, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";

export default function Skills() {
  const { t } = useTranslation();
  const [mainTab, setMainTab] = useState("technical");
  const [subTab, setSubTab] = useState("system");

  const skillsData = t('skills') || {};

  const ProgressBar = ({ label, value, tools }) => (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between text-base mb-1">
        <span className="font-medium text-gray-200">{label}</span>
        <span className="text-gray-400">{value}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-green-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1 }}
        />
      </div>
      {tools && (
        <p className="text-sm text-gray-400 mt-2 italic">
          <span className="text-gray-300 not-italic font-medium">
            {skillsData.common?.tools || "Tools"}:
          </span>{" "}
          {tools}
        </p>
      )}
    </motion.div>
  );

  const TechnicalTabs = () => (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {[
          { key: "system", icon: Workflow, label: skillsData.technical?.tabs?.system || "System Analysis & Design" },
          { key: "business", icon: BarChart3, label: skillsData.technical?.tabs?.business || "Business Analysis" },
          { key: "pm", icon: ClipboardList, label: skillsData.technical?.tabs?.pm || "Product & Project Management" },
          { key: "web", icon: Code, label: skillsData.technical?.tabs?.web || "Web Development" },
        ].map(({ key, icon: Icon, label }) => (
          <button
            key={key}
            onClick={() => setSubTab(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              subTab === key
                ? "bg-green-600 text-white shadow-[0_0_10px_#22c55e]"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Icon className="w-4 h-4" /> {label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {subTab === "system" && skillsData.technical?.categories?.system?.map((skill, index) => (
          <ProgressBar 
            key={index}
            label={skill.label}
            value={skill.value}
            tools={skill.tools}
          />
        ))}

        {subTab === "business" && skillsData.technical?.categories?.business?.map((skill, index) => (
          <ProgressBar 
            key={index}
            label={skill.label}
            value={skill.value}
            tools={skill.tools}
          />
        ))}

        {subTab === "pm" && skillsData.technical?.categories?.pm?.map((skill, index) => (
          <ProgressBar 
            key={index}
            label={skill.label}
            value={skill.value}
            tools={skill.tools}
          />
        ))}

        {subTab === "web" && skillsData.technical?.categories?.web?.map((skill, index) => (
          <ProgressBar 
            key={index}
            label={skill.label}
            value={skill.value}
            tools={skill.tools}
          />
        ))}
      </div>
    </>
  );

  const SoftSkills = () => (
    <div className="space-y-6">
      {Object.entries(skillsData.soft || {}).map(([key, value]) => (
        <ProgressBar key={key} label={key} value={value} />
      ))}
    </div>
  );

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center text-white py-20 px-6 md:px-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-green-400 drop-shadow-[0_0_10px_#22c55e]">
        {skillsData.title || "Skills"}
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {[
          { key: "technical", icon: Cpu, label: skillsData.mainTabs?.technical || "Technical Skills" },
          { key: "soft", icon: ClipboardCheck, label: skillsData.mainTabs?.soft || "Soft Skills" },
        ].map(({ key, icon: Icon, label }) => (
          <button
            key={key}
            onClick={() => setMainTab(key)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all ${
              mainTab === key
                ? "bg-green-600 text-white shadow-[0_0_10px_#22c55e]"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Icon className="w-4 h-4" /> {label}
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full md:w-4/5 lg:w-3/4 bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-[0_0_25px_rgba(34,197,94,0.2)]"
      >
        {mainTab === "technical" ? <TechnicalTabs /> : <SoftSkills />}
      </motion.div>
    </section>
  );
}