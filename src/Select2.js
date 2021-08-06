import React, { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown'
import { NavLink } from "react-router-dom";
import "./select2.css"

const Select2 = () => {
    const data1 = [
        { Department: 'Department1', id: 2 },
        { Department: 'Department2', id: 2 },
        { Department: 'Department3', id: 2 },
        { Department: 'Department4', id: 2 },
        { Department: 'Department5', id: 2 },
    ]
    const data2 = [
        { Interest: 'Training Employees', id: 2 },
        { Interest: 'Training Students', id: 2 },
        { Interest: 'Selling Courses', id: 2 },
        { Interest: 'Training Customers', id: 2 },
        { Interest: 'Training Partners', id: 2 },
        { Interest: 'Provide Training Services', id: 2 },
        { Interest: 'Other', id: 2 },
    ]
    const [options1] = useState(data1);
    const [options2] = useState(data2);
    return (
        <>
            <h1 style={{ textAlign: "center" }}>University Form</h1>
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
                    <div style={{ width: "40%", justifyContent: "center", display: "flex" }}>
                        <div className="App">
                            <Multiselect options={options1} displayValue="Department" />
                        </div>
                    </div>

                    <label for="sector">What is your keen interest while using LMS?</label>

                    <div style={{ width: "40%", justifyContent: "center", display: "flex" }}>
                        <div className="App">
                            <Multiselect options={options2} displayValue="Interest" />
                        </div>
                    </div>

                    <NavLink to="./step5">    <input type="submit" value="Submit" /></NavLink>
                </form>
            </div>
        </>
    );
};
export default Select2;