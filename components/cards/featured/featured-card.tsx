import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Header from "./header";
import Video from "./video";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
  portrait?: boolean;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  active,
  portrait = false,
}) => {
  return (
    <div
      className={cn(
        "link w-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2",
        portrait ? "h-auto" : "h-full"
      )}
    >
      {/*Header*/}
      <Header title={title} tag={tag} />
      {/*Body*/}
      <div
        className={cn(
          "relative flex float-none flex-nowrap p-6 w-full items-center justify-center border border-border rounded-3xl",
          portrait ? "aspect-[9/16]" : "h-[750px]"
        )}
      >
        {/*Video*/}
        <Video video={video} active={active} />
      </div>
    </div>
  );
};

export default FeaturedCard;
