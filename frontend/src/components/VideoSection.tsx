"use client";
import React, { useState, useRef, useEffect } from "react";

export const VideoSection = () => {
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if video has been played before using a flag in memory
    const videoPlayedFlag = window.videoHasPlayed || false;
    
    if (videoPlayedFlag) {
      setHasPlayedOnce(true);
    } else {
      // Mark that video will play for the first time
      window.videoHasPlayed = true;
    }
  }, []);

  const handleVideoEnd = () => {
    setHasPlayedOnce(true);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-8 pb-32 bg-transparent">
        {/* Video Container with White Glow */}
        <div className="relative w-full max-w-5xl">
          {/* White glow effect - increased opacity and reduced blur */}
          <div className="absolute inset-0 bg-white blur-lg opacity-70 rounded-[2.5rem]"></div>

          {/* Additional subtle glow layer */}
          <div className="absolute inset-0 bg-white blur-2xl opacity-40 rounded-[2.5rem]"></div>

          {/* Video container */}
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden">
            <div className="rounded-[2.5rem]">
              {/* Video - only autoplay if hasn't played once */}
              <video
                ref={videoRef}
                autoPlay={!hasPlayedOnce}
                loop={false}
                className="w-full h-full object-cover rounded-[2.5rem]"
                controls
                onEnded={handleVideoEnd}
              >
                <source src="https://res.cloudinary.com/djohjwkn6/video/upload/v1741290976/RostraFi_pvn5pk.mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};