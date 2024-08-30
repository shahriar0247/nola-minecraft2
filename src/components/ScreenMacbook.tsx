import { FunctionComponent } from "react";
import Video from "./Video";

export type ScreenMacbookType = {
  className?: string;
};

const ScreenMacbook: FunctionComponent<ScreenMacbookType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[42px] left-[0px] [filter:drop-shadow(0px_25px_50px_rgba(0,_0,_0,_0.25))_drop-shadow(0px_0px_15px_rgba(0,_0,_0,_0.07))] w-[553px] h-[305px] ${className}`}
    >
      <div className="absolute h-[97.31%] w-[80.96%] top-[0%] right-[9.31%] bottom-[2.69%] left-[9.73%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/lid.svg"
        />
        <img
          className="absolute h-[97.57%] w-[98.77%] top-[0.91%] right-[0.63%] bottom-[1.52%] left-[0.6%] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
          src="/dark-screen.svg"
        />
        <div className="absolute h-[88.51%] w-[93.25%] top-[6.1%] right-[3.57%] bottom-[5.39%] left-[3.17%] z-[2]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/screen@2x.png"
          />
          <Video />
        </div>
      </div>
      <img
        className="absolute h-[3.25%] w-full top-[96.75%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full z-[3]"
        alt=""
        src="/bottom.svg"
      />
    </div>
  );
};

export default ScreenMacbook;
