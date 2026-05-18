import project from "../assets/project.jpg"
import proLinkedIn from "../assets/proLinkedInConnect_banner.png"
import wanderlust from "../assets/wanderLust_banner.png"

export const projectsData = [
  {
    id: 1,
    title: "WanderLust",
    desc: "Built a full-stack property listing platform with maps, reviews, and image uploads.",
    image: wanderlust,
    techs: ["HTML", "Bootstrap","CSS","Node.js","Express.js","MongoDB"],
    live: "https://wanderlust-5bf3.onrender.com/listings",
    github: "https://github.com/firdoshalam7786/WanderLust",
  },
  {
    id: 2,
    title: "ProConnect – LinkedIn Clone",
    desc: "Full-stack LinkedIn clone with authentication, posts, connections, and profile management.",
    image: proLinkedIn,
    techs: ["HTML","CSS","React.js", "Redux", "Node.js","MongoDB"],
    live: "https://pro-connect-linked-clone-coding-nin.vercel.app/",
    github: "https://github.com/firdoshalam7786/proConnectLinkedCloneCodingNinjas",
  },
  {
    id: 3,
    title: "E-commerce App",
    desc: "Full stack e-commerce app with authentication and cart.",
    image: project,
    techs: ["React", "Node", "MongoDB"],
    live: "#",
    github: "#",
  },
];
