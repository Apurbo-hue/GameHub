import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value;
        signInUser(email, password)
            .then((credential) => {
                const user = credential.user;
                console.log("user login successful", user)
                navigate(location.state)
            })
            .catch((error) => {
                console.log(error)
            })
        
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <fieldset className="fieldset">
                            <h1 className='text-3xl text-center font-bold py-4'>Login Now!</h1>
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-primary mt-4">Login</button>
                            <Link to="/register" className='text-center'>Don't have an account? <span className='text-primary'>Register</span></Link>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;