import React from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ViewMoreProps } from "../types/globalTypes"


const LandscapeViewMoreTile: React.FC<ViewMoreProps> = ({ onClick, rowIndex }) => {
    const { ref, focused } = useFocusable({
      focusKey: `view-more-${rowIndex}`, 
      onEnterPress: onClick,
    });
  
    return (
      <div
        ref={ref}
        className={`tile landscape-tile view-more-tile ${focused ? "focused" : ""}`}
        onClick={onClick}
      >
        <div className="view-more-content"><h2>View More</h2></div>
      </div>
    );
  };
  
  export default LandscapeViewMoreTile;
  