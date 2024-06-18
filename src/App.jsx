import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Global.css";
import HomePage from "./Components/Homepage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Components/Policy/PrivacyPolicy";
import Terms from "./Components/Policy/Terms";
import Footer from "./Components/Footer/Footer";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import RefundPolicy from "./Components/Policy/RefundPolicy";
import CoursesPage from "./Components/CoursesPage/CoursesPage";
import A1Page from "./Components/A1Page/A1Page";
import A2Page from "./Components/A2Page/A2Page";
const App = () => {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <NavBar />
        <ScrollTo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/a1" element={<A1Page />} />
          <Route path="/a2" element={<A2Page />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-Conditions" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
