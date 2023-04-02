import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import handleSubmit from './Login'
import AuthService from "../AuthServices";

export default function Header() {
    const logout = async () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userName");
        window.location.replace("/login")
    };

    return (
        <div className="navbar bg-teal-900">
            <div className="navbar-start text-white">
                <a className="btn btn-ghost normal-case text-xl  font-semibold font-mono ">Blog</a>
            </div>

            <div className="navbar-center hidden lg:flex text-white ml-96 ">
                <ul className="menu menu-horizontal px-1 font-semibold font-mono text-2xl  ">
                    <li><Link className="hover:btn-accent" to="/">Home</Link></li>
                    <li><Link className="hover:btn-accent" to="/about">About Us</Link></li>
                    <li><Link className="hover:btn-accent" to="/contact">Contact Us</Link></li>
                </ul>
            </div>


            <div className="navbar-end ml-96">
                {!handleSubmit ? <Link to={localStorage.getItem("userToken") ? '/' : '/signup'} >Get started</Link>
                    : <button className="btn bg-stone-200 text-accent-focus font-bold text-xl mr-5 btn-active hover:btn-accent"
                        onClick={logout}
                    >{localStorage.getItem("userToken") ? 'logout' : 'Get started'}</button>
                }
            </div>

            {/* {handleSubmit ? <div className="navbar-end">
            className="btn bg-stone-200 border-none btn-active text-accent-focus font-bold hover:btn-accent "
                <Link to="/about" className="btn btn-ghost btn-active hover:btn-accent mx-5 ">Profile</Link>
            </div> : <div className="navbar-end">
                <Link to="/signup" className="btn btn-ghost btn-active hover:btn-accent ">Get started</Link>
            </div>} */}

        </div>
    )
}