import { Routes, Route } from "react-router-dom";
import LandingCreateEventPage from "./pages/LandingCreateEventPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingCreateEventPage />} />
      </Routes>
    </div>
  );
}

export default App;
