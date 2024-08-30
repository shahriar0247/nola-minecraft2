import { FunctionComponent } from "react";
import MenuItem from "./MenuItem";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={`w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-row items-center justify-between py-6 px-20 box-border gap-5 max-w-full z-[4] text-left text-21xl text-white font-body-s lg:pl-10 lg:pr-10 lg:box-border ${className}`}
    >
      <div className="w-[704px] flex flex-row items-center justify-start gap-12 max-w-full mq750:gap-6">
        <div className="flex flex-row items-center justify-start">
          <h1 className="m-0 relative text-inherit leading-[110%] font-bold font-[inherit] whitespace-nowrap">
            ServerName
          </h1>
        </div>
        <div className="flex-1 flex flex-row items-center justify-between max-w-full gap-5 text-base">
          <MenuItem
            iconLeft={false}
            iconRight={false}
            text="Home"
            text
            badge={false}
            propBorderBottom="3px solid #fff"
            propMinWidth="45px"
          />
          <MenuItem
            iconLeft={false}
            iconRight={false}
            text="Solutions"
            text
            badge={false}
            propBorderBottom="unset"
            propMinWidth="72px"
          />
          <MenuItem
            iconLeft={false}
            iconRight={false}
            text="Pricing"
            text
            badge={false}
            propBorderBottom="unset"
            propMinWidth="54px"
          />
          <MenuItem iconLeft iconRight text="Developers" text badge />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-4 max-w-full text-base text-blue-600">
        <button className="cursor-pointer border-white border-[2px] border-solid py-[9px] px-2.5 bg-[transparent] w-[95px] rounded-31xl box-border flex flex-row items-center justify-center">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--plus3.svg"
          />
          <div className="flex flex-row items-center justify-center py-0 px-4">
            <a className="[text-decoration:none] relative text-base tracking-[0.5px] leading-[24px] font-medium font-body-s text-white text-left inline-block min-w-[39px]">
              Shop
            </a>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright1.svg"
          />
        </button>
        <button className="cursor-pointer border-white border-[2px] border-solid py-[9px] px-2.5 bg-white rounded-31xl flex flex-row items-center justify-center">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--plus2.svg"
          />
          <div className="flex flex-row items-center justify-center py-0 px-[15px]">
            <a className="[text-decoration:none] relative text-xl tracking-[0.5px] leading-[24px] font-medium font-body-s text-blue-gray-900 text-left whitespace-nowrap">
              Start Playing Now
            </a>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright1.svg"
          />
        </button>
        <div className="self-stretch rounded-lg border-blue-600 border-[2px] border-solid hidden flex-row items-center justify-center py-3 px-2.5">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--plus3.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-4">
            <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium whitespace-nowrap">
              Button Text
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright-8.svg"
          />
        </div>
        <div className="self-stretch rounded-lg hidden flex-row items-center justify-center py-3 px-2 relative">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px] z-[0]"
            alt=""
            src="/icon--jamicons--outline--logos--plus3.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 z-[1]">
            <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium whitespace-nowrap">
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
      </div>
    </header>
  );
};

export default Header;
