
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import ThemeToggleCard from "./ThemeToggleCard";
import { GlowCard } from '../GlowCard';
import { motion, AnimatePresence } from 'framer-motion';
import PromptTemplateModal from "../PromptTemplateModal/PromptTemplateModal";
import MobileDashboard from '../TimeLineSlider/MobileDashboard';
import React, { useState } from "react"; 
import { getFeatureCards } from "./getFeatureCards";



export const TemplateExample = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [showGlowCard, setShowGlowCard] = useState<boolean>(false);
  const [showPromptModal, setShowPromptModal] = useState<boolean>(false);
  const [showPromptModals, setShowPromptModals] = useState<boolean>(false);
  const [showTimelineModal, setShowTimelineModal] = useState<boolean>(false);
 
const featureCards = getFeatureCards(darkMode, setShowTimelineModal);

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
        <CardContent className="p-0 flex flex-col items-start w-full h-full pb-2 ">
          <img
            className="absolute w-[248px] h-[26rem] top-0 left-0"
            alt="Background"
            src="/union-branching.png" 
          />

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto] mt-[215px]">

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
              className="w-full max-w-xs md:w-[262px] md:h-[211px] flex flex-col items-center justify-center gap-6 pt-[34px] pb-8 px-8 md:absolute md:top-[185px] md:left-[585px] border border-solid border-[#ffffff0d] rounded-3xl"
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
              <Card className="w-[262px] h-[415px] items-center justify-between pt-7 pb-6 px-8 top-[429px] left-[584px] border border-solid border-[#ffffff0d] bg-[#191934] bg-[radial-gradient(120%_100%_at_0%_0%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)] flex flex-col absolute rounded-3xl overflow-hidden">
                <CardContent className="p-0 flex flex-col items-center justify-between w-full h-full">
                  {
                    featureCards.find((card) => card.id === "prompt-service")
                      ?.content
                  }
                </CardContent>
              </Card>
            <div className="relative w-full max-w-full md:absolute md:w-[846px] md:h-[878px] md:top-1.5 md:left-0 flex flex-col">

             

              <img
                className={`absolute w-[180px] h-[180px] md:w-[276px]  md:h-[269px]  top-[180px] left-[20vw] md:top-[287px] md:left-[136px] ${darkMode ? 'filter brightness-75' : ''}`}
                alt="Sphere"
                src="/sphere.png"
              />

              <Card className="border-none w-[264px] h-[429px] items-start justify-end gap-1 px-8 py-7 top-[422px] left-[307px] overflow-hidden flex flex-col absolute rounded-3xl">
                <CardContent className="p-0 flex flex-col items-start w-full h-full pb-2 ">
                  <img
                    className="absolute w-[248px] h-[26rem] top-0 left-0"
                    alt="Group"
                    src="/group-1.png"
                  />
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto] mt-auto">
                    <img
                      className="absolute w-[121px] h-[66px] -top-1.5 -left-[4rem]"
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
           
       <div className="absolute top-[47%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 z-10">
  <img
    className="animate-half-rotate w-[388px] h-[406px]"
    alt="Code"
    src="/code.png"
  />
<style>{`
    @keyframes half-rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(20deg);
      }
    }

    .animate-half-rotate {
      animation: half-rotate 6s ease-in-out infinite alternate;
    }
  `}</style>
</div>
              <div className="w-[578px] items-center gap-8 top-0 left-0 flex flex-col absolute rounded-3xl">
                <img
                  className="absolute w-[556px] h-[396px] top-0 left-0"
                  alt="Bg"
                  src="/templateai.png"
                />
                <h3 className={`relative w-[452px] flex-[0_0_auto] text-6xl text-center font-semibold mt-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Template AI</h3>
                     {/*<img
                  className="relative w-[100px] h-[100px]"
                  alt="Rectangle"
                  src="/rectangle-22782.svg"
                />*/}
                {/* <img className="relative w-[100px] h-[100px]" alt="Frame" /> */}
              </div>
            </div>
          </div>
          <Card className="w-[262px] h-[396px] items-start justify-between p-8 top-2 md:top-[2.3rem] left-[0rem] md:left-8 border border-solid border-[#ffffff0d] bg-[#191934] bg-[radial-gradient(120%_100%_at_100%_100%,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_100%)] block md:flex flex-col absolute rounded-3xl overflow-hidden"
            style={{ background: darkMode ? `radial-gradient(83.95% 102.56% at 213% -151%, rgba(127,139,210,0.3) 0%, rgba(89,106,197,0) 100%),
      linear-gradient(0deg, rgba(25,25,52,1) 0%, rgba(25,25,52,1) 100%)` : '#f5f5fa' }}>
            <CardContent className="p-0 flex flex-col items-start justify-between w-full h-full"
            >
              {
                featureCards.find((card) => card.id === "create-template")
                  ?.content
              }
            </CardContent>
          </Card>

          <Card
            className="w-[262px] h-[220px] block md:flex flex-col items-center justify-center gap-5 pt-[34px] pb-[30px] px-8 absolute top-[438px] md:top-[464px]  left-[0rem] md:left-8 border border-solid border-[#ffffff0d] rounded-3xl "
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
            className="w-[262px] h-[164px] block md:flex flex-col items-start justify-center p-8 absolute top-[709px] left-[0rem] md:left-8 border border-solid border-[#ffffff0d] rounded-3xl"
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
      <CardContent className="bg-[#03061c]">
       <div style={{ background: darkMode ? '#03061c' : '#f5f5fa' }} className=" p-4 flex md:hidden flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <div className={`relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-lg tracking-[0] leading-7 ${darkMode ? 'text-[#e6e3ff]' : 'text-gray-900'}`}
                       onClick={() => setShowPromptModals(true)}>
                        Ai journey
                      </div>
                      <div className={`relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 ${darkMode ? 'text-[#ac9fe4]' : 'text-gray-600'}`}>
                        Boost your prompt precision with keywords.
                      </div>
                    </div>
          
                 </CardContent>
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
                onClose={() => setShowTimelineModal(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
