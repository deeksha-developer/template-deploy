// {template example.tsx data} cards

import { TimelineItem } from "./InterfaceData";

  
  export const cards = [
        { usage: "22k Use", name: "Olivia Kay", avatar: "/aa-1-1-2.svg" },
        { usage: "18k Use", name: "Lucas Max", avatar: "/aa-1-1-1.png" },
        { usage: "15k Use", name: "Jane Fox", avatar: "/aa-1-1-1.png" },
        { usage: "10k Use", name: "Alex Doe", avatar: "/aa-1-1-1.png" },
        { usage: "5k Use", name: "Mike Lee", avatar: "/aa-1-1-1.png" },
    ];

// {prompttemplatemodal.tsx data} templates
   export const templates = [
        {
            title: "Your AI Prompt",
            description: "Use pre-made templates to jumpstart creativity.",
            image: "",
        },
        {
            title: "Prompt Templates",
            description: "Crafted layouts for faster workflow.",
            image: "",
        },
        {
            title: "Creative Boost",
            description: "Enhance ideation with rich content.",
            image: "",
        },
    ];


 export  const timelineData: TimelineItem[] = [
  {
    date: "May 26, 2014",
    title: "Your AI Prompt Companion",
    tag: "FEATURE",
    link: "Explore multiple prompt directions with branching.",
    style: "special-card",
  },
  {
    date: "February 14, 2014",
    title: "Finished first MVP of passion project Project Name",
    tag: "PROJECT",
    link: "Explore multiple prompt directions with branching.",
    style: "special-card",
  },
  {
    date: "November 04, 2021",
    title: "Acquired a desk in workspace to start my own setup.",
    tag: "OFFICE",
    link: "Explore multiple prompt directions with branching.",
    style: "special-card",
  },

  {
    date: "October 08, 2020",
    title: "Started working as MERN Stack Developer at Acme Lab",
    tag: "JOB",
    link: "Explore multiple prompt directions with branching.",
    style: "special-card",
  }
];
    

export const tagColors: Record<string, string> = {
  PROJECT: "bg-[#BBA5F4]", 
  OFFICE: "bg-[#BBA5F4]",
  AWARD: "bg-[#BBA5F4]",
  JOB: "bg-[#552ACB]", 
  CERTIFICATION: "bg-[#BBA5F4]",
  FEATURE:
    "bg-gradient-to-br from-[#BBA5F4] via-[#552ACB] to-[#653AD8] text-white", // gradient includes new shade
};