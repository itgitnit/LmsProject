import React from "react";
import { NavLink } from "react-router-dom";
import "./select3.css"

const Select4 = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Learner Form</h1>
            <div className="contact-form">
                <form action="">
                    <label for="name">What is your interest??</label>
                    <input type="text" name="fullname" placeholder="Interest...." />
                    <label for="name">What kind of courses you want to learn??</label>
                    <select name="" id="department">
                        <option value="department">Online</option>
                        <option value="department">Offline</option>
                        <option value="department">Blended Learning</option>
                    </select>
                    <label for="text">Are you looking for Certified Course?</label>
                    <select name="" id="department">
                        <option value="department">Yes</option>
                        <option value="department">No</option>
                    </select>


                    <label for="sector">Select Language</label>
                    <select name="" id="department">
                        <option value="department">Select Language 1</option>
                        <option value="department">Select Language 2</option>
                        <option value="department">Select Language 3</option>
                        <option value="department">Select Language 4</option>
                        <option value="department">Select Language 5</option>
                    </select>



                    <NavLink to="./step5"><input type="submit" value="Submit" /></NavLink>
                </form>
            </div>
        </>
    );
};
export default Select4;