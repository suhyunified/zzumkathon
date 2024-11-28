import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import OnboardEntry from "./pages/onboard/OnboardEntry";

function App() {
  return (
    <div className="overflow-hidden flex justify-center min-w-[300px] w-full min-h-screen bg-[#2B2F34]">
      <div className="w-full max-w-[620px] relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/onboard" element={<OnboardEntry />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
