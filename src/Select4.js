import React, { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown'
import { NavLink } from "react-router-dom";
import "./select3.css"

const Select4 = () => {
    const data2 = [
        { Language: 'Hindi', id: 3 },
        { Language: 'Italian', id: 3 },
        { Language: 'French', id: 3 },
        { Language: 'German', id: 3 },
        { Language: 'English', id: 3 },
    ]
    const [options2] = useState(data2);
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
                    <div style={{ width: "40%", justifyContent: "center", display: "flex" }}>
                        <div className="App">
                            <Multiselect options={options2} displayValue="Language" />
                        </div>
                    </div>




                    <NavLink to="./step5"><input type="submit" value="Submit" /></NavLink>
                </form>
            </div>
        </>
    );
};
export default Select4;