'use client'
import { useRef, useEffect } from "react";

export default function Homepage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleStopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      handleStopVideo();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-60 flex flex-col items-center justify-center bg-gray-100 p-4 relative mt-32">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/images/herovideo.mp4"
        autoPlay
        loop
        muted
      />
      <div className="flex flex-col items-center text-white p-6 rounded-lg shadow-lg max-w-4xl z-10 relative">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Content is the atomic particle of all digital marketing.</h1>
          <button
            onClick={handlePlayVideo}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Play Video
          </button>
        </div>
      </div>
    </div>
  );
}
