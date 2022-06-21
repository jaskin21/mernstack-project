import React, { useEffect, useContext } from "react";
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
import useUser from "./hooks/useUser";
import AppContext from "./AppContext";

const App = () => {
  const { hasToken, hasUserInfo, requestUserInfo, token, userInfo } = useUser();
  const appContext = useContext(AppContext);
  useEffect(() => {
    if (hasToken() && !hasUserInfo()) {
      requestUserInfo();
    }
    if (hasToken() && !appContext.token) {
      appContext.setToken(token);
    }
    console.log(hasUserInfo(), userInfo);
    if (hasUserInfo() && !appContext.user) {
      const { id, email, username } = userInfo;
      appContext.setUser(id, username, email);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/term-of-service" element={<TermsOfService />} />
        <Route path="/private-policy" element={<PrivatePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
