import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";

export type SectionTextType = {
  className?: string;
  headline2?: string;
  caption?: boolean;
  buttons?: boolean;
  button3?: boolean;
  headline1?: boolean;
  button2?: boolean;
  text?: boolean;
  iconJamIconsOutlineLogos3?: string;
  text2?: string;
  iconJamIconsOutlineLogos12?: string;
  iconRight1?: boolean;
  iconLeft1?: boolean;
  propBackgroundColor2?: string;
  propFlex2?: string;
  propBorderRadius2?: string;
  propBorder1?: string;
  propPadding2?: string;
  propBoxShadow1?: string;
  propAlignSelf3?: string;
  propAlignSelf12?: string;
  propFontSize2?: string;
  propFontWeight2?: string;
  propMargin2?: string;
  buttonMinWidth1?: string;
  textContainerHeight1?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding1?: CSSProperties["padding"];
  propGap1?: CSSProperties["gap"];
  propWidth1?: CSSProperties["width"];
  propFontSize?: CSSProperties["fontSize"];
  propColor?: CSSProperties["color"];
  propTextAlign?: CSSProperties["textAlign"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propBackground?: CSSProperties["background"];
  propWebkitBackgroundClip?: CSSProperties["webkitBackgroundClip"];
  propWebkitTextFillColor?: CSSProperties["webkitTextFillColor"];
  propTextAlign1?: CSSProperties["textAlign"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propColor1?: CSSProperties["color"];
  propWidth3?: CSSProperties["width"];
  propFontSize1?: CSSProperties["fontSize"];
  propBackground1?: CSSProperties["background"];
  propWebkitBackgroundClip1?: CSSProperties["webkitBackgroundClip"];
  propWebkitTextFillColor1?: CSSProperties["webkitTextFillColor"];
  propTextAlign2?: CSSProperties["textAlign"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propColor3?: CSSProperties["color"];
  propTextAlign3?: CSSProperties["textAlign"];
  propWidth4?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propAlignSelf5?: CSSProperties["alignSelf"];
  propAlignSelf6?: CSSProperties["alignSelf"];
  propHeight3?: CSSProperties["height"];
  sectionTextAlignSelf?: CSSProperties["alignSelf"];
  captionTextTransform?: CSSProperties["textTransform"];
  captionFontWeight?: CSSProperties["fontWeight"];
  paragraphFontSize?: CSSProperties["fontSize"];
  propHeight2?: CSSProperties["height"];
  propColor2?: CSSProperties["color"];
};

const SectionText: FunctionComponent<SectionTextType> = ({
  className = "",
  headline2 = "Your favourite tools",
  caption = false,
  buttons = false,
  button3 = false,
  headline1 = false,
  button2 = false,
  text = true,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propGap,
  propFlex,
  propBackgroundColor,
  propPadding,
  propMinWidth,
  propPadding1,
  propGap1,
  propWidth1,
  propFontSize,
  propColor,
  propTextAlign,
  propAlignSelf,
  propWidth2,
  propBackground,
  propWebkitBackgroundClip,
  propWebkitTextFillColor,
  propTextAlign1,
  propAlignSelf1,
  propColor1,
  propWidth3,
  propFontSize1,
  propBackground1,
  propWebkitBackgroundClip1,
  propWebkitTextFillColor1,
  propTextAlign2,
  propAlignSelf2,
  propColor3,
  propTextAlign3,
  propWidth4,
  propHeight,
  propAlignSelf5,
  propAlignSelf6,
  propHeight3,
  sectionTextAlignSelf,
  captionTextTransform,
  captionFontWeight,
  paragraphFontSize,
  iconJamIconsOutlineLogos3,
  text2,
  iconJamIconsOutlineLogos12,
  iconRight1,
  iconLeft1,
  propBackgroundColor2,
  propHeight2,
  propFlex2,
  propBorderRadius2,
  propBorder1,
  propPadding2,
  propBoxShadow1,
  propAlignSelf3,
  propColor2,
  propAlignSelf12,
  propFontSize2,
  propFontWeight2,
  propMargin2,
  buttonMinWidth1,
  textContainerHeight1,
}) => {
  const sectionTextStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      gap: propGap,
      flex: propFlex,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      minWidth: propMinWidth,
      alignSelf: sectionTextAlignSelf,
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propGap,
    propFlex,
    propBackgroundColor,
    propPadding,
    propMinWidth,
    sectionTextAlignSelf,
  ]);

  const topStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
      gap: propGap1,
    };
  }, [propPadding1, propGap1]);

  const captionStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      fontSize: propFontSize,
      color: propColor,
      textAlign: propTextAlign,
      alignSelf: propAlignSelf,
      textTransform: captionTextTransform,
      fontWeight: captionFontWeight,
    };
  }, [
    propWidth1,
    propFontSize,
    propColor,
    propTextAlign,
    propAlignSelf,
    captionTextTransform,
    captionFontWeight,
  ]);

  const mainHeadlineStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      background: propBackground,
      webkitBackgroundClip: propWebkitBackgroundClip,
      webkitTextFillColor: propWebkitTextFillColor,
      textAlign: propTextAlign1,
      alignSelf: propAlignSelf1,
      color: propColor1,
    };
  }, [
    propWidth2,
    propBackground,
    propWebkitBackgroundClip,
    propWebkitTextFillColor,
    propTextAlign1,
    propAlignSelf1,
    propColor1,
  ]);

  const secondaryHeadlineStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      fontSize: propFontSize1,
      background: propBackground1,
      webkitBackgroundClip: propWebkitBackgroundClip1,
      webkitTextFillColor: propWebkitTextFillColor1,
      textAlign: propTextAlign2,
      alignSelf: propAlignSelf2,
      color: propColor2,
    };
  }, [
    propWidth3,
    propFontSize1,
    propBackground1,
    propWebkitBackgroundClip1,
    propWebkitTextFillColor1,
    propTextAlign2,
    propAlignSelf2,
    propColor2,
  ]);

  const paragraphStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
      textAlign: propTextAlign3,
      fontSize: paragraphFontSize,
    };
  }, [propColor3, propTextAlign3, paragraphFontSize]);

  const buttonsGroupStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
      height: propHeight,
    };
  }, [propWidth4, propHeight]);

  const button2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf5,
      height: propHeight2,
    };
  }, [propAlignSelf5, propHeight2]);

  const button3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf6,
      height: propHeight3,
    };
  }, [propAlignSelf6, propHeight3]);

  return (
    <div
      className={`absolute top-[80px] left-[-103.5px] w-[900px] flex flex-col items-center justify-start gap-6 text-center text-xl text-blue-gray-600 font-body-s ${className}`}
      style={sectionTextStyle}
    >
      <div
        className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-2 max-w-full"
        style={topStyle}
      >
        {caption && (
          <b
            className="w-[708px] relative tracking-[3px] leading-[100%] uppercase mq450:text-base mq450:leading-[16px]"
            style={captionStyle}
          >
            {caption}
          </b>
        )}
        {headline1 && (
          <div
            className="w-[435px] relative text-53xl leading-[110%] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(90deg,_#c026d3,_#701a75)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full mq675:text-39xl mq675:leading-[63px] mq450:text-24xl mq450:leading-[48px] mq750:text-39xl mq750:leading-[63px]"
            style={mainHeadlineStyle}
          >
            {headline1}
          </div>
        )}
        {headline2 && (
          <h1
            className="m-0 w-[284px] relative text-13xl leading-[110%] font-extrabold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#c026d3,_#701a75)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq675:text-7xl mq675:leading-[28px] mq450:text-lgi mq450:leading-[21px] mq750:text-7xl mq750:leading-[28px]"
            style={secondaryHeadlineStyle}
          >
            {headline2}
          </h1>
        )}
      </div>
      {text && (
        <div
          className="self-stretch relative text-xs leading-[180%] whitespace-nowrap"
          style={paragraphStyle}
        >
          {text}
        </div>
      )}
      {buttons && (
        <div
          className="w-[528px] h-12 flex-row items-center justify-center gap-4 max-w-full text-left text-base text-blue-600"
          style={buttonsGroupStyle}
        >
          <Button
            iconRight={iconRight1}
            iconLeft={iconLeft1}
            text={text2}
            text={text2}
            propBackgroundColor={propBackgroundColor2}
            propHeight={propHeight2}
            propFlex={propFlex2}
            propBorderRadius={propBorderRadius2}
            propBorder={propBorder1}
            propPadding={propPadding2}
            propBoxShadow={propBoxShadow1}
            iconJamIconsOutlineLogos={iconJamIconsOutlineLogos3}
            propAlignSelf={propAlignSelf3}
            propColor={propColor2}
            propAlignSelf1={propAlignSelf12}
            propFontSize={propFontSize2}
            propFontWeight={propFontWeight2}
            propMargin={propMargin2}
            iconJamIconsOutlineLogos1={iconJamIconsOutlineLogos12}
            buttonMinWidth={buttonMinWidth1}
            textContainerHeight={textContainerHeight1}
          />
          {button2 && (
            <div
              className="self-stretch rounded-lg border-blue-600 border-[2px] border-solid flex-row items-center justify-center py-3 px-2.5"
              style={button2Style}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                alt=""
                src="/icon--jamicons--outline--logos--plus3.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center py-0 px-4">
                <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium">
                  Button Text
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright-8.svg"
              />
            </div>
          )}
          {button3 && (
            <div
              className="self-stretch rounded-lg flex-row items-center justify-center py-3 px-2 relative"
              style={button3Style}
            >
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px] z-[0]"
                alt=""
                src="/icon--jamicons--outline--logos--plus3.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 z-[1]">
                <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium">
                  Button Text
                </div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]"
                alt=""
                src="/icon--jamicons--outline--logos--arrowright-8.svg"
              />
              <div className="!m-[0] absolute top-[8px] left-[24px] rounded-xl bg-default-alert hidden flex-row items-center justify-center py-[0.5px] px-[5px] z-[3] text-center text-xs text-white">
                <div className="relative leading-[140%]">9</div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionText;
