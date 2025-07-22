"use client";
import React from "react";
import { templates } from "../../utils/contant";
import { PromptTemplateModalProps } from "../../utils/InterfaceData";

const PromptTemplateModal: React.FC<PromptTemplateModalProps> = ({
    open,
    onClose,
}) => {
    const [index, setIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const [slideDir, setSlideDir] = React.useState(0);

    React.useEffect(() => {
        if (open) setIndex(0);
    }, [open]);

    if (!open) return null;

    const prevIndex = (index - 1 + templates.length) % templates.length;
    const nextIndex = (index + 1) % templates.length;

    const handleNav = (dir: number) => {
        if (animating) return;
        setSlideDir(dir);
        setAnimating(true);
        setTimeout(() => {
            setIndex((i) =>
                dir === 1
                    ? (i - 1 + templates.length) % templates.length
                    : (i + 1) % templates.length
            );
            setAnimating(false);
            setSlideDir(0);
        }, 400);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0b1f] backdrop-blur-md w-full md:w-[83%] m-[0px] md:m-[88px] rounded-[24px]">
            <button
                className="absolute top-6 right-8 text-[#b1b1c6] hover:text-white text-3xl z-50"
                onClick={onClose}
                aria-label="Close"
            >
                &times;
            </button>

            <div className="relative w-[900px] max-w-[96vw] h-[360px] flex items-center justify-center perspective-[1200px]  overflow-hidden">
                <button
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-4xl text-[#b1b1c6] hover:text-white z-50"
                    onClick={() => handleNav(-1)}
                    disabled={animating}
                    style={{
                        opacity: animating ? 0.5 : 1,
                        pointerEvents: animating ? "none" : "auto",
                    }}
                >
                    &#60;
                </button>
                <div
                    className="absolute left-1/2 top-1/2 w-[320px] h-[240px] rounded-2xl text-white text-xl flex items-center justify-center"
                    style={{
                        background:
                            "linear-gradient(135deg, #693bafcc 0%, #6d4acbcc 40%, #7c63d3cc 100%)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        transform: `translate(-170%, -50%) scale(0.85) rotateY(8deg)`,
                        zIndex: 1,
                        opacity: animating ? 0 : 0.7,
                        transition: "opacity 0.4s, transform 0.4s",
                    }}
                >
                    <span
                        style={{
                            color: "#fff",
                            fontWeight: 600,
                            textShadow:
                                "0 0 12px #6d4acb, 0 0 24px #7c63d3, 0 2px 8px #6d4acb88",
                            filter: "blur(6px)",
                        }}
                    >
                        {templates[prevIndex].title}
                    </span>
                </div>
                <div
                    className="absolute left-1/2 top-1/2 w-[380px] h-[268px] rounded-2xl px-8 py-6 flex flex-col justify-between shadow-xl"
                    style={{
                        background:
                            "linear-gradient(135deg, #693baf 0%, #6d4acb 40%, #7c63d3 100%)",
                        transform: animating
                            ? `translate(${
                                  slideDir === 1 ? "-100%" : "100%"
                              }, -50%) scale(1) rotateY(0deg)`
                            : `translate(-50%, -50%) scale(1) rotateY(0deg)`,
                        opacity: animating ? 0 : 1,
                        zIndex: 2,
                        transition:
                            "transform 0.6s cubic-bezier(0.77,0,0.175,1), opacity 0.6s cubic-bezier(0.77,0,0.175,1)",
                        boxShadow:
                            "0 0 0 1px #a18aff, 0 10px 30px 0 rgba(0,0,0,0.3)",
                        color: "#fff",
                    }}
                >
                    <div className="flex items-center gap-6 mb-2">
                        <div className="relative w-[8.5rem] h-14 flex items-center justify-center">
                            <img
                                src="/UnionIcon.svg"
                                alt="Union"
                                className="absolute top-[-2px] left-[-40px] w-[7rem] h-16"
                                style={{ zIndex: 1 }}
                            />
                            <img
                                src="/Gift-Icon.svg"
                                alt="Gift"
                                className="absolute top-2 left-[1.5rem] w-10 h-10"
                                style={{ zIndex: 2 }}
                            />
                        </div>
                    </div>

                    <h2
                        className="text-[2.5rem] font-bold leading-snug"
                        style={{ color: "#fff" }}
                    >
                        {templates[index].title}
                    </h2>

                    <p className="text-sm opacity-80" style={{ color: "#fff" }}>
                        {templates[index].description}
                    </p>
                </div>

                <button
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-4xl text-[#b1b1c6] hover:text-white z-50"
                    onClick={() => handleNav(1)}
                    disabled={animating}
                    style={{
                        opacity: animating ? 0.5 : 1,
                        pointerEvents: animating ? "none" : "auto",
                    }}
                >
                    &#62;
                </button>
                <div
                    className="absolute left-1/2 top-1/2 w-[320px] h-[240px] rounded-2xl bg-[#ffffff0d] backdrop-blur-sm text-white text-xl flex items-center justify-center"
                    style={{
                        background:
                            "linear-gradient(135deg, #693bafcc 0%, #6d4acbcc 40%, #7c63d3cc 100%)",
                        transform: `translate(70%, -50%) scale(0.85) rotateY(-8deg)`,
                        zIndex: 1,
                        opacity: animating ? 0 : 0.25,
                        filter: "blur(6px)",
                        transition: "opacity 0.4s, transform 0.4s",
                    }}
                >
                    {templates[nextIndex].title}
                </div>
            </div>
        </div>
    );
};

export default PromptTemplateModal;
