export const getCardStyle = (i: number) => {
        if (i === 0) {
            return {
                rotation: "",
                blur: "",
                zIndex: "z-30",
                top: "top-[126px] md:top-[168px]",
                left: "left-[-26px] md:left-[286px]",
                imageRotation: "",
                imageWidth: "w-[128px] md:w-[181px]",
                imageHeight: "h-[188px] md:h-[252px]",
            };
        } else if (i === 1) {
            return {
                rotation: "rotate-[-9.93deg]",
                blur: "blur-[2px]",
                zIndex: "z-20",
                top: "top-[135px]",
                left: "left-[311px]",
                imageRotation: "rotate-[9.93deg]",
                imageWidth: "w-[212.48px]",
                imageHeight: "h-[270.17px]",
            };
        } else {
            return {
                rotation: "rotate-[14.98deg]",
                blur: "blur-[3.5px]",
                zIndex: "z-10",
                top: "top-[145px]",
                left: "left-[311px]",
                imageRotation: "rotate-[-14.98deg]",
                imageWidth: "w-[230.18px]",
                imageHeight: "h-[280.42px]",
            };
        }
    };
