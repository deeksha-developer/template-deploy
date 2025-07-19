
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { tagColors, timelineData } from "../../utils/contant";


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
      <button
        className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg focus:outline-none"
        onClick={onClose ? onClose : () => window.history.back()}
        aria-label="Close"
      >
        &times;
      </button>
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
