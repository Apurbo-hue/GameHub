import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';


const Register = () => {

    const { createUser,googleSignIn} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target
        // const name = form.name.value;
        // const image = form.image.value;
        const email = form.email.value
        const password = form.password.value;
        createUser(email, password)
            .then((credential) => {
                const user = credential.user;
                console.log("successful",user)
            }
            )
            .catch((error) => {
                console.log(error)
            }
            )
    }


        const handleGoogleLogin = () => {
        
        // google sign in
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            <h1 className='text-3xl text-center font-bold py-4'>Register Now!</h1>
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


                            {/* <button className="btn bg-white text-black border-[#e5e5e5] mt-4">
                                // <svg arialabel="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button> */}

                                <button type='button' onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mt-4">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button> 

                            <button type='submit' className="btn btn-primary mt-1">Register</button>
                            <Link to="/login" className='text-center'>Already have an account? <span className='text-primary'>Login</span></Link>
                        </fieldset>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;