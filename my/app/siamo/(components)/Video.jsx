import React, { useEffect, useRef } from 'react';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const storedTime = localStorage.getItem('videoTime');
    if (storedTime && videoRef.current) {
      videoRef.current.currentTime = storedTime;
    }
  }, []);

   useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        localStorage.setItem('videoTime', videoRef.current.currentTime);
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem('videoTime', videoRef.current.currentTime);
    }
  };
const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <div>
      <video
        ref={videoRef}
        className="w-[450px] h-[550px] max-w-full p-6 ml-auto"
        muted
        loop
        playsInline 
        controls
        onTimeUpdate={handleTimeUpdate}
        onClick={handlePlay}
      >
        <source src="/videos/videoPiping.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
