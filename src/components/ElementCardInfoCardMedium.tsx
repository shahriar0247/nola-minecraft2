import { FunctionComponent } from "react";

export type ElementCardInfoCardMediumType = {
  className?: string;
  elementCardInfoCardSmallIcon?: string;
};

const ElementCardInfoCardMedium: FunctionComponent<
  ElementCardInfoCardMediumType
> = ({ className = "", elementCardInfoCardSmallIcon }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border gap-3.5 min-w-[211px] max-w-full z-[1] text-left text-base text-colour-main-blue-900 font-body-s ${className}`}
    >
      <img
        className="self-stretch h-9 relative max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={elementCardInfoCardSmallIcon}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-1.5">
        <div className="self-stretch relative leading-[26px] font-medium">
          Title Goes Here
        </div>
        <div className="self-stretch relative text-xs leading-[18px] text-colour-main-grey-600">{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</div>
      </div>
    </div>
  );
};

export default ElementCardInfoCardMedium;
