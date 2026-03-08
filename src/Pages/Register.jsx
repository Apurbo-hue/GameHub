import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value
        const password = form.password.value;
        createUser(email, password)
            .then((credential) => {
                const user = credential.user;
                console.log(user)
            }
            )
            .catch((error) =>
            {
                console.log(error)
               }
            )

        console.log(name, image, email, password)
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                            {/* Image */}
                            <label className="label">Image URL</label>
                            <input type="text" name='image' className="input" placeholder="Image URL" />

                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            {/* password */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-primary mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;