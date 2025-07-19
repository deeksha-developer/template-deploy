import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import ThemeToggleCard from "./ThemeToggleCard";
import { GlowCard } from '../GlowCard';
import { motion, AnimatePresence } from 'framer-motion';
import PromptTemplateModal from "../PromptTemplateModal/PromptTemplateModal";
import MobileDashboard from '../TimeLineSlider/MobileDashboard';


export const TemplateExample = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(true);
  const [showGlowCard, setShowGlowCard] = useState(false);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [showPromptModals, setShowPromptModals] = useState(false);
  const [showTimelineModal, setShowTimelineModal] = useState(false);
  const featureCards = [
    {
      id: "create-template",
      className:
        "h-[396px] w-[272px] rounded-3xl px-6 py-8 flex flex-col justify-between bg-[#1B192E] relative overflow-hidden",
      background:
        "radial-gradient(120% 100% at 100% 100%, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)",
      content: (
        <>
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(120%_100%_at_100%_100%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)]" />

          <div className="flex flex-col gap-5 z-10">
            <h2 className={`text-4xl font-semibold leading-10 tracking-tight bg-gradient-to-br from-white to-[#AA9CFC] bg-clip-text text-transparent font-['Plus_Jakarta_Sans'] ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Create
              <br />
              your own
              <br />
              template
            </h2>
          </div>

          <div className="flex flex-col gap-1 z-10">
            <p className={`text-lg font-bold font-['Plus_Jakarta_Sans'] ${darkMode ? 'text-[#E6E3FF]' : 'text-gray-800'}`}>
              14 days trial
            </p>
            <p className={`text-base font-['Plus_Jakarta_Sans'] ${darkMode ? 'text-[#AC9FE4]' : 'text-gray-500'}`}>
              after – $5/month
            </p>
          </div>
        </>
      ),
    },
    {
      id: "top-users",
      className: "h-[220px] top-[504px] left-8",
      background: darkMode
      ? `radial-gradient(83.95% 102.56% at -41% 110%, rgba(127,139,210,0.3) 0%, rgba(89,106,197,0) 100%), linear-gradient(0deg, rgba(25,25,52,1), rgba(25,25,52,1))`
      : '#ffff',
      content: (
        <>
          <div className="flex flex-col items-center gap-3 w-full relative">
            <div className={`text-[62px] font-semibold leading-[56px] tracking-[-1.24px] text-transparent bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] bg-clip-text animate-text-shimmer ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              20
            </div>
            <div
              className={`text-lg leading-7 font-normal cursor-pointer ${darkMode ? 'text-[#b1a0fc]' : 'text-gray-700'}`}
              onClick={() => setShowTimelineModal(true)}
            >
              Top&nbsp;&nbsp;Users
            </div>
          </div>
          <div className="inline-flex items-center px-0 py-px relative flex-[0_0_auto]">
            <Avatar className="relative w-[62px] h-[62px] mt-[-3.00px] mb-[-3.00px] ml-[-3.00px] rounded-full border-[3px] border-solid border-[#15172c]">
              <AvatarImage
                src="/circle.png"
                alt="User avatar"
                className="bg-cover bg-[50%_50%]"
              />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-1 px-4 py-[17px] overflow-hidden border-[#16172d] [background:radial-gradient(50%_50%_at_-246%_286%,rgba(253,130,64,1)_0%,rgba(255,255,255,1)_100%)] w-[62px] h-[62px] relative mt-[-3.00px] mb-[-3.00px] -ml-3 rounded-full border-[3px] border-solid">
              <img
                className="relative w-[49.97px] h-[42.16px] mt-[-3.16px] mb-[-11.00px] ml-[-12.98px] mr-[-6.98px]"
                alt="Star"
                src="/star.png"
              />
            </div>
            <Avatar className="mr-[-3.00px] border-[#15172c] w-[62px] h-[62px] relative mt-[-3.00px] mb-[-3.00px] -ml-3 rounded-full border-[3px] border-solid">
              <AvatarImage
                src="/circle-1.png"
                alt="User avatar"
                className="bg-cover bg-[50%_50%]"
              />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
          </div>
        </>
      ),
    },
    {
      id: "generate-button",
      className: "h-[164px] top-[752px] left-8",
      background: `
    linear-gradient(0deg, rgba(25,25,52,1) 0%, rgba(25,25,52,1) 100%)
  `,
      content: (
        <div className="flex items-center w-full h-[72px] p-[6px] bg-[#10092b] rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.25)]">
          <Button
            className="flex flex-1 h-full items-center justify-center gap-2 rounded-full bg-[#864dfb] hover:bg-[#9d65ff] transition-colors"
            style={{
              background: `
            radial-gradient(50% 50% at 50% -43%, rgba(187,165,244,1) 0%, rgba(95,51,214,1) 100%)
          `,
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)",
            }}
          >
            <img src="/vector-2.svg" alt="Icon" className="w-6 h-6" />
            <span className="text-white font-semibold text-xl">Generate</span>
          </Button>
        </div>
      ),
    },
    {
      id: "created-prompts",
      className: "h-[211px] top-[185px] left-[648px]",
      background: `
    radial-gradient(83.95% 102.56% at -41% 110%, rgba(127,139,210,0.3) 0%, rgba(89,106,197,0) 100%),
    linear-gradient(0deg, rgba(25,25,52,1), rgba(25,25,52,1))
  `,
      content: (
        <>
          <div className="text-[62px] font-semibold leading-[56px] tracking-[-1.24px] text-transparent bg-gradient-to-r from-[#F5F1FF] to-[#6633ee] bg-clip-text animate-text-shimmer">
            25M
          </div>
          <div className="relative w-[196px] h-10 flex items-center justify-center">
            <div className="absolute w-[188px] h-10 left-[5px] rounded-[5px] bg-gradient-to-r from-[rgba(178,148,255,0.1)] to-[rgba(79,43,172,0.2)]" />
            <img
              className="absolute w-2.5 h-10 left-0"
              alt="Union"
              src="/union.svg"
            />
            <img
              className="absolute w-2.5 h-10 right-0"
              alt="Union"
              src="/union.svg"
            />
            <div className="relative z-10 text-[#b1a0fc] text-lg leading-7 font-normal">
              created prompts
            </div>
          </div>
        </>
      ),
    },
    {
      id: "prompt-service",
      className: "h-[412px] top-[418px] left-[584px]",
      background:
        darkMode ? "radial-gradient(50% 50% at -115% 0%, rgba(127,139,210,0.3) 0%, rgba(89,106,197,0) 100%)": "#fff",
      content: (
        <>
          <div className="flex flex-col items-start gap-1 self-stretch w-full relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#e6e3ff] text-lg tracking-[0] leading-7 whitespace-nowrap">
              Prompt Service
            </div>
            <div className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#ac9fe4] text-base tracking-[0] leading-6">
              Use pre-made templates to jumpstart creativity.
            </div>
          </div>
          <div className="relative w-[206px] h-[261.75px] ml-[-4.00px] mr-[-4.00px] overflow-hidden">
            <div className="relative w-52 h-[204px] top-[65px] -left-0.5">
              <div className="absolute w-[206px] h-[194px] top-0 left-0.5">
                <Badge className="inline-flex h-12 items-center justify-center gap-3 p-5 absolute top-[73px] left-[85px] bg-[#626ab52e] rounded-[10000px] border border-solid border-[#ffffff0d] -rotate-90">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px]">
                    <div className="relative w-2.5 h-2.5 bg-[#c883fb] rounded-[5px]" />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ddd6ff] text-sm tracking-[0.42px] leading-[34px] whitespace-nowrap">
                      JPG
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px]">
                    <div className="relative w-2.5 h-2.5 bg-[#ffb266] rounded-[5px]" />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ddd6ff] text-sm tracking-[0.42px] leading-[34px] whitespace-nowrap">
                      PNG
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px]">
                    <div className="relative w-2.5 h-2.5 bg-[#44b7ff] rounded-[5px]" />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ddd6ff] text-sm tracking-[0.42px] leading-[34px] whitespace-nowrap">
                      PDF
                    </div>
                  </div>
                </Badge>
                <Badge className="inline-flex h-12 items-center justify-center gap-1.5 p-5 absolute top-[53px] left-[-5px] bg-[#626ab536] rounded-full border border-solid border-[#ffffff0d] rotate-[-54.55deg]">
                  <div className="relative w-2.5 h-2.5 mt-[-1.00px] mb-[-1.00px] bg-[#c883fb] rounded-[5px] rotate-[139.49deg]" />
                  <div className="relative w-[59px] mt-[-3.00px] mb-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#d4ccff] text-base tracking-[0] leading-[34px]">
                    Rewrite
                  </div>
                </Badge>
                <div className="w-14 h-14 gap-3.5 p-3.5 absolute top-14 left-[94px] rounded-[11802.8px] border-[#ffffff3b] rotate-[30deg] [background:url(..//button-3.png)_50%_50%_/_cover,radial-gradient(50%_50%_at_-26%_14%,rgba(255,218,163,1)_0%,rgba(226,127,90,1)_47%,rgba(105,22,22,1)_100%)] flex items-center justify-center border border-solid">
                  <div className="relative w-6 h-6 overflow-hidden">
                    <img
                      className="absolute w-[29px] h-7 top-[-3px] -left-0.5 rotate-[-30deg]"
                      alt="Vector"
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute w-[162px] h-[107px] top-[97px] left-0">
                <Badge className="inline-flex h-12 items-center justify-center gap-3 px-5 py-6 absolute top-[26px] left-[57px] bg-[#626ab536] rounded-full border border-solid border-[#ffffff0d] rotate-[38.00deg]">
                  <div className="relative w-6 h-6 mt-[-12.00px] mb-[-12.00px]">
                    <img
                      className="absolute w-7 h-7 -top-0.5 -left-0.5 rotate-[-38.00deg]"
                      alt="Solid"
                      src="/solid.svg"
                    />
                  </div>
                  <div className="relative w-6 h-6 mt-[-12.00px] mb-[-12.00px]">
                    <img
                      className="absolute w-[31px] h-[31px] top-[-3px] -left-1 rotate-[-38.00deg]"
                      alt="Solid"
                      src="/solid-1.svg"
                    />
                  </div>
                </Badge>
                <Button className="w-14 h-14 gap-1.5 p-3 absolute top-[41px] left-2.5 rounded-[10000px] border-[#ffffff26] rotate-[150deg] [background:url(..//mask-1.png)_50%_50%_/_cover,radial-gradient(50%_50%_at_50%_-43%,rgba(187,165,244,1)_0%,rgba(95,51,214,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)] flex items-center justify-center border border-solid">
                  <div className="relative w-6 h-6 -rotate-180">
                    <div className="h-6 overflow-hidden">
                      <div className="relative w-[37px] h-9 top-[-7px] -left-1.5">
                        <img
                          className="absolute w-[9px] h-[9px] top-3.5 left-3.5 rotate-[30deg]"
                          alt="Vector"
                          src="/vector.svg"
                        />
                        <img
                          className="absolute w-[27px] h-[26px] top-[5px] left-[5px] rotate-[30deg]"
                          alt="Subtract"
                          src="/subtract.svg"
                        />
                      </div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  // Feature cards with image backgrounds
  const imageBackgroundCards = [
    {
      id: "ai-journey",
      className: "w-[264px] h-[412px] top-[466px] left-[356px]",
      backgroundImage: "/group-1.png",
      title: "Ai journey",
      description: "Boost your prompt precision with keywords.",
      icon: "/union-3.svg",
    },
    {
      id: "branching-paths",
      className:
        "border-none w-[264px] h-[412px] items-start justify-end gap-1 px-8 py-7 top-[424px] left-0 overflow-hidden flex flex-col absolute rounded-3xl",
      content: (
        <CardContent className="p-0 flex flex-col items-start w-full h-full">
          <img
            className="absolute w-[222px] h-96 top-0 left-0"
            alt="Background"
            src="/union-branching.png" 
          />

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto] mt-auto">

            <Button className="flex w-[52px] h-[52px] items-center justify-center gap-1.5 p-3 relative rounded-[10000px] border border-solid border-[#ffffff26] -rotate-180 [background:url(..//mask-2.png)_50%_50%_/_cover,radial-gradient(50%_50%_at_50%_-43%,rgba(250,172,113,1)_0%,rgba(255,128,77,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)]">
              <div className="relative w-8 h-8 mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] -rotate-180">
                <img
                  className="absolute w-[26px] h-[26px] top-[3px] left-[3px] rotate-180"
                  alt="Icon"
                  src="/branch-icon.svg" 
                />
              </div>
            </Button>
            <div
              className={`relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-lg tracking-[0] leading-7 cursor-pointer ${darkMode ? 'text-[#e6e3ff]' : 'text-gray-900'}`}
              onClick={() => setShowGlowCard(true)}
            >
              Branching paths
            </div>
            <div className={`relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 ${darkMode ? 'text-[#ac9fe4]' : 'text-gray-600'}`}>
              Explore multiple prompt directions with branching.
            </div>
          </div>
        </CardContent>
      ),
    },
  ];

  return (
    <>
      <div
        className="flex flex-row justify-center w-full min-h-screen transition-colors duration-500"
        style={{ background: darkMode ? '#03061c' : '#f5f5fa' }}
      >
        <div className="border-[40px] border-solid border-transparent w-[1264px] h-[948px] relative transition-colors duration-500"
          style={{ background: darkMode ? '#03061c' : '#fff' }}
        >
          <div
            className="hidden md:flex relative w-full max-w-full md:absolute md:w-[910px] md:h-[884px] md:top-8 md:left-[322px] flex-col gap-6"
          >
            <ThemeToggleCard darkMode={darkMode} setDarkMode={setDarkMode} />
            <Card
              className="w-full max-w-xs md:w-[262px] md:h-[211px] flex flex-col items-center justify-center gap-6 pt-[34px] pb-8 px-8 md:absolute md:top-[185px] md:left-[648px] border border-solid border-[#ffffff0d] rounded-3xl"
              style={{
                background: darkMode
                  ? `radial-gradient(83.95% 102.56% at -41% 110%, rgba(127,139,210,0.3) 0%, rgba(89,106,197,0) 100%), linear-gradient(0deg, rgba(25,25,52,1), rgba(25,25,52,1))`
                  : '#fff',
              }}
            >
              <CardContent className="p-0 flex flex-col items-center gap-6">
                {
                  featureCards.find((card) => card.id === "created-prompts")
                    ?.content
                }
              </CardContent>
            </Card>
            <div className="relative w-full max-w-full md:absolute md:w-[846px] md:h-[878px] md:top-1.5 md:left-0 flex flex-col gap-6">
              <img
                className={`absolute w-[200px] h-[200px] md:w-[321px] md:h-[321px] top-[150px] left-[10vw] md:top-[275px] md:left-[149px] ${darkMode ? 'filter brightness-75' : ''}`}
                alt="Blur"
                src="/blur.png"
              />
              
              <img
                className={`absolute w-[180px] h-[180px] md:w-[276px]  md:h-[269px]  top-[180px] left-[20vw] md:top-[287px] md:left-[136px] ${darkMode ? 'filter brightness-75' : ''}`}
                alt="Sphere"
                src="/sphere.png"
              />
              <Card className="border-none w-[264px] h-[412px] items-start justify-end gap-1 px-8 py-7 top-[422px] left-[336px] overflow-hidden flex flex-col absolute rounded-3xl">
                <CardContent className="p-0 flex flex-col items-start w-full h-full">
                  <img
                    className="absolute w-[222px] h-96 top-0 left-0"
                    alt="Group"
                    src="/group-1.png"
                  />
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto] mt-auto">
                    <img
                      className="absolute w-[91px] h-[66px] -top-1.5 -left-8"
                      alt="Union"
                      src="/union-1.svg"
                    />
                    <Button className="flex w-[52px] h-[52px] items-center justify-center gap-1.5 p-3 relative rounded-[10000px] border border-solid border-[#ffffff26] -rotate-180 [background:url(..//mask-1.png)_50%_50%_/_cover,radial-gradient(50%_50%_at_50%_-43%,rgba(187,165,244,1)_0%,rgba(95,51,214,1)_100%),linear-gradient(0deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_100%)]">
                      <div className="relative w-8 h-8 mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] mr-[-2.00px] -rotate-180">
                        <img
                          className="absolute w-[26px] h-[26px] top-[3px] left-[3px] rotate-180"
                          alt="Union"
                          src="/union-3.svg"
                        />
                      </div>
                    </Button>
                    <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className={`relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-lg tracking-[0] leading-7 ${darkMode ? 'text-[#e6e3ff]' : 'text-gray-900'}`}
                       onClick={() => setShowPromptModals(true)}>
                        Ai journey
                      </div>
                      <div className={`relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 ${darkMode ? 'text-[#ac9fe4]' : 'text-gray-600'}`}>
                        Boost your prompt precision with keywords.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none w-[264px] h-[412px] items-start justify-end gap-1 px-8 py-7 top-[424px] left-0 overflow-hidden flex flex-col absolute rounded-3xl">
                <CardContent className="p-0 flex flex-col items-start w-full h-full">
                  <img
                    className="absolute w-[264px] h-[412px] top-[3081px] left-[2264px]"
                    alt="Mask"
                    src="/button-3.png"
                  />
                  {
                    imageBackgroundCards.find(
                      (card) => card.id === "branching-paths"
                    )?.content
                  }
                </CardContent>
              </Card>
              <Card className="w-[262px] h-[412px] items-center justify-between pt-7 pb-6 px-8 top-[418px] left-[584px] border border-solid border-[#ffffff0d] bg-[#191934] bg-[radial-gradient(120%_100%_at_0%_0%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)] flex flex-col absolute rounded-3xl overflow-hidden">
                <CardContent className="p-0 flex flex-col items-center justify-between w-full h-full">
                  {
                    featureCards.find((card) => card.id === "prompt-service")
                      ?.content
                  }
                </CardContent>
              </Card>
              <img
                className="absolute animate-spin-slow w-[379px] h-[372px] top-[227px] left-[84px]"
                alt="Code"
                src="/code.png"
              />
              <style>{`
                @keyframes spin-slow {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                  animation: spin-slow 12s cubic-bezier(0.45, 0, 0.55, 1) infinite;
                }
              `}</style>
              <div className="w-[578px] items-center gap-8 top-0 left-0 flex flex-col absolute rounded-3xl">
                <img
                  className="absolute w-[556px] h-[396px] top-0 left-0"
                  alt="Bg"
                  src="/templateai.png"
                />
                <h3 className={`relative w-[452px] flex-[0_0_auto] text-6xl text-center font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Template AI</h3>
                <img
                  className="relative w-[100px] h-[100px]"
                  alt="Rectangle"
                  src="/rectangle-22782.svg"
                />
                {/* <img className="relative w-[100px] h-[100px]" alt="Frame" /> */}
              </div>
            </div>
          </div>
          <Card className="w-[262px] h-[396px] items-start justify-between p-8 top-2 md:top-6 left-[0rem] md:left-8 border border-solid border-[#ffffff0d] bg-[#191934] bg-[radial-gradient(120%_100%_at_100%_100%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)] block md:flex flex-col absolute rounded-3xl overflow-hidden"
            style={{ background: darkMode ? '#03061c' : '#f5f5fa' }}>
            <CardContent className="p-0 flex flex-col items-start justify-between w-full h-full"
            >
              {
                featureCards.find((card) => card.id === "create-template")
                  ?.content
              }
            </CardContent>
          </Card>

          <Card
            className="w-[262px] h-[220px] block md:flex flex-col items-center justify-center gap-5 pt-[34px] pb-[30px] px-8 absolute top-[438px] md:top-[468px]  left-[0rem] md:left-8 border border-solid border-[#ffffff0d] rounded-3xl "
            style={{
              background: `
      radial-gradient(83.95% 102.56% at 116.48% -20.51%, rgba(127,139,210,0.3) 0%, rgba(89,106,197,0) 100%),
      linear-gradient(0deg, rgba(25,25,52,1) 0%, rgba(25,25,52,1) 100%)
    `,
            }}
            
          >
            <CardContent className="p-0 flex flex-col items-center justify-center gap-5 w-full">
              {featureCards.find((card) => card.id === "top-users")?.content}
            </CardContent>
          </Card>

          <Card
            className="w-[262px] h-[164px] block md:flex flex-col items-start justify-center p-8 absolute top-[720px] left-[0rem] md:left-8 border border-solid border-[#ffffff0d] rounded-3xl"
            style={{
              background:  darkMode ?` 
      radial-gradient(83.95% 102.56% at 213% -151%, rgba(127,139,210,0.3) 0%, rgba(89,106,197,0) 100%),
      linear-gradient(0deg, rgba(25,25,52,1) 0%, rgba(25,25,52,1) 100%)
    `:'#fff'
            }}
          >
            <CardContent className="p-0 flex items-center justify-center w-full">
              {
                featureCards.find((card) => card.id === "generate-button")
                  ?.content
              }
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Glow Card Overlay */}
      <AnimatePresence>
        {showGlowCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            onClick={() => setShowGlowCard(false)}
          >
            <div onClick={e => e.stopPropagation()}>
              <GlowCard onClose={() => setShowGlowCard(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

              < PromptTemplateModal open={showPromptModals} onClose={() => setShowPromptModals(false)}/>
       
      {/* MobileDashboard Modal Overlay */}
      <AnimatePresence>
        {showTimelineModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black-300 flex items-center justify-center bg-black/40 "
            onClick={() => setShowTimelineModal(false)}

          >
            <div onClick={e => e.stopPropagation()}>

              <MobileDashboard
                showTimelineModal={showTimelineModal}
                setShowTimelineModal={setShowTimelineModal}
                showPromptModal={showPromptModal}
                setShowPromptModal={setShowPromptModal}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
