import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext)

    const { logOutUser } = useContext(AuthContext)

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("sign out suceessful")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const smallScreenLinks = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allGames">All Games</NavLink>

        {user ? (
            <>
                <Link onClick={handleLogOut} className="btn bg-red-500">Logout</Link>
            </>
        ) :
            (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link></>
            )
        }
    </>


    const largeScreenLinks = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allGames">All Games</NavLink>
        {user ?
            (<>
                <Link to="/profile">  <img className='w-7 h-7 rounded-full border border-primary' src={user.photoURL}></img></Link>
                <Link onClick={handleLogOut} className="btn bg-red-500">Logout</Link>
            </>)
            :
            (<>
                <Link to="/register" className="btn btn-secondary mx-4 ">Register</Link>
                <Link to="/login" className="btn btn-primary">Login</Link>
            </>)
        }



    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {/* for the small screen */}
                        <li className=''> {smallScreenLinks}</li>
                    </ul>
                </div>
                <Link to="/">
                    <img className="btn btn-ghost text-xl" src={"https://img.icons8.com/?size=48&id=xc77LZDp1FNP&format=png"} alt="" />
                    <h1>GameHub</h1>
                </Link>

            </div>
            {/* navbar end for the large screen */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 items-center">
                    {largeScreenLinks}
                </ul>
            </div>

            {/* user profile picture and the login for the small screen */}
            <div className='navbar-end hidden max-lg:flex'>
                {user ? (<>
                    <Link to="/profile">  <img className='w-7 h-7 rounded-full border border-primary mx-4' src={user.photoURL}></img></Link>
                    <Link to="/" onClick={handleLogOut} className="btn bg-red-500">Logout</Link></>) :
                    (<>
                        <Link to="/register" className="btn btn-secondary mx-4 ">Register</Link>
                        <Link to="/login" className="btn btn-primary">Login</Link></>)
                }
            </div>
        </div>
    );
};

export default Navbar;