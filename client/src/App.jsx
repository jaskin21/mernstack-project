import React from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <div>
      <Header />
      <div className='main-container pt-20 text-white '>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<SignupForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
