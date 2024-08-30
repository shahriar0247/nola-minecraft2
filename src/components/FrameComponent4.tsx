import { FunctionComponent } from "react";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start gap-[52px] shrink-0 max-w-full text-left text-17xl text-gray-100 font-inter mq675:flex-wrap mq750:gap-[26px] ${className}`}
    >
      <div className="h-[206px] w-[314px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border min-w-[314px] mq675:flex-1">
        <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[15px]">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[37px]">
            <h1 className="m-0 self-stretch relative text-inherit font-black font-[inherit] z-[1] mq675:text-10xl mq450:text-3xl mq750:text-10xl">
              New Cosmetics Every Month
            </h1>
          </div>
          <div className="self-stretch w-[3px] relative border-black border-r-[3px] border-solid box-border z-[2]" />
        </div>
      </div>
      <div className="h-[298px] flex-1 relative leading-[17px] inline-block min-w-[226px] max-w-full z-[3] text-xs text-black">
        <p className="m-0">
          Express yourself with a fresh collection of cosmetics released every
          month. From unique skins to custom items, there’s always something new
          to personalize your experience. Stand out from the crowd and make your
          mark on the server with exclusive cosmetics
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0 text-base text-steelblue-200">
          <span className="font-black">
            <span>Why It’s Special</span>
            <span className="text-mini">:</span>
            <span className="text-3xs">&nbsp;</span>
          </span>
        </p>
        <ul className="m-0 pl-4">
          <li className="mb-0">
            <span>
              <span>
                <span className="font-extrabold font-inter">{`Personalization: `}</span>
                <span>
                  Players love customizing their avatars and in-game items to
                  reflect their style.
                </span>
              </span>
            </span>
          </li>
          <li className="mb-0">
            <span>
              <span>
                <span className="font-extrabold font-inter">
                  Exclusivity: Limited-
                </span>
                <span className="font-inter">
                  time cosmetics create a sense of urgency and exclusivity,
                  encouraging players to stay active.
                </span>
              </span>
            </span>
          </li>
          <li className="mb-0">
            <span>
              <span>
                <span className="font-extrabold font-inter">{`Community Engagement: `}</span>
                <span>
                  Regular cosmetic releases keep the community engaged and
                  coming back for more.
                </span>
              </span>
            </span>
          </li>
        </ul>
        <p className="m-0">
          <span>
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>
              <span>&nbsp;</span>
            </span>
          </span>
        </p>
        <p className="m-0 text-base">
          <span>
            <span className="font-extrabold">
              Stay ahead of the curve with our exclusive monthly cosmetics.
              Express your unique style and stand out in the world of Minecraft!
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default FrameComponent4;
