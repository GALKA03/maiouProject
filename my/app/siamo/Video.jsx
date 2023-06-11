import { useEffect, useRef } from 'react';
const Video = () => {
    const videoRef = useRef(null);
      useEffect(() => {
    const storedTime = localStorage.getItem('videoTime');
    if (storedTime && videoRef.current) {
      videoRef.current.currentTime = storedTime;
      videoRef.current.play();
          }
     if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);
const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem('videoTime', videoRef.current.currentTime);
    }
  };
    return (
        <div>
        <video ref={videoRef}
        className="w-full h-auto max-w-full"
                muted
                loop
        controls
        onTimeUpdate={handleTimeUpdate}>
  <source src="/videos/testVideo.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
            </video>
            </div>
    )
}
export default Video