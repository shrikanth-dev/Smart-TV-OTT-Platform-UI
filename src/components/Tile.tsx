import React from "react";
import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { TileProps } from "../types/globalTypes";
import TileImage from "./TileImage";
import PlayButton from "./PlayButton";
//import { useEffect } from "react";
//import { setFocus } from "@noriginmedia/norigin-spatial-navigation";

const Tile: React.FC<Omit<TileProps, "isFocused">> = ({ item, layout, rowIndex, tileIndex, onPlay }) => {
  const { ref, focused, focusKey, hasFocusedChild } = useFocusable({
    focusKey: `tile-${rowIndex}-${tileIndex}`,
    trackChildren: true, // Assigning unique focus keys
    onEnterPress: () => onPlay(item),
    onFocus: (layout) => {
      // Scroll only if tile is partially hidden
      ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    },
  });

  return (
    <FocusContext.Provider value={focusKey}>
    <div
      ref={ref} 
      className={`tile ${layout === "portrait" ? "portrait-tile" : "landscape-tile"} ${focused ? "focused" : ""} ${hasFocusedChild ? "active-tray" : ""}`}
      onClick={() => onPlay(item)}
    >
      <TileImage item={item} layout={layout} />
      <PlayButton />
    </div>
    </ FocusContext.Provider>
  );
};

export default Tile;

