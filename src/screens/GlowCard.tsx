"use client";

import { XIcon } from "lucide-react";
import React, { useState } from "react";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { Button } from "../components/ui/glowCommon/button";
import { Card, CardContent } from "../components/ui/glowCommon/card";
import { cards } from "../utils/contant";
import { getCardStyle } from "../utils/StyleData";

export const GlowCard = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

  
    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % cards.length);
    };

   
    // Motion  effects
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-300, 0, 300], [-10, 0, 10]);

    return (
        <div className="bg-[#03061c] flex flex-row justify-center w-full">
            <div className="bg-[#03061c] border-[40px] border-solid border-transparent w-[1024px] h-[768px]">
                <div className="relative h-[900px]">
                    <img
                        className="absolute w-[321px] h-[321px] top-[223px] left-[351px]"
                        alt="Blur"
                        src="/blur.png"
                    />
                    <img
                        className="absolute w-[732px] h-[732px] top-[11px] left-[149px]"
                        alt="Sphere"
                        src="/sphere.png"
                    />

                    <div className="absolute w-[1024px] h-[900px] top-0 left-[-2px] md:left-[-168px] lg:left-0">
                        <AnimatePresence mode="wait" custom={direction}>
                            {[0, 1, 2].map((offset) => {
                                const index =
                                    (activeIndex + offset) % cards.length;
                                const cardData = cards[index];
                                const style = getCardStyle(offset);

                                if (offset === 0) {
                                    return (
                                        <motion.div
                                            key={`${index}-${offset}`}
                                            drag="x"
                                            style={{
                                                x,
                                                rotate,
                                                touchAction: "pan-y",
                                            }}
                                            dragConstraints={{
                                                left: 0,
                                                right: 0,
                                            }}
                                            onDragEnd={(e: any, info: any) => {
                                                if (info.offset.x > 120)
                                                    handlePrev();
                                                else if (info.offset.x < -120)
                                                    handleNext();
                                            }}
                                            initial={{
                                                x: direction > 0 ? 300 : -300,
                                                opacity: 0,
                                                rotate: direction > 0 ? 5 : -5,
                                            }}
                                            animate={{
                                                x: 0,
                                                opacity: 1,
                                                rotate: 0,
                                            }}
                                            exit={{
                                                x: direction > 0 ? -300 : 300,
                                                opacity: 0,
                                                rotate:
                                                    direction > 0 ? -10 : 10,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 25,
                                            }}
                                            className="absolute"
                                        >
                                            <Card
                                                className={`flex flex-col md:w-[437px] md:h-[505px] w-[306px] h-[356px] items-start gap-3  p-16px md:p-[30px] absolute ${style.top} ${style.left} rounded-[35px] overflow-hidden ${style.rotation} ${style.blur} ${style.zIndex} [background:radial-gradient(50%_50%_at_50%_50%,rgba(154,114,253,0.1)_0%,rgba(255,255,255,0.1)_100%)] backdrop-blur-[65px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(65px)_brightness(100%)]`}
                                            >
                                                <CardContent className="p-0 w-full h-full">
                                                    <div className="w-[312px] h-[312px] top-[66px] left-[239px] rounded-[156px] bg-[linear-gradient(141deg,rgba(107,96,234,0.3)_0%,rgba(195,118,196,0.3)_100%)] absolute blur-[27px]" />
                                                    <div className="w-[196px] h-[196px] top-[392px] left-[79px] rounded-[98px] bg-[linear-gradient(141deg,rgba(255,201,83,0.5)_0%,rgba(191,124,0,0.12)_100%)] absolute blur-[27px]" />
                                                    <div className="relative self-stretch bg-[linear-gradient(141deg,rgba(255,178,102,1)_0%,rgba(233,118,111,1)_49%,rgba(192,67,80,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] font-semibold text-[42px] md:text-[62px] text-center leading-[56px]">
                                                        {cardData.usage}
                                                    </div>
                                                    <div className="flex flex-col w-[303px] md:w-[361px] h-[402px] items-start gap-5 relative">
                                                        <div className="flex flex-col h-[316px] md:h-[458px] items-center justify-center gap-3.5 relative self-stretch w-full mb-[-56px]">
                                                            <div className="absolute w-[248px] h-[260px] top-[88px] left-[52px] rounded-[124px/130px] blur-[27px] bg-[linear-gradient(141deg,rgba(169,161,255,0.5)_0%,rgba(254,189,255,0.5)_100%)]" />
                                                            <img
                                                                className={`${style.imageWidth} ${style.imageHeight} ${style.imageRotation} relative object-cover`}
                                                                alt="Profile avatar"
                                                                src={
                                                                    cardData.avatar
                                                                }
                                                            />
                                                            <div className="absolute w-[312px] h-[111px] top-[257px] left-[39px] rounded-[156px/55.5px] blur-[27px] bg-[linear-gradient(141deg,rgba(107,96,234,1)_0%,rgba(195,118,196,1)_100%)]" />
                                                            <div className="relative w-[319px] font-bold text-white text-[42px] text-center leading-normal">
                                                                {cardData.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute w-[362px] top-[528px] left-10 [-webkit-text-stroke:1px_#ffffff4c] font-bold text-transparent text-[85px] whitespace-nowrap">
                                                        AWARDS
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    );
                                }

                                return (
                                    <div
                                        key={`${index}-${offset}`}
                                        className={`flex flex-col md:w-[437px] md:h-[505px] w-[306px] h-[356px] items-start gap-3 p-4 md:p-[30px] absolute ${style.top} ${style.left} rounded-[35px] overflow-hidden ${style.rotation} ${style.blur} ${style.zIndex} [background:radial-gradient(50%_50%_at_50%_50%,rgba(154,114,253,0.1)_0%,rgba(255,255,255,0.1)_100%)]`}
                                    >
                                        <CardContent className="p-0 w-full h-full"></CardContent>
                                    </div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    <Button
                        onClick={handlePrev}
                        variant="ghost"
                        size="icon"
                        className="absolute top-[347px] left-[33px] p-0 h-auto w-auto md:top-[347px] md:left-[33px] top-[50%] left-2 -translate-y-1/2 z-50"
                        aria-label="Previous"
                        style={{ minWidth: 40, minHeight: 40 }}
                    >
                        <img
                            className="w-[44px] h-[44px] md:w-[74px] md:h-[74px]"
                            alt="Previous"
                            src="/linear---arrows---alt-arrow-left.svg"
                        />
                    </Button>
                    <Button
                        onClick={handleNext}
                        variant="ghost"
                        size="icon"
                        className="absolute top-[352px] right-[34px] p-0 h-auto w-auto md:top-[352px] md:right-[34px] top-[38%] md:top-[50%] right-2 -translate-y-1/2 z-50"
                        aria-label="Next"
                        style={{ minWidth: 40, minHeight: 40 }}
                    >
                        <img
                            className="w-[44px] h-[44px] md:w-[74px] md:h-[74px]"
                            alt="Next"
                            src="/linear---arrows---alt-arrow-right.svg"
                        />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-[39px] right-[44px] p-0 h-auto w-auto md:top-[39px] md:right-[44px] top-4 right-4 z-50"
                        aria-label="Close"
                        style={{ minWidth: 32, minHeight: 32 }}
                    >
                        <XIcon className="w-[20px] h-[20px] md:w-[26px] md:h-[26px] text-white" />
                    </Button>
                </div>
            </div>
        </div>
    );
};
