import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import LoginPage from "./pages/onboard/LoginPage";
import OnboardEntry from "./pages/onboard/OnboardEntry";
import { UserContextProvider } from "./context/user";
import CompletePage from "./pages/CompletePage";
import DonationFormPage from "./pages/donation/DonationFormPage";
import DonationCompletePage from "./pages/donation/DonationCompletePage";
import DonationOnboardPage from "./pages/donation/DonationOnboardPage";

function App() {
  return (
    <div className="overflow-hidden flex justify-center min-w-[300px] w-full min-h-[100vh] ">
      <div className="w-full max-w-[620px]">
        <UserContextProvider>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route index element={<HomePage />} />
            <Route path="complete" element={<CompletePage />} />
            <Route path="donation/form" element={<DonationFormPage />} />
            <Route path="donation/onboard" element={<DonationOnboardPage />} />
            <Route
              path="donation/complete"
              element={<DonationCompletePage />}
            />
          </Routes>
          <OnboardEntry />
        </UserContextProvider>
      </div>
    </div>
  );
}

export default App;
