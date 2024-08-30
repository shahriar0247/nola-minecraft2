import { FunctionComponent } from "react";

export type MobileAppPlaceholderType = {
  className?: string;
};

const MobileAppPlaceholder: FunctionComponent<MobileAppPlaceholderType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[420px] shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1),_0px_0px_10px_rgba(0,_0,_0,_0.07)] rounded-xl border-white border-[5px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[87px] px-[38px] pb-[58px] relative gap-[57.6px] min-w-[420px] max-w-full z-[2] lg:flex-1 mq750:gap-[29px] mq750:min-w-full mq1050:pt-[57px] mq1050:pb-[38px] mq1050:box-border mq450:pt-[37px] mq450:pb-[25px] mq450:box-border ${className}`}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-1.svg"
      />
      <div className="w-[250.8px] flex flex-row items-end justify-start gap-[34.8px] mq450:gap-[17px]">
        <img
          className="h-[57.6px] w-[57.6px] relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/icon--ionicons--outline--arrowbackoutline.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[19.2px]">
          <img
            className="self-stretch h-[19.2px] relative max-w-full overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/title.svg"
          />
        </div>
      </div>
      <div className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] bg-blue-light-100 border-white border-t-[3px] border-solid box-border flex flex-row items-start justify-between pt-[25px] pb-[28.8px] pl-[38px] pr-[39px] gap-5 max-w-full z-[3] mq450:flex-wrap mq450:justify-center">
        <img
          className="h-[57.6px] w-[57.6px] relative overflow-hidden shrink-0 min-h-[58px]"
          alt=""
          src="/icon--ionicons--outline--pulseoutline.svg"
        />
        <img
          className="h-[57.6px] w-[57.6px] relative overflow-hidden shrink-0 min-h-[58px]"
          loading="lazy"
          alt=""
          src="/icon--ionicons--outline--searchoutline.svg"
        />
        <img
          className="h-[57.6px] w-[57.6px] relative overflow-hidden shrink-0 min-h-[58px]"
          alt=""
          src="/icon--ionicons--outline--menuoutline.svg"
        />
      </div>
      <div className="w-[470.4px] h-[283.2px] flex flex-col items-start justify-start gap-[38.4px] max-w-[141%] shrink-0 mq450:gap-[19px]">
        <img
          className="w-[268.8px] h-12 relative z-[1]"
          loading="lazy"
          alt=""
          src="/description.svg"
        />
        <div className="w-[381.6px] flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[19.2px] max-w-full z-[1]">
          <img
            className="self-stretch w-36 relative rounded-xl max-h-full overflow-hidden shrink-0 min-h-[197px]"
            loading="lazy"
            alt=""
            src="/frame-2.svg"
          />
          <img
            className="self-stretch w-36 relative rounded-xl max-h-full overflow-hidden shrink-0 min-h-[197px]"
            loading="lazy"
            alt=""
            src="/frame-3.svg"
          />
          <img
            className="self-stretch w-36 relative rounded-xl max-h-full overflow-hidden shrink-0 min-h-[197px]"
            loading="lazy"
            alt=""
            src="/frame-4.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[38.4px] max-w-full mq450:gap-[19px]">
        <img
          className="w-[187.2px] h-[14.4px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-7.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[235.2px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="h-[201.6px] w-[211.2px] absolute !m-[0] right-[0px] bottom-[-30px] object-contain z-[2]"
            alt=""
            src="/rectangle-7-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppPlaceholder;
