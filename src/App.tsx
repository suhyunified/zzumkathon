import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import OnboardSelectItemPage from "./pages/onboard/SelectItemPage";
import OnboardNicknamePage from "./pages/onboard/NicknamePage";
import OnboardCommentPage from "./pages/onboard/CommentPage";
import OnboardCompletePage from "./pages/onboard/CompletePage";

function App() {
  return (
    <div className="overflow-hidden flex justify-center min-w-[300px] w-full min-h-[100vh] ">
      <div className="w-full max-w-[620px]">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="onboard">
            <Route path="item" element={<OnboardSelectItemPage />} />
            <Route path="contents" element={<OnboardSelectItemPage />} />
            <Route path="nickname" element={<OnboardNicknamePage />} />
            <Route path="comment" element={<OnboardCommentPage />} />
            <Route path="complete" element={<OnboardCompletePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
