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
import B1Page from "./Components/B1Page/B1Page";
import B2Page from "./Components/B2Page/B2Page";
import C1Page from "./Components/C1Page/C1Page";
import C2Page from "./Components/C2Page/C2Page";
import ThankYouPage from "./Components/ThankYouPage/ThankYouPage";
import ContactUs from "./Components/ContactUs/ContactUs";
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
          <Route path="/b1" element={<B1Page />} />
          <Route path="/b2" element={<B2Page />} />
          <Route path="/c1" element={<C1Page />} />
          <Route path="/c2" element={<C2Page />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-and-Conditions" element={<Terms />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
