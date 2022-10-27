import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userContext } from '../context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { EmailPaswordLogIn } = useContext(userContext);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const HandleForm = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    EmailPaswordLogIn(email, password).then((userCredential) => {
      toast("Successfully LoginIn")
      navigate(from, { replace: true });

    }).catch((error) => {
      const errorMessage = error.message;
      toast(errorMessage)
      setError(errorMessage);
    });
  }

  return (
    <div className="lg:mx-0 md:mx-[180px] lg:w-[100vw] w-[90vw] h-[600px] mt-[100px] max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
      <div className="flex items-center w-full my-4">
        <hr className="w-full dark:text-gray-400" />
        <p className="px-3 dark:text-gray-400">OR</p>
        <hr className="w-full dark:text-gray-400" />
      </div>

      <div className="hero">
        <div className="hero-content w-full lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full">
            <div className="card-body">
              <form onSubmit={HandleForm}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input name="email" type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" name="password" placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
                  </label>
                  <label className="label">
                    <Link to="/registration" className="label-text-alt link link-hover">Don't Have an account?</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;