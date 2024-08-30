import { FunctionComponent } from "react";
import FooterComponentsLinkFooter from "./FooterComponentsLinkFooter";

export type FooterComponentsColumnType = {
  className?: string;
  link7?: boolean;
  link6?: boolean;
  link5?: boolean;
  link8?: boolean;
  link9?: boolean;
  link10?: boolean;
  links?: boolean;
  linkName5?: string;
  linkName6?: string;
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  iconJamIconsOutlineLogos210?: string;
  iconJamIconsOutlineLogos211?: string;
  iconJamIconsOutlineLogos212?: string;
  iconJamIconsOutlineLogos213?: string;
  iconJamIconsOutlineLogos214?: string;
  iconLeft?: boolean;
  iconLeft1?: boolean;
  iconLeft2?: boolean;
  iconLeft3?: boolean;
  iconLeft4?: boolean;
  iconRight?: boolean;
  iconRight1?: boolean;
  iconRight2?: boolean;
  iconRight3?: boolean;
  iconRight4?: boolean;
  badge?: boolean;
  badge1?: boolean;
  badge2?: boolean;
  badge3?: boolean;
  badge4?: boolean;
  propAlignSelf?: string;
  propAlignSelf1?: string;
  propAlignSelf2?: string;
  propAlignSelf3?: string;
  propAlignSelf4?: string;
  propMinHeight?: string;
  propMinHeight1?: string;
  propMinHeight2?: string;
  propMinHeight3?: string;
  propMinHeight4?: string;
  propColor?: string;
  propColor1?: string;
  propColor2?: string;
  propColor3?: string;
  propColor4?: string;
  propMinWidth?: string;
  propMinWidth1?: string;
  propMinWidth2?: string;
  propMinWidth3?: string;
  propMinWidth4?: string;
  propFontWeight?: string;
  propFontWeight1?: string;
  propFontWeight2?: string;
  propFontWeight3?: string;
  propFontWeight4?: string;
  propHeight?: string;
  propHeight1?: string;
  propHeight2?: string;
  propHeight3?: string;
  propHeight4?: string;
  propHeight11?: string;
  propHeight12?: string;
  propHeight13?: string;
  propHeight14?: string;
  propHeight15?: string;
  propAlignSelf11?: string;
  propAlignSelf12?: string;
  propAlignSelf13?: string;
  propAlignSelf14?: string;
  propAlignSelf15?: string;
  propDisplay?: string;
  propDisplay1?: string;
  propDisplay2?: string;
  propDisplay3?: string;
  propDisplay4?: string;
  propMinWidth11?: string;
  propMinWidth12?: string;
  propMinWidth13?: string;
  propMinWidth14?: string;
  propMinWidth15?: string;
  propMinHeight11?: string;
  propMinHeight12?: string;
  propMinHeight13?: string;
  propMinHeight14?: string;
  propMinHeight15?: string;
  iconJamIconsOutlineL?: boolean;
  iconIconoirCancel11?: boolean;
};

const FooterComponentsColumn: FunctionComponent<FooterComponentsColumnType> = ({
  className = "",
  link7 = false,
  link6 = false,
  link5 = false,
  link8 = false,
  link9 = false,
  link10 = false,
  links = true,
  linkName5,
  linkName6,
  text,
  text1,
  text2,
  text3,
  text4,
  iconJamIconsOutlineLogos210,
  iconJamIconsOutlineLogos211,
  iconJamIconsOutlineLogos212,
  iconJamIconsOutlineLogos213,
  iconJamIconsOutlineLogos214,
  iconLeft,
  iconLeft1,
  iconLeft2,
  iconLeft3,
  iconLeft4,
  iconRight,
  iconRight1,
  iconRight2,
  iconRight3,
  iconRight4,
  badge,
  badge1,
  badge2,
  badge3,
  badge4,
  propAlignSelf,
  propAlignSelf1,
  propAlignSelf2,
  propAlignSelf3,
  propAlignSelf4,
  propMinHeight,
  propMinHeight1,
  propMinHeight2,
  propMinHeight3,
  propMinHeight4,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propMinWidth4,
  propFontWeight,
  propFontWeight1,
  propFontWeight2,
  propFontWeight3,
  propFontWeight4,
  propHeight,
  propHeight1,
  propHeight2,
  propHeight3,
  propHeight4,
  propHeight11,
  propHeight12,
  propHeight13,
  propHeight14,
  propHeight15,
  propAlignSelf11,
  propAlignSelf12,
  propAlignSelf13,
  propAlignSelf14,
  propAlignSelf15,
  propDisplay,
  propDisplay1,
  propDisplay2,
  propDisplay3,
  propDisplay4,
  propMinWidth11,
  propMinWidth12,
  propMinWidth13,
  propMinWidth14,
  propMinWidth15,
  propMinHeight11,
  propMinHeight12,
  propMinHeight13,
  propMinHeight14,
  propMinHeight15,
  iconJamIconsOutlineL,
  iconIconoirCancel11,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start min-w-[170px] max-w-[173px] text-left text-base text-blue-gray-200 font-body-s ${className}`}
    >
      <FooterComponentsLinkFooter
        iconLeft={iconLeft}
        iconRight={iconRight}
        text={text}
        text={text}
        badge={badge}
        propAlignSelf={propAlignSelf}
        propMinHeight={propMinHeight}
        propColor={propColor}
        propMinWidth={propMinWidth}
        propFontWeight={propFontWeight}
        propHeight={propHeight}
        propHeight1={propHeight11}
        propAlignSelf1={propAlignSelf11}
        propDisplay={propDisplay}
        propMinWidth1={propMinWidth11}
        iconJamIconsOutlineLogos2={iconJamIconsOutlineLogos210}
        propMinHeight1={propMinHeight11}
        iconJamIconsOutlineL={iconJamIconsOutlineL}
        iconIconoirCancel1={iconIconoirCancel11}
      />
      {links && (
        <div className="self-stretch flex flex-col items-start justify-start">
          <FooterComponentsLinkFooter
            iconLeft={iconLeft1}
            iconRight={iconRight1}
            text={text1}
            text={text1}
            badge={badge1}
            propAlignSelf={propAlignSelf1}
            propMinHeight={propMinHeight1}
            propColor={propColor1}
            propMinWidth={propMinWidth1}
            propFontWeight={propFontWeight1}
            propHeight={propHeight1}
            propHeight1={propHeight12}
            propAlignSelf1={propAlignSelf12}
            propDisplay={propDisplay1}
            propMinWidth1={propMinWidth12}
            iconJamIconsOutlineLogos2={iconJamIconsOutlineLogos211}
            propMinHeight1={propMinHeight12}
            iconJamIconsOutlineL={iconJamIconsOutlineL}
            iconIconoirCancel1={iconIconoirCancel11}
          />
          <FooterComponentsLinkFooter
            iconLeft={iconLeft2}
            iconRight={iconRight2}
            text={text2}
            text={text2}
            badge={badge2}
            propAlignSelf={propAlignSelf2}
            propMinHeight={propMinHeight2}
            propColor={propColor2}
            propMinWidth={propMinWidth2}
            propFontWeight={propFontWeight2}
            propHeight={propHeight2}
            propHeight1={propHeight13}
            propAlignSelf1={propAlignSelf13}
            propDisplay={propDisplay2}
            propMinWidth1={propMinWidth13}
            iconJamIconsOutlineLogos2={iconJamIconsOutlineLogos212}
            propMinHeight1={propMinHeight13}
            iconJamIconsOutlineL={iconJamIconsOutlineL}
            iconIconoirCancel1={iconIconoirCancel11}
          />
          <FooterComponentsLinkFooter
            iconLeft={iconLeft3}
            iconRight={iconRight3}
            text={text3}
            text={text3}
            badge={badge3}
            propAlignSelf={propAlignSelf3}
            propMinHeight={propMinHeight3}
            propColor={propColor3}
            propMinWidth={propMinWidth3}
            propFontWeight={propFontWeight3}
            propHeight={propHeight3}
            propHeight1={propHeight14}
            propAlignSelf1={propAlignSelf14}
            propDisplay={propDisplay3}
            propMinWidth1={propMinWidth14}
            iconJamIconsOutlineLogos2={iconJamIconsOutlineLogos213}
            propMinHeight1={propMinHeight14}
            iconJamIconsOutlineL={iconJamIconsOutlineL}
            iconIconoirCancel1={iconIconoirCancel11}
          />
          <FooterComponentsLinkFooter
            iconLeft={iconLeft4}
            iconRight={iconRight4}
            text={text4}
            text={text4}
            badge={badge4}
            propAlignSelf={propAlignSelf4}
            propMinHeight={propMinHeight4}
            propColor={propColor4}
            propMinWidth={propMinWidth4}
            propFontWeight={propFontWeight4}
            propHeight={propHeight4}
            propHeight1={propHeight15}
            propAlignSelf1={propAlignSelf15}
            propDisplay={propDisplay4}
            propMinWidth1={propMinWidth15}
            iconJamIconsOutlineLogos2={iconJamIconsOutlineLogos214}
            propMinHeight1={propMinHeight15}
            iconJamIconsOutlineL={iconJamIconsOutlineL}
            iconIconoirCancel1={iconIconoirCancel11}
          />
          {link5 && (
            <div className="self-stretch flex-row items-center justify-start py-3 px-0 gap-2">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="relative leading-[140%]">{linkName5}</div>
              <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle1.svg"
                />
                <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="self-stretch relative leading-[140%]">
                    BETA
                  </div>
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
            <div className="self-stretch flex-row items-center justify-start py-3 px-0 gap-2">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="relative leading-[140%]">{linkName6}</div>
              <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle1.svg"
                />
                <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="self-stretch relative leading-[140%]">
                    BETA
                  </div>
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
          {link7 && (
            <div className="self-stretch flex-row items-center justify-start py-3 px-0 gap-2">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="relative leading-[140%]">Seven</div>
              <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle1.svg"
                />
                <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="self-stretch relative leading-[140%]">
                    BETA
                  </div>
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
            <div className="self-stretch flex-row items-center justify-start py-3 px-0 gap-2">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="relative leading-[140%]">Eight</div>
              <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle1.svg"
                />
                <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="self-stretch relative leading-[140%]">
                    BETA
                  </div>
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
              <div className="relative leading-[140%]">Nine</div>
              <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle1.svg"
                />
                <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="self-stretch relative leading-[140%]">
                    BETA
                  </div>
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
            <div className="self-stretch flex-row items-center justify-start py-3 px-0 gap-2">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/icon--jamicons--outline--logos--world.svg"
              />
              <div className="relative leading-[140%]">Ten</div>
              <div className="h-5 rounded bg-purple-100 hidden flex-row items-center justify-center p-1 box-border text-xs text-purple-800">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icon--jamicons--outline--logos--circle1.svg"
                />
                <div className="h-[17px] flex flex-row items-center justify-center py-0 px-1 box-border">
                  <div className="self-stretch relative leading-[140%]">
                    BETA
                  </div>
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
      )}
    </div>
  );
};

export default FooterComponentsColumn;
