import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-[214px] pr-5 text-center text-2xl text-white font-inter mq675:pl-[107px] mq675:box-border mq450:pl-5 mq450:box-border ${className}`}
    >
      <div className="w-[280.1px] [backdrop-filter:blur(20px)] rounded-8xs bg-steelblue-300 border-white border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[5px] px-0 pb-[31px] whitespace-nowrap z-[2]">
        <div className="h-[64.4px] w-[280.1px] relative [backdrop-filter:blur(20px)] rounded-8xs bg-steelblue-300 border-white border-[1px] border-solid box-border hidden" />
        <h2 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] z-[1]">
          Join the Server Now!
        </h2>
      </div>
    </div>
  );
};

export default FrameComponent3;
