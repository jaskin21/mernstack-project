import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleAlert from './SimpleAlert';
import axios from 'axios';
import AppContext from '../AppContext';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../hooks/useUserInfo';

const LoginForm = () => {
  const defaultFormValue = {
    email: '',
    password: '',
  };
  const [formValue, setFormValue] = useState(defaultFormValue);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState(undefined);
  const [alertType, setAlertType] = useState('success');
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  const { requestUserInfo } = useUserInfo();
  // const { storeToken, requestAndStoreUserInfo } = useUser();

  const setAlert = (message, type = 'success') => {
    setAlertMessage(message);
    setAlertType(type);
  };

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        formValue
      );

      const { message, token } = response.data;
      setAlert(message);
      setFormValue(defaultFormValue);
      appContext.setToken(token);
      const {id, email, username} = await requestUserInfo(token);

      appContext.setUserInfo(id, email, username);
      navigate('/', { replace: true });
    } catch (error) {
      if (error.isAxiosError) {
        const { data } = error.response;

        setAlert(data.error, 'danger');
      }

      setFormValue({
        ...formValue,
        password: '', // empty the password when error occurs
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto p-4 bg-transparent">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto my-12">
        <h1 className="text-lg font-bold">Login</h1>
        {alertMessage && (
          <SimpleAlert
            title={alertMessage}
            type={alertType}
            dismissable={true}
            onDismiss={() => setAlertMessage(undefined)}
          />
        )}
        <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-black"
            placeholder="Your Email address"
            value={formValue.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-black"
            placeholder="Your secure password"
            value={formValue.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex w-full justify-center items-center font-medium focus:outline-none"
          >
            Login
          </button>
        </form>

        <div className="flex flex-col items-center mt-5">
          <p className="mt-1 text-xs font-light text-gray-500">
            Not yet a member?
            <Link
              to={'/register'}
              className="ml-1 font-medium text-blue-400"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
