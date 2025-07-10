import TrayTitle from "./TrayTitle";
import TrayContent from "./TrayContent";
import { TrayProps } from "../types/globalTypes"; 
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useRef } from "react";
import { mergeRefs } from "@react-aria/utils";
import { useNavigate } from "react-router-dom"; 


const Tray: React.FC<Omit<TrayProps, "focusedRow" | "focusedIndexes">> = ({ title, items, layout, rowIndex, onPlay }) => {
  
  const trayRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { ref, hasFocusedChild } = useFocusable({
    focusKey: `tray-${rowIndex}`, 
    trackChildren: true, 
    onFocus: () => {
      trayRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    },
  });

  const handleViewMore = () => {
    console.log(`Navigating to View More page for ${layout} tray`);
    if (layout === "portrait") {
      navigate("/view-more/portrait");
    } else {
      navigate("/view-more/landscape");
    }
  };
  
  
  return (
    <div ref={mergeRefs(trayRef, ref)}  className={`tray ${layout === "portrait" ? "portrait-tray" : "landscape-tray"} ${hasFocusedChild ? "active-tray" : ""}`}>
      <TrayTitle title={title} />
      <TrayContent items={items} layout={layout} rowIndex={rowIndex} onPlay={onPlay} onViewMore={handleViewMore} />
    </div>
  );
};

export default Tray;

