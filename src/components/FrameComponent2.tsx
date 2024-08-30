import { FunctionComponent } from "react";
import ButtonsGroup from "./ButtonsGroup";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border max-w-full text-left text-xl text-blue-gray-300 font-body-s mq1050:pb-[52px] mq1050:box-border mq450:pb-[34px] mq450:box-border ${className}`}
    >
      <div className="flex-1 bg-blue-gray-900 flex flex-row items-start justify-start pt-40 px-20 pb-20 box-border relative gap-20 max-w-full lg:gap-10 lg:flex-wrap lg:pl-10 lg:pr-10 lg:box-border mq750:gap-5 mq1050:pt-[104px] mq1050:pb-[52px] mq1050:box-border mq450:pt-[68px] mq450:pb-[34px] mq450:box-border">
        <div className="h-[468px] w-[468px] absolute !m-[0] top-[-74px] right-[-62px] [filter:blur(300px)] rounded-[50%] bg-indigo opacity-[0.5]" />
        <div className="flex-[0.9467] flex flex-col items-start justify-start py-20 pl-0 pr-8 box-border min-w-[390px] max-w-full lg:flex-1 mq750:gap-10 mq750:pt-[52px] mq750:pb-[52px] mq750:box-border mq750:min-w-full mq450:gap-5">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <b className="self-stretch relative tracking-[3px] leading-[100%] uppercase hidden mq450:text-base mq450:leading-[16px]">
                Caption
              </b>
              <h1 className="m-0 self-stretch relative text-77xl font-black font-inter text-steelblue-100 [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] mq1050:text-29xl mq450:text-10xl">
                MineFight
              </h1>
              <h1 className="m-0 self-stretch relative text-21xl leading-[110%] font-bold font-[inherit] text-white mq1050:text-13xl mq1050:leading-[35px] mq450:text-5xl mq450:leading-[26px]">
                Battle, Build, and Become a Legend!
              </h1>
            </div>
            <div className="self-stretch relative text-lg leading-[29px] text-white">
              Embark on a New Minecraft Adventure – Where Only the Best Survive!
            </div>
            <ButtonsGroup
              iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--playcircle.svg"
              text2
              iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright1.svg"
              iconRight1={false}
              iconLeft1
              propBackgroundColor2="unset"
              propHeight2="unset"
              propFlex2="unset"
              propBorderRadius2="50px"
              propBorder1="unset"
              propPadding2="16px 8px"
              propBoxShadow1="unset"
              propAlignSelf3="unset"
              propColor2="#fff"
              propAlignSelf12="unset"
              propFontSize2="20px"
              propFontWeight2="500"
              propMargin2="unset"
              buttonMinWidth="unset"
              textContainerHeight="unset"
              buttonText="Start Playing Now"
            />
          </div>
        </div>
        <div className="w-[816px] !m-[0] absolute right-[-2px] bottom-[0px] flex flex-row items-start justify-end pt-20 px-0 pb-0 box-border max-w-full z-[1] mq750:h-auto">
          <div className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] [filter:drop-shadow(0px_25px_50px_rgba(0,_0,_0,_0.25))_drop-shadow(0px_0px_15px_rgba(0,_0,_0,_0.07))] flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
              <img
                className="h-[67px] w-[67px] relative"
                loading="lazy"
                alt=""
                src="/ellipse-44.svg"
              />
              <div className="h-8 flex-1 relative bg-purple-600 min-w-[487px] max-w-full mq750:min-w-full" />
            </div>
            <div className="w-8 h-[237px] relative bg-purple-600" />
          </div>
          <div className="w-[656px] !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] [filter:drop-shadow(0px_25px_50px_rgba(0,_0,_0,_0.25))_drop-shadow(0px_0px_15px_rgba(0,_0,_0,_0.07))] flex flex-col items-start justify-start max-w-full z-[1]">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
              <img
                className="h-[67px] w-[67px] relative"
                alt=""
                src="/ellipse-44-1.svg"
              />
              <div className="h-8 flex-1 relative bg-fuchsia-600 min-w-[383px] max-w-full mq750:min-w-full" />
            </div>
            <div className="w-8 h-[397px] relative bg-fuchsia-600" />
          </div>
          <div className="w-[736px] [filter:drop-shadow(0px_25px_50px_rgba(0,_0,_0,_0.25))_drop-shadow(0px_0px_15px_rgba(0,_0,_0,_0.07))] flex flex-col items-start justify-start max-w-full z-[2]">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
              <img
                className="h-[67px] w-[67px] relative"
                alt=""
                src="/ellipse-44-2.svg"
              />
              <div className="h-8 flex-1 relative bg-yellow-600 min-w-[435px] max-w-full mq750:min-w-full" />
            </div>
            <div className="w-8 h-[317px] relative bg-yellow-600" />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[131px] px-0 pb-0 box-border min-w-[390px] max-w-full lg:flex-1 mq750:min-w-full mq450:pt-[85px] mq450:box-border">
          <div className="self-stretch h-[267px] [filter:drop-shadow(0px_25px_50px_rgba(0,_0,_0,_0.25))_drop-shadow(0px_0px_15px_rgba(0,_0,_0,_0.07))] flex flex-row items-start justify-start relative z-[3]">
            <img
              className="h-[317px] w-[536px] absolute !m-[0] bottom-[-50px] left-[calc(50%_-_268px)] object-cover"
              loading="lazy"
              alt=""
              src="/frame-53@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
