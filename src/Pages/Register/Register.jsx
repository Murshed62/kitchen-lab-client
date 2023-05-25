import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import "./Register.css";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle('Register');
  const { createUser, userImageDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [errors, setErrors] = useState("");

  const registerHandling = (event) => {
    event.preventDefault();
    setErrors("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if(password.length < 6){
      setErrors(toast("The password is less than 6 characters"))
    }

    createUser(email, password, name, photo)
      .then((result) => {
        const createdUser = result.user;
        userImageDetails(name, photo);
        navigate('/');
        setSucess(toast('signup Successfully'))
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="glass">
        <h1 className="text-center text-3xl font-bold text-white mb-5">
          Please Register
        </h1>
        <form onSubmit={registerHandling}>
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="type your name"
              required
            />
            <span className='text-yellow-600 font-bold'>Name</span>
          </div>
          <div className="form-control">
            <input type="text" name="photo" placeholder="photo url link" required />
            <span className='text-yellow-600 font-bold'>Photo Url</span>
          </div>
          <div className="form-control">
            <input type="email" placeholder="type email address" name="email" required />
            <span className='text-yellow-600 font-bold'>Email</span>
          </div>
          <div className="form-control">
            <input type="password" placeholder="type password" name="password" required />
            <span className='text-yellow-600 font-bold'>Password</span>
          </div>
          {/* <span>{error}</span> */}
          <span className="mb-2 text-black forMbl-login">
            Already have an account?{" "}
            <Link className="text-white font-bold" to="/login">
              Please Login !
            </Link>
          </span>
          <div className="flex">
            <button className="btn btn-warning font-bold text-2xl w-52 mt-4">
              Register
            </button>
            <span className="py-2">{errors}</span>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
