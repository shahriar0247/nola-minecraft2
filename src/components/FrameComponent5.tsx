import { FunctionComponent } from "react";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-5 pl-[21px] pr-[23px] box-border max-w-full shrink-0 text-left text-17xl text-white font-inter ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[17px] shrink-0 max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[33px] box-border max-w-full">
          <h1 className="m-0 w-[369px] relative text-inherit leading-[35px] font-black font-[inherit] flex items-center shrink-0 max-w-full z-[3] mq675:text-10xl mq675:leading-[28px] mq450:text-3xl mq450:leading-[21px] mq750:text-10xl mq750:leading-[28px]">
            Become the Best Bounty Hunter
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[18px] max-w-full text-xs mq675:flex-wrap">
          <div className="h-[210px] w-[309px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[309px] mq675:flex-1">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[3] mq675:self-stretch mq675:w-auto"
              alt=""
              src="/screenshot-from-20240811-053624-10@2x.png"
            />
          </div>
          <div className="flex-1 relative leading-[18px] inline-block min-w-[261px] max-w-full z-[3]">
            <p className="m-0">
              With a sophisticated bounty system, track down and eliminate your
              enemies to claim their heads and earn exclusive rewards. Compete
              in thrilling hunts that test your skills and strategy, and rise
              through the ranks to become the most notorious bounty hunter on
              the server
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 text-mini text-yellow">
              <span className="font-black">
                <span>Why It’s Special:</span>
                <span className="text-3xs">&nbsp;</span>
              </span>
            </p>
            <ul className="m-0 pl-4">
              <li className="mb-0">
                <span>
                  <span>
                    <b className="font-inter">Competitive Edge</b>
                    <span>
                      : Players are drawn to the challenge of outsmarting and
                      outmaneuvering others.
                    </span>
                  </span>
                </span>
              </li>
              <li className="mb-0">
                <span>
                  <span>
                    <b className="font-inter">Reward System</b>
                    <span className="font-inter">
                      : Earning rewards for taking down targets adds a tangible
                      goal that keeps players engaged.
                    </span>
                  </span>
                </span>
              </li>
              <li className="mb-0">
                <span>
                  <span>
                    <b className="font-inter">Unique Gameplay</b>
                    <span>
                      : Bounty hunting introduces a gameplay element that’s not
                      available on many servers, making it a standout feature.
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
                  Do you have what it takes to become the most feared player on
                  the server? Join now and prove your worth!
                </b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
