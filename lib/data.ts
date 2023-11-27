import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import courseupp from "@/public/courseupp.png";
import threads from "@/public/threads.png";
import portfolio from "@/public/portfolio.png";
import landingpage from "@/public/landingpage.png";
import native from "@/public/native.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CourseUp",
    description:
      "An Online Course Upload Application. Implemented both Student and Teacher Mode.",
    tags: ["React", "Next.js 13", "Typescript", "Stripe", "Prisma", "Tailwind Css", "MySQL"],
    imageUrl: courseupp,
    href:"https://course-fla14wzra-albinbinoy890-gmailcom.vercel.app/"
  },
  {
    title: "Social Chat App",
    description:
      "A Social Chatting Application,Like Threads App.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "MongoDB"],
    imageUrl: threads,
    href:"https://thread-mu.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description:
      "Current Website You Are Looking At.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    imageUrl: portfolio,
    href:"/"
  },
    {
    title: "Landing Page",
    description:
      "Beautiful Landing Page For an Educational Platform.",
    tags: ["React","Tailwind CSS", "Vite"],
      imageUrl: landingpage,
    href:"https://65607484ced67222ef384959--thunderous-buttercream-b40211.netlify.app/"
  },
  {
    title: "Jobify",
    description:
      "A Job Searching React Native Application.",
    tags: ["React Native", "Axios", "React Native Stylesheet"],
    imageUrl: native,
    href:"https://github.com/Albin9699/react_native/blob/main/README.md"
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Next.js",
  "TypeScript",
  "RESTful APIs",
  "Git",
  "Github",
  "Tailwind Css",
  "Scss",
  "Jest",
  "Mongo-DB",
  "Mysql",
  "Prisma",
  "Framer Motion",
  "Stripe",
  "Shadcn",
  "React Native",
  "Figma",
  "Vite",
  "Cloudinary",
  "Vercel",
  "Netlify"
] as const;