import React from "react";
import { TileImageProps } from "../types/globalTypes";

const TileImage: React.FC<TileImageProps> = ({ item, layout }) => {
  return <img src={layout === "portrait" ? item.portrait : item.poster} alt={item.title} className="tile-image" />;
};

export default TileImage;


  