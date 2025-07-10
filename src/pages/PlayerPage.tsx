import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import type Player from "video.js/dist/types/player"; 
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";


const PlayerPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const videoUrl = (location.state as { videoUrl?: string })?.videoUrl;
  const { ref: backButtonRef, focused } = useFocusable({
    onEnterPress: () => navigate(-1),
  });

  useEffect(() => {
    if (!videoUrl) {
      console.error("❌ No video found, redirecting...");
      navigate("/");
      return;
    }

    console.log("Video URL received:", videoUrl);

    const timeout = setTimeout(() => {
      if (videoRef.current && !playerRef.current) {
        playerRef.current = videojs(videoRef.current, {
          controls: true,
          autoplay: true,
          fluid: true,
          sources: [{ src: videoUrl, type: "video/mp4" }],
        });
        setVideoLoaded(true);
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [videoUrl, navigate]);

  if (!videoUrl) {
    return <p style={{ color: "white", textAlign: "center" }}>No video found.</p>;
  }

  return (

    <div className="video-container">
      <button ref={backButtonRef}
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "10px",
          backgroundColor: focused ? "rgba(0,0,0,0.5)":"white" ,
          //backgroundColor: "rgba(0,0,0,0.5)",
         // color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          zIndex: 1000,
        }}
      >
        ⬅ Back
      </button>

      {/* Video Player */}
      {!videoLoaded && <p style={{ color: "white" }}>Loading Video...</p>}
      <video ref={videoRef} className="video-js vjs-default-skin" />
    </div>
  );
};

export default PlayerPage;

