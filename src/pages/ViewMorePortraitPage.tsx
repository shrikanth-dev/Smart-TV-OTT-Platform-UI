import React from "react";
import { useFocusable, FocusContext } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";

const ViewMorePortraitPage: React.FC = () => {
const navigate = useNavigate();
  const { ref, focusKey } = useFocusable({
    focusKey: "portrait-view-more-page",
  });

  const { ref: backButtonRef, focused } = useFocusable({
    onEnterPress: () => navigate(-1),
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="view-more-page" style={{ padding: "20px" }}>
        <h2 style={{ paddingTop: "20px" }}>More Portrait Content</h2>
        <p>This is where portrait content would be displayed.</p>
        <button ref={backButtonRef}
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          padding: "10px",
          backgroundColor: focused ? "rgba(0,0,0,0.5)":"white" ,
          //backgroundColor: "rgba(0,0,0,0.5)",
         // color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          zIndex: 1000,
        }}
      >
        ⬅ Back
      </button>
      </div>
    </FocusContext.Provider>
  );
};

export default ViewMorePortraitPage;

