import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { CarouselButtonsProps } from "../types/globalTypes";


const CarouselButtons = ({ onPlay }: CarouselButtonsProps) => {
  const { ref, focused } = useFocusable({focusable: true});

  

  return (
    <div ref={ref} className="carousel-buttons" >
      <button className={`watch-button ${focused ? "focused" : ""}`} onClick={onPlay} style={{ border: focused ? "2px solid blue" : "1px solid red" }}>
        ▶ WATCH
      </button>
      <button className="mylist-button">+ MY LIST</button>
    </div>
  );
};

export default CarouselButtons;

