import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const Video = ({ video, active }: { video: string; active: boolean }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (active) {
        // videoRef.current.play();
         videoRef.current.play().catch(() => undefined);
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [active]);
  const toggleSound = () => {
    const nextMutedState = !isMuted;
    setIsMuted(nextMutedState);

    if (videoRef.current) {
      videoRef.current.muted = nextMutedState;

      if (!nextMutedState) {
        videoRef.current.play().catch(() => undefined);
      }
    }
  };
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-3xl">
      <video
        src={video}
        ref={videoRef}
        loop={active}
        muted={isMuted}
        className={cn(
          "h-full w-full object-cover rounded-3xl",
          active ? "" : "grayscale"
        )}
      />
       <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-4 right-4 z-10 rounded-full bg-black/70 px-4 py-2 text-sm text-white transition-colors hover:bg-black"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? "Unmute" : "Mute"}
      </button>
    </div>
  );
};

export default Video;
