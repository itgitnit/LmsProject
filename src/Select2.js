import React from "react";
import "./select2.css"

const Select2 = () => {
    return (
        <>
            <div className="contact-form">
                <form action="">
                    <label for="name">Where is the name of your university??</label>
                    <input type="text" name="fullname" placeholder="University Name...." />
                    <label for="name">Where it is situated??</label>
                    <input type="text" name="fullname" placeholder="Place Name...." />
                    <label for="text">How many colleges are affiliated?</label>
                    <input type="text" name="text" placeholder="Affiliated College..." />
                    <label for="text">How many staff members do you have?</label>
                    <input type="text" name="text" placeholder="Team Size..." />

                    <label for="sector">How many departments your company has??</label>
                    <select name="" id="department">
                        <option value="department">Select Department 1</option>
                        <option value="department">Select Department 2</option>
                        <option value="department">Select Department 3</option>
                        <option value="department">Select Department 4</option>
                        <option value="department">Select Department 5</option>
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

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};
export default Select2;