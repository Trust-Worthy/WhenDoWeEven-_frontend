import { Routes, Route } from "react-router-dom";
import LandingCreateEventPage from "./pages/LandingCreateEventPage";
import EventLoginPage from "./pages/EventLoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingCreateEventPage />} />
        <Route path="/eventlogin" element={<EventLoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
