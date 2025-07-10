import { useFocusable, FocusContext, setFocus } from "@noriginmedia/norigin-spatial-navigation";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Tray from "../components/Tray";
import data from "../config/config.json";
import { LayoutType, CarouselItem } from "../types/globalTypes";

const transformToLayoutData = (data: Record<string, unknown>): LayoutType[] => {
  return (data.layouts as LayoutType[]).map((layout) => ({
    type: layout.type,
    name: layout.name ?? "",
    layout: layout.layout,
    content: layout.content.map((item, index) => ({
      id: index.toString(),
      title: item.title,
      poster: item.poster,
      spotlight: item.spotlight,
      thumbnail: item.thumbnail,
      portrait: item.portrait,
      action: item.action,
      videoUrl: item.videoUrl ?? "",
      description: item.description ?? "No description available",
      series: item.series ?? [],
    })),
  }));
};

const layouts: LayoutType[] = transformToLayoutData(data);

const transformToCarouselData = (layout: LayoutType): CarouselItem[] => {
  return layout.content.map((item) => ({
    ...item,
  }));
};

const HomePage = () => {
  const { ref, focusKey } = useFocusable(); 
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [currentRowIndex, setCurrentRowIndex] = useState(0); 
  

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentRowIndex === 0) {
      setFocus("tile-0-0"); // Set focus to first tile of the first tray
    }
  }, [focusKey, currentRowIndex]); 

  const handlePlay = (video: { videoUrl?: string }) => {
    if (video.videoUrl) {
      navigate("/player", { state: { videoUrl: video.videoUrl } });
    } else {
      console.error("No video URL found for this item.");
    }
  };

  const spotlightLayout = layouts.find((layout) => layout.type === "spotlight");
  const trays = layouts.filter((layout) => layout.type === "tray");

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={data.loadingScreen as string} alt="Loading..." />
      </div>
    );
  }

  return (
    <FocusContext.Provider value={focusKey}>
    <div ref={ref} className="homepage"> 
      {spotlightLayout && (
        <Carousel
          data={{ ...spotlightLayout, content: transformToCarouselData(spotlightLayout) }}
          onPlay={handlePlay}
        />
      )}
      {trays.map((tray,  rowIndex) => ( 
        <Tray
          key= {`tray-${rowIndex}`}
          title={tray.name ?? ""}
          items={transformToCarouselData(tray)}
          layout={tray.name === "Hot Picks" || tray.name === "Top Web Series" ? "portrait" : "landscape"}
          onPlay={handlePlay}
          rowIndex={rowIndex}
          onFocus={() => setCurrentRowIndex(rowIndex)} 
        />
      ))}
    </div>
    </FocusContext.Provider>
  );
};

export default HomePage;

