import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";

export type ContentBoxType = {
  className?: string;
  titleBadge?: boolean;
  imageBadge?: boolean;
  imageUnderTitle?: boolean;
  category?: boolean;
  image?: boolean;
  title?: string;
  text?: string;
  imageThumb?: boolean;
  author?: boolean;
  icon?: boolean;
  buttons?: boolean;
  titleIcon?: boolean;
  picture?: string;
  iconTablerIconsViewfinder?: string;
  iconJamIconsOutlineLogos1?: string;
  picture1?: string;
  userThumb?: string;
  iconJamIconsOutlineLogos3?: string;
  text2?: string;
  iconJamIconsOutlineLogos12?: string;
  iconRight1?: boolean;
  iconLeft1?: boolean;
  propBackgroundColor2?: string;
  propHeight2?: string;
  propFlex2?: string;
  propBorderRadius2?: string;
  propBorder1?: string;
  propPadding2?: string;
  propBoxShadow1?: string;
  propAlignSelf3?: string;
  propColor2?: string;
  propAlignSelf12?: string;
  propFontSize2?: string;
  propFontWeight2?: string;
  propMargin2?: string;
  buttonMinWidth?: string;
  buttonMinWidth1?: string;
  textContainerHeight?: string;
  textContainerHeight1?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propMargin?: CSSProperties["margin"];
  propFontSize?: CSSProperties["fontSize"];
  propFontWeight?: CSSProperties["fontWeight"];
  propTextAlign?: CSSProperties["textAlign"];
  propFlex?: CSSProperties["flex"];
  propColor?: CSSProperties["color"];
  propTextAlign1?: CSSProperties["textAlign"];
  propLeft1?: CSSProperties["left"];
  contentBoxAlignSelf?: CSSProperties["alignSelf"];
  contentBoxFlex?: CSSProperties["flex"];
  categoryAlignSelf?: CSSProperties["alignSelf"];
  categoryWidth?: CSSProperties["width"];
  pictureIconAlignSelf?: CSSProperties["alignSelf"];
  pictureIconOverflow?: CSSProperties["overflow"];
  pictureIconWidth?: CSSProperties["width"];
  paragraphFontSize?: CSSProperties["fontSize"];
  userCardAlignSelf?: CSSProperties["alignSelf"];
  userCardWidth?: CSSProperties["width"];
  userCardFlexWrap?: CSSProperties["flexWrap"];
  buttonsGroupFlexWrap?: CSSProperties["flexWrap"];
};

const ContentBox: FunctionComponent<ContentBoxType> = ({
  className = "",
  titleBadge = false,
  imageBadge = false,
  imageUnderTitle = false,
  category = false,
  image = false,
  title = "Facilisi vel malesuada",
  text = "Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integer sit.",
  imageThumb = false,
  author = false,
  icon = true,
  buttons = false,
  titleIcon = false,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  picture,
  propWidth1,
  propHeight,
  propBorderRadius,
  propBackgroundColor,
  propPadding,
  iconTablerIconsViewfinder,
  propAlignSelf,
  propAlignSelf1,
  propMargin,
  propFontSize,
  propFontWeight,
  propTextAlign,
  propFlex,
  iconJamIconsOutlineLogos1,
  picture1,
  propColor,
  propTextAlign1,
  userThumb,
  propLeft1,
  contentBoxAlignSelf,
  contentBoxFlex,
  categoryAlignSelf,
  categoryWidth,
  pictureIconAlignSelf,
  pictureIconOverflow,
  pictureIconWidth,
  paragraphFontSize,
  userCardAlignSelf,
  userCardWidth,
  userCardFlexWrap,
  buttonsGroupFlexWrap,
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
  buttonMinWidth,
  buttonMinWidth1,
  textContainerHeight,
  textContainerHeight1,
}) => {
  const contentBoxStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: contentBoxAlignSelf,
      flex: contentBoxFlex,
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propWidth,
    contentBoxAlignSelf,
    contentBoxFlex,
  ]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [
    propWidth1,
    propHeight,
    propBorderRadius,
    propBackgroundColor,
    propPadding,
  ]);

  const titleCategoryStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const titleContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
      fontSize: propFontSize,
      fontWeight: propFontWeight,
      textAlign: propTextAlign,
      flex: propFlex,
    };
  }, [propMargin, propFontSize, propFontWeight, propTextAlign, propFlex]);

  const paragraph1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      textAlign: propTextAlign1,
      fontSize: paragraphFontSize,
    };
  }, [propColor, propTextAlign1, paragraphFontSize]);

  const userThumbIconStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const categoryStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: categoryAlignSelf,
      width: categoryWidth,
    };
  }, [categoryAlignSelf, categoryWidth]);

  const pictureIconStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: pictureIconAlignSelf,
      overflow: pictureIconOverflow,
      width: pictureIconWidth,
    };
  }, [pictureIconAlignSelf, pictureIconOverflow, pictureIconWidth]);

  const userCardStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: userCardAlignSelf,
      width: userCardWidth,
      flexWrap: userCardFlexWrap,
    };
  }, [userCardAlignSelf, userCardWidth, userCardFlexWrap]);

  const buttonsGroup1Style: CSSProperties = useMemo(() => {
    return {
      flexWrap: buttonsGroupFlexWrap,
    };
  }, [buttonsGroupFlexWrap]);

  return (
    <div
      className={`absolute top-[737px] left-[467.3px] w-[145.7px] overflow-hidden flex flex-col items-start justify-center text-left text-base text-blue-gray-900 font-body-s ${className}`}
      style={contentBoxStyle}
    >
      {image && (
        <img
          className="self-stretch max-w-full overflow-hidden max-h-full object-cover hidden z-[0]"
          alt=""
          src={picture}
        />
      )}
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        {icon && (
          <div
            className="flex flex-row items-center justify-center"
            style={iconStyle}
          >
            <img
              className="h-16 w-16 relative overflow-hidden shrink-0"
              alt=""
              src={iconTablerIconsViewfinder}
            />
          </div>
        )}
        <div
          className="self-stretch flex flex-col items-start justify-start gap-1"
          style={titleCategoryStyle}
        >
          {category && (
            <div
              className="self-stretch relative leading-[110%] font-medium"
              style={categoryStyle}
            >
              {category}
            </div>
          )}
          <div
            className="self-stretch flex flex-row items-center justify-start gap-2 text-xl"
            style={titleContainerStyle}
          >
            {title && (
              <h2
                className="m-0 flex-1 relative text-inherit leading-[110%] font-bold font-[inherit] mq450:text-base mq450:leading-[18px]"
                style={titleStyle}
              >
                {title}
              </h2>
            )}
            {titleBadge && (
              <div className="h-6 rounded bg-green-100 flex-row items-center justify-center py-2 px-1 box-border text-sm text-green-800">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle.svg"
                />
                <div className="h-5 flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="self-stretch relative leading-[140%]">
                    +2,5%
                  </div>
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon--iconoir--cancel.svg"
                />
              </div>
            )}
            {titleIcon && (
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src={iconJamIconsOutlineLogos1}
              />
            )}
          </div>
        </div>
        {imageUnderTitle && (
          <img
            className="self-stretch h-[220px] max-w-full overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src={picture1}
            style={pictureIconStyle}
          />
        )}
        {text && (
          <div
            className="self-stretch relative text-xs leading-[160%] text-blue-gray-600"
            style={paragraph1Style}
          >
            {text}
          </div>
        )}
        {author && (
          <div
            className="self-stretch flex-row items-center justify-start pt-4 px-0 pb-0 gap-4 text-lg"
            style={userCardStyle}
          >
            <img
              className="h-16 w-16 rounded-81xl object-cover shrink-0"
              alt=""
              src={userThumb}
            />
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[160%]">
                Ralph Edwards
              </div>
              <div className="self-stretch relative text-base leading-[140%] text-blue-gray-600">{`Harvesting 32KWh `}</div>
            </div>
          </div>
        )}
      </div>
      {buttons && (
        <div
          className="self-stretch flex-row items-start justify-start p-4 gap-4 z-[2] text-blue-600"
          style={buttonsGroup1Style}
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
            buttonMinWidth={buttonMinWidth}
            textContainerHeight={textContainerHeight}
          />
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
        </div>
      )}
      {imageBadge && (
        <div className="h-6 !m-[0] absolute top-[16px] left-[16px] rounded bg-purple-100 flex-row items-center justify-center py-2 px-1 box-border z-[3] text-sm text-purple-800">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--circle1.svg"
          />
          <div className="h-5 flex flex-row items-center justify-center py-0 px-1 box-border">
            <div className="self-stretch relative leading-[140%]">Featured</div>
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--iconoir--cancel1.svg"
          />
        </div>
      )}
      {imageThumb && (
        <img
          className="w-24 h-24 !m-[0] absolute top-[172px] left-[calc(50%_-_47.85px)] rounded-81xl object-cover z-[4]"
          alt=""
          src="/user-thumb6@2x.png"
          style={userThumbIconStyle}
        />
      )}
    </div>
  );
};

export default ContentBox;
