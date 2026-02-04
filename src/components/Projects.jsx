import React, { useState } from "react";
import { motion } from "framer-motion";

const projectsData = {
  "System Analysis & Design": [
    {
      title: "Helpdesk Monitoring System",
      image: "./image/helpdesk-dashboard.png",
      description:
        "Designed an analytical dashboard for monitoring answered and unanswered questions on WhatsApp-based helpdesk using Tableau integration.",
      tools: "Lucidchart, Tableau, PostgreSQL",
    },
    {
      title: "TOEFL ITP Structure & Written Expression App",
      image: "./image/toefl-structure.png",
      description:
        "Developed system analysis and ERD, BPMN, and user flow documentation for a web-based TOEFL practice platform.",
      tools: "Draw.io, Notion, MySQL",
    },
  ],

  "Business Analysis": [
    {
      title: "Helpdesk Performance Visualization",
      image: "./image/helpdesk-analysis.png",
      description:
        "Conducted data analysis and visualization of helpdesk performance trends, highlighting unanswered categories using Tableau integrated with cloud database.",
      tools: "Tableau, PostgreSQL, Looker Studio",
    },
    {
      title: "Market & User Needs Research for Brainys LMS",
      image: "./image/brainys-research.png",
      description:
        "Performed market and user needs analysis to define key features and performance metrics for Brainys Learning Management System.",
      tools: "Google Forms, Excel, Power BI",
    },
  ],

  "Web Development": [
    {
      title: "TOEFL ITP Practice Platform",
      image: "./image/toefl-app.png",
      description:
        "Built a Laravel-based monolithic web app for TOEFL practice with modules, gamification, and performance dashboards.",
      tools: "Laravel, MySQL, Tailwind CSS, JavaScript",
    },
    {
      title: "Blog Website with EJS Template",
      image: "./image/blog-app.png",
      description:
        "Developed a blog system using Express.js and EJS, featuring CRUD operations and responsive layouts.",
      tools: "Express.js, EJS, Bootstrap",
    },
  ],

  "Product & Project Management": [
    {
      title: "Brainys Learning Management System",
      image: "./image/brainys-lms.png",
      description:
        "Acted as Associate Product Manager; created PRDs and coordinated Agile sprints for LMS development with cross-functional teams.",
      tools: "Notion, Jira, Figma",
    },
    {
      title: "School Management System (OASYS Division)",
      image: "./image/school-system.png",
      description:
        "Managed project milestones, backlog prioritization, and sprint reviews under Scrum framework for system delivery.",
      tools: "Asana, Notion, Miro",
    },
  ],
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...Object.keys(projectsData)];

  const filteredData =
    activeFilter === "All"
      ? projectsData
      : { [activeFilter]: projectsData[activeFilter] };

  return (
    <section
      id="projects"
      className="relative z-10 px-6 md:px-20 pt-16 pb-20 scroll-mt-24 md:scroll-mt-32"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-green-400 drop-shadow-[0_0_8px_#22c55e] text-center"
      >
        Projects
      </motion.h2>

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full border text-sm md:text-base transition-all duration-300 ${
              activeFilter === cat
                ? "bg-green-400 text-slate-900 font-semibold shadow-[0_0_10px_#22c55e80]"
                : "text-slate-300 border-slate-600 hover:border-green-400 hover:text-green-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects per Category */}
      {Object.entries(filteredData).map(([category, items], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: categoryIndex * 0.2 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          {/* Category Title */}
          <h3 className="text-2xl font-semibold mb-6 text-white/90 border-l-4 border-green-400 pl-3">
            {category}
          </h3>

          {/* Horizontal Scroll Cards */}
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-green-400/30 hover:scrollbar-thumb-green-400/50 scrollbar-thumb-rounded-full scrollbar-track-transparent snap-x snap-mandatory">
            {items.map((proj, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="min-w-[300px] bg-slate-800/70 border border-slate-700/40 rounded-2xl shadow-lg hover:shadow-[0_0_15px_#22c55e80] transition-all duration-300 snap-center"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    Tools: {proj.tools}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;