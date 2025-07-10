import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { CarouselButtonsProps } from "../types/globalTypes";
//import { useEffect } from "react";
//import { setFocus } from "@noriginmedia/norigin-spatial-navigation";

const CarouselButtons = ({ onPlay }: CarouselButtonsProps) => {
  const { ref, focused, focusKey } = useFocusable({focusable: true});
 // console.log("Component focusKey:", focusKey);

  // useEffect(() => {
  //   if (focusKey) {
  //     setFocus(focusKey); // Set focus after the component mounts
  //   }
  // }, [focusKey]);
  

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

