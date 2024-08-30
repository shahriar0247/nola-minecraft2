import { FunctionComponent } from "react";

export type BadgeType = {
  className?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  text?: boolean;
};

const Badge: FunctionComponent<BadgeType> = ({
  className = "",
  iconLeft = false,
  iconRight = false,
  text = true,
}) => {
  return (
    <div
      className={`rounded bg-purple-100 flex flex-row items-center justify-center py-[1.5px] px-1 text-left text-xs text-purple-800 font-body-s ${className}`}
    >
      {!iconJamIconsOutlineL && (
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src="/icon--jamicons--outline--logos--circle1.svg"
        />
      )}
      {text && (
        <div className="flex flex-row items-center justify-center py-0 px-1">
          <div className="relative leading-[17px] inline-block min-w-[29px]">
            {text}
          </div>
        </div>
      )}
      {!iconIconoirCancel1 && (
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src="/icon--iconoir--cancel1.svg"
        />
      )}
    </div>
  );
};

export default Badge;
