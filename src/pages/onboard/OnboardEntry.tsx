import { Route, Routes } from "react-router";

import OnboardSelectItemPage from "./SelectItemPage";
import OnboardNicknamePage from "./NicknamePage";
import OnboardCommentPage from "./CommentPage";
import OnboardCompletePage from "../CompletePage";
import { OnboardContextProvider } from "../../context/onboard";

const OnboardEntry = () => {
  return (
    <OnboardContextProvider>
      <Routes>
        <Route path="onboard">
          <Route path="item" element={<OnboardSelectItemPage />} />
          <Route path="contents" element={<OnboardSelectItemPage />} />
          <Route path="nickname" element={<OnboardNicknamePage />} />
          <Route path="comment" element={<OnboardCommentPage />} />
          <Route path="complete" element={<OnboardCompletePage />} />
        </Route>
      </Routes>
    </OnboardContextProvider>
  );
};

export default OnboardEntry;
