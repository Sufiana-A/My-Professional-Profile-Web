import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";

const Projects = () => {
  const { t, language } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Get projects data from translations
  const projectsData = {
    "System Analysis & Design": [
      {
        title: t('projects.items.helpdeskMonitoring.title'),
        image: "./image/helpdesk-dashboard.png",
        additionalImages: [
          "./image/helpdesk-dashboard-2.png",
          "./image/helpdesk-dashboard-3.png",
          "./image/helpdesk-analytics.png"
        ],
        description: t('projects.items.helpdeskMonitoring.description'),
        tools: t('projects.items.helpdeskMonitoring.tools'),
        fullDescription: t('projects.items.helpdeskMonitoring.fullDescription'),
      },
      {
        title: t('projects.items.toeflStructure.title'),
        image: "./image/toefl-structure.png",
        additionalImages: [
          "./image/toefl-structure-2.png",
          "./image/toefl-structure-3.png"
        ],
        description: t('projects.items.toeflStructure.description'),
        tools: t('projects.items.toeflStructure.tools'),
        fullDescription: t('projects.items.toeflStructure.fullDescription'),
      },
    ],
    "Business Analysis": [
      {
        title: t('projects.items.helpdeskVisualization.title'),
        image: "./image/helpdesk-analysis.png",
        additionalImages: [
          "./image/helpdesk-analysis-2.png",
          "./image/helpdesk-analysis-3.png",
          "./image/helpdesk-dashboard-4.png"
        ],
        description: t('projects.items.helpdeskVisualization.description'),
        tools: t('projects.items.helpdeskVisualization.tools'),
        fullDescription: t('projects.items.helpdeskVisualization.fullDescription'),
      },
      {
        title: t('projects.items.brainysResearch.title'),
        image: "./image/brainys-research.png",
        additionalImages: [
          "./image/brainys-research-2.png",
          "./image/brainys-survey.png"
        ],
        description: t('projects.items.brainysResearch.description'),
        tools: t('projects.items.brainysResearch.tools'),
        fullDescription: t('projects.items.brainysResearch.fullDescription'),
      },
    ],
    "Web Development": [
      {
        title: t('projects.items.toeflPlatform.title'),
        image: "./image/toefl-app.png",
        additionalImages: [
          "./image/toefl-app-2.png",
          "./image/toefl-app-3.png",
          "./image/toefl-dashboard.png"
        ],
        description: t('projects.items.toeflPlatform.description'),
        tools: t('projects.items.toeflPlatform.tools'),
        fullDescription: t('projects.items.toeflPlatform.fullDescription'),
      },
      {
        title: t('projects.items.blogWebsite.title'),
        image: "./image/blog-app.png",
        additionalImages: [
          "./image/blog-app-2.png",
          "./image/blog-admin.png"
        ],
        description: t('projects.items.blogWebsite.description'),
        tools: t('projects.items.blogWebsite.tools'),
        fullDescription: t('projects.items.blogWebsite.fullDescription'),
      },
    ],
    "Product & Project Management": [
      {
        title: t('projects.items.brainysLMS.title'),
        image: "./image/brainys-lms.png",
        additionalImages: [
          "./image/brainys-lms-2.png",
          "./image/brainys-roadmap.png",
          "./image/brainys-sprints.png"
        ],
        description: t('projects.items.brainysLMS.description'),
        tools: t('projects.items.brainysLMS.tools'),
        fullDescription: t('projects.items.brainysLMS.fullDescription'),
      },
      {
        title: t('projects.items.schoolSystem.title'),
        image: "./image/school-system.png",
        additionalImages: [
          "./image/school-system-2.png",
          "./image/school-dashboard.png"
        ],
        description: t('projects.items.schoolSystem.description'),
        tools: t('projects.items.schoolSystem.tools'),
        fullDescription: t('projects.items.schoolSystem.fullDescription'),
      },
    ],
  };

  // Flag to control whether PDF downloads are enabled
  const PDF_DOWNLOADS_ENABLED = false;

  // These paths will only be used when PDF_DOWNLOADS_ENABLED is true
  const resumeFiles = {
    "System Analysis & Design": "/resume/system-analysis-resume.pdf",
    "Business Analysis": "/resume/business-analysis-resume.pdf",
    "Web Development": "/resume/web-development-resume.pdf",
    "Product & Project Management": "/resume/project-management-resume.pdf",
  };

  const categories = ["All", ...Object.keys(projectsData)];

  const filteredData =
    activeFilter === "All"
      ? projectsData
      : { [activeFilter]: projectsData[activeFilter] };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  // Function to handle resume download - now with safety checks
  const downloadCategoryResume = (category) => {
    // Don't attempt download if PDFs aren't enabled
    if (!PDF_DOWNLOADS_ENABLED) {
      alert(t('projects.resume.comingSoon').replace('{category}', category));
      return;
    }
    
    const resumePath = resumeFiles[category];
    
    console.log("Attempting to download:", category);
    console.log("Resume path:", resumePath);
    
    if (resumePath) {
      // First, check if the file exists by trying to fetch it
      fetch(resumePath, { method: 'HEAD' })
        .then(response => {
          console.log("File check response:", response.status, response.statusText);
          
          if (response.ok) {
            // File exists, proceed with download
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = `${category.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_resume.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            // File doesn't exist
            alert(t('projects.resume.notAvailable').replace('{category}', category));
          }
        })
        .catch(error => {
          console.error("Error checking file:", error);
          alert(t('projects.resume.error').replace('{category}', category));
        });
    } else {
      alert(t('projects.resume.comingSoonAlt').replace('{category}', category));
    }
  };

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
        {t('projects.title')}
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
            {cat === "All" ? t('projects.categories.All') : t(`projects.categories.${cat}`)}
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
          {/* Category Title with Download Button */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white/90 border-l-4 border-green-400 pl-3">
              {t(`projects.categories.${category}`)}
            </h3>
            
            {/* Download PDF Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => downloadCategoryResume(category)}
              className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-green-400/20 hover:border-green-400/50 text-slate-300 hover:text-green-400 transition-all duration-300"
              title={PDF_DOWNLOADS_ENABLED ? `Download ${category} resume (PDF)` : `${category} resume coming soon`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 group-hover:translate-y-0.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="text-xs md:text-sm font-medium">{t('projects.resume.button')}</span>
            </motion.button>
          </div>

          {/* Horizontal Scroll Cards */}
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-green-400/30 hover:scrollbar-thumb-green-400/50 scrollbar-thumb-rounded-full scrollbar-track-transparent snap-x snap-mandatory">
            {items.map((proj, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(proj)}
                className="min-w-[300px] bg-slate-800/70 border border-slate-700/40 rounded-2xl shadow-lg hover:shadow-[0_0_15px_#22c55e80] transition-all duration-300 snap-center cursor-pointer"
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
                    {t('skills.common.tools')}: {proj.tools}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] lg:w-[70%] max-w-4xl max-h-[85vh] z-50"
            >
              <div className="bg-slate-800/95 border border-green-400/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">
                {/* Header with Close Button */}
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-green-400/30 flex items-center justify-center text-white hover:bg-green-400/20 hover:border-green-400 transition-all duration-300 group z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(85vh-16rem)] md:max-h-[calc(85vh-20rem)]">
                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-green-400 font-semibold mb-2 text-lg">{t('projects.modal.description')}</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.fullDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Tools Used */}
                  <div className="mb-6">
                    <h4 className="text-green-400 font-semibold mb-2 text-lg">{t('projects.modal.tools')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.split(', ').map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 border border-green-400/20 rounded-full text-sm text-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ADDITIONAL IMAGES GALLERY - VERTICAL LAYOUT */}
                  {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-green-400 font-semibold mb-3 text-lg">{t('projects.modal.gallery')}</h4>
                      <div className="space-y-4">
                        {selectedProject.additionalImages.map((img, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="relative group"
                          >
                            <img
                              src={img}
                              alt={`${selectedProject.title} - ${t('projects.modal.screenshot')} ${index + 1}`}
                              className="w-full h-auto rounded-lg border border-green-400/20 group-hover:border-green-400/50 transition-all duration-300"
                            />
                            <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-green-400 border border-green-400/30">
                              {t('projects.modal.screenshot')} {index + 1}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-slate-900/50 border-t border-green-400/20">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-green-400/10 hover:bg-green-400/20 text-green-400 rounded-lg transition-colors duration-300 border border-green-400/30 hover:border-green-400/50"
                  >
                    {t('projects.modal.close')}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;