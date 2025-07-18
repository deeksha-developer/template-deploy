// import  {motion}  from "framer-motion";
// import { useRef, useState, useEffect, JSX } from "react";

// interface TimelineItem {
//   date: string;
//   title: string;
//   tag: string;
//   link: string;
//   style?: string;
// }

// const tagColors: Record<string, string> = {
//   PROJECT: 'bg-[#BBA5F4]', // light purple
//   OFFICE: 'bg-[#BBA5F4]',
//   AWARD: 'bg-[#BBA5F4]',
//   JOB: 'bg-[#552ACB]', // new shade for JOB
//   CERTIFICATION: 'bg-[#BBA5F4]',
//   FEATURE: 'bg-gradient-to-br from-[#BBA5F4] via-[#552ACB] to-[#653AD8] text-white', // gradient includes new shade
// };

// const timelineData: TimelineItem[] = [
//   {
//     date: "May 26, 2014",
//     title: "Your AI Prompt Companion",
//     tag: "FEATURE",
//     link: "Explore multiple prompt directions with branching.",
//     style: "special-card",
//   },
//   {
//     date: "February 14, 2014",
//     title: "Finished first MVP of passion project Project Name",
//     tag: "PROJECT",
//       link: "Explore multiple prompt directions with branching.",
//     style: "special-card",
//   },
//   {
//     date: "November 04, 2021",
//     title: "Acquired a desk in workspace to start my own setup.",
//     tag: "OFFICE",
//       link: "Explore multiple prompt directions with branching.",
//     style: "special-card",
//   },
//   {
//     date: "March 19, 2021",
//     title:
//       'Awarded Top 7 badge for having at least one post featured in the weekly "must-reads" from Dev.to',
//     tag: "AWARD",
//      link: "Explore multiple prompt directions with branching.",
//     style: "special-card",
//   },
//   {
//     date: "October 08, 2020",
//     title: "Started working as MERN Stack Developer at Acme Lab",
//     tag: "JOB",
//      link: "Explore multiple prompt directions with branching.",
//     style: "special-card",
//   },

// //     date: "2023",
// //     title: "Your AI Prompt Companion",
// //     tag: "FEATURE",
// //     link: "Explore multiple prompt directions with branching.",
// //     style: "special-card",
// //   },
//   // add more items if you like
// ];

// export default function VerticalTimeline(): JSX.Element {
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const refs = useRef<(HTMLDivElement | null)[]>([]);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [lineHeight, setLineHeight] = useState<number>(0);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const callback = (entries: IntersectionObserverEntry[]) => {
//       const visibleEntries = entries.filter((entry) => entry.isIntersecting);
//       if (visibleEntries.length === 0) return;

//       const containerBox = containerRef.current!.getBoundingClientRect();
//       const centerEntry = visibleEntries.reduce((closest, entry) => {
//         const box = entry.boundingClientRect;
//         const centerDistance = Math.abs(
//           box.top + box.height / 2 - (containerBox.top + containerBox.height / 2)
//         );
//         const closestDistance = Math.abs(
//           closest.boundingClientRect.top +
//             closest.boundingClientRect.height / 2 -
//             (containerBox.top + containerBox.height / 2)
//         );
//         return centerDistance < closestDistance ? entry : closest;
//       });

//       const newIndex = refs.current.findIndex((ref) => ref === centerEntry.target);
//       if (newIndex !== -1 && newIndex !== activeIndex) {
//         setActiveIndex(newIndex);
//       }
//     };

//     const observer = new IntersectionObserver(callback, {
//       root: containerRef.current,
//       rootMargin: "0px",
//       threshold: 0.5,
//     });

//     refs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, [activeIndex]);

//   useEffect(() => {
//     if (activeIndex !== null && refs.current[activeIndex] && containerRef.current) {
//       const containerRect = containerRef.current.getBoundingClientRect();
//       const nodeRect = refs.current[activeIndex]!.getBoundingClientRect();
//       const distance = nodeRect.top - containerRect.top + nodeRect.height / 2;
//       setLineHeight(distance);
//     }
//   }, [activeIndex]);

//   return (
//     <div className="hidden md:block min-h-screen py-16 px-4 md:px-16">
//       {/* Outer wrapper to position the background line relative to all cards */}
//       <div className="relative max-w-3xl mx-auto">
//         {/* White background line */}
// <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] bg-gray-300 top-0 bottom-0 rounded-full" />

// {/* Indigo progress line */}
// <div
//   className="absolute left-1/2 transform -translate-x-1/2 w-[4px] bg-indigo-500  duration-300 ease-out rounded-full"
//   style={{ height: lineHeight }}
// />

//         {/* Scrollable container */}
//         <div
//           ref={containerRef}
//           className="relative h-[80vh] overflow-y-auto scroll-smooth"
//         >
//           {timelineData.map((item, index) => {
//             const isActive = index === activeIndex;
//             const isSpecial = item.style === "special-card";
//             return (
//               <div key={index} className="relative mb-16">
//                 <div
//                   className={`absolute left-1/2 transform w-6 h-6 rounded-full z-10 transition-all duration-300 flex items-center justify-center ${
//                     isSpecial
//                       ? "bg-gradient-to-br from-[#BBA5F4] via-[#552ACB] to-[#653AD8] border-none"
//                       : index <= activeIndex
//                         ? "bg-indigo-500 border-indigo-500 border-[3px]"
//                         : "bg-white border-indigo-200 border-[3px]"
//                   }`}
//                 >
//                   {isSpecial && (
//                     <span className="block w-3 h-3 rounded-full bg-white/60" />
//                   )}
//                 </div>
//                 <div
//                   ref={(el:any) => (refs.current[index] = el)}
//                   className={`mt-4 w-full md:w-1/2 relative z-0 ${
//                     index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
//                   }`}
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: false }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className={`rounded-2xl p-6 shadow-xl w-full backdrop-blur-md relative transition duration-300 ease-in-out ${
//                       isSpecial
//                         ? "bg-gradient-to-br from-[#BBA5F4] via-[#552ACB] to-[#653AD8] text-white"
//                         : `${tagColors[item.tag] || 'bg-white'} border-t-4 border-indigo-500`
//                     } ${!isActive ? "opacity-30 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100"}`}
//                   >
//                     {/* <span
//                       className={`text-xs uppercase tracking-wider font-semibold block mb-2 ${
//                         item.style === "special-card"
//                           ? "text-white/80"
//                           : "text-gray-500"
//                       }`}
//                     >
//                       {item.date}
//                     </span> */}
//                     <p
//                       className={`font-medium text-sm mb-2 ${
//                         item.style === "special-card"
//                           ? "text-white"
//                           : "text-gray-800"
//                       }`}
//                     >
//                       {item.title}
//                     </p>
//                     {item.style === "special-card" ? (
//                       <div className="relative flex flex-col justify-between w-[230px] h-[180px] min-h-[180px]">
//                         <h2 className="text-white text-[1.7rem] font-bold mb-2 leading-tight">Your AI Prompt Companion</h2>
//                         <p className="text-white/90 text-base mb-4">Explore multiple prompt directions with branching.</p>
//                         <div className="flex items-end justify-between w-full absolute bottom-0 left-0 px-2 pb-2">
//                           <span className="text-white/80 text-base">Start from {item.date}</span>
//                           <div className="relative flex items-center">
//                             <div className="w-10 h-10 bg-gradient-to-br from-[#6b46c1] via-[#805ad5] to-[#9f7aea] rounded-full flex items-center justify-center shadow-lg">
//                               <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                                 <circle cx="12" cy="12" r="10" fill="#7c5cff" opacity="0.2" />
//                                 <path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
//                                 <circle cx="12" cy="12" r="2.5" fill="#fff" />
//                               </svg>
//                             </div>
//                             <div className="w-14 h-2 bg-gradient-to-r from-[#7c5cff] to-[#fff0] ml-[-10px] rounded-full" />
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <>
//                         <span className="text-xs font-bold px-2 py-1 bg-indigo-100 text-indigo-600 rounded-sm uppercase">
//                           {item.tag}
//                         </span>
//                         <p className="mt-3 text-indigo-500 text-sm font-medium cursor-pointer hover:underline">
//                           {item.link}
//                         </p>
//                       </>
//                     )}
//                   </motion.div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>

//   );
// }

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TimelineItem {
  date: string;
  title: string;
  tag: string;
  link: string;
  style?: string;
}

const tagColors: Record<string, string> = {
  PROJECT: "bg-[#BBA5F4]", 
  OFFICE: "bg-[#BBA5F4]",
  AWARD: "bg-[#BBA5F4]",
  JOB: "bg-[#552ACB]", 
  CERTIFICATION: "bg-[#BBA5F4]",
  FEATURE:
    "bg-gradient-to-br from-[#BBA5F4] via-[#552ACB] to-[#653AD8] text-white", // gradient includes new shade
};

const timelineData: TimelineItem[] = [
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

interface VerticalTimelineProps {
  onClose?: () => void;
}

export default function VerticalTimeline({ onClose }: VerticalTimelineProps = {}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [lineHeight, setLineHeight] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length === 0) return;

      const containerBox = containerRef.current!.getBoundingClientRect();
      const centerEntry = visibleEntries.reduce((closest, entry) => {
        const box = entry.boundingClientRect;
        const centerDistance = Math.abs(
          box.top +
            box.height / 2 -
            (containerBox.top + containerBox.height / 2)
        );
        const closestDistance = Math.abs(
          closest.boundingClientRect.top +
            closest.boundingClientRect.height / 2 -
            (containerBox.top + containerBox.height / 2)
        );
        return centerDistance < closestDistance ? entry : closest;
      });

      const newIndex = refs.current.findIndex(
        (ref) => ref === centerEntry.target
      );
      if (newIndex !== -1 && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    const observer = new IntersectionObserver(callback, {
      root: containerRef.current,
      rootMargin: "0px",
      threshold: 0.5,
    });

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeIndex]);

  useEffect(() => {
    if (
      activeIndex !== null &&
      refs.current[activeIndex] &&
      containerRef.current
    ) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const nodeRect = refs.current[activeIndex]!.getBoundingClientRect();
      const distance = nodeRect.top - containerRect.top + nodeRect.height / 2;
      setLineHeight(distance);
    }
  }, [activeIndex]);

  return (
    <div className="relative min-h-screen w-auto bg-black md:w-[800px] flex flex-col items-center justify-center">
     
      <img
        src="/sphere.png"
        alt="Sphere background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
      />
      {/* Close button (for modal usage) */}
      <button
        className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg focus:outline-none"
        onClick={onClose ? onClose : () => window.history.back()}
        aria-label="Close"
      >
        &times;
      </button>
      {/* Main content */}
      <div className="relative z-10 w-full">
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px]  top-0 bottom-0 rounded-full" />

          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-[4px] bg-indigo-500  duration-300 ease-out rounded-full"
            style={{ height: lineHeight }}
          />

          <div
            ref={containerRef}
            className="relative h-[80vh] overflow-y-auto scroll-smooth"
          >
            {timelineData.map((item, index) => {
              const isActive = index === activeIndex;
              const isSpecial = item.style === "special-card";
              return (
                <div key={index} className="relative mb-16">
                  <div
                    className={`absolute left-1/2 transform w-6 h-6 rounded-full z-10 transition-all duration-300 flex items-center justify-center ${
                      isSpecial
                        ? "bg-gradient-to-br from-[#BBA5F4] via-[#552ACB] to-[#653AD8] border-none"
                        : index <= activeIndex
                        ? "bg-indigo-500 border-indigo-500 border-[3px]"
                        : "bg-white border-indigo-200 border-[3px]"
                    }`}
                  >
                    {isSpecial && (
                      <span className="block w-3 h-3 rounded-full bg-white/60" />
                    )}
                  </div>
                  <div
                    ref={(el: any) => (refs.current[index] = el)}
                    className={`mt-4 w-full md:w-1/2 relative z-0 ${
                      index % 2 === 0
                        ? "md:ml-auto md:pl-8"
                        : "md:mr-auto md:pr-8"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`rounded-2xl p-6 w-full backdrop-blur-lg bg-white/10 shadow-xl transition duration-300 ease-in-out ${
                        isSpecial
                          ? " text-white"
                          : `${
                              tagColors[item.tag] || "bg-white"
                            } border-t-4 border-indigo-500`
                      } ${
                        !isActive
                          ? "opacity-30 blur-sm scale-[0.98] bg-transparent"
                          : "opacity-100 blur-0 scale-100 bg-gradient-to-br from-[#BBA5F4] via-[#552ACB] to-[#653AD8]"
                      }`}
                    >

                      {item.style === "special-card" && (
                        <div className="relative flex flex-col h-[180px] min-h-[180px]">
                          <h2 className="text-white text-[1.7rem] font-bold mb-2 leading-tight">
                            Your AI Prompt Companion
                          </h2>
                          <p className="text-white/90 text-base mb-4">
                            Explore multiple prompt directions with branching.
                          </p>
                          <div className="flex items-end justify-between w-full absolute bottom-0 left-0 px-2 pb-2">
                            <span className="text-white/80 text-base">
                              {item.date}
                            </span>
                          
                          </div>
                        </div>
                      ) }
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
