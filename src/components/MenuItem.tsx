import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type MenuItemType = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  text?: string;
  badge?: boolean;

  /** Style props */
  propBorderBottom?: CSSProperties["borderBottom"];
  propMinWidth?: CSSProperties["minWidth"];
};

const MenuItem: FunctionComponent<MenuItemType> = ({
  className = "",
  iconLeft = false,
  iconRight = true,
  text = "Developers",
  badge = false,
  propBorderBottom,
  propMinWidth,
}) => {
  const menuItemStyle: CSSProperties = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
    };
  }, [propBorderBottom]);

  const menuItem1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex flex-row items-center justify-start py-[5.5px] px-0 gap-[7px] text-left text-base text-white font-body-s ${className}`}
      style={menuItemStyle}
    >
      {iconLeft && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
          alt=""
          src="/icon--jamicons--outline--logos--home.svg"
        />
      )}
      {text && (
        <a
          className="[text-decoration:none] relative tracking-[0.5px] leading-[24px] font-medium text-[inherit] inline-block min-w-[86px]"
          style={menuItem1Style}
        >
          {text}
        </a>
      )}
      {badge && (
        <div className="h-5 rounded bg-red-100 flex-row items-center justify-center p-1 box-border text-xs text-red-800">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--circle2.svg"
          />
          <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
            <div className="self-stretch relative leading-[140%]">99+</div>
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--iconoir--cancel2.svg"
          />
        </div>
      )}
      {iconRight && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/icon--jamicons--outline--logos--chevrondown.svg"
        />
      )}
    </div>
  );
};

export default MenuItem;
