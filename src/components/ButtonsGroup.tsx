import { FunctionComponent } from "react";
import Button from "./Button";

export type ButtonsGroupType = {
  className?: string;
  iconJamIconsOutlineLogos3?: string;
  text2?: string;
  iconJamIconsOutlineLogos12?: string;
  iconRight1?: boolean;
  iconLeft1?: boolean;
  propBackgroundColor2?: string;
  propHeight2?: string;
  propFlex2?: string;
  propBorderRadius2?: string;
  propBorder1?: string;
  propPadding2?: string;
  propBoxShadow1?: string;
  propAlignSelf3?: string;
  propColor2?: string;
  propAlignSelf12?: string;
  propFontSize2?: string;
  propFontWeight2?: string;
  propMargin2?: string;
  buttonMinWidth?: string;
  textContainerHeight?: string;
  buttonText?: string;
};

const ButtonsGroup: FunctionComponent<ButtonsGroupType> = ({
  className = "",
  iconJamIconsOutlineLogos3,
  text2,
  iconJamIconsOutlineLogos12,
  iconRight1,
  iconLeft1,
  propBackgroundColor2,
  propHeight2,
  propFlex2,
  propBorderRadius2,
  propBorder1,
  propPadding2,
  propBoxShadow1,
  propAlignSelf3,
  propColor2,
  propAlignSelf12,
  propFontSize2,
  propFontWeight2,
  propMargin2,
  buttonMinWidth,
  textContainerHeight,
  buttonText,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-start pt-6 px-0 pb-0 box-border gap-8 max-w-full text-left text-xl text-blue-600 font-body-s mq750:gap-4 mq750:flex-wrap ${className}`}
    >
      <button className="cursor-pointer border-white border-[2px] border-solid py-[13px] px-3.5 bg-white rounded-31xl flex flex-row items-center justify-center">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
          alt=""
          src="/icon--jamicons--outline--logos--plus2.svg"
        />
        <div className="flex flex-row items-center justify-center py-0 px-[15px]">
          <div className="relative text-xl tracking-[0.5px] leading-[24px] font-medium font-body-s text-blue-gray-900 text-left mq450:text-base mq450:leading-[19px]">
            {buttonText}
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
          alt=""
          src="/icon--jamicons--outline--logos--arrowright2.svg"
        />
      </button>
      <Button
        iconRight={iconRight1}
        iconLeft={iconLeft1}
        text={text2}
        text={text2}
        propBackgroundColor={propBackgroundColor2}
        propHeight={propHeight2}
        propFlex={propFlex2}
        propBorderRadius={propBorderRadius2}
        propBorder={propBorder1}
        propPadding={propPadding2}
        propBoxShadow={propBoxShadow1}
        iconJamIconsOutlineLogos={iconJamIconsOutlineLogos3}
        propAlignSelf={propAlignSelf3}
        propColor={propColor2}
        propAlignSelf1={propAlignSelf12}
        propFontSize={propFontSize2}
        propFontWeight={propFontWeight2}
        propMargin={propMargin2}
        iconJamIconsOutlineLogos1={iconJamIconsOutlineLogos12}
        buttonMinWidth={buttonMinWidth}
        textContainerHeight={textContainerHeight}
      />
      <div className="h-12 rounded-lg hidden flex-row items-center justify-center py-4 px-2 box-border">
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/icon--jamicons--outline--logos--plus3.svg"
        />
        <div className="h-6 flex flex-row items-center justify-center py-0 px-4 box-border">
          <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium mq450:text-base mq450:leading-[19px]">
            Button Text
          </div>
        </div>
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0"
          alt=""
          src="/icon--jamicons--outline--logos--arrowright-8.svg"
        />
      </div>
    </div>
  );
};

export default ButtonsGroup;
