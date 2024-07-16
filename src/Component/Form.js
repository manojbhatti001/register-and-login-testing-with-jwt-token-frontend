import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Form = () => {
  const [buttonClick, setButtonClick] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  });

  useEffect(() => {
    if (buttonClick) {
      console.log("form data", formData);
      axios.post("http://localhost:9010/register", formData)
        .then((response) => {
          console.log("response from the server", response);
          if (response.status === 200) {
            toast.success("User Registered successfully");
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((error) => {
          console.log("There was an error", error);
          if (error.response) {
            toast.error(`Error: ${error.response.data.message}`);
          } else {
            toast.error("Error: Request failed");
          }
        })
        .finally(() => {
          setButtonClick(false);
        });
    }
  }, [buttonClick]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setButtonClick(true);
  };
  
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-6">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-6">
              <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Register</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                      First Name:
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                      Last Name:
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email:
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                      Username:
                    </label>
                    <input
                      id="username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password:
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Register
                </button>
              </form>
              <div className="flex items-center justify-center mt-6">
                <div className="text-gray-700 mr-2">Already have an account?</div>
                <Link to='/login'> <button
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  Login
                </button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
