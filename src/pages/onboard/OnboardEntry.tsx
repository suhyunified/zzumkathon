import { Route, Routes } from "react-router";

import SelectItemPage from "./SelectItemPage";

const OnboardEntry = () => {
  return (
    <Routes>
      <Route path="/" element={<SelectItemPage />} />
      <Route path="/contents" element={<SelectItemPage />} />
    </Routes>
  );
};

export default OnboardEntry;
