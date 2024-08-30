import { FunctionComponent } from "react";
import ButtonsGroup from "./ButtonsGroup";

export type Section1Type = {
  className?: string;
};

const Section1: FunctionComponent<Section1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-blue-gray-900 overflow-hidden flex flex-row items-start justify-start flex-wrap content-start p-20 box-border relative gap-20 max-w-full text-left text-xl text-white font-body-s lg:gap-10 lg:pl-10 lg:pr-10 lg:box-border mq750:gap-5 mq1050:pt-[52px] mq1050:pb-[52px] mq1050:box-border mq450:pt-[34px] mq450:pb-[34px] mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative min-w-[390px] max-w-full mq750:min-w-full">
        <div className="w-[816px] !m-[0] absolute top-[430px] right-[-952px] flex flex-row items-start justify-start [transform:_rotate(180deg)] [transform-origin:0_0] mq750:h-auto">
          <div className="w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] [filter:drop-shadow(0px_25px_50px_rgba(0,_0,_0,_0.25))_drop-shadow(0px_0px_15px_rgba(0,_0,_0,_0.07))] flex flex-col items-end justify-start max-w-full">
            <div className="w-8 h-[301px] relative bg-fuchsia-600" />
            <div className="self-stretch flex flex-row items-end justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
              <img
                className="h-[67px] w-[67px] relative [transform:_rotate(-180deg)]"
                alt=""
                src="/ellipse-44-1.svg"
              />
              <div className="h-8 flex-1 relative bg-fuchsia-600 min-w-[487px] max-w-full mq750:min-w-full" />
            </div>
          </div>
          <div className="w-[656px] [filter:drop-shadow(0px_25px_50px_rgba(0,_0,_0,_0.25))_drop-shadow(0px_0px_15px_rgba(0,_0,_0,_0.07))] flex flex-col items-end justify-start relative max-w-full z-[1]">
            <div className="w-8 h-[443px] relative bg-purple-600" />
            <div className="self-stretch flex flex-row items-end justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
              <img
                className="h-[67px] w-[67px] relative [transform:_rotate(-180deg)]"
                alt=""
                src="/ellipse-44.svg"
              />
              <div className="h-8 flex-1 relative bg-purple-600 min-w-[383px] max-w-full mq750:min-w-full" />
            </div>
            <div className="w-[736px] !m-[0] absolute top-[0px] right-[-80px] [filter:drop-shadow(0px_25px_50px_rgba(0,_0,_0,_0.25))_drop-shadow(0px_0px_15px_rgba(0,_0,_0,_0.07))] flex flex-col items-end justify-start z-[2]">
              <div className="w-8 h-[376px] relative bg-yellow-600" />
              <div className="self-stretch flex flex-row items-end justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
                <img
                  className="h-[67px] w-[67px] relative [transform:_rotate(-180deg)]"
                  alt=""
                  src="/ellipse-44-2.svg"
                />
                <div className="h-8 flex-1 relative bg-yellow-600 min-w-[435px] max-w-full mq750:min-w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[622px] flex-1 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full z-[3]">
          <img
            className="h-[622px] w-[306px] relative object-cover"
            loading="lazy"
            alt=""
            src="/screeniphone@2x.png"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[94.5px] px-0 pb-0 box-border min-w-[390px] max-w-full mq750:pt-[61px] mq750:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-col items-end justify-start max-w-full z-[3] mq750:gap-10">
          <div className="w-[472px] flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <b className="self-stretch relative tracking-[3px] leading-[100%] uppercase hidden text-blue-gray-300 mq450:text-base mq450:leading-[16px]">
                Caption
              </b>
              <div className="self-stretch relative text-77xl leading-[110%] font-extrabold hidden mq1050:text-29xl mq1050:leading-[63px] mq450:text-10xl mq450:leading-[42px]">
                App Builder
              </div>
              <h1 className="m-0 self-stretch relative text-21xl leading-[110%] font-bold font-[inherit] mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
                Why Play Here?
              </h1>
            </div>
            <div className="self-stretch relative text-lg leading-[160%]">
              <p className="m-0">
                <i className="font-bold">Hosted in Poland</i>
              </p>
              <p className="m-0">
                Low ping, high performance – play at your best!
              </p>
              <p className="m-0">
                <i className="font-bold">&nbsp;</i>
              </p>
              <p className="m-0">
                <i className="font-bold">Interactive World Map</i>
              </p>
              <p className="m-0">
                Explore a custom-built world with unique locations and
                challenges.
              </p>
              <p className="m-0">
                <i className="font-bold">&nbsp;</i>
              </p>
              <p className="m-0">
                <i className="font-bold">Vibrant Community</i>
              </p>
              <p className="m-0">
                Join our Discord to connect, compete, and share!
              </p>
            </div>
            <ButtonsGroup buttonText="Join Discord Now!" />
          </div>
        </div>
      </div>
      <div className="h-[592px] w-[592px] absolute !m-[0] right-[-235px] bottom-[-201px] [filter:blur(300px)] rounded-[50%] bg-fuchsia-900 opacity-[0.35]" />
    </div>
  );
};

export default Section1;
