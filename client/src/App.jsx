import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import PrivatePolicy from "./pages/PrivatePolicy";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import TermsOfService from "./pages/TermsOfService";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <div>
      <UserProvider>
        <Header />
        <div className="main-container pt-20 text-white ">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/term-of-service" element={<TermsOfService />} />
            <Route path="/private-policy" element={<PrivatePolicy />} />
            <Route path="/register" element={<SignupForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </UserProvider>
    </div>
  );
};

export default App;
