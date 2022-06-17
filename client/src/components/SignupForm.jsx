import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupForm = () => {
  const form = document.querySelector('form');

  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [formValue, setformValue] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', formValue.name);
    formData.append('email', formValue.email);
    formData.append('password', formValue.password);
    formData.append('image', selectedFile);
    try {
      console.log('uploading file');
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/register',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div class='container mx-auto p-4 bg-transparent'>
      <div class='w-full md:w-1/2 lg:w-1/3 mx-auto my-12'>
        <h1 class='text-lg font-bold'>Register</h1>
        <form class='flex flex-col mt-4' onSubmit={handleSubmit}>
          <input
            class='px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-black'
            type='text'
            name='name'
            placeholder='Name'
            value={formValue.name}
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            class='px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-black'
            placeholder='Email address'
            value={formValue.email}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            class='px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-black'
            placeholder='Password'
          />
          <input
            type='password'
            name='repeat-password'
            class='px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-black'
            placeholder='Repeat Password'
          />
          <input
            type='file'
            onChange={handleFileSelect}
            class='px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm text-black'
          />
          <button
            type='submit'
            value='Upload File'
            class='mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none'
          >
            Register
          </button>

          <div class='flex flex-col items-center mt-5'>
            <p class='mt-1 text-xs font-light text-gray-500'>
              Register already?
              <Link to={'/login'} class='ml-1 font-medium text-blue-400'>
                Sign in now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
