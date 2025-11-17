import React from "react";
import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { TileProps } from "../types/globalTypes";
import TileImage from "./TileImage";
import PlayButton from "./PlayButton";

const Tile: React.FC<Omit<TileProps, "isFocused">> = ({ item, layout, rowIndex, tileIndex, onPlay }) => {
  const { ref, focused, focusKey, hasFocusedChild } = useFocusable({
    focusKey: `tile-${rowIndex}-${tileIndex}`,
    trackChildren: true, 
    onEnterPress: () => onPlay(item),
    onFocus: () => {
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

