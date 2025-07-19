import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    date: "2022-01-01",
    title: "Your AI Prompt Companion",
    description: "Explore multiple prompt directions with branching.",
    tag: "JOB",
    style: "special-card",
  },
  {
    date: "2022-03-15",
    title: "Completed Project X",
    tag: "PROJECT",
    style: "default",
  },
  {
    date: "2022-06-01",
    title: "Completed Project Y",
    tag: "PROJECT",
    style: "default",
  },
];

const MobileTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;
      let found = 0;
      refs.current.forEach((el, idx) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - containerTop < 100) {
            found = idx;
          }
        }
      });
      setActiveIndex(found);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (container) container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative py-8">
      <div className="absolute left-6 top-0 h-full w-[2px] bg-indigo-500 rounded-full z-0" />

      <div
        ref={containerRef}
        className="relative h-[50vh] overflow-y-auto scroll-smooth px-4"
      >
        {timelineData.map((item, index) => {
          const isActive = index === activeIndex;
          const isSpecial = item.style === "special-card";

          return (
            <div
              key={index}
              className="relative mb-16 flex items-start gap-4"
            >
              <div className="w-4 h-4 rounded-full border-[3px] border-indigo-500 bg-white z-10 relative left-[6px] top-[6px]" />
              <motion.div
                ref={(el:any) => (refs.current[index] = el)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl p-6 w-full backdrop-blur-lg shadow-xl transition duration-300 ease-in-out ${
                  isSpecial
                        ? " text-white"
                        : ` border-t-4 border-indigo-500`
                    } ${
                      !isActive
                        ? "opacity-30 blur-sm scale-[0.98] bg-transparent"
                        : "opacity-100 blur-0 scale-100 bg-gradient-to-br from-[#BBA5F4] via-[#552ACB] to-[#653AD8]"
                    }`}
              >
                {isSpecial ? (
                  <div className="relative flex flex-col h-[180px] min-h-[180px]">
                    <h2 className="text-white text-[1.7rem] font-bold mb-2 leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-white/90 text-base mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-end justify-between w-full absolute bottom-0 left-0 px-2 pb-2">
                      <span className="text-white/80 text-base">
                        {item.date}
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="text-xs font-semibold opacity-70">
                      {item.date}
                    </span>
                    <p className="text-sm font-semibold mb-1">{item.title}</p>
                    <span className="text-xs font-bold px-2 py-1 bg-indigo-100 text-indigo-600 rounded-sm uppercase">
                      {item.tag}
                    </span>
                    <p className="mt-3 text-indigo-600 text-sm font-medium cursor-pointer hover:underline">
                      See Project
                    </p>
                  </>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTimeline;
