import { useRef, useState, useEffect, useMemo } from "react";
import Slider from "react-slick";
import CarouselSlide from "./CarouselSlide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { CarouselItem } from "../types/globalTypes";


const Carousel = ({ data, onPlay, interval = 5 }: { data: { content: CarouselItem[] }; onPlay: (item: CarouselItem) => void; interval?: number }) => {
  const sliderRef = useRef<Slider | null>(null);
  const { ref, focusKey } = useFocusable({
    focusable: true, 
    trackChildren: true,
  });

  const [activeIndex, setActiveIndex] = useState(0); 
  const [reset, setReset] = useState(false); 

  const totalSlides = data.content.length; // Get total slides count

  const settings = useMemo(() => ({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: interval * 1000,
    arrows: false,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setActiveIndex(newIndex);
    },
  }), [interval]);

  useEffect(() => {
    setReset(true); // Trigger reset when activeIndex changes
    const timer = setTimeout(() => setReset(false), 100); // Reset after short delay
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="carousel">
        <Slider ref={sliderRef} {...settings}>
          {data.content.map((item, index) => (
            <CarouselSlide 
            interval={5}
            key={item.id} 
            item={item} 
            onPlay={onPlay}
            index={index}
            activeIndex={activeIndex}
            totalSlides={totalSlides}  
            reset={reset}  
             />
          ))}
        </Slider>
      </div>
    </FocusContext.Provider>
  );
};

export default Carousel;

