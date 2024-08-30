import { FunctionComponent } from "react";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[753px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border gap-14 shrink-0 max-w-full text-left text-xs text-black font-inter mq675:flex-wrap mq450:gap-7 ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative min-w-[226px] max-w-full">
        <div className="flex-1 relative leading-[18px] inline-block shrink-0 max-w-full z-[2]">
          <p className="m-0">
            Every hour, safe zones appear across the server, offering a brief
            respite from the dangers of PvP. Use this time to regroup, trade
            with others, or prepare for your next big move. Safe zones add a
            strategic layer to gameplay, where timing and planning are key to
            survival
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0 text-mini text-steelblue-200">
            <span className="font-black">
              <span>Why It’s Special:</span>
              <span className="text-3xs">&nbsp;</span>
            </span>
          </p>
          <ul className="m-0 pl-4">
            <li className="mb-0">
              <span>
                <span>
                  <b className="font-inter">{`Strategic Depth: `}</b>
                  <span>
                    Safe zones add a strategic element to PvP, encouraging
                    players to think ahead.
                  </span>
                </span>
              </span>
            </li>
            <li className="mb-0">
              <span>
                <span>
                  <b className="font-inter">{`Community Interaction: `}</b>
                  <span className="font-inter">
                    Safe zones become hubs for trading and social interaction.
                  </span>
                </span>
              </span>
            </li>
            <li className="mb-0">
              <span>
                <span>
                  <b className="font-inter">{`Dynamic Gameplay: `}</b>
                  <span>
                    The periodic appearance of safe zones keeps the gameplay
                    dynamic and unpredictable.
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
          <p className="m-0 text-base">
            <span>
              <b>
                Plan your moves and make the most of every hour with our
                strategic safe zones. Survival isn’t just about fighting; it’s
                about knowing when to make your move!
              </b>
            </span>
          </p>
        </div>
        <div className="h-[461px] w-[443px] absolute !m-[0] right-[-184px] bottom-[-121px]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
            alt=""
          />
          <div className="absolute top-[37px] left-[271px] border-black border-r-[3px] border-solid box-border w-[3px] h-[195px] z-[2]" />
        </div>
      </div>
      <div className="w-[334px] flex flex-col items-start justify-start pt-[52px] px-0 pb-0 box-border min-w-[334px] max-w-full text-17xl text-gray-200 mq675:flex-1">
        <h1 className="m-0 self-stretch relative text-inherit leading-[35px] font-black font-[inherit] shrink-0 z-[2] mq675:text-10xl mq675:leading-[28px] mq450:text-3xl mq450:leading-[21px] mq750:text-10xl mq750:leading-[28px]">
          Hourly Safe Zones
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent6;
