import React from "react";
import { NavLink } from "react-router-dom";

const Select5 = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Individual Trainer Form</h1>
            <div className="contact-form">
                <form action="">
                    <label for="name">How many audience you want to target??</label>
                    <input type="text" name="fullname" placeholder="Number Of Audience...." />
                    <label for="name">What is your interest??</label>
                    <input type="text" name="fullname" placeholder="Interest...." />
                    <label for="text">Write something about your achievement or work experience ??</label>
                    <input type="text" name="text" placeholder="About Experience..." />
                    <label for="name">What kind of courses you want to learn??</label>
                    <select name="" id="department">
                        <option value="department">Online</option>
                        <option value="department">Offline</option>
                        <option value="department">Blended Learning</option>
                    </select>
                    <NavLink to="./step5">  <input type="submit" value="Submit" /></NavLink>
                </form>
            </div>
        </>
    );
};
export default Select5;
