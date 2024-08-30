import { FunctionComponent } from "react";
import SectionText from "./SectionText";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-2.5 max-w-full z-[1] ${className}`}
    >
      <div className="self-stretch bg-white flex flex-row items-start justify-start gap-2.5 max-w-full mq675:flex-wrap">
        <img
          className="self-stretch flex-1 max-w-full overflow-hidden max-h-full object-cover min-w-[248px] min-h-[301px] mq675:flex-1"
          alt=""
          src="/picture3@2x.png"
        />
        <SectionText
          headline2="Easily brainstorm with your team "
          headline2
          headline1={false}
          text
          caption
          caption="Team work"
          buttons
          button3={false}
          headline1="Unlimited ideas for your projects"
          button2={false}
          text="Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia."
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propWidth="unset"
          propGap="10px"
          propFlex="0.8322"
          propBackgroundColor="#4c1d95"
          propPadding="51.5px 32px"
          propMinWidth="248px"
          propPadding1="unset"
          propGap1="16px"
          propWidth1="unset"
          propFontSize="13px"
          propColor="#a78bfa"
          propTextAlign="left"
          propAlignSelf="stretch"
          propWidth2="unset"
          propBackground="unset"
          propWebkitBackgroundClip="unset"
          propWebkitTextFillColor="unset"
          propTextAlign1="left"
          propAlignSelf1="stretch"
          propColor1="#0f172a"
          propWidth3="unset"
          propFontSize1="20px"
          propBackground1="unset"
          propWebkitBackgroundClip1="unset"
          propWebkitTextFillColor1="unset"
          propTextAlign2="left"
          propAlignSelf2="stretch"
          propColor2="#fff"
          propColor3="#fff"
          propTextAlign3="left"
          propWidth4="unset"
          propHeight="unset"
          propAlignSelf5="unset"
          propHeight2="48px"
          propAlignSelf6="unset"
          propHeight3="48px"
          sectionTextAlignSelf="unset"
          captionTextTransform="uppercase"
          captionFontWeight="unset"
          paragraphFontSize="13px"
          iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus2.svg"
          text2
          iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright1.svg"
          iconRight1={false}
          iconLeft1={false}
          propBackgroundColor2="#7c3aed"
          propHeight2="unset"
          propFlex2="unset"
          propBorderRadius2="50px"
          propBorder1="2px solid #7c3aed"
          propPadding2="17px 21px 17px 22px"
          propBoxShadow1="0px 25px 50px -12px rgba(0, 0, 0, 0.25), 0px 0px 15px rgba(0, 0, 0, 0.07)"
          propAlignSelf3="unset"
          propColor2="#fff"
          propAlignSelf12="unset"
          propFontSize2="20px"
          propFontWeight2="700"
          propMargin2="0"
          buttonMinWidth1="unset"
          textContainerHeight1="unset"
        />
      </div>
      <div className="flex flex-row items-start justify-center pt-0 pb-[92px] pl-0 pr-[69px] box-border gap-2.5 max-w-[109%] shrink-0 mq750:flex-wrap">
        <img
          className="self-stretch w-[278px] max-h-full object-cover min-h-[118px]"
          alt=""
          src="/picture-1@2x.png"
        />
        <img
          className="self-stretch w-[93px] max-h-full object-cover min-h-[118px]"
          alt=""
          src="/picture-2@2x.png"
        />
        <img
          className="self-stretch w-[278px] max-h-full object-cover min-h-[118px]"
          alt=""
          src="/picture-3@2x.png"
        />
        <img
          className="self-stretch w-[94px] max-h-full object-cover min-h-[118px]"
          alt=""
          src="/picture-4@2x.png"
        />
      </div>
    </div>
  );
};

export default Section;
