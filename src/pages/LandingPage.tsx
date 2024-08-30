import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FeaturesContent from "../components/FeaturesContent";
import Section1 from "../components/Section1";
import Button from "../components/Button";
import ScreenMacbook from "../components/ScreenMacbook";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent2 />
      <div className="w-[45px] h-[45px] absolute !m-[0] top-[851px] right-[367px] rounded-xl bg-fuchsia-700 opacity-[0.5]" />
      <section className="self-stretch flex flex-col items-start justify-start gap-20 max-w-full mq750:gap-10 mq450:gap-5">
        <FeaturesContent />
        <Section1 />
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-20 box-border relative max-w-full text-left text-xl text-blue-gray-900 font-body-s mq750:pb-[52px] mq750:box-border">
        <div className="flex-1 bg-blue-gray-100 flex flex-row items-start justify-start p-20 box-border gap-20 max-w-full lg:gap-10 lg:flex-wrap lg:pl-10 lg:pr-10 lg:box-border mq750:gap-5 mq750:pt-[52px] mq750:pb-[52px] mq750:box-border">
          <div className="flex-1 flex flex-col items-start justify-center min-w-[370px] max-w-full mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq750:gap-4">
              <div className="self-stretch flex flex-col items-start justify-start gap-4">
                <b className="self-stretch relative tracking-[3px] leading-[100%] uppercase hidden mq450:text-base mq450:leading-[16px]">
                  Testimonials
                </b>
                <div className="self-stretch relative text-53xl leading-[110%] font-extrabold hidden mq1050:text-39xl mq1050:leading-[63px] mq450:text-24xl mq450:leading-[48px]">
                  Unlimited ideas for your projects
                </div>
                <h1 className="m-0 self-stretch relative text-37xl leading-[62px] font-extrabold font-[inherit] mq1050:text-26xl mq1050:leading-[49px] mq450:text-15xl mq450:leading-[37px]">
                  Key Features
                </h1>
              </div>
              <div className="self-stretch h-[317px] relative leading-[27px] inline-block font-inter mq450:text-base mq450:leading-[22px]">
                <ul className="m-0 text-inherit pl-[27px]">
                  <li className="mb-0">
                    <b className="font-inter">{`Custom Plugins & Unique Gameplay `}</b>
                    <span>
                      Experience exclusive game modes and features crafted just
                      for this server.
                    </span>
                  </li>
                </ul>
                <p className="[margin-block-start:0] [margin-block-end:5px]">
                  &nbsp;
                </p>
                <ul className="m-0 text-inherit pl-[27px]">
                  <li className="mb-0">
                    <b className="font-inter">Hourly Safe Zones </b>
                    <span>
                      Plan your moves and take a breather in dynamic safe zones.
                    </span>
                  </li>
                </ul>
                <p className="[margin-block-start:0] [margin-block-end:5px]">
                  &nbsp;
                </p>
                <ul className="m-0 text-inherit pl-[27px]">
                  <li className="mb-0">
                    <b>New Cosmetics Every Month</b>
                  </li>
                  <li>
                    <span className="font-inter">
                      Unlock limited-time skins and items to show off your
                      style.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-[528px] hidden flex-row items-center justify-start gap-4 max-w-full text-base text-blue-600">
                <Button
                  iconRight
                  iconLeft={false}
                  text
                  text="Button Text"
                  propBackgroundColor="#2563eb"
                  propHeight="48px"
                  propFlex="unset"
                  propBorderRadius="8px"
                  propBorder="2px solid #2563eb"
                  propPadding="12px 10px"
                  propBoxShadow="unset"
                  iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--plus2.svg"
                  propAlignSelf="stretch"
                  propColor="#fff"
                  propAlignSelf1="stretch"
                  propFontSize="16px"
                  propFontWeight="500"
                  propMargin="unset"
                  iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright1.svg"
                  buttonMinWidth="unset"
                  textContainerHeight="unset"
                />
                <div className="h-12 rounded-lg border-blue-600 border-[2px] border-solid box-border hidden flex-row items-center justify-center py-3 px-2.5">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
                    alt=""
                    src="/icon--jamicons--outline--logos--plus3.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4">
                    <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium">
                      Button Text
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icon--jamicons--outline--logos--arrowright-8.svg"
                  />
                </div>
                <div className="h-12 rounded-lg hidden flex-row items-center justify-center py-3 px-2 box-border relative">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px] z-[0]"
                    alt=""
                    src="/icon--jamicons--outline--logos--plus3.svg"
                  />
                  <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 z-[1]">
                    <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium">
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
            </div>
          </div>
          <div className="w-[630px] flex flex-col items-start justify-start pt-8 px-0 pb-0 box-border min-w-[630px] max-w-full lg:flex-1 mq1050:min-w-full">
            <div className="self-stretch h-[347px] relative">
              <ScreenMacbook />
              <img
                className="absolute top-[0px] left-[408px] rounded-3xs w-[222px] h-[164px] object-cover z-[4]"
                loading="lazy"
                alt=""
                src="/picture7@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="h-20 w-20 absolute !m-[0] bottom-[-34px] left-[143px] rounded-[50%] bg-amber-400 z-[4]" />
      </section>
      <img
        className="w-[1146.5px] h-[1000.1px] absolute !m-[0] bottom-[589.9px] left-[-573.7px]"
        alt=""
        src="/rectangle-15.svg"
      />
      <div className="w-[99px] h-[99px] absolute !m-[0] bottom-[875px] left-[21px] rounded-[50%] bg-blue-light-400 z-[1]" />
      <FrameComponent1 />
      <img
        className="w-36 h-[197px] absolute !m-[0] bottom-[1019px] left-[444px] rounded-xl overflow-hidden shrink-0 z-[4]"
        alt=""
        src="/frame-4-1.svg"
      />
      <Footer
        appButtons
        column3
        linksBottom
        socialIcons
        column5
        column6
        copyright="Flowt @ 2023"
        column4
        logoBottom={false}
        column2
        column1
        columns
        copyright
        disclaimer={false}
      />
      <Header />
    </div>
  );
};

export default LandingPage;
