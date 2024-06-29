"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
// import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PBase",
    description: "Integrated platform for university projects and research papers",
    image: "/images/projects/111.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harywadhwa/pbase",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "QR Code generator",
    description: "Generates a qr code for any provided URL",
    image: "/images/projects/334.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harywadhwa/QRcode",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Let's you order from variety of clothes",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harywadhwa/Shopper-",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Speed Test Application",
    description: "Provides accurate internet speed by deploying realtime local servers",
    image: "/images/projects/222.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/harywadhwa/SpeedTestApplication-",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          // <motion.li
          //   key={index}
          //   variants={cardVariants}
          //   initial="initial"
          //   animate={isInView ? "animate" : "initial"}
          //   transition={{ duration: 0.3, delay: index * 0.4 }}
          // >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          // </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;