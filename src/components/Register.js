import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password)
    }


    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register now!</h1>
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered"  required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered"  required/>
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
    );
};

export default Register;