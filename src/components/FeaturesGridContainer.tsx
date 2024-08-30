import { FunctionComponent } from "react";
import ContentBox from "./ContentBox";

export type FeaturesGridContainerType = {
  className?: string;
};

const FeaturesGridContainer: FunctionComponent<FeaturesGridContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[762px] flex flex-row items-start justify-end py-0 px-[27px] box-border max-w-full ${className}`}
    >
      <div className="flex-1 border-blue-gray-200 border-t-[1px] border-solid border-blue-gray-200 border-b-[1px] border-solid box-border flex flex-col items-center justify-between py-0.5 px-[5px] min-h-[201px] max-w-full z-[1]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[4.67px] mq675:flex-wrap mq675:justify-center mq450:flex-wrap mq450:justify-center mq750:flex-wrap mq750:justify-center">
          <ContentBox
            titleBadge={false}
            imageBadge={false}
            category={false}
            title="Fermentum amet"
            imageUnderTitle={false}
            category="Category"
            text="Pellentesque quis tincidunt sit sed. Tortor massa sed habitant."
            image={false}
            title
            text
            imageThumb={false}
            author={false}
            icon
            buttons={false}
            titleIcon={false}
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="171px"
            picture="/picture@2x.png"
            propWidth1="96px"
            propHeight="96px"
            propBorderRadius="100px"
            propBackgroundColor="#d1fae5"
            propPadding="16px"
            iconTablerIconsViewfinder="/icon--ionicons--filled--attach.svg"
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            propMargin="unset"
            propFontSize="14px"
            propFontWeight="bold"
            propTextAlign="center"
            propFlex="1"
            iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
            picture1="/picture@2x.png"
            propColor="#0f172a"
            propTextAlign1="center"
            userThumb="/user-thumb@2x.png"
            propLeft1="calc(50% - 47.5px)"
            contentBoxAlignSelf="unset"
            contentBoxFlex="unset"
            categoryAlignSelf="stretch"
            categoryWidth="unset"
            pictureIconAlignSelf="stretch"
            pictureIconOverflow="hidden"
            pictureIconWidth="unset"
            paragraphFontSize="12px"
            userCardAlignSelf="stretch"
            userCardWidth="unset"
            userCardFlexWrap="unset"
            buttonsGroupFlexWrap="unset"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus.svg"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus1.svg"
            text2
            text2
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright.svg"
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-1.svg"
            iconRight1
            iconRight1
            iconLeft1={false}
            iconLeft1={false}
            propBackgroundColor2="#2563eb"
            propBackgroundColor2="unset"
            propHeight2="48px"
            propHeight2="48px"
            propFlex2="1"
            propFlex2="1"
            propBorderRadius2="8px"
            propBorderRadius2="8px"
            propBorder1="2px solid #2563eb"
            propBorder1="2px solid #2563eb"
            propPadding2="12px 9px"
            propPadding2="12px 9px"
            propBoxShadow1="unset"
            propBoxShadow1="unset"
            propAlignSelf3="stretch"
            propAlignSelf3="stretch"
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
            buttonMinWidth="unset"
            buttonMinWidth1="unset"
            textContainerHeight="unset"
            textContainerHeight1="unset"
          />
          <ContentBox
            titleBadge={false}
            imageBadge={false}
            category={false}
            title="Dignissim quam"
            imageUnderTitle={false}
            category="Category"
            text="Quam sed neque vitae viverra purus venenatis ac non."
            image={false}
            title
            text
            imageThumb={false}
            author={false}
            icon
            buttons={false}
            titleIcon={false}
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="171px"
            picture="/picture1@2x.png"
            propWidth1="96px"
            propHeight="96px"
            propBorderRadius="100px"
            propBackgroundColor="#cffafe"
            propPadding="16px"
            iconTablerIconsViewfinder="/icon--ionicons--filled--pulse.svg"
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            propMargin="unset"
            propFontSize="14px"
            propFontWeight="bold"
            propTextAlign="center"
            propFlex="1"
            iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
            picture1="/picture1@2x.png"
            propColor="#0f172a"
            propTextAlign1="center"
            userThumb="/user-thumb-1@2x.png"
            propLeft1="calc(50% - 47.5px)"
            contentBoxAlignSelf="unset"
            contentBoxFlex="unset"
            categoryAlignSelf="stretch"
            categoryWidth="unset"
            pictureIconAlignSelf="stretch"
            pictureIconOverflow="hidden"
            pictureIconWidth="unset"
            paragraphFontSize="12px"
            userCardAlignSelf="stretch"
            userCardWidth="unset"
            userCardFlexWrap="unset"
            buttonsGroupFlexWrap="unset"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus.svg"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus1.svg"
            text2
            text2
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright.svg"
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-1.svg"
            iconRight1
            iconRight1
            iconLeft1={false}
            iconLeft1={false}
            propBackgroundColor2="#2563eb"
            propBackgroundColor2="unset"
            propHeight2="48px"
            propHeight2="48px"
            propFlex2="1"
            propFlex2="1"
            propBorderRadius2="8px"
            propBorderRadius2="8px"
            propBorder1="2px solid #2563eb"
            propBorder1="2px solid #2563eb"
            propPadding2="12px 9px"
            propPadding2="12px 9px"
            propBoxShadow1="unset"
            propBoxShadow1="unset"
            propAlignSelf3="stretch"
            propAlignSelf3="stretch"
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
            buttonMinWidth="unset"
            buttonMinWidth1="unset"
            textContainerHeight="unset"
            textContainerHeight1="unset"
          />
          <ContentBox
            titleBadge={false}
            imageBadge={false}
            category={false}
            title="Dignissim quam"
            imageUnderTitle={false}
            category="Category"
            text="Eget sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam."
            image={false}
            title
            text
            imageThumb={false}
            author={false}
            icon
            buttons={false}
            titleIcon={false}
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="171px"
            picture="/picture2@2x.png"
            propWidth1="96px"
            propHeight="96px"
            propBorderRadius="100px"
            propBackgroundColor="#dbeafe"
            propPadding="16px"
            iconTablerIconsViewfinder="/icon--ionicons--filled--piechart.svg"
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            propMargin="unset"
            propFontSize="14px"
            propFontWeight="bold"
            propTextAlign="center"
            propFlex="1"
            iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
            picture1="/picture2@2x.png"
            propColor="#0f172a"
            propTextAlign1="center"
            userThumb="/user-thumb-2@2x.png"
            propLeft1="calc(50% - 47.5px)"
            contentBoxAlignSelf="unset"
            contentBoxFlex="unset"
            categoryAlignSelf="stretch"
            categoryWidth="unset"
            pictureIconAlignSelf="stretch"
            pictureIconOverflow="hidden"
            pictureIconWidth="unset"
            paragraphFontSize="12px"
            userCardAlignSelf="stretch"
            userCardWidth="unset"
            userCardFlexWrap="unset"
            buttonsGroupFlexWrap="unset"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus.svg"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus1.svg"
            text2
            text2
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright.svg"
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-1.svg"
            iconRight1
            iconRight1
            iconLeft1={false}
            iconLeft1={false}
            propBackgroundColor2="#2563eb"
            propBackgroundColor2="unset"
            propHeight2="48px"
            propHeight2="48px"
            propFlex2="1"
            propFlex2="1"
            propBorderRadius2="8px"
            propBorderRadius2="8px"
            propBorder1="2px solid #2563eb"
            propBorder1="2px solid #2563eb"
            propPadding2="12px 9px"
            propPadding2="12px 9px"
            propBoxShadow1="unset"
            propBoxShadow1="unset"
            propAlignSelf3="stretch"
            propAlignSelf3="stretch"
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
            buttonMinWidth="unset"
            buttonMinWidth1="unset"
            textContainerHeight="unset"
            textContainerHeight1="unset"
          />
          <ContentBox
            titleBadge={false}
            imageBadge={false}
            category={false}
            title="Risus morbi"
            imageUnderTitle={false}
            category="Category"
            text="Euismod sed pellentesque ut elementum."
            image={false}
            title
            text
            imageThumb={false}
            author={false}
            icon
            buttons={false}
            titleIcon={false}
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propWidth="171px"
            picture="/picture@2x.png"
            propWidth1="96px"
            propHeight="96px"
            propBorderRadius="100px"
            propBackgroundColor="#ede9fe"
            propPadding="16px"
            iconTablerIconsViewfinder="/icon--ionicons--filled--aperture.svg"
            propAlignSelf="stretch"
            propAlignSelf1="stretch"
            propMargin="unset"
            propFontSize="14px"
            propFontWeight="bold"
            propTextAlign="center"
            propFlex="1"
            iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
            picture1="/picture@2x.png"
            propColor="#0f172a"
            propTextAlign1="center"
            userThumb="/user-thumb@2x.png"
            propLeft1="calc(50% - 47.5px)"
            contentBoxAlignSelf="unset"
            contentBoxFlex="unset"
            categoryAlignSelf="stretch"
            categoryWidth="unset"
            pictureIconAlignSelf="stretch"
            pictureIconOverflow="hidden"
            pictureIconWidth="unset"
            paragraphFontSize="12px"
            userCardAlignSelf="stretch"
            userCardWidth="unset"
            userCardFlexWrap="unset"
            buttonsGroupFlexWrap="unset"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus.svg"
            iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus1.svg"
            text2
            text2
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright.svg"
            iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-1.svg"
            iconRight1
            iconRight1
            iconLeft1={false}
            iconLeft1={false}
            propBackgroundColor2="#2563eb"
            propBackgroundColor2="unset"
            propHeight2="48px"
            propHeight2="48px"
            propFlex2="1"
            propFlex2="1"
            propBorderRadius2="8px"
            propBorderRadius2="8px"
            propBorder1="2px solid #2563eb"
            propBorder1="2px solid #2563eb"
            propPadding2="12px 9px"
            propPadding2="12px 9px"
            propBoxShadow1="unset"
            propBoxShadow1="unset"
            propAlignSelf3="stretch"
            propAlignSelf3="stretch"
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
            buttonMinWidth="unset"
            buttonMinWidth1="unset"
            textContainerHeight="unset"
            textContainerHeight1="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesGridContainer;
