"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Game-hub Project",
    description: "Search different type of games with three styles of filters",
    image: "/images/game-hub.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chyashp/Game-Hub-Project.git",
    previewUrl:
      "https://game-hub-project-git-main-yashpreet-kaurs-projects.vercel.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Tracks expenses in different categories",
    image: "/images/expense-tracker.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/chyashp/expense-tracker.git",
    previewUrl: "https://expense-tracker-five-jet.vercel.app",
  },
  {
    id: 3,
    title: "Pixabay Image-finder",
    description: "We can find a requested a specific number of images upto 50",
    image: "/images/pixabay-img-finder.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chyashp/pixabay-image-finder.git",
    previewUrl: "https://pixabay-image-finder-phi.vercel.app/",
  },
  {
    id: 4,
    title: "Multistep-Form",
    description: "This project takes multistep form details with pixabay",
    image: "/images/multistep-form.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/chyashp/multistep-form.git",
    previewUrl: "https://multistep-form-six-gray.vercel.app/",
  },
  {
    id: 5,
    title: "Instagram-clone",
    description:
      "Provides authentication functionality with firebase and instagram home page with react and redux",
    image: "/images/insta-clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chyashp/Instagram-clone.git",
    previewUrl: "https://instagram-clone-psi-jet.vercel.app/",
  },
  {
    id: 6,
    title: "Image search Project",
    description:
      "Searches numerous images based on what we type , also shows the author's name , number of likes, views and downloads",
    image: "/images/img-finder.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chyashp/image-search.git",
    previewUrl: "https://image-search-lime-five.vercel.app/",
  },
  {
    id: 7,
    title: "Youtube clone project",
    description:
      "This is a Youtube clone project with home page, video functionality and signIn page",
    image: "/images/youtube-clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chyashp/yash-youtube-project.git",
    previewUrl: "https://yash-youtube-project.vercel.app/",
  },
  {
    id: 8,
    title: "React Portfolio website",
    description: "Portfolio website made with React and Framer-motion",
    image: "/images/react-portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chyashp/yash-portfolio-website.git",
    previewUrl: "https://yash-portfolio-website.vercel.app/",
  },
  {
    id: 9,
    title: "Johnview Village Website",
    description:
      "Johnsview Village's single page application made with React, having signIn and signUp functionality with firebase and maintains global state with Redux",
    image: "/images/johnsview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chyashp/johnsview-village.ca.git",
    previewUrl: "https://johnsview-village-ca.vercel.app/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((item, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={item.id}
              imgUrl={item.image}
              title={item.title}
              description={item.description}
              gitUrl={item.gitUrl}
              previewUrl={item.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
