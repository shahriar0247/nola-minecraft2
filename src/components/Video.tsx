import { FunctionComponent } from "react";

export type VideoType = {
  className?: string;
};

const Video: FunctionComponent<VideoType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row items-center justify-center bg-[url('/public/video@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] ${className}`}
    >
      <div className="h-36 w-36 rounded-81xl bg-overlay-dark-25 flex flex-row items-center justify-center py-6 pl-7 pr-5 box-border">
        <img
          className="h-24 w-24 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon--jamicons--outline--logos--play.svg"
        />
      </div>
    </div>
  );
};

export default Video;
