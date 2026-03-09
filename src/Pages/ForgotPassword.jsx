import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {

    const { forgotPassword } = useContext(AuthContext)
    const navigate = useNavigate()
    document.title="GameHub - Password Reset"

    const handleForgotPassword = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        forgotPassword(email)
            .then(() => {
                console.log("Password reset!!")
                navigate("/login")
            }
            )
            .catch((error) => {
                console.log(error)
            })


    }
    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleForgotPassword}>
                        <fieldset className="fieldset">
                            <h1 className='text-center text-5xl text-primary'>Reset Password!!</h1>

                            {/* Email*/}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            <button type='submit' className="btn btn-primary mt-1">Reset Password!</button>
                        </fieldset>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ForgotPassword;