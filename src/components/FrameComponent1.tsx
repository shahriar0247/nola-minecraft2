import { FunctionComponent } from "react";
import MobileAppPlaceholder from "./MobileAppPlaceholder";
import SectionText from "./SectionText";
import ContentBox from "./ContentBox";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-20 box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:pb-[34px] mq750:box-border mq1050:pb-[52px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-40 max-w-full lg:gap-20 lg:flex-wrap mq750:gap-10 mq450:gap-5">
        <MobileAppPlaceholder />
        <div className="flex-1 flex flex-col items-start justify-start pt-[99px] px-0 pb-0 box-border min-w-[455px] max-w-full mq750:min-w-full mq1050:pt-16 mq1050:box-border mq450:pt-[42px] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full mq750:gap-6">
            <SectionText
              headline2="Personalized services"
              headline2
              headline1={false}
              text
              caption
              caption="Services"
              buttons={false}
              headline1="Headline One"
              text="Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
              propWidth="unset"
              propGap="24px"
              propFlex="unset"
              propBackgroundColor="unset"
              propPadding="unset"
              propMinWidth="unset"
              propPadding1="unset"
              propGap1="8px"
              propWidth1="unset"
              propFontSize="20px"
              propColor="#d97706"
              propTextAlign="left"
              propAlignSelf="stretch"
              propWidth2="unset"
              propBackground="unset"
              propWebkitBackgroundClip="unset"
              propWebkitTextFillColor="unset"
              propTextAlign1="left"
              propAlignSelf1="stretch"
              propColor1="#0f172a"
              propWidth3="unset"
              propFontSize1="56px"
              propBackground1="unset"
              propWebkitBackgroundClip1="unset"
              propWebkitTextFillColor1="unset"
              propTextAlign2="left"
              propAlignSelf2="stretch"
              propColor2="#0f172a"
              propColor3="#0f172a"
              propTextAlign3="left"
              propWidth4="528px"
              propHeight="unset"
              propAlignSelf5="unset"
              propHeight2="48px"
              propAlignSelf6="unset"
              propHeight3="48px"
              sectionTextAlignSelf="stretch"
              captionTextTransform="unset"
              captionFontWeight="500"
              paragraphFontSize="20px"
              iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus2.svg"
              text2
              iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright1.svg"
              iconRight1
              iconLeft1={false}
              propBackgroundColor2="#2563eb"
              propHeight2="48px"
              propFlex2="unset"
              propBorderRadius2="8px"
              propBorder1="2px solid #2563eb"
              propPadding2="12px 10px"
              propBoxShadow1="unset"
              propAlignSelf3="stretch"
              propColor2="#fff"
              propAlignSelf12="stretch"
              propFontSize2="16px"
              propFontWeight2="500"
              propMargin2="unset"
              buttonMinWidth1="unset"
              textContainerHeight1="unset"
            />
            <div className="self-stretch flex flex-row items-start justify-start gap-12 max-w-full mq750:gap-6 mq750:flex-wrap">
              <ContentBox
                titleBadge={false}
                category={false}
                title="Et mauris"
                imageUnderTitle={false}
                category="Category"
                text="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
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
                picture="/picture10@2x.png"
                propWidth1="unset"
                propHeight="unset"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="unset"
                iconTablerIconsViewfinder="/icon--iconoir--truck.svg"
                propAlignSelf="stretch"
                propAlignSelf1="stretch"
                propMargin="0"
                propFontSize="24px"
                propFontWeight="700"
                propTextAlign="left"
                propFlex="1"
                iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
                picture1="/picture10@2x.png"
                propColor="#0f172a"
                propTextAlign1="left"
                userThumb="/user-thumb@2x.png"
                propLeft1="calc(50% - 48px)"
                contentBoxAlignSelf="unset"
                contentBoxFlex="1"
                categoryAlignSelf="stretch"
                categoryWidth="unset"
                pictureIconAlignSelf="stretch"
                pictureIconOverflow="hidden"
                pictureIconWidth="unset"
                paragraphFontSize="18px"
                userCardAlignSelf="stretch"
                userCardWidth="unset"
                userCardFlexWrap="unset"
                buttonsGroupFlexWrap="unset"
                iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus8.svg"
                iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus9.svg"
                text2
                text2
                iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-14.svg"
                iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-15.svg"
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
              <ContentBox
                titleBadge={false}
                category={false}
                title="Eget sit"
                imageUnderTitle={false}
                category="Category"
                text="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
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
                picture="/picture10@2x.png"
                propWidth1="unset"
                propHeight="unset"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="unset"
                iconTablerIconsViewfinder="/icon--iconoir--trophy-1.svg"
                propAlignSelf="stretch"
                propAlignSelf1="stretch"
                propMargin="0"
                propFontSize="24px"
                propFontWeight="700"
                propTextAlign="left"
                propFlex="1"
                iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
                picture1="/picture10@2x.png"
                propColor="#0f172a"
                propTextAlign1="left"
                userThumb="/user-thumb@2x.png"
                propLeft1="calc(50% - 48px)"
                contentBoxAlignSelf="unset"
                contentBoxFlex="1"
                categoryAlignSelf="stretch"
                categoryWidth="unset"
                pictureIconAlignSelf="stretch"
                pictureIconOverflow="hidden"
                pictureIconWidth="unset"
                paragraphFontSize="18px"
                userCardAlignSelf="stretch"
                userCardWidth="unset"
                userCardFlexWrap="unset"
                buttonsGroupFlexWrap="unset"
                iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus8.svg"
                iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus9.svg"
                text2
                text2
                iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-14.svg"
                iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-15.svg"
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
            <div className="self-stretch flex flex-row items-start justify-start gap-12 max-w-full mq750:gap-6 mq750:flex-wrap">
              <ContentBox
                titleBadge={false}
                category={false}
                title="Imperdiet pellentesque"
                imageUnderTitle={false}
                category="Category"
                text="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
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
                picture="/picture10@2x.png"
                propWidth1="unset"
                propHeight="unset"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="unset"
                iconTablerIconsViewfinder="/icon--iconoir--trekking.svg"
                propAlignSelf="stretch"
                propAlignSelf1="stretch"
                propMargin="0"
                propFontSize="24px"
                propFontWeight="700"
                propTextAlign="left"
                propFlex="1"
                iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
                picture1="/picture10@2x.png"
                propColor="#0f172a"
                propTextAlign1="left"
                userThumb="/user-thumb@2x.png"
                propLeft1="calc(50% - 48px)"
                contentBoxAlignSelf="unset"
                contentBoxFlex="1"
                categoryAlignSelf="stretch"
                categoryWidth="unset"
                pictureIconAlignSelf="stretch"
                pictureIconOverflow="hidden"
                pictureIconWidth="unset"
                paragraphFontSize="18px"
                userCardAlignSelf="stretch"
                userCardWidth="unset"
                userCardFlexWrap="unset"
                buttonsGroupFlexWrap="unset"
                iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus8.svg"
                iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus9.svg"
                text2
                text2
                iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-14.svg"
                iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-15.svg"
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
              <ContentBox
                titleBadge={false}
                category={false}
                title="Non libero"
                imageUnderTitle={false}
                category="Category"
                text="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
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
                picture="/picture10@2x.png"
                propWidth1="unset"
                propHeight="unset"
                propBorderRadius="unset"
                propBackgroundColor="unset"
                propPadding="unset"
                iconTablerIconsViewfinder="/icon--iconoir--piggybank.svg"
                propAlignSelf="stretch"
                propAlignSelf1="stretch"
                propMargin="0"
                propFontSize="24px"
                propFontWeight="700"
                propTextAlign="left"
                propFlex="1"
                iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--pencil.svg"
                picture1="/picture10@2x.png"
                propColor="#0f172a"
                propTextAlign1="left"
                userThumb="/user-thumb@2x.png"
                propLeft1="calc(50% - 48px)"
                contentBoxAlignSelf="unset"
                contentBoxFlex="1"
                categoryAlignSelf="stretch"
                categoryWidth="unset"
                pictureIconAlignSelf="stretch"
                pictureIconOverflow="hidden"
                pictureIconWidth="unset"
                paragraphFontSize="18px"
                userCardAlignSelf="stretch"
                userCardWidth="unset"
                userCardFlexWrap="unset"
                buttonsGroupFlexWrap="unset"
                iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus8.svg"
                iconJamIconsOutlineLogos3="/icon--jamicons--outline--logos--plus9.svg"
                text2
                text2
                iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-14.svg"
                iconJamIconsOutlineLogos12="/icon--jamicons--outline--logos--arrowright-15.svg"
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
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
