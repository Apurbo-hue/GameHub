import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
    const { user, updateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    document.title = "GameHub - Update Profile"

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const image = form.image.value;

        updateUser({ displayName: name, photoURL: image })
            .then(() => {
                console.log("Profile Updated!!!")
                navigate("/profile")
            })
            .catch((error) => {
            console.log(error)
        })

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleUpdate}>
                        <fieldset className="fieldset">
                            <h1 className='text-3xl text-center font-bold py-4'>Update Profile!</h1>
                            <h5 className='text-center text-primary pb-4'>{user.email}</h5>

                            {/* Name*/}
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                            {/* Image URL */}
                            <label className="label">Image URL</label>
                            <input type="text" name='image' className="input" placeholder="Image URL" />

                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}

                            <button type='submit' className="btn btn-primary mt-1">Update</button>
                            {/* <Link to="/register" className='text-center'>Don't have an account? <span className='text-primary'>Register</span></Link> */}
                        </fieldset>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;