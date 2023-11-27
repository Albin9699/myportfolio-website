"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const { ref } = useSectionInView("About");

  
  return (
    <motion.section
      ref={ref}
      className="mb-40 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a self-taught{" "}
        <span className="font-medium">Front-end Developer</span>, with experience in developing user-friendly and responsive web applications with{" "}
        <span className="font-medium">React js(Next js)</span>.{" "}
        <span className="italic">Committed to </span>continuous learning and staying up-to-date with the latest industry trends. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Tailwind Css, and Mysql
        </span>
        . I am also familiar with TypeScript and Prisma. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Graphic Designing and Javascript Algorithms.</span>
      </p>
    </motion.section>
  );
}