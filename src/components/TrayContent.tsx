import Tile from "./Tile";
import { TrayContentProps } from "../types/globalTypes";
import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";
import { setFocus } from "@noriginmedia/norigin-spatial-navigation";
import LandscapeViewMoreTile from "./LandscapeViewMore";
import PortraitViewMoreTile from "./PortraitViewMore";


const TrayContent = ({ items, layout, rowIndex, onPlay, onViewMore }: Omit<TrayContentProps, "focusedRow" | "focusedIndexes">) => {
  const { ref, focusKey, hasFocusedChild } = useFocusable({
    focusKey: `tray-${rowIndex}`,
    trackChildren: true, //  Ensures children (tiles) are tracked
  });

  useEffect(() => {
    if (rowIndex === 0) {
      setFocus("tile-0-0"); // Set focus to first tile of the first tray
    }
  }, []);  //focusKey, rowIndex

  return (
    <FocusContext.Provider value={focusKey}>
    <div ref={ref} className={`tray-content ${hasFocusedChild ? "active-tray" : ""}`}>
      {items.map((item, tileIndex) => (
        <Tile
          key={`tile-${rowIndex}-${tileIndex}`}
          item={item}
          layout={layout}
          onPlay={onPlay}
          rowIndex={rowIndex}
          tileIndex={tileIndex}
        />
      ))}


        {layout === "landscape" ? (
          <LandscapeViewMoreTile 
          id={`view-more-landscape-${rowIndex}`}
          title="View More"
          imageUrl="/placeholder.jpg"
          linkUrl="/view-more"
          onClick={onViewMore}
          rowIndex={rowIndex}
          />
        ) : (
          <PortraitViewMoreTile 
          id={`view-more-portrait-${rowIndex}`}
          title="View More"
          imageUrl="/placeholder.jpg"
          linkUrl="/view-more"
          onClick={onViewMore}
          rowIndex={rowIndex}
          />
        )}
        
    </div>
    </ FocusContext.Provider>
  );
};

export default TrayContent;

