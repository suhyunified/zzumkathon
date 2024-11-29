import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import LoginPage from "./pages/onboard/LoginPage";
import OnboardEntry from "./pages/onboard/OnboardEntry";
import { UserContextProvider } from "./context/user";
import CompletePage from "./pages/CompletePage";
import DonationFormPage from "./pages/donation/DonationFormPage";
import DonationCompletePage from "./pages/donation/DonationCompletePage";
import DonationOnboardPage from "./pages/donation/DonationOnboardPage";
import DonationHistory from "./pages/donation/DonationHistory";
import React from "react";
import Adogen from "./components/Adogen";

function App() {
  return (
    <React.Fragment>
      <Adogen />
      <div className="overflow-hidden flex justify-center min-w-[300px] w-full">
        <div className="w-full max-w-[620px]">
          <audio id="jingle-bell" src="/jingle-bells.mp3" loop></audio>
          <UserContextProvider>
            <Routes>
              <Route path="login" element={<LoginPage />} />
              <Route index element={<HomePage />} />
              <Route path="complete" element={<CompletePage />} />
              <Route path="donation/form" element={<DonationFormPage />} />
              <Route
                path="donation/onboard"
                element={<DonationOnboardPage />}
              />
              <Route
                path="donation/complete"
                element={<DonationCompletePage />}
              />
              <Route path="donation/history" element={<DonationHistory />} />
            </Routes>
            <OnboardEntry />
          </UserContextProvider>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
