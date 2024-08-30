import { FunctionComponent } from "react";
import FooterComponentsColumn from "./FooterComponentsColumn";
import FooterComponentsVerticalMen from "./FooterComponentsVerticalMen";
import FooterComponentsSocialIcons from "./FooterComponentsSocialIcons";

export type FooterType = {
  className?: string;
  appButtons?: boolean;
  column3?: boolean;
  linksBottom?: boolean;
  socialIcons?: boolean;
  column5?: boolean;
  column6?: boolean;
  column4?: boolean;
  logoBottom?: boolean;
  column2?: boolean;
  column1?: boolean;
  columns?: boolean;
  copyright?: string;
  disclaimer?: boolean;
};

const Footer: FunctionComponent<FooterType> = ({
  className = "",
  appButtons = true,
  column3 = true,
  linksBottom = true,
  socialIcons = true,
  column5 = true,
  column6 = true,
  column4 = true,
  logoBottom = false,
  column2 = true,
  column1 = true,
  columns = true,
  copyright = "Flowt @ 2023",
  disclaimer = false,
}) => {
  return (
    <footer
      className={`self-stretch bg-blue-gray-900 flex flex-col items-start justify-start py-0 px-20 box-border max-w-full text-left text-base text-blue-gray-200 font-body-s mq750:pl-10 mq750:pr-10 mq750:box-border ${className}`}
    >
      {columns && (
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-20 px-0 gap-12 mq750:gap-6 mq450:pt-[52px] mq450:pb-[52px] mq450:box-border">
          {column1 && (
            <FooterComponentsColumn
              link7={false}
              link6={false}
              link5={false}
              link8={false}
              link9={false}
              link10={false}
              links
              linkName5="Programming"
              linkName6="Animation"
              text="Categories"
              text1="User Interface"
              text2="User Experience"
              text3="Digital Media"
              text4="Lifestyle"
              iconJamIconsOutlineLogos210="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos211="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos212="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos213="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos214="/icon--jamicons--outline--logos--arrowright3.svg"
              iconLeft={false}
              iconLeft1={false}
              iconLeft2={false}
              iconLeft3={false}
              iconLeft4={false}
              iconRight={false}
              iconRight1={false}
              iconRight2={false}
              iconRight3={false}
              iconRight4={false}
              badge={false}
              badge1={false}
              badge2={false}
              badge3={false}
              badge4={false}
              propAlignSelf="stretch"
              propAlignSelf1="stretch"
              propAlignSelf2="stretch"
              propAlignSelf3="stretch"
              propAlignSelf4="stretch"
              propMinHeight="unset"
              propMinHeight1="unset"
              propMinHeight2="unset"
              propMinHeight3="unset"
              propMinHeight4="unset"
              propColor="#fff"
              propColor1="#e2e8f0"
              propColor2="#e2e8f0"
              propColor3="#e2e8f0"
              propColor4="#e2e8f0"
              propMinWidth="78px"
              propMinWidth1="101px"
              propMinWidth2="115px"
              propMinWidth3="94px"
              propMinWidth4="60px"
              propFontWeight="500"
              propFontWeight1="unset"
              propFontWeight2="unset"
              propFontWeight3="unset"
              propFontWeight4="unset"
              propHeight="20px"
              propHeight1="20px"
              propHeight2="20px"
              propHeight3="20px"
              propHeight4="20px"
              propHeight11="17px"
              propHeight12="17px"
              propHeight13="17px"
              propHeight14="17px"
              propHeight15="17px"
              propAlignSelf11="stretch"
              propAlignSelf12="stretch"
              propAlignSelf13="stretch"
              propAlignSelf14="stretch"
              propAlignSelf15="stretch"
              propDisplay="unset"
              propDisplay1="unset"
              propDisplay2="unset"
              propDisplay3="unset"
              propDisplay4="unset"
              propMinWidth11="unset"
              propMinWidth12="unset"
              propMinWidth13="unset"
              propMinWidth14="unset"
              propMinWidth15="unset"
              propMinHeight11="unset"
              propMinHeight12="unset"
              propMinHeight13="unset"
              propMinHeight14="unset"
              propMinHeight15="unset"
              iconJamIconsOutlineL={false}
              iconIconoirCancel11={false}
            />
          )}
          {column2 && (
            <FooterComponentsColumn
              link7={false}
              link6={false}
              link5={false}
              link8={false}
              link9={false}
              link10={false}
              links
              linkName5="Five"
              linkName6="Changelog"
              text="Product"
              text1="Pricing"
              text2="Overview"
              text3="Browse"
              text4="Accessibility"
              iconJamIconsOutlineLogos210="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos211="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos212="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos213="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos214="/icon--jamicons--outline--logos--arrowright3.svg"
              iconLeft={false}
              iconLeft1={false}
              iconLeft2={false}
              iconLeft3={false}
              iconLeft4={false}
              iconRight={false}
              iconRight1={false}
              iconRight2={false}
              iconRight3={false}
              iconRight4={false}
              badge={false}
              badge1={false}
              badge2={false}
              badge3
              badge4={false}
              propAlignSelf="stretch"
              propAlignSelf1="stretch"
              propAlignSelf2="stretch"
              propAlignSelf3="unset"
              propAlignSelf4="stretch"
              propMinHeight="unset"
              propMinHeight1="unset"
              propMinHeight2="unset"
              propMinHeight3="unset"
              propMinHeight4="unset"
              propColor="#fff"
              propColor1="#e2e8f0"
              propColor2="#e2e8f0"
              propColor3="#e2e8f0"
              propColor4="#e2e8f0"
              propMinWidth="57px"
              propMinWidth1="50px"
              propMinWidth2="65px"
              propMinWidth3="54px"
              propMinWidth4="90px"
              propFontWeight="500"
              propFontWeight1="unset"
              propFontWeight2="unset"
              propFontWeight3="unset"
              propFontWeight4="unset"
              propHeight="20px"
              propHeight1="20px"
              propHeight2="20px"
              propHeight3="unset"
              propHeight4="20px"
              propHeight11="17px"
              propHeight12="17px"
              propHeight13="17px"
              propHeight14="unset"
              propHeight15="17px"
              propAlignSelf11="stretch"
              propAlignSelf12="stretch"
              propAlignSelf13="stretch"
              propAlignSelf14="unset"
              propAlignSelf15="stretch"
              propDisplay="unset"
              propDisplay1="unset"
              propDisplay2="unset"
              propDisplay3="inline-block"
              propDisplay4="unset"
              propMinWidth11="unset"
              propMinWidth12="unset"
              propMinWidth13="unset"
              propMinWidth14="29px"
              propMinWidth15="unset"
              propMinHeight11="unset"
              propMinHeight12="unset"
              propMinHeight13="unset"
              propMinHeight14="unset"
              propMinHeight15="unset"
              iconJamIconsOutlineL={false}
              iconIconoirCancel11={false}
            />
          )}
          {column3 && (
            <FooterComponentsColumn
              link7={false}
              link6={false}
              link5={false}
              link8={false}
              link9={false}
              link10={false}
              links
              linkName5="Design"
              linkName6="Concept"
              text="Solutions"
              text1="Brainstorming"
              text2="Ideation"
              text3="Wireframing"
              text4="Research"
              iconJamIconsOutlineLogos210="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos211="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos212="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos213="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos214="/icon--jamicons--outline--logos--arrowright3.svg"
              iconLeft={false}
              iconLeft1={false}
              iconLeft2={false}
              iconLeft3={false}
              iconLeft4={false}
              iconRight={false}
              iconRight1={false}
              iconRight2={false}
              iconRight3={false}
              iconRight4={false}
              badge={false}
              badge1={false}
              badge2={false}
              badge3={false}
              badge4={false}
              propAlignSelf="stretch"
              propAlignSelf1="stretch"
              propAlignSelf2="stretch"
              propAlignSelf3="stretch"
              propAlignSelf4="stretch"
              propMinHeight="unset"
              propMinHeight1="unset"
              propMinHeight2="unset"
              propMinHeight3="unset"
              propMinHeight4="unset"
              propColor="#fff"
              propColor1="#e2e8f0"
              propColor2="#e2e8f0"
              propColor3="#e2e8f0"
              propColor4="#e2e8f0"
              propMinWidth="68px"
              propMinWidth1="101px"
              propMinWidth2="58px"
              propMinWidth3="87px"
              propMinWidth4="67px"
              propFontWeight="500"
              propFontWeight1="unset"
              propFontWeight2="unset"
              propFontWeight3="unset"
              propFontWeight4="unset"
              propHeight="20px"
              propHeight1="20px"
              propHeight2="20px"
              propHeight3="20px"
              propHeight4="20px"
              propHeight11="17px"
              propHeight12="17px"
              propHeight13="17px"
              propHeight14="17px"
              propHeight15="17px"
              propAlignSelf11="stretch"
              propAlignSelf12="stretch"
              propAlignSelf13="stretch"
              propAlignSelf14="stretch"
              propAlignSelf15="stretch"
              propDisplay="unset"
              propDisplay1="unset"
              propDisplay2="unset"
              propDisplay3="unset"
              propDisplay4="unset"
              propMinWidth11="unset"
              propMinWidth12="unset"
              propMinWidth13="unset"
              propMinWidth14="unset"
              propMinWidth15="unset"
              propMinHeight11="unset"
              propMinHeight12="unset"
              propMinHeight13="unset"
              propMinHeight14="unset"
              propMinHeight15="unset"
              iconJamIconsOutlineL={false}
              iconIconoirCancel11={false}
            />
          )}
          {column4 && (
            <FooterComponentsColumn
              link7={false}
              link6={false}
              link5={false}
              link8={false}
              link9={false}
              link10={false}
              links
              linkName5="Community"
              linkName6="Events"
              text="Resources"
              text1="Help Center"
              text2="Blog"
              text3="Tutorials"
              text4="FAQs"
              iconJamIconsOutlineLogos210="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos211="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos212="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos213="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos214="/icon--jamicons--outline--logos--arrowright3.svg"
              iconLeft={false}
              iconLeft1={false}
              iconLeft2={false}
              iconLeft3={false}
              iconLeft4={false}
              iconRight={false}
              iconRight1={false}
              iconRight2={false}
              iconRight3={false}
              iconRight4={false}
              badge={false}
              badge1={false}
              badge2={false}
              badge3={false}
              badge4={false}
              propAlignSelf="stretch"
              propAlignSelf1="stretch"
              propAlignSelf2="stretch"
              propAlignSelf3="stretch"
              propAlignSelf4="stretch"
              propMinHeight="unset"
              propMinHeight1="unset"
              propMinHeight2="unset"
              propMinHeight3="unset"
              propMinHeight4="unset"
              propColor="#fff"
              propColor1="#e2e8f0"
              propColor2="#e2e8f0"
              propColor3="#e2e8f0"
              propColor4="#e2e8f0"
              propMinWidth="76px"
              propMinWidth1="84px"
              propMinWidth2="32px"
              propMinWidth3="62px"
              propMinWidth4="38px"
              propFontWeight="500"
              propFontWeight1="unset"
              propFontWeight2="unset"
              propFontWeight3="unset"
              propFontWeight4="unset"
              propHeight="20px"
              propHeight1="20px"
              propHeight2="20px"
              propHeight3="20px"
              propHeight4="20px"
              propHeight11="17px"
              propHeight12="17px"
              propHeight13="17px"
              propHeight14="17px"
              propHeight15="17px"
              propAlignSelf11="stretch"
              propAlignSelf12="stretch"
              propAlignSelf13="stretch"
              propAlignSelf14="stretch"
              propAlignSelf15="stretch"
              propDisplay="unset"
              propDisplay1="unset"
              propDisplay2="unset"
              propDisplay3="unset"
              propDisplay4="unset"
              propMinWidth11="unset"
              propMinWidth12="unset"
              propMinWidth13="unset"
              propMinWidth14="unset"
              propMinWidth15="unset"
              propMinHeight11="unset"
              propMinHeight12="unset"
              propMinHeight13="unset"
              propMinHeight14="unset"
              propMinHeight15="unset"
              iconJamIconsOutlineL={false}
              iconIconoirCancel11={false}
            />
          )}
          {column5 && (
            <FooterComponentsColumn
              link7={false}
              link6={false}
              link5={false}
              link8={false}
              link9={false}
              link10={false}
              links
              linkName5="Reports"
              linkName6="Webinar"
              text="Support"
              text1="Contact Us"
              text2="Developers"
              text3="Documentation"
              text4="Integrations"
              iconJamIconsOutlineLogos210="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos211="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos212="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos213="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos214="/icon--jamicons--outline--logos--arrowright3.svg"
              iconLeft={false}
              iconLeft1={false}
              iconLeft2={false}
              iconLeft3={false}
              iconLeft4={false}
              iconRight={false}
              iconRight1={false}
              iconRight2={false}
              iconRight3={false}
              iconRight4={false}
              badge={false}
              badge1={false}
              badge2={false}
              badge3={false}
              badge4={false}
              propAlignSelf="stretch"
              propAlignSelf1="stretch"
              propAlignSelf2="stretch"
              propAlignSelf3="stretch"
              propAlignSelf4="stretch"
              propMinHeight="unset"
              propMinHeight1="unset"
              propMinHeight2="unset"
              propMinHeight3="unset"
              propMinHeight4="unset"
              propColor="#fff"
              propColor1="#e2e8f0"
              propColor2="#e2e8f0"
              propColor3="#e2e8f0"
              propColor4="#e2e8f0"
              propMinWidth="58px"
              propMinWidth1="79px"
              propMinWidth2="80px"
              propMinWidth3="110px"
              propMinWidth4="86px"
              propFontWeight="500"
              propFontWeight1="unset"
              propFontWeight2="unset"
              propFontWeight3="unset"
              propFontWeight4="unset"
              propHeight="20px"
              propHeight1="20px"
              propHeight2="20px"
              propHeight3="20px"
              propHeight4="20px"
              propHeight11="17px"
              propHeight12="17px"
              propHeight13="17px"
              propHeight14="17px"
              propHeight15="17px"
              propAlignSelf11="stretch"
              propAlignSelf12="stretch"
              propAlignSelf13="stretch"
              propAlignSelf14="stretch"
              propAlignSelf15="stretch"
              propDisplay="unset"
              propDisplay1="unset"
              propDisplay2="unset"
              propDisplay3="unset"
              propDisplay4="unset"
              propMinWidth11="unset"
              propMinWidth12="unset"
              propMinWidth13="unset"
              propMinWidth14="unset"
              propMinWidth15="unset"
              propMinHeight11="unset"
              propMinHeight12="unset"
              propMinHeight13="unset"
              propMinHeight14="unset"
              propMinHeight15="unset"
              iconJamIconsOutlineL={false}
              iconIconoirCancel11={false}
            />
          )}
          {column6 && (
            <FooterComponentsColumn
              link7
              link6
              link5
              link8
              link9
              link10
              links
              linkName5="Customers"
              linkName6="Partners"
              text="Company"
              text1="About"
              text2="Press"
              text3="Events"
              text4="Request Demo"
              iconJamIconsOutlineLogos210="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos211="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos212="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos213="/icon--jamicons--outline--logos--arrowright3.svg"
              iconJamIconsOutlineLogos214="/icon--jamicons--outline--logos--arrowright-22.svg"
              iconLeft={false}
              iconLeft1={false}
              iconLeft2={false}
              iconLeft3={false}
              iconLeft4={false}
              iconRight={false}
              iconRight1={false}
              iconRight2={false}
              iconRight3={false}
              iconRight4
              badge={false}
              badge1={false}
              badge2={false}
              badge3={false}
              badge4={false}
              propAlignSelf="stretch"
              propAlignSelf1="stretch"
              propAlignSelf2="stretch"
              propAlignSelf3="stretch"
              propAlignSelf4="unset"
              propMinHeight="unset"
              propMinHeight1="unset"
              propMinHeight2="unset"
              propMinHeight3="unset"
              propMinHeight4="24px"
              propColor="#fff"
              propColor1="#e2e8f0"
              propColor2="#e2e8f0"
              propColor3="#e2e8f0"
              propColor4="#e2e8f0"
              propMinWidth="68px"
              propMinWidth1="43px"
              propMinWidth2="41px"
              propMinWidth3="48px"
              propMinWidth4="105px"
              propFontWeight="500"
              propFontWeight1="unset"
              propFontWeight2="unset"
              propFontWeight3="unset"
              propFontWeight4="unset"
              propHeight="20px"
              propHeight1="20px"
              propHeight2="20px"
              propHeight3="20px"
              propHeight4="20px"
              propHeight11="17px"
              propHeight12="17px"
              propHeight13="17px"
              propHeight14="17px"
              propHeight15="17px"
              propAlignSelf11="stretch"
              propAlignSelf12="stretch"
              propAlignSelf13="stretch"
              propAlignSelf14="stretch"
              propAlignSelf15="stretch"
              propDisplay="unset"
              propDisplay1="unset"
              propDisplay2="unset"
              propDisplay3="unset"
              propDisplay4="unset"
              propMinWidth11="unset"
              propMinWidth12="unset"
              propMinWidth13="unset"
              propMinWidth14="unset"
              propMinWidth15="unset"
              propMinHeight11="unset"
              propMinHeight12="unset"
              propMinHeight13="unset"
              propMinHeight14="unset"
              propMinHeight15="24px"
              iconJamIconsOutlineL={false}
              iconIconoirCancel11={false}
            />
          )}
        </div>
      )}
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start py-12 px-0 box-border gap-8 max-w-full mq750:gap-4">
        {logoBottom && (
          <div className="w-[138px] flex-col items-start justify-start text-5xl">
            <div className="self-stretch h-8 relative overflow-hidden shrink-0">
              <img
                className="absolute h-full w-[38.41%] top-[0%] right-[61.59%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
              <img
                className="absolute h-[62.5%] w-[29.71%] top-[18.75%] right-[65.94%] bottom-[18.75%] left-[4.35%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className="absolute h-[31.25%] w-[7.25%] top-[34.38%] right-[84.78%] bottom-[34.38%] left-[7.97%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className="absolute h-[6.25%] w-[1.45%] top-[40.63%] right-[89.13%] bottom-[53.13%] left-[9.42%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector-3.svg"
              />
              <img
                className="absolute h-[31.25%] w-[7.25%] top-[34.38%] right-[68.84%] bottom-[34.38%] left-[23.91%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector-2.svg"
              />
              <b className="absolute top-[9.38%] left-[47.1%] leading-[27px] mq450:text-lgi mq450:leading-[21px]">
                viewio
              </b>
              <img
                className="absolute h-[6.25%] w-[1.45%] top-[40.63%] right-[73.19%] bottom-[53.13%] left-[25.36%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector-3.svg"
              />
            </div>
          </div>
        )}
        <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
          {copyright && (
            <div className="relative leading-[140%] inline-block min-w-[98px]">
              {copyright}
            </div>
          )}
        </div>
        {linksBottom && (
          <FooterComponentsVerticalMen
            link9
            link6
            link8
            link10
            link7
            link5
            link4
            link1
            link2
            link3
          />
        )}
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          {socialIcons && (
            <FooterComponentsSocialIcons
              linkedin
              youtube
              tikTok
              facebook
              medium
              twitter
              dribble
              instagram
              behance
              pinterest
            />
          )}
        </div>
        <div className="w-[270.7px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-4xs-4 text-white font-open-sans">
          {appButtons && (
            <div className="self-stretch flex flex-row items-start justify-start gap-4">
              <div className="w-[119.7px] flex flex-col items-start justify-center">
                <img
                  className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/app-store--filled.svg"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="flex-1 flex flex-row items-end justify-start pt-[4.6px] pb-1.5 pl-2.5 pr-[9px] relative gap-[19.8px]">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector-6.svg"
                  />
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/vector-7.svg"
                  />
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.2px]">
                    <img
                      className="w-[11.1px] h-[21.5px] relative z-[4]"
                      alt=""
                      src="/vector-8.svg"
                    />
                  </div>
                  <img
                    className="h-[13.4px] w-[16.2px] absolute !m-[0] bottom-[7.2px] left-[10.1px] z-[2]"
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className="h-[11px] w-[12.5px] absolute !m-[0] top-[calc(50%_-_5.5px)] left-[20.5px] z-[3]"
                    alt=""
                    src="/vector-10.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.4px]">
                    <div className="relative inline-block [-webkit-text-stroke:0.2px_#fff] min-w-[40px] z-[2]">
                      GET IT ON
                    </div>
                    <img
                      className="self-stretch h-[17px] relative max-w-full overflow-hidden shrink-0 z-[2]"
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                  <img
                    className="h-[12.9px] w-[16.3px] absolute !m-[0] top-[7.1px] left-[10px] z-[5]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {disclaimer && (
        <div className="self-stretch flex-row items-start justify-start py-12 px-0 box-border max-w-full text-xs">
          <div className="flex-1 relative leading-[140%] inline-block max-w-full">
            Disclaimer
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
