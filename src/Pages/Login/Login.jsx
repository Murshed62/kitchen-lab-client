import React, { useContext, useState } from 'react';
import {FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate,  } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';
import './Login.css';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    useTitle('Login');
    const {signIn,signInWithGithub, signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const[error,setError]=useState('');
  const[success, setSuccess]=useState('');
  
  
  const from = location.state?.from?.pathname || '/';



    const loginHandling = (event) =>{
        event.preventDefault()
        setError('')
        // setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
         
        signIn(email, password)
       .then(result =>{
        const createdUser = result.user;
        navigate(from ,{replace: true})
        setSuccess(toast('signIn Successfully'))
       
       })
       .catch(error =>{

        setError(toast("wrong-password"))
       })
        

    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            navigate(from ,{replace: true})
            setSuccess(toast('GoogleSignIn Successfully'))
           
            
        })
        .catch(error => setError(toast('error.message')))
    }
    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            navigate(from ,{replace: true})
            setSuccess(toast('GithubSignIn Successfully'))
            
        })
        .catch(error => setError(toast('error.message')))

    }
    return (
       <div>
      <div className="container mx-auto">
        <div className="glass">
          <form onSubmit={loginHandling} className="form">
            <h2 className='text-center text-3xl font-bold text-white pb-5'>Please Login</h2>
           
            <div className="inputBox">
              <input type="email" name="email" required />
              <span className='text-yellow-600 font-bold'>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" name="password" required />
              <span className='text-yellow-600 font-bold'>Password</span>
             
              <i></i>
              
            </div>
          {/* <span className='text-red-700'>{error}</span> */}
            <div className="links">
              

            <span className='text-black forMbl-login'>If you are new user. <Link className='text-white font-bold' to="/register">please register !</Link></span>
            </div>
            <button className="btn btn-warning font-bold text-2xl w-52 mt-3">Login</button>
            <div className=" text-white flex mt-10  mt-3">
              <button
                onClick={handleGoogleSignIn}
                className="border primary-color p-2 flex items-center "
              >
                <FaGoogle className='forMbl-icon'/>
                <Link className="text-white ps-2 forMbl-text">Login with Google</Link>
              </button>
              <button
                onClick={handleGithubSignIn}
                className="ml-4 border primary-color p-2 flex items-center"
              >
                <FaGithub className='forMbl-icon forMbl-icon'/> <Link className='ps-2 forMbl-text'>Login with Git Hub</Link>
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer/>
    </div> 
    );
};

export default Login;