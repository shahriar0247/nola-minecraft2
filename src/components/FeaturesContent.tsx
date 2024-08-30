import { FunctionComponent } from "react";
import ContentBox from "./ContentBox";

export type FeaturesContentType = {
  className?: string;
};

const FeaturesContent: FunctionComponent<FeaturesContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-20 box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between flex-wrap content-start max-w-full gap-5">
        <div className="w-[373.3px] flex flex-col items-start justify-start relative gap-2.5 max-w-full">
          <img
            className="w-[84.9px] h-[84.9px] absolute !m-[0] top-[-42px] left-[14px] rounded-3xs object-contain"
            loading="lazy"
            alt=""
            src="/rectangle-25.svg"
          />
          <ContentBox
            titleBadge={false}
            category={false}
            title="Become the Best Bounty Hunter"
            imageUnderTitle={false}
            category="Category"
            text="Hunt players, collect bounties, and rise to the top!"
            image={false}
            title
            text
            author={false}
            icon
            buttons={false}
            titleIcon={false}
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="unset"
            picture="/picture7@2x.png"
            propWidth1="unset"
            propHeight="unset"
            propBorderRadius="unset"
            propBackgroundColor="unset"
            propPadding="unset"
            iconTablerIconsViewfinder="/icon--iconoir--trophy.svg"
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            propMargin="unset"
            propFontSize="20px"
            propFontWeight="500"
            propTextAlign="left"
            propFlex="1"
            iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil2.svg"
            picture1="/picture7@2x.png"
            propColor="#0f172a"
            propTextAlign1="left"
            userThumb="/user-thumb@2x.png"
            propLeft1="calc(50% - 47.65px)"
            contentBoxAlignSelf="stretch"
            contentBoxFlex="unset"
            categoryAlignSelf="unset"
            categoryWidth="348px"
            pictureIconAlignSelf="unset"
            pictureIconOverflow="unset"
            pictureIconWidth="348px"
            paragraphFontSize="18px"
            userCardAlignSelf="unset"
            userCardWidth="348px"
            userCardFlexWrap="unset"
            buttonsGroupFlexWrap="unset"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus6.svg"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus7.svg"
            text2
            text2
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-11.svg"
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-2.svg"
            iconRight1
            iconRight1
            iconLeft1={false}
            iconLeft1={false}
            propBackgroundColor2="#2563eb"
            propBackgroundColor2="unset"
            propHeight2="unset"
            propHeight2="unset"
            propFlex2="1"
            propFlex2="1"
            propBorderRadius2="8px"
            propBorderRadius2="8px"
            propBorder1="2px solid #2563eb"
            propBorder1="2px solid #2563eb"
            propPadding2="9px"
            propPadding2="9px"
            propBoxShadow1="unset"
            propBoxShadow1="unset"
            propAlignSelf3="unset"
            propAlignSelf3="unset"
            propColor2="#fff"
            propColor2="#2563eb"
            propAlignSelf12="stretch"
            propAlignSelf12="stretch"
            propFontSize2="16px"
            propFontSize2="16px"
            propFontWeight2="500"
            propFontWeight2="500"
            propMargin2="unset"
            propMargin2="unset"
            buttonMinWidth="108px"
            buttonMinWidth1="108px"
            textContainerHeight="24px"
            textContainerHeight1="24px"
          />
        </div>
        <div className="w-[373.3px] flex flex-col items-start justify-start relative gap-2.5 max-w-full">
          <img
            className="w-[53px] h-[53px] absolute !m-[0] top-[-15px] left-[10.7px] rounded-3xs object-contain"
            loading="lazy"
            alt=""
            src="/rectangle-26.svg"
          />
          <ContentBox
            titleBadge={false}
            category={false}
            title="Collect Heads of Other Players"
            imageUnderTitle={false}
            category="Category"
            text="Display your victories and trade trophies for epic rewards."
            image={false}
            title
            text
            author={false}
            icon
            buttons={false}
            titleIcon={false}
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="unset"
            picture="/picture8@2x.png"
            propWidth1="unset"
            propHeight="unset"
            propBorderRadius="unset"
            propBackgroundColor="unset"
            propPadding="unset"
            iconTablerIconsViewfinder="/icon--iconoir--tunnel.svg"
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            propMargin="unset"
            propFontSize="20px"
            propFontWeight="500"
            propTextAlign="left"
            propFlex="1"
            iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil2.svg"
            picture1="/picture8@2x.png"
            propColor="#0f172a"
            propTextAlign1="left"
            userThumb="/user-thumb-11@2x.png"
            propLeft1="calc(50% - 47.65px)"
            contentBoxAlignSelf="stretch"
            contentBoxFlex="unset"
            categoryAlignSelf="unset"
            categoryWidth="348px"
            pictureIconAlignSelf="unset"
            pictureIconOverflow="unset"
            pictureIconWidth="348px"
            paragraphFontSize="18px"
            userCardAlignSelf="unset"
            userCardWidth="348px"
            userCardFlexWrap="unset"
            buttonsGroupFlexWrap="unset"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus6.svg"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus7.svg"
            text2
            text2
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-11.svg"
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-2.svg"
            iconRight1
            iconRight1
            iconLeft1={false}
            iconLeft1={false}
            propBackgroundColor2="#2563eb"
            propBackgroundColor2="unset"
            propHeight2="unset"
            propHeight2="unset"
            propFlex2="1"
            propFlex2="1"
            propBorderRadius2="8px"
            propBorderRadius2="8px"
            propBorder1="2px solid #2563eb"
            propBorder1="2px solid #2563eb"
            propPadding2="9px"
            propPadding2="9px"
            propBoxShadow1="unset"
            propBoxShadow1="unset"
            propAlignSelf3="unset"
            propAlignSelf3="unset"
            propColor2="#fff"
            propColor2="#2563eb"
            propAlignSelf12="stretch"
            propAlignSelf12="stretch"
            propFontSize2="16px"
            propFontSize2="16px"
            propFontWeight2="500"
            propFontWeight2="500"
            propMargin2="unset"
            propMargin2="unset"
            buttonMinWidth="108px"
            buttonMinWidth1="108px"
            textContainerHeight="24px"
            textContainerHeight1="24px"
          />
        </div>
        <ContentBox
          titleBadge={false}
          category={false}
          title="Competitive PvP Battles"
          imageUnderTitle={false}
          category="Category"
          text="Test your skills in fast-paced, balanced PvP arenas."
          image={false}
          title
          text
          author={false}
          icon
          buttons={false}
          titleIcon={false}
          propPosition="relative"
          propTop="unset"
          propLeft="unset"
          propWidth="373.3px"
          picture="/picture9@2x.png"
          propWidth1="unset"
          propHeight="unset"
          propBorderRadius="unset"
          propBackgroundColor="unset"
          propPadding="unset"
          iconTablerIconsViewfinder="/icon--iconoir--tv.svg"
          propAlignSelf="stretch"
          propAlignSelf1="stretch"
          propMargin="unset"
          propFontSize="20px"
          propFontWeight="500"
          propTextAlign="left"
          propFlex="1"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil2.svg"
          picture1="/picture9@2x.png"
          propColor="#0f172a"
          propTextAlign1="left"
          userThumb="/user-thumb-1@2x.png"
          propLeft1="calc(50% - 47.65px)"
          contentBoxAlignSelf="unset"
          contentBoxFlex="unset"
          categoryAlignSelf="unset"
          categoryWidth="348px"
          pictureIconAlignSelf="unset"
          pictureIconOverflow="unset"
          pictureIconWidth="348px"
          paragraphFontSize="18px"
          userCardAlignSelf="unset"
          userCardWidth="348px"
          userCardFlexWrap="unset"
          buttonsGroupFlexWrap="unset"
          iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus6.svg"
          iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus7.svg"
          text2
          text2
          iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-11.svg"
          iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-2.svg"
          iconRight1
          iconRight1
          iconLeft1={false}
          iconLeft1={false}
          propBackgroundColor2="#2563eb"
          propBackgroundColor2="unset"
          propHeight2="unset"
          propHeight2="unset"
          propFlex2="1"
          propFlex2="1"
          propBorderRadius2="8px"
          propBorderRadius2="8px"
          propBorder1="2px solid #2563eb"
          propBorder1="2px solid #2563eb"
          propPadding2="9px"
          propPadding2="9px"
          propBoxShadow1="unset"
          propBoxShadow1="unset"
          propAlignSelf3="unset"
          propAlignSelf3="unset"
          propColor2="#fff"
          propColor2="#2563eb"
          propAlignSelf12="stretch"
          propAlignSelf12="stretch"
          propFontSize2="16px"
          propFontSize2="16px"
          propFontWeight2="500"
          propFontWeight2="500"
          propMargin2="unset"
          propMargin2="unset"
          buttonMinWidth="108px"
          buttonMinWidth1="108px"
          textContainerHeight="24px"
          textContainerHeight1="24px"
        />
      </div>
    </div>
  );
};

export default FeaturesContent;
