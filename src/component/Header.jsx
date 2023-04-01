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

            <div className="navbar-center hidden lg:flex text-white ">
                <ul className="menu menu-horizontal px-1 font-semibold font-mono text-2xl  ">
                    <li><Link className="hover:btn-accent" to="/">Home</Link></li>
                    <li><Link className="hover:btn-accent" to="/about">About Us</Link></li>
                    <li><Link className="hover:btn-accent" to="/contact">Contact Us</Link></li>
                </ul>
            </div>

            <div className="navbar-end">
                <Link to="/signup" className="btn btn-ghost btn-active hover:btn-accent ">Get started</Link>
            </div>

            {/* {handleSubmit ? <div className="navbar-end">
                <Link to="/about" className="btn btn-ghost btn-active hover:btn-accent mx-5 ">Profile</Link>
            </div> : <div className="navbar-end">
                <Link to="/signup" className="btn btn-ghost btn-active hover:btn-accent ">Get started</Link>
            </div>} */}

            <div className="navbar-end">
                <button className="btn btn-ghost btn-active hover:btn-accent text-white"
                    onClick={logout}
                >LogOut</button>
            </div>
            
        </div>
    )
}