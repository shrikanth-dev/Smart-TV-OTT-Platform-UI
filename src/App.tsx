import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlayerPage from "./pages/PlayerPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ViewMorePortraitPage from "./pages/ViewMorePortraitPage";
import ViewMoreLandscapePage from "./pages/ViewMoreLandscapePage";


const App = () => {
  return (
    <Router  basename="/Smart-TV-OTT-Platform-UI">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="/view-more/portrait" element={<ViewMorePortraitPage />} />
        <Route path="/view-more/landscape" element={<ViewMoreLandscapePage />} />
      </Routes>
    </Router>
  );
};

export default App;

