import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import CarouselButtons from "./CarouselButtons";
import TimerOverlay from "./TimerOverlay";
import { CarouselSlideProps } from "../types/globalTypes";
import { useEffect } from "react";

const CarouselSlide = ({ item,  reset,  activeIndex,  interval, totalSlides, onPlay }: CarouselSlideProps) => {
  const { ref, focused } = useFocusable({ 
    focusable: true,
    onEnterPress: () => onPlay(item),
  });

  useEffect(() => {
    if (focused) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [focused]);

  return (
    <div ref={ref} className={`carousel-slide ${focused ? "focused" : ""}`} tabIndex={-1}>
      <img
        className={`carousel-image ${focused ? "focused" : ""}`}
        src={item.spotlight}
        alt={item.title}
        onClick={() => onPlay(item)}
        style={{ cursor: "pointer" }}
      />

      <TimerOverlay
       duration={5} 
       reset={reset}
       interval={interval}  
      totalSlides={totalSlides} 
      activeIndex={activeIndex}
      />

      <div className="slide-content">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <CarouselButtons onPlay={() => onPlay(item)} />
      </div>
    </div>
  );
};

export default CarouselSlide;
