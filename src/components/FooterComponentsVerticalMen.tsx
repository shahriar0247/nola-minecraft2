import { FunctionComponent } from "react";
import FooterComponentsLinkFooter from "./FooterComponentsLinkFooter";

export type FooterComponentsVerticalMenType = {
  className?: string;
  link9?: boolean;
  link6?: boolean;
  link8?: boolean;
  link10?: boolean;
  link7?: boolean;
  link5?: boolean;
  link4?: boolean;
  link1?: boolean;
  link2?: boolean;
  link3?: boolean;
};

const FooterComponentsVerticalMen: FunctionComponent<
  FooterComponentsVerticalMenType
> = ({
  className = "",
  link9 = false,
  link6 = true,
  link8 = false,
  link10 = false,
  link7 = false,
  link5 = false,
  link4 = false,
  link1 = true,
  link2 = true,
  link3 = false,
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-8 min-w-[339px] max-w-full text-left text-base text-blue-gray-200 font-body-s mq750:min-w-full mq450:gap-4 mq450:flex-wrap ${className}`}
    >
      {link1 && (
        <FooterComponentsLinkFooter
          iconLeft={false}
          iconRight={false}
          text="Terms of Service"
          text
          badge={false}
          propAlignSelf="unset"
          propMinHeight="unset"
          propColor="#e2e8f0"
          propMinWidth="120px"
          propFontWeight="unset"
          propHeight="20px"
          propHeight1="17px"
          propAlignSelf1="stretch"
          propDisplay="unset"
          propMinWidth1="unset"
          iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--arrowright3.svg"
          propMinHeight1="unset"
          iconJamIconsOutlineL={false}
          iconIconoirCancel1={false}
        />
      )}
      {link2 && (
        <FooterComponentsLinkFooter
          iconLeft={false}
          iconRight={false}
          text="Privacy Policy"
          text
          badge={false}
          propAlignSelf="unset"
          propMinHeight="unset"
          propColor="#e2e8f0"
          propMinWidth="99px"
          propFontWeight="unset"
          propHeight="20px"
          propHeight1="17px"
          propAlignSelf1="stretch"
          propDisplay="unset"
          propMinWidth1="unset"
          iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--arrowright3.svg"
          propMinHeight1="unset"
          iconJamIconsOutlineL={false}
          iconIconoirCancel1={false}
        />
      )}
      {link3 && (
        <div className="self-stretch flex-row items-center justify-start py-3 px-0 gap-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className="self-stretch relative leading-[140%]">Support</div>
          <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--circle1.svg"
            />
            <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
              <div className="self-stretch relative leading-[140%]">BETA</div>
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
      )}
      {link4 && (
        <div className="self-stretch flex-row items-center justify-start py-3 px-0 gap-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className="self-stretch relative leading-[140%]">About</div>
          <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--circle1.svg"
            />
            <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
              <div className="self-stretch relative leading-[140%]">BETA</div>
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
      )}
      {link5 && (
        <div className="self-stretch flex-row items-center justify-start py-3 px-0 gap-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className="self-stretch relative leading-[140%]">Resources</div>
          <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--circle1.svg"
            />
            <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
              <div className="self-stretch relative leading-[140%]">BETA</div>
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
      )}
      {link6 && (
        <FooterComponentsLinkFooter
          iconLeft
          iconRight
          text="Manage Cookies"
          text
          badge
          iconJamIconsOutlineLogos2="/icon--jamicons--outline--logos--arrowright3.svg"
          iconJamIconsOutlineL
          iconIconoirCancel1
        />
      )}
      {link7 && (
        <div className="h-[46px] flex-row items-center justify-start py-3 px-0 box-border gap-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icon--jamicons--outline--logos--world1.svg"
          />
          <div className="self-stretch relative leading-[140%]">EN</div>
          <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--circle1.svg"
            />
            <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
              <div className="self-stretch relative leading-[140%]">BETA</div>
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
      )}
      {link8 && (
        <div className="h-[46px] flex-row items-center justify-start py-3 px-0 box-border gap-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/icon--iconoir--euro.svg"
          />
          <div className="self-stretch relative leading-[140%]">EUR</div>
          <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--circle1.svg"
            />
            <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
              <div className="self-stretch relative leading-[140%]">BETA</div>
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
      )}
      {link9 && (
        <div className="self-stretch flex-row items-center justify-start py-3 px-0 gap-2">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--world.svg"
          />
          <div className="self-stretch relative leading-[140%]">Nine</div>
          <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--circle1.svg"
            />
            <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
              <div className="self-stretch relative leading-[140%]">BETA</div>
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
      )}
      {link10 && (
        <div className="h-[46px] flex-row items-center justify-start py-3 pl-0 pr-[3px] box-border gap-2">
          <img
            className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0"
            alt=""
            src="/icon--jamicons--outline--logos--accessibility.svg"
          />
          <div className="self-stretch w-[27px] relative leading-[140%] hidden">
            Ten
          </div>
          <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--jamicons--outline--logos--circle1.svg"
            />
            <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
              <div className="self-stretch relative leading-[140%]">BETA</div>
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright3.svg"
          />
        </div>
      )}
    </div>
  );
};

export default FooterComponentsVerticalMen;
