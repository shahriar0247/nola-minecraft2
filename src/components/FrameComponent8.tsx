import { FunctionComponent } from "react";
import ElementCardInfoCardMedium from "./ElementCardInfoCardMedium";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[739px] flex flex-row items-start justify-end pt-0 px-8 pb-4 box-border max-w-full shrink-0 text-left text-base text-colour-main-blue-900 font-body-s ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-10 shrink-0 max-w-full mq750:gap-5">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[25px] max-w-full">
          <ElementCardInfoCardMedium elementCardInfoCardSmallIcon="/elementcardinfocardsmalliconpositionleft@2x.png" />
          <ElementCardInfoCardMedium elementCardInfoCardSmallIcon="/elementcardinfocardsmalliconpositionleft@2x.png" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[25px] max-w-full">
          <ElementCardInfoCardMedium elementCardInfoCardSmallIcon="/elementcardinfocardsmalliconpositionleft@2x.png" />
          <ElementCardInfoCardMedium elementCardInfoCardSmallIcon="/elementcardinfocardsmalliconpositionleft@2x.png" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
