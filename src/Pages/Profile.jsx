import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    document.title = "GameHub - My profile"
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='grid place-items-center border border-6 p-6 rounded-2xl'>
                <img src={user.photoURL} alt="" />
                <h1>
                    Name: {user.displayName}

                </h1>
                <h1>
                   Email: {user.email}
                </h1>

                <Link to="/updateProfile">

                    <button className='btn btn-primary'>Update Profile</button>

                </Link>

            </div>
        </div>
    );
};

export default Profile;