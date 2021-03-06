import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../AppContext';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navigate = useNavigate();

  const headerItemClassName =
    'mr-2 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04';

  const { userInfo, removeSession } = useContext(AppContext);

  const confirmLogout = () => {
    const logoutConfirmation = window.confirm(
      'Are you sure you want to logout?'
    );

    if (logoutConfirmation) {
      removeSession();
      navigate('/', { replace: true });
    }
  };

  const imageUrl = `https://github.com/identicons/${
    userInfo?.username ?? 'slvl'
  }.png`;

  return (
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          <a
            href="/"
            className="flex text-3xl text-white font-medium mb-4 md:mb-0"
          >
            SLVL
          </a>
          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'md:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
        >
          <div className="md:ml-auto md:mr-10 font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
            <Link className={headerItemClassName} to={'/about'}>
              About
            </Link>
            {userInfo ? (
              <button
                type="button"
                onClick={confirmLogout}
                className={headerItemClassName}
              >
                Logout
              </button>
            ) : (
              <Link className={headerItemClassName} to={'/login'}>
                Login
              </Link>
            )}
          </div>
          {userInfo && (
            <Link
              to={'profile'}
              className=" h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-7 h-7 object-cover object-center sm:mb-0 "
                src={imageUrl}
              />
              <div className="flex-grow sm:pl-3">
                <h2 className="title-font font-medium text-lg text-white">
                  {userInfo?.username}
                </h2>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
