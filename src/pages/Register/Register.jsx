import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Result from 'postcss/lib/result';
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        // const email = e.target.email.value;
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo =  form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        
        console.log(email,password,name,photo);

        //create User
        createUser(email,password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl text-center my-10">Please Register</h2>
            </div>
                 <form  onSubmit={handleRegister} className='md:w-3/4 lg:w-1/2 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                  </form>
                <p className='text-center mt-4'>Already have an Account?  <Link  className='text-blue-600 font-bold' to="/login" >Login</Link>  </p>          
        </div>
    );
};

export default Register;