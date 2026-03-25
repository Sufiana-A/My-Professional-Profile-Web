import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";

const Projects = () => {
  const { t, language } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useState(["All"]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);
  
  // Define available filters
  const filterOptions = [
    { id: "All", label: t('projects.filters.All') },
    { id: "SA", label: t('projects.filters.SA') },
    { id: "BA", label: t('projects.filters.BA') },
    { id: "PMO", label: t('projects.filters.PMO') },
    { id: "Web-Based", label: t('projects.filters.Web-Based') },
    { id: "Data", label: t('projects.filters.Data') },
    { id: "Tech Writing", label: t('projects.filters.TechWriting') }
  ];

  // Get projects data from translations with tags
  const allProjects = [
    {
      title: t('projects.items.toeflPlatform.title'),
      image: "./image/LaC-TOEFL-Practice-Website/Web-based-Back-End-1-Dashboard-Peserta.png",
      images: {
        web: t('projects.items.toeflPlatform.images.web') || [],
        sa: t('projects.items.toeflPlatform.images.sa') || [],
        techWriting: t('projects.items.toeflPlatform.images.techWriting') || []
      },
      description: t('projects.items.toeflPlatform.fullDescription'),
      tools: t('projects.items.toeflPlatform.tools'),
      fullDescription: t('projects.items.toeflPlatform.fullDescription'),
      tags: ["Web-Based", "SA", "Tech Writing"]
    },
    {
      title: t('projects.items.netflixDtDashboard.title'),
      image: "./image/Netflix-Data-Analysis/NETFLIX-Shows-Data-Breakdown-Dashboard.png",
      images: {
        data: t('projects.items.netflixDtDashboard.images.data') || []
      },
      description: t('projects.items.netflixDtDashboard.fullDescription'),
      tools: t('projects.items.netflixDtDashboard.tools'),
      fullDescription: t('projects.items.netflixDtDashboard.fullDescription'),
      tags: ["Data"]
    },
    {
      title: t('projects.items.helpdeskMonitoring.title'),
      image: "./image/Tableau-Monitoring-Helpdesk/dashboard1-Data.png",
      images: {
        ba: t('projects.items.helpdeskMonitoring.images.ba') || [],
        data: t('projects.items.helpdeskMonitoring.images.data') || []
      },
      description: t('projects.items.helpdeskMonitoring.fullDescription'),
      tools: t('projects.items.helpdeskMonitoring.tools'),
      fullDescription: t('projects.items.helpdeskMonitoring.fullDescription'),
      tags: ["BA", "Data"]
    },
    {
      title: t('projects.items.financialTracker.title'),
      image: "./image/Financial-Tracker/Financial-Overview-Dashboard.png",
      images: {
        ba: t('projects.items.financialTracker.images.ba') || [],
        data: t('projects.items.financialTracker.images.data') || []
      },
      description: t('projects.items.financialTracker.fullDescription'),
      tools: t('projects.items.financialTracker.tools'),
      fullDescription: t('projects.items.financialTracker.fullDescription'),
      tags: ["BA", "Data"]
    },
    {
      title: t('projects.items.travelWebPM.title'),
      image: "./image/Travel-Website-Project/Web-based-1-Landing-page-travel-web-1.png",
      images: {
        web: t('projects.items.travelWebPM.images.web') || [],
        pmo: t('projects.items.travelWebPM.images.pmo') || []
      },
      description: t('projects.items.travelWebPM.fullDescription'),
      tools: t('projects.items.travelWebPM.tools'),
      fullDescription: t('projects.items.travelWebPM.fullDescription'),
      tags: ["Web-Based", "PMO"]
    },
    {
      title: t('projects.items.professionalSyrvey.title'),
      image: "./image/Professional-Survey-Data-Analysis/Data-Professional-Survey-Dashboard.png",
      images: {
        data: t('projects.items.professionalSyrvey.images.data') || []
      },
      description: t('projects.items.professionalSyrvey.fullDescription'),
      tools: t('projects.items.professionalSyrvey.tools'),
      fullDescription: t('projects.items.professionalSyrvey.fullDescription'),
      tags: ["Data"]
    },
    {
      title: t('projects.items.brainysProject.title'),
      image: "./image/Brainys-Project/PRD-Brainys-Cover.png",
      images: {
        sa: t('projects.items.brainysProject.images.sa') || [],
        ba: t('projects.items.brainysProject.images.ba') || [],
        pmo: t('projects.items.brainysProject.images.pmo') || [],
        techWriting: t('projects.items.brainysProject.images.techWriting') || []
      },
      description: t('projects.items.brainysProject.fullDescription'),
      tools: t('projects.items.brainysProject.tools'),
      fullDescription: t('projects.items.brainysProject.fullDescription'),
      tags: ["SA", "BA", "PMO", "Tech Writing"]
    },
    {
      title: t('projects.items.blogWebsite.title'),
      image: "./image/Golf-Leaderboard-External-API-Website/Web-based-1-Homepage.png",
      images: {
        web: t('projects.items.blogWebsite.images.web') || []
      },
      description: t('projects.items.blogWebsite.fullDescription'),
      tools: t('projects.items.blogWebsite.tools'),
      fullDescription: t('projects.items.blogWebsite.fullDescription'),
      tags: ["Web-Based"]
    },
    {
      title: t('projects.items.dedikasiLMS.title'),
      image: "./image/Dedikasi-Website-Project/Register-web-based.png",
      images: {
        web: t('projects.items.dedikasiLMS.images.web') || [],
        pmo: t('projects.items.dedikasiLMS.images.pmo') || []
      },
      description: t('projects.items.dedikasiLMS.fullDescription'),
      tools: t('projects.items.dedikasiLMS.tools'),
      fullDescription: t('projects.items.dedikasiLMS.fullDescription'),
      tags: ["PMO", "Web-Based"]
    },
    {
      title: t('projects.items.schoolSystem.title'),
      image: "./image/OASYS-School-Project/PRD-OASYS-School-Cover.png",
      images: {
        sa: t('projects.items.schoolSystem.images.sa') || [],
        ba: t('projects.items.schoolSystem.images.ba') || [],
        pmo: t('projects.items.schoolSystem.images.pmo') || [],
        techWriting: t('projects.items.schoolSystem.images.techWriting') || []
      },
      description: t('projects.items.schoolSystem.fullDescription'),
      tools: t('projects.items.schoolSystem.tools'),
      fullDescription: t('projects.items.schoolSystem.fullDescription'),
      tags: ["SA", "BA", "PMO", "Tech Writing"]
    },
    {
      title: t('projects.items.totalPayPrediction.title'),
      image: "./image/TotalPayAmount-Prediction-Transjakarta-ARIMA/Fourteen-Day-Revenue-Forecast.png",
      images: {
        data: t('projects.items.totalPayPrediction.images.data') || []
      },
      description: t('projects.items.totalPayPrediction.fullDescription'),
      tools: t('projects.items.totalPayPrediction.tools'),
      fullDescription: t('projects.items.totalPayPrediction.fullDescription'),
      tags: ["Data"]
    },
  ];

  // Function to handle filter click
  const handleFilterClick = (filterId) => {
    if (filterId === "All") {
      setSelectedFilters(["All"]);
    } else {
      let newFilters;
      if (selectedFilters.includes("All")) {
        newFilters = [filterId];
      } else if (selectedFilters.includes(filterId)) {
        newFilters = selectedFilters.filter(f => f !== filterId);
        newFilters = newFilters.length === 0 ? ["All"] : newFilters;
      } else {
        newFilters = [...selectedFilters, filterId];
      }
      setSelectedFilters(newFilters);
    }
  };

  // Filter projects based on selected filters
  const filteredProjects = selectedFilters.includes("All")
    ? allProjects
    : allProjects.filter(project =>
        project.tags.some(tag => selectedFilters.includes(tag))
      );

  // Handle scroll progress
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  // Update scroll progress when filtered projects change
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      
      const observer = new ResizeObserver(() => {
        handleScroll();
      });
      observer.observe(container);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }
  }, [filteredProjects]);

  // Determine main title (H2)
  const getMainTitle = () => {
    return t('projects.title');
  };

  // Determine subtitle (H3 above scroll cards)
  const getSubtitle = () => {
    if (filteredProjects.length === 1) {
      return language === 'en' ? 'Project' : 'Proyek';
    }
    return language === 'en' ? 'Projects' : 'Proyek';
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  // Helper function to render gallery sections (caption di atas gambar)
  const renderGallerySection = (title, icon, images, description) => {
    if (!images || images.length === 0) return null;
    
    return (
      <div className="mb-8">
        <h4 className="text-green-400 font-semibold mb-2 text-lg flex items-center gap-2">
          <span>{icon}</span> {title}
        </h4>
        <p className="text-sm text-slate-400 mb-3">{description}</p>
        <div className="space-y-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="flex flex-col items-center gap-2"
            >
              {/* Caption di atas gambar */}
              <div className="text-center">
                <p className="text-sm font-medium text-green-400 bg-slate-800/50 px-3 py-1 rounded-full inline-block">
                  {img.caption}
                </p>
              </div>
              {/* Gambar */}
              <div className="relative group w-full">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto rounded-lg border border-green-400/20 group-hover:border-green-400/50 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // Helper function to render description with paragraphs
  const renderDescription = (text) => {
    if (!text) return null;
    
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((para, idx) => (
      <p key={idx} className="mb-4 last:mb-0 text-slate-300 leading-relaxed text-justify">
        {para}
      </p>
    ));
  };

  return (
    <section
      id="projects"
      className="relative z-10 px-6 md:px-20 pt-16 pb-20 scroll-mt-24 md:scroll-mt-32"
    >
      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-green-400 drop-shadow-[0_0_8px_#22c55e] text-center"
      >
        {getMainTitle()}
      </motion.h2>

      {/* Filter Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {filterOptions.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={`px-4 py-2 rounded-full border text-sm md:text-base transition-all duration-300 ${
              selectedFilters.includes(filter.id)
                ? "bg-green-400 text-slate-900 font-semibold shadow-[0_0_10px_#22c55e80]"
                : "text-slate-300 border-slate-600 hover:border-green-400 hover:text-green-300"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Subtitle */}
      {filteredProjects.length > 0 && (
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-white/90 border-l-4 border-green-400 pl-3">
            {getSubtitle()}
          </h3>
        </div>
      )}

      {/* Projects Display */}
      {filteredProjects.length > 0 ? (
        <>
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-6 scrollbar-thin scrollbar-thumb-green-400/30 hover:scrollbar-thumb-green-400/50 scrollbar-thumb-rounded-full scrollbar-track-transparent snap-x snap-mandatory"
          >
            {filteredProjects.map((proj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
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
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {proj.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/50 border border-green-400/30 rounded-md text-xs text-green-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-300 mb-3 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    {t('skills.common.tools')}: {proj.tools}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Progress Indicator */}
          {filteredProjects.length > 2 && (
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="w-full max-w-md h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                  style={{ width: `${scrollProgress}%` }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${scrollProgress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <svg 
                  className="w-4 h-4 animate-pulse" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm">
                  {scrollProgress < 5 ? t('projects.scroll.swipe') : 
                   scrollProgress > 95 ? t('projects.scroll.end') : 
                   t('projects.scroll.click')}
                </span>
                <svg 
                  className="w-4 h-4 animate-pulse" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-slate-400 py-10">
          {t('projects.noProjects')}
        </div>
      )}

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
                {/* Header */}
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
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-green-400/20 border border-green-400/50 rounded-md text-xs text-green-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(85vh-16rem)] md:max-h-[calc(85vh-20rem)]">
                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="text-green-400 font-semibold mb-2 text-lg">{t('projects.modal.description')}</h4>
                    <div className="text-slate-300 leading-relaxed">
                      {renderDescription(selectedProject.fullDescription || selectedProject.fullDescription)}
                    </div>
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

                  {/* Gallery Sections based on tags */}
                  <div className="space-y-6">
                    {selectedProject.tags.includes("Web-Based") && selectedProject.images?.web && (
                      renderGallerySection(
                        "Web Development",
                        "🌐",
                        selectedProject.images.web,
                        "Tampilan antarmuka website yang dikembangkan."
                      )
                    )}

                    {selectedProject.tags.includes("SA") && selectedProject.images?.sa && (
                      renderGallerySection(
                        "System Analysis",
                        "📊",
                        selectedProject.images.sa,
                        "Perancangan sistem, diagram ERD, activity diagram, dan dokumentasi teknis."
                      )
                    )}

                    {selectedProject.tags.includes("BA") && selectedProject.images?.ba && (
                      renderGallerySection(
                        "Business Analysis",
                        "📈",
                        selectedProject.images.ba,
                        "Analisis kebutuhan bisnis, PRD, benchmarking, dan user stories."
                      )
                    )}

                    {selectedProject.tags.includes("PMO") && selectedProject.images?.pmo && (
                      renderGallerySection(
                        "Project Management",
                        "📋",
                        selectedProject.images.pmo,
                        "Manajemen proyek, sprint planning, risk register, dan dokumentasi agile."
                      )
                    )}

                    {selectedProject.tags.includes("Data") && selectedProject.images?.data && (
                      renderGallerySection(
                        "Data Analysis",
                        "📉",
                        selectedProject.images.data,
                        "Dashboard analisis data, visualisasi, dan forecasting."
                      )
                    )}

                    {selectedProject.tags.includes("Tech Writing") && selectedProject.images?.techWriting && (
                      renderGallerySection(
                        "Technical Writing",
                        "📝",
                        selectedProject.images.techWriting,
                        "Dokumentasi API, user manual, Postman collection, dan spesifikasi teknis."
                      )
                    )}
                  </div>
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