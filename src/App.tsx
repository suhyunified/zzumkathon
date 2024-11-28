import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import LoginPage from "./pages/onboard/LoginPage";
import OnboardEntry from "./pages/onboard/OnboardEntry";
import { UserContextProvider } from "./context/user";
import CompletePage from "./pages/CompletePage";

function App() {
  return (
    <div className="overflow-hidden flex justify-center min-w-[300px] w-full min-h-[100vh] ">
      <div className="w-full max-w-[620px]">
        <UserContextProvider>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="complete" element={<CompletePage />} />
          </Routes>
          <OnboardEntry />
        </UserContextProvider>
      </div>
    </div>
  );
}

export default App;
