import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[115px] pl-[26px] pr-[34px] box-border max-w-full shrink-0 text-left text-17xl text-gray-100 font-inter mq450:pb-[75px] mq450:box-border ${className}`}
    >
      <FrameComponent4 />
    </section>
  );
};

export default FrameComponent7;
