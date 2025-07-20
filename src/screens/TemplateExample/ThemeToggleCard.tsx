
import React from "react";
import { ThemeToggleCardProps } from "../../utils/InterfaceData";



export default function ThemeToggleCard({ darkMode, setDarkMode }: ThemeToggleCardProps) {
  return (
    <div
      className="z-50 rounded-3xl border border-[#ffffff0d] flex flex-col items-center justify-center p-4 sm:p-6 w-full max-w-xs sm:w-[262px] sm:h-[157px] bg-white/80 shadow-lg transition-all duration-300
        sm:absolute sm:top-0 sm:left-[648px] relative mx-auto mt-4"
      style={{
        background: darkMode
          ? "linear-gradient(0deg, rgba(25,25,52,1) 0%, rgba(25,25,52,1) 100%), radial-gradient(50% 50% at 30% 30%, rgba(127,139,210,0.3), transparent)"
          : "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(245,245,245,1) 100%), radial-gradient(50% 50% at 30% 30%, rgba(250,174,107,0.15), transparent)"
      }}
    >
      <div className="flex items-center">
       
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-[70px] h-[36px] flex items-center rounded-full p-1 transition-colors duration-300 border border-[#ffffff1a] bg-[#10092b40] relative focus:outline-none"
          style={{ minWidth: 70 }}
          aria-label="Toggle dark mode"
        >
          <div
            className={`w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#faae6b] to-[#c84350] flex items-center justify-center shadow-md transform duration-300 ease-in-out absolute top-1 left-1 transition-transform ${
              darkMode ? "translate-x-[32px]" : "translate-x-0"
            }`}
          >
            <img
              src={darkMode ? "/solid.svg" : "/sparkle.svg"}
              alt={darkMode ? "Dark mode" : "Light mode"}
              width={24}
              height={24}
            />
          </div>
        </button>
      </div>
    </div>
  );
}