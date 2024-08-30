import { FunctionComponent } from "react";

export type FooterComponentsSocialIconsType = {
  className?: string;
  linkedin?: boolean;
  youtube?: boolean;
  tikTok?: boolean;
  facebook?: boolean;
  medium?: boolean;
  twitter?: boolean;
  dribble?: boolean;
  instagram?: boolean;
  behance?: boolean;
  pinterest?: boolean;
};

const FooterComponentsSocialIcons: FunctionComponent<
  FooterComponentsSocialIconsType
> = ({
  className = "",
  linkedin = true,
  youtube = true,
  tikTok = false,
  facebook = true,
  medium = false,
  twitter = true,
  dribble = false,
  instagram = true,
  behance = false,
  pinterest = false,
}) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-4 ${className}`}
    >
      {youtube && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/icon--jamicons--outline--logos--youtube.svg"
        />
      )}
      {facebook && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/icon--jamicons--outline--logos--facebook.svg"
        />
      )}
      {twitter && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          loading="lazy"
          alt=""
          src="/icon--jamicons--outline--logos--twitter.svg"
        />
      )}
      {instagram && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon--jamicons--outline--logos--instagram.svg"
        />
      )}
      {linkedin && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon--jamicons--outline--logos--linkedin.svg"
        />
      )}
      {medium && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon--bootstrap--outline--logos--medium.svg"
        />
      )}
      {pinterest && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon--jamicons--outline--logos--pinterest.svg"
        />
      )}
      {behance && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon--jamicons--outline--logos--behance.svg"
        />
      )}
      {dribble && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon--jamicons--outline--logos--dribbble.svg"
        />
      )}
      {tikTok && (
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt=""
          src="/icon--bootstrap--outline--logos--tiktok.svg"
        />
      )}
    </div>
  );
};

export default FooterComponentsSocialIcons;
