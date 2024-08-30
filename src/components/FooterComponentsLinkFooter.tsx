import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FooterComponentsLinkFooterType = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  text?: string;
  badge?: boolean;
  iconJamIconsOutlineLogos2?: string;
  iconJamIconsOutlineL?: boolean;
  iconIconoirCancel1?: boolean;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinHeight?: CSSProperties["minHeight"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
  propFontWeight?: CSSProperties["fontWeight"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinHeight1?: CSSProperties["minHeight"];
};

const FooterComponentsLinkFooter: FunctionComponent<
  FooterComponentsLinkFooterType
> = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  text = "Manage Cookies",
  badge = false,
  propAlignSelf,
  propMinHeight,
  propColor,
  propMinWidth,
  propFontWeight,
  propHeight,
  propHeight1,
  propAlignSelf1,
  propDisplay,
  propMinWidth1,
  iconJamIconsOutlineLogos2,
  propMinHeight1,
  iconJamIconsOutlineL,
  iconIconoirCancel1,
}) => {
  const footerComponentsLinkFooterStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const iconJamIconsOutlineLStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const linkNameStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
      fontWeight: propFontWeight,
    };
  }, [propColor, propMinWidth, propFontWeight]);

  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const textContainer1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const buttonText1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propAlignSelf1, propDisplay, propMinWidth1]);

  const iconJamIconsOutlineL1Style: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight1,
    };
  }, [propMinHeight1]);

  return (
    <div
      className={`flex flex-row items-start justify-start py-3 px-0 gap-2 text-left text-base text-blue-gray-200 font-body-s ${className}`}
      style={footerComponentsLinkFooterStyle}
    >
      {iconLeft && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon--jamicons--outline--logos--world.svg"
          style={iconJamIconsOutlineLStyle}
        />
      )}
      {text && (
        <div
          className="relative leading-[140%] inline-block min-w-[120px]"
          style={linkNameStyle}
        >
          {text}
        </div>
      )}
      {badge && (
        <div
          className="h-5 rounded bg-purple-100 flex-row items-center justify-center p-1 box-border text-xs text-purple-800"
          style={badgeStyle}
        >
          {!iconJamIconsOutlineL && (
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icon--jamicons--outline--logos--circle1.svg"
            />
          )}
          <div
            className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border"
            style={textContainer1Style}
          >
            <div
              className="self-stretch relative leading-[140%]"
              style={buttonText1Style}
            >
              BETA
            </div>
          </div>
          {!iconIconoirCancel1 && (
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          )}
        </div>
      )}
      {iconRight && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={iconJamIconsOutlineLogos2}
          style={iconJamIconsOutlineL1Style}
        />
      )}
    </div>
  );
};

export default FooterComponentsLinkFooter;
