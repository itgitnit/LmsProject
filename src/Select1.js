import React, { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown'
import { NavLink } from "react-router-dom";
import "./select1.css"

const Select1 = () => {
    const data = [
        { Country: 'India', id: 1 },
        { Country: 'America', id: 1 },
        { Country: 'France', id: 1 },
        { Country: 'Germany', id: 1 },
        { Country: 'England', id: 1 },

    ]
    const data1 = [
        { Department: 'Department1', id: 2 },
        { Department: 'Department2', id: 2 },
        { Department: 'Department3', id: 2 },
        { Department: 'Department4', id: 2 },
        { Department: 'Department5', id: 2 },
    ]
    const data2 = [
        { Language: 'Hindi', id: 3 },
        { Language: 'Italian', id: 3 },
        { Language: 'French', id: 3 },
        { Language: 'German', id: 3 },
        { Language: 'English', id: 3 },
    ]
    const [options] = useState(data);
    const [options1] = useState(data1);
    const [options2] = useState(data2);
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
                    <div style={{ width: "40%", justifyContent: "center", display: "flex" }}>
                        <div className="App">
                            <Multiselect options={options} displayValue="Country" />
                        </div>
                    </div>


                    <label for="sector">How many departments your company has??</label>
                    <div style={{ width: "40%", justifyContent: "center", display: "flex" }}>
                        <div className="App">
                            <Multiselect options={options1} displayValue="Department" />
                        </div>
                    </div>


                    <label for="sector">Select Language</label>
                    <div style={{ width: "40%", justifyContent: "center", display: "flex" }}>
                        <div className="App">
                            <Multiselect options={options2} displayValue="Language" />
                        </div>
                    </div>
                    {/* </select> */}



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