import React from "react";
import { NavLink } from "react-router-dom";
import "./select1.css"

const Select1 = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Company Form</h1>
            <div className="contact-form">
                <form action="">
                    <label for="name">What is the name of your company??</label>
                    <input type="text" name="fullname" placeholder="Company Name...." />
                    <label for="text">What is the team/Employee Size??</label>
                    <input type="text" name="text" placeholder="Team Size..." />

                    <label for="sector">In what sector your company works??</label>
                    <select name="" id="sector">
                        <option value="sector">Sector 1</option>
                        <option value="sector">Sector 2</option>
                        <option value="sector">Sector 3</option>
                        <option value="sector">Sector 4</option>
                        <option value="sector">Sector 5</option>
                    </select>

                    <label for="sector">In how many countries you have presence??</label>
                    <select name="" id="country">
                        <option value="county">Select Country 1</option>
                        <option value="county">Select Country 2</option>
                        <option value="county">Select Country 3</option>
                        <option value="county">Select Country 4</option>
                        <option value="county">Select Country 5</option>
                    </select>

                    <label for="sector">How many departments your company has??</label>
                    <select name="" id="department">
                        <option value="department">Select Department 1</option>
                        <option value="department">Select Department 2</option>
                        <option value="department">Select Department 3</option>
                        <option value="department">Select Department 4</option>
                        <option value="department">Select Department 5</option>
                    </select>

                    <label for="sector">Select Language</label>
                    <select name="" id="language">
                        <option value="language">Language 1</option>
                        <option value="language">Language 2</option>
                        <option value="language">Language 3</option>
                        <option value="language">Language 4</option>
                        <option value="language">Language 5</option>
                    </select>

                    <label for="sector">What is your keen interest while using LMS?</label>
                    <select name="" id="interest">
                        <option value="interest">Training Employees</option>
                        <option value="interest">Training Students</option>
                        <option value="interest">Selling Courses</option>
                        <option value="interest">Training Customers</option>
                        <option value="interest">Training Partners</option>
                        <option value="interest">Provide Training Services</option>
                        <option value="interest">Other</option>
                    </select>

                    <NavLink to="/step5">  <input type="submit" value="Submit" /></NavLink>
                </form>
            </div>
        </>
    );
};
export default Select1;