import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 flex items-center justify-center px-6 md:px-20 relative z-10"
    >
      {/* Glassmorphism Container */}
      <div className="max-w-5xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_0_25px_rgba(34,197,94,0.2)] p-10 md:p-14 text-center">
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-green-400 drop-shadow-[0_0_10px_#22c55e]">
          About Me
        </h2>

        {/* Content */}
        <div className="text-gray-100 text-lg leading-relaxed space-y-5 text-justify">
          <p>
            Hello! I'm <span className="text-green-400 font-semibold">Sufiana</span>, 
            a <span className="font-semibold">fresh graduate in Information Systems </span> 
            with a strong passion for{" "}
            <span className="text-green-400 font-semibold">System Analysis</span>,{" "}
            <span className="text-green-400 font-semibold">Product Management</span>, and{" "}
            <span className="text-green-400 font-semibold">Project Management</span>. 
            I believe that great systems and products are built through a deep understanding 
            of user needs and effective processes.
          </p>

          <p>
            I'm a <span className="text-green-400 font-semibold">Certified System Analyst (BNSP) </span> 
            with hands-on experience in managing digital projects and products. 
            During my internship as an <span className="font-semibold">Associate Product Manager </span> 
            at a startup, I collaborated with cross-functional teammates using the{" "}
            <span className="font-semibold">Agile methodology</span> — from product planning 
            and requirements analysis to ensuring that every feature was developed 
            with clear and measurable objectives. 
            I also served as a <span className="font-semibold">Project Manager </span> in
            website development project, where I learned how to coordinate teams 
            and maintain a balance between time, quality, and resources.
          </p>

          <p>
            I'm known as someone who is{" "}
            <span className="font-semibold">efficient, collaborative, and highly adaptable</span>. 
            I love learning new things, especially discovering how technology can be used 
            to <span className="text-green-400 font-semibold">optimize workflows</span>. 
            I enjoy exploring <span className="font-semibold">AI and the latest technologies </span> 
            to develop tools that help automate tasks, and create 
            <span className="font-semibold"> simple batch scripts</span> to simplify repetitive tasks 
            and improve productivity.
          </p>

          <p>
            For me, being a system analyst, project manager, or product manager is not just about leading a team, 
            but about delivering{" "}
            <span className="text-green-400 font-semibold">solutions that truly make an impact </span> 
            through the right technology and efficient processes. 
            I'm always excited to learn, grow, and contribute to building systems 
            and products that create <span className="font-semibold">positive change</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;