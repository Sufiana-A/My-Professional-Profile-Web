import React, { useState } from "react";
import { Cpu, ClipboardCheck, Workflow, Code, ClipboardList, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const [mainTab, setMainTab] = useState("technical");
  const [subTab, setSubTab] = useState("system");

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
          <span className="text-gray-300 not-italic font-medium">Tools:</span>{" "}
          {tools}
        </p>
      )}
    </motion.div>
  );

  const TechnicalTabs = () => (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {[
          { key: "system", icon: Workflow, label: "System Analysis & Design" },
          { key: "business", icon: BarChart3, label: "Business Analysis" },
          { key: "pm", icon: ClipboardList, label: "Product & Project Management" },
          { key: "web", icon: Code, label: "Web Development" },
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
        {subTab === "system" && (
          <>
            <ProgressBar label="Business Process Modeling (BPMN)" value={90} tools="Lucidchart, Bizagi, Microsoft Visio" />
            <ProgressBar label="System Modeling (UML)" value={85} tools="Visual Paradigm, Draw.io, Enterprise Architect" />
            <ProgressBar label="Requirement Gathering & Documentation" value={90} tools="Jira, Confluence, Notion" />
            <ProgressBar label="Prototyping & Wireframing" value={80} tools="Figma, Balsamiq" />
          </>
        )}

        {subTab === "business" && (
          <>
            <ProgressBar label="Data Analysis & Visualization" value={90} tools="Excel, Power BI, Tableau" />
            <ProgressBar label="Process & Requirement Analysis" value={85} tools="Lucidchart, Bizagi, Confluence" />
            <ProgressBar label="SQL for Data Querying" value={80} tools="MySQL, PostgreSQL" />
            <ProgressBar label="Market & Stakeholder Research" value={85} tools="Google Trends, SurveyMonkey" />
          </>
        )}

        {subTab === "pm" && (
          <>
            <ProgressBar label="Agile & Scrum Framework" value={90} tools="Jira, Trello, Asana" />
            <ProgressBar label="Project Planning & Scheduling" value={85} tools="Microsoft Project, Notion, Smartsheet" />
            <ProgressBar label="Risk & Timeline Management" value={80} tools="Excel, Gantt Chart Templates" />
            <ProgressBar label="Product Roadmapping" value={85} tools="Jira, Aha!, Productboard" />
          </>
        )}

        {subTab === "web" && (
          <>
            <ProgressBar label="Front-End Development" value={85} tools="React, TailwindCSS" />
            <ProgressBar label="Back-End Development" value={80} tools="Laravel, Express.js" />
            <ProgressBar label="REST API Integration" value={85} tools="Postman, Axios" />
            <ProgressBar label="Database Design" value={80} tools="MySQL, PostgreSQL" />
          </>
        )}
      </div>
    </>
  );

  const SoftSkills = () => (
    <div className="space-y-6">
      <ProgressBar label="Analytical Thinking" value={90} />
      <ProgressBar label="Communication" value={95} />
      <ProgressBar label="Team Collaboration" value={90} />
      <ProgressBar label="Leadership" value={85} />
      <ProgressBar label="Problem Solving" value={90} />
    </div>
  );

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center text-white py-20 px-6 md:px-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-green-400 drop-shadow-[0_0_10px_#22c55e]">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {[
          { key: "technical", icon: Cpu, label: "Technical Skills" },
          { key: "soft", icon: ClipboardCheck, label: "Soft Skills" },
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