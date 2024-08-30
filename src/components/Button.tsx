import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonType = {
  className?: string;
  iconRight?: boolean;
  iconLeft?: boolean;
  text?: boolean;
  iconJamIconsOutlineLogos?: string;
  iconJamIconsOutlineLogos1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBorder?: CSSProperties["border"];
  propPadding?: CSSProperties["padding"];
  propBoxShadow?: CSSProperties["boxShadow"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propFontSize?: CSSProperties["fontSize"];
  propFontWeight?: CSSProperties["fontWeight"];
  propMargin?: CSSProperties["margin"];
  buttonMinWidth?: CSSProperties["minWidth"];
  textContainerHeight?: CSSProperties["height"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  iconRight = true,
  iconLeft = false,
  text = true,
  propBackgroundColor,
  propHeight,
  propFlex,
  propBorderRadius,
  propBorder,
  propPadding,
  propBoxShadow,
  iconJamIconsOutlineLogos,
  propAlignSelf,
  propColor,
  propAlignSelf1,
  propFontSize,
  propFontWeight,
  propMargin,
  iconJamIconsOutlineLogos1,
  buttonMinWidth,
  textContainerHeight,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      height: propHeight,
      flex: propFlex,
      borderRadius: propBorderRadius,
      border: propBorder,
      padding: propPadding,
      boxShadow: propBoxShadow,
      minWidth: buttonMinWidth,
    };
  }, [
    propBackgroundColor,
    propHeight,
    propFlex,
    propBorderRadius,
    propBorder,
    propPadding,
    propBoxShadow,
    buttonMinWidth,
  ]);

  const textContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: textContainerHeight,
    };
  }, [propAlignSelf, textContainerHeight]);

  const buttonTextStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      alignSelf: propAlignSelf1,
      fontSize: propFontSize,
      fontWeight: propFontWeight,
      margin: propMargin,
    };
  }, [propColor, propAlignSelf1, propFontSize, propFontWeight, propMargin]);

  return (
    <div
      className={`h-12 flex-1 rounded-lg border-blue-600 border-[2px] border-solid box-border flex flex-row items-center justify-center py-3 px-[9px] text-left text-base text-blue-600 font-body-s ${className}`}
      style={buttonStyle}
    >
      {iconLeft && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
          alt=""
          src={iconJamIconsOutlineLogos}
        />
      )}
      {text && (
        <div
          className="self-stretch flex flex-row items-center justify-center py-0 px-4"
          style={textContainerStyle}
        >
          <div
            className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium"
            style={buttonTextStyle}
          >
            {text}
          </div>
        </div>
      )}
      {iconRight && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src={iconJamIconsOutlineLogos1}
        />
      )}
    </div>
  );
};

export default Button;
