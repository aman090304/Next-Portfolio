"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>RESTful APIs</li>
        <li>PostgreSQL /SQL / MongoDB</li>
        <li>C/C++</li>
        <li>Python</li>
        <li>Version control</li>
        <li>Framer / Figma</li>
        <li>Java /Servlets /JSP</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NextJs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          BE - Computer Engineering At AISSMS Institure of Information
          Technology, Pune - 2025 Batch
        </li>
        <li>12th - Maharashtra State Board - 83%</li>
        <li>10th - Maharashtra State Board - 89%</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Udemy Full Stack Web Development</li>
        <li>NPTEL Programming In Java </li>
        <li>Oracle Database Programming with PL/SQL </li>
        <li>Arduino Basics</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white border-t-[#33353F]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center border-t-[#33353F] py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={400} height={500} alt="about-image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Creative individual who thrives on exploration and learning. As a
            full stack web developer, I am passionate about creating interactive
            and responsive web applications. I have experience with C++, Java,
            JavaScript, React, Redux, Node.js, Express, PostgreSQL, HTML, CSS,
            and Git. While I may be a fresher, I am committed to pushing my
            boundaries, collaborating effectively, and delivering user-centric
            solutions that leave a lasting impact. I am a quick learner, always
            eager to expand my knowledge and skill set. Excited to work with
            others, I am dedicated to crafting amazing applications. Let&apos;s
            connect and embark on a digital adventure together.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
