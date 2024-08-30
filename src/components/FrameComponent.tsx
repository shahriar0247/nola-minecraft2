import { FunctionComponent, useMemo, type CSSProperties } from "react";
import FrameComponent3 from "./FrameComponent3";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  frameSectionPosition?: CSSProperties["position"];
  frameSectionAlignSelf?: CSSProperties["alignSelf"];
  containerFlex?: CSSProperties["flex"];
  containerWidth?: CSSProperties["width"];
  joinTheServerMargin?: CSSProperties["margin"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameSectionPosition,
  frameSectionAlignSelf,
  containerFlex,
  containerWidth,
  joinTheServerMargin,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      position: frameSectionPosition,
      alignSelf: frameSectionAlignSelf,
    };
  }, [frameSectionPosition, frameSectionAlignSelf]);

  const featuresContainerStyle: CSSProperties = useMemo(() => {
    return {
      flex: containerFlex,
      width: containerWidth,
    };
  }, [containerFlex, containerWidth]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[31px] pb-[15px] box-border max-w-full shrink-0 text-center text-xs text-black font-inter ${className}`}
      style={frameSectionStyle}
    >
      <div
        className="w-[690px] flex flex-row items-start justify-start gap-9 shrink-0 max-w-full mq675:flex-wrap mq750:gap-[18px]"
        style={featuresContainerStyle}
      >
        <div className="w-[18px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-h-[379px] mq675:min-h-[auto]">
          <div className="w-[377px] h-[18px] relative font-light flex items-center shrink-0 [transform:_rotate(-90deg)] max-w-[2095%] z-[1]">
            <span className="w-full">
              <span className="[text-decoration:underline]">Bounty</span>
              {`                          `}
              <span className="[text-decoration:underline]">PvP</span>
              {`                          `}
              <span className="[text-decoration:underline]">Safe Zones</span>
            </span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[67.6px] min-w-[413px] max-w-full text-left text-45xl text-steelblue-100 mq675:gap-[34px] mq675:min-w-full mq450:gap-[17px]">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[25.4px] box-border max-w-full">
            <div className="flex flex-row items-start justify-start relative">
              <h1 className="m-0 h-[66px] relative text-inherit font-black font-[inherit] flex items-center [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] z-[2] mq675:text-32xl mq450:text-19xl mq750:text-32xl">
                MineFight
              </h1>
              <div className="h-[363px] w-[716px] absolute !m-[0] right-[-313px] bottom-[-164px] text-xl text-white">
                <div className="absolute top-[95px] left-[230px] w-[454px] flex flex-row items-start justify-start max-w-full">
                  <img
                    className="h-[255px] flex-1 relative rounded-10xs max-w-full overflow-hidden object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/untitled-design-1@2x.png"
                  />
                  <h2 className="!m-[0] h-[50.9px] w-[214.6px] absolute top-[-24.96px] left-[-217px] text-inherit flex italic font-bold font-[inherit] items-center [text-shadow:2px_2px_2px_rgba(0,_0,_0,_0.42)] [transform:_rotate(-16deg)] [transform-origin:0_0] z-[3] mq450:text-base">
                    Get 7 free skin when you JOIN!
                  </h2>
                </div>
                <div className="absolute top-[65.92px] left-[0px] rounded-8xs bg-goldenrod w-[239.6px] h-[70.3px] [transform:_rotate(-16deg)] [transform-origin:0_0] z-[2]" />
                <div className="absolute top-[271px] left-[180px] bg-white w-[139px] h-[92px] z-[2]" />
                <div className="absolute top-[67px] left-[577px] bg-white w-[139px] h-[92px] z-[2]" />
                <div className="absolute top-[36px] left-[318px] bg-white w-[139px] h-[92px] z-[2]" />
              </div>
            </div>
            <div className="w-[321px] relative text-mini font-medium text-white flex items-center [text-shadow:0.8px_0_0_#409fca,_0_0.8px_0_#409fca,_-0.8px_0_0_#409fca,_0_-0.8px_0_#409fca] max-w-full z-[2]">
              Embark on a New Minecraft Adventure – Where Only the Best
              Survive!"
            </div>
          </div>
          <FrameComponent3 />
          <div className="self-stretch h-[54px] relative text-base text-black flex items-center shrink-0 z-[1]">
            Join our one-of-a-kind server and experience the thrill of becoming
            the ultimate bounty hunter, dominating competitive PvP, and
            exploring custom gameplay that you won’t find anywhere else
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
