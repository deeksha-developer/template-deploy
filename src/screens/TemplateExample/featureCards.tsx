import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

export const getFeatureCards = (darkMode: boolean, setShowTimelineModal: (val: boolean) => void) => [
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
                <h2 className={`text-4xl font-semibold leading-10 tracking-tight bg-gradient-to-br from-white to-[#AA9CFC] bg-clip-text text-transparent font-['Plus_Jakarta_Sans'] ${darkMode ?  'text-gray-900' :'text-black' }`}>
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
                <div className={`text-[62px] font-semibold leading-[56px] tracking-[-1.24px] text-transparent bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] bg-clip-text animate-text-shimmer ${darkMode ? 'text-gray-900' : 'text-white'}`}>
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
]