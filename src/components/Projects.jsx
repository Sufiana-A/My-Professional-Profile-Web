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
      image: "/image/LaC-TOEFL-Practice-Website/Web-based-Back-End-1-Dashboard-Peserta.png",
      images: {
        web: [
          { src: "/image/LaC-TOEFL-Practice-Website/Web-based-Back-End-1-Dashboard-Peserta.png", caption: "TOEFL Platform Homepage" },
          { src: "/image/LaC-TOEFL-Practice-Website/Web-based-Back-End-2-Tinjau-Rencana-Belajar-Instruktur.png", caption: "Practice Module" },
          { src: "/image/LaC-TOEFL-Practice-Website/Web-based-Back-End-3-Pengajuan-Rencana-Belajar-1.png", caption: "Question Interface" },
          { src: "/image/LaC-TOEFL-Practice-Website/Web-based-Back-End-4-Kelola-Paket-Kursus.png", caption: "User Dashboard" },
          { src: "/image/LaC-TOEFL-Practice-Website/Web-based-Back-End-5-Pengajuan-Skor-Awal.png", caption: "TOEFL Platform Homepage" },
          { src: "/image/LaC-TOEFL-Practice-Website/Web-based-Back-End-6-Seleksi-Skor-Awal.png", caption: "Practice Module" },
          { src: "/image/LaC-TOEFL-Practice-Website/Web-based-Back-End-7-Riwayat-Pembayaran.png", caption: "Question Interface" },
        ],
        sa: [
          { src: "/image/LaC-TOEFL-Practice-Website/Use-case-scenario-Seleksi-skor-awal-SA-1.png", caption: "ERD Database Design" },
          { src: "/image/LaC-TOEFL-Practice-Website/Use-Case-Modul-Manajemen-Kursus-(7)-SA-2.png", caption: "ERD Database Design" },
          { src: "/image/LaC-TOEFL-Practice-Website/Activity-Diagram-Pengajuan-Skor-Awal-(3)-SA-3.png", caption: "ERD Database Design" },
          { src: "/image/LaC-TOEFL-Practice-Website/Activity-Diagram-Tinjau-Rencana-Belajar-(3)-SA-4.png", caption: "ERD Database Design" },
          { src: "/image/LaC-TOEFL-Practice-Website/Sequence-Pengajuan-Skor-Awal-(3)-SA-5.png", caption: "ERD Database Design" },
          { src: "/image/LaC-TOEFL-Practice-Website/Sequence-Seleksi-Skor-Awal-(3)-SA-6.png", caption: "ERD Database Design" },
          { src: "/image/LaC-TOEFL-Practice-Website/Sequence-Tinjau-Rencana-Belajar-(6)-SA-7.png", caption: "ERD Database Design" }
        ],
        techWriting: [
          { src: "/image/LaC-TOEFL-Practice-Website/Tech-Wrting-1.png", caption: "API Specification Table" },
          { src: "/image/LaC-TOEFL-Practice-Website/Tech-Writing-2.png", caption: "Postman Collection" },
          { src: "/image/LaC-TOEFL-Practice-Website/Tech-Writing-3.png", caption: "API Specification Table" },
          { src: "/image/LaC-TOEFL-Practice-Website/Riwayat-pengajuan-skor-awal-peserta -Tech-Writing.png", caption: "Postman Collection" }
        ]
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
         data: [
          { src: "./image/Netflix-Data-Analysis/NETFLIX-Shows-Data-Breakdown-Dashboard.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/Netflix-Data-Analysis/NETFLIX-Shows-Data-Breakdown-Dashboard.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/Netflix-Data-Analysis/NETFLIX-Shows-Data-Breakdown-Dashboard.png", caption: "SLA Analytics Dashboard" }
        ]
      },
      description: t('projects.items.netflixDtDashboard.fullDescription'),
      tools: t('projects.items.netflixDtDashboard.tools'),
      fullDescription: t('projects.items.netflixDtDashboard.fullDescription'),
      tags: ["Data"]
    },
    // System Analysis & Design Projects
    {
      title: t('projects.items.helpdeskMonitoring.title'),
      image: "./image/Tableau-Monitoring-Helpdesk/dashboard1-Data.png",
      images: {
        ba: [
          { src: "./image/Tableau-Monitoring-Helpdesk/BA-1.png", caption: "ERD Database Design" },
          { src: "./image/Tableau-Monitoring-Helpdesk/BA-2.png", caption: "ERD Database Design" }
        ],
        data: [
          { src: "./image/Tableau-Monitoring-Helpdesk/dashboard1-Data.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/Tableau-Monitoring-Helpdesk/dashboard2-Data.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/Tableau-Monitoring-Helpdesk/dashboard3-Data.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/Tableau-Monitoring-Helpdesk/dashboard4-Data.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/Tableau-Monitoring-Helpdesk/dashboard5-Data.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/Tableau-Monitoring-Helpdesk/Star-Schema-Dashboard-LAA.drawio.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/Tableau-Monitoring-Helpdesk/ERD-chat_system-monitoring-helpdesk-star-schema.png", caption: "SLA Analytics Dashboard" }
        ]
      },
      description: t('projects.items.helpdeskMonitoring.fullDescription'),
      tools: t('projects.items.helpdeskMonitoring.tools'),
      fullDescription: t('projects.items.helpdeskMonitoring.fullDescription'),
      tags: ["BA", "Data"]
    },
    // 
    {
      title: t('projects.items.financialTracker.title'),
      image: "./image/Financial-Tracker/Financial-Overview-Dashboard.png",
      images: {
         ba: [
          { src: "./image/Financial-Tracker/Income&Expense-Cash-Flow.png", caption: "SLA Analytics Dashboard" }
         ],
         data: [
          { src: "./image/Financial-Tracker/Financial-Overview-Dashboard.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/Financial-Tracker/Financial-Analysis&Forecasting-Dashboard.png", caption: "SLA Analytics Dashboard" }
      ]},
      description: t('projects.items.financialTracker.fullDescription'),
      tools: t('projects.items.financialTracker.tools'),
      fullDescription: t('projects.items.financialTracker.fullDescription'),
      tags: ["BA", "Data"]
    },
    {
      title: t('projects.items.travelWebPM.title'),
      image: "./image/Travel-Website-Project/Web-based-1-Landing-page-travel-web-1.png",
      images: {
        web: [
          { src: "./image/Travel-Website-Project/Web-based-1-Landing-page-travel-web-1.png", caption: "Analytics Dashboard" },
          { src: "./image/Travel-Website-Project/Web-based-1-Landing-page-travel-web-2.png", caption: "Trend Analysis" },
          { src: "./image/Travel-Website-Project/Web-based-1-Landing-page-travel-web-3.png", caption: "Performance Metrics" },
          { src: "./image/Travel-Website-Project/Web-based-2-Admin-homepage.png", caption: "Analytics Dashboard" },
          { src: "./image/Travel-Website-Project/Web-based-2-homepage-services.png", caption: "Trend Analysis" },
          { src: "./image/Travel-Website-Project/Web-based-3-hotel-reservation-form.png", caption: "Performance Metrics" },
          { src: "./image/Travel-Website-Project/Web-based-4-Admin-page-confirm-user-payment.png", caption: "Real-time Monitoring" },
          { src: "./image/Travel-Website-Project/Web-based-4-Admin-page-confirm-user-reservation.png", caption: "Performance Metrics" },
          { src: "./image/Travel-Website-Project/Web-based- 5-Onprocess-reservation.png", caption: "Real-time Monitoring" }
        ],
        pmo: [
          { src: "./image/Travel-Website-Project/PMO-1-Risk-Management-Plan.png", caption: "Product Roadmap" }
        ]
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
        data: [
          { src: "./image/Professional-Survey-Data-Analysis/Data-Professional-Survey-Dashboard.png", caption: "SLA Analytics Dashboard" }
        ]
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
        sa: [
          { src: "./image/Brainys-Project/Func-Req-Brainys-Features-SA-1.png", caption: "System Architecture Diagram" },
          { src: "./image/Brainys-Project/Business-Model-Brainys-Oasys-revise-SA-2.png", caption: "User Needs Analysis" },
          { src: "./image/Brainys-Project/Use-Case-Brainys-SA-3.png", caption: "Survey Results" },
          { src: "./image/Brainys-Project/Activity-Diagram-Templat-Bahan-Ajar-SA-4.png", caption: "User Needs Analysis" },
          { src: "./image/Brainys-Project/Activity-Diagram-Templat-Bahan-Materi-Gamifikasi-SA-5.png", caption: "Survey Results" },
          { src: "./image/Brainys-Project/Activity-Diagram-Templat-Alur-Tujuan-Pembelajaran-SA-6.png", caption: "User Needs Analysis" }
        ],
        ba: [
          { src: "./image/Brainys-Project/CustNeeds-ExpectResult-Personas-BA-1.png", caption: "Market Research Report" }
        ],
        pmo: [
          { src: "./image/Brainys-Project/Board-kanban-PMO-1.jpg", caption: "Project Timeline & Milestones" },
          { src: "./image/Brainys-Project/Board-kanban-PMO-2.jpeg", caption: "Project Timeline & Milestones" }
        ],
        techWriting: [
          { src: "./image/Brainys-Project/Blur_MoM-DailyStandup-Brainys-PMO-TW-1.png", caption: "Research Documentation" }
        ]
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
        web: [
          { src: "./image/Golf-Leaderboard-External-API-Website/Web-based-1-Homepage.png", caption: "Blog Homepage" },
          { src: "./image/Golf-Leaderboard-External-API-Website/Web-based-2-Schedule-page.png", caption: "Article Page" },
          { src: "./image/Golf-Leaderboard-External-API-Website/Web-based-2-Search-Schedule.png", caption: "Admin Dashboard" },
          { src: "./image/Golf-Leaderboard-External-API-Website/Web-based-3-Leaderboard-page.png", caption: "Admin Dashboard" }
        ]
      },
      description: t('projects.items.blogWebsite.fullDescription'),
      tools: t('projects.items.blogWebsite.tools'),
      fullDescription: t('projects.items.blogWebsite.fullDescription'),
      tags: ["Web-Based"]
    },
    // Product & Project Management Projects
    {
      title: t('projects.items.dedikasiLMS.title'),
      image: "./image/Dedikasi-Website-Project/Register-web-based.png",
      images: {
        web: [
          { src: "./image/Dedikasi-Website-Project/Profil-Student-Web-based-1.png", caption: "LMS Platform Interface" },
          { src: "./image/Dedikasi-Website-Project/Profil-Mentor-Web-based-2.png", caption: "Course Management" },
          { src: "./image/Dedikasi-Website-Project/Dashboard-Admin-Web-based-3.png", caption: "LMS Platform Interface" },
          { src: "./image/Dedikasi-Website-Project/Feedback-Web-based-4.png", caption: "Course Management" },
          { src: "./image/Dedikasi-Website-Project/Feedback-Mentor-Web-based-5.png", caption: "LMS Platform Interface" }
        ],
        pmo: [
          { src: "./image/Dedikasi-Website-Project/Jira-Commit-1-PMO-1.png", caption: "Product Roadmap" },
          { src: "./image/Dedikasi-Website-Project/Blur_Jira-Task-1-PMO-2.jpg", caption: "Sprint Planning Board" },
          { src: "./image/Dedikasi-Website-Project/Blur_Jira-Task-Stories-PMO-3.jpg", caption: "Product Roadmap" },
          { src: "./image/Dedikasi-Website-Project/Renacana-Sprint-PMO-4.png", caption: "Sprint Planning Board" },
          { src: "./image/Dedikasi-Website-Project/Sprint-retro-PMO-5.png", caption: "Product Roadmap" }
        ]
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
        sa: [
          { src: "./image/OASYS-School-Project/Oasys-School-(Desktop)-Business-Flow-SA-1.png", caption: "System Architecture Diagram" },
          { src: "./image/OASYS-School-Project/Oasys-School-(Mobile)-Business-Flow-SA-2.png", caption: "System Architecture Diagram" },
          { src: "./image/OASYS-School-Project/Funct-Req-OASYS-School-Features-SA-3.png", caption: "System Architecture Diagram" },
          { src: "./image/OASYS-School-Project/Activity-Diagram-Mengelola-nilai-di-Raport-Digital-SA-5.png", caption: "System Architecture Diagram" },
          { src: "./image/OASYS-School-Project/Activity-Diagram-Mengatur-Absensi-Murid-SA-6.png", caption: "System Architecture Diagram" },
          { src: "./image/OASYS-School-Project/Activity-Diagram-Membuat-Materi-Pembelajaran-SA-7.png", caption: "System Architecture Diagram" }
        ],
        ba: [
          { src: "./image/OASYS-School-Project/BA-1.png", caption: "Market Research Report" }
        ],
        pmo: [
          { src: "./image/OASYS-School-Project/Blur_MoM-DailyStandup-Oasys-School-PMO-TW-1.png", caption: "Project Timeline & Milestones" }
        ],
        techWriting: [
          { src: "./image/OASYS-School-Project/Manual-Book-Guideline-OASYS-School-Tech-Writing-1.png", caption: "Research Documentation" }
        ]
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
         data: [
          { src: "./image/TotalPayAmount-Prediction-Transjakarta-ARIMA/Total_Pay-Group-by-date.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/TotalPayAmount-Prediction-Transjakarta-ARIMA/Forecasting-Model-and-Save-to-CSV.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/TotalPayAmount-Prediction-Transjakarta-ARIMA/Train-Actual-Forcast.png", caption: "SLA Analytics Dashboard" },
          { src: "./image/TotalPayAmount-Prediction-Transjakarta-ARIMA/Fourteen-Day-Revenue-Forecast.png", caption: "SLA Analytics Dashboard" },
        ]
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

  // Helper function to render gallery sections
  const renderGallerySection = (title, icon, images, description) => {
    if (!images || images.length === 0) return null;
    
    return (
      <div className="mb-8">
        <h4 className="text-green-400 font-semibold mb-2 text-lg flex items-center gap-2">
          <span>{icon}</span> {title}
        </h4>
        <p className="text-sm text-slate-400 mb-3">{description}</p>
        <div className="space-y-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="relative group"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-auto rounded-lg border border-green-400/20 group-hover:border-green-400/50 transition-all duration-300"
              />
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-green-400 border border-green-400/30">
                {img.caption}
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
    
    // Split berdasarkan \n\n menjadi paragraf
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
                      {renderDescription(selectedProject.fullDescription || selectedProject.description)}
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