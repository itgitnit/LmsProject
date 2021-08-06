import React from "react";
import { NavLink } from "react-router-dom";
import "./registeration.css"

const Registeration = () => {
    return (
        <>
            <div className="container">
                <div className="title">User Registeration</div>
                <form action="#">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Domain Name</span>
                            <input type="text" placeholder="example123.com" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" placeholder="Enter Your email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" placeholder="Enter Your Name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="Enter Username" required />
                        </div>

                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" placeholder="Enter Your password" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="text" placeholder="Confirm password" required />
                        </div>
                    </div>
                    <div className="gender-details">
                        <input type="checkbox" name="gender" id="dot-1" />
                        <span className="gender-title">Accept Terms & Conditions</span>
                    </div>
                    <div className="button">
                        <NavLink to="./select"> <input type="submit" value="Submit" /></NavLink>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Registeration;