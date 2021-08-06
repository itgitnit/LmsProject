import React from "react";
import { NavLink } from "react-router-dom";
import "./select.css"

const Select = () => {
    return (
        <>
            <div className="container">
                <div className="title">What Best Defines You??</div>
                <form action="#">
                    <a href="">
                        <div className="button">
                            <NavLink to="./select1"><input type="submit" value="Company/Organization" /></NavLink>
                        </div>
                    </a>
                    <div className="button">
                        <NavLink to="./select2">  <input type="submit" value="University" /></NavLink>
                    </div>
                    <div className="button">
                        <NavLink to="./select3">  <input type="submit" value="College" /></NavLink>
                    </div>
                    <div className="button">
                        <NavLink to="./select4">  <input type="submit" value="Learner" /></NavLink>
                    </div>
                    <div className="button">
                        <NavLink to="./select5">  <input type="submit" value="Individual Trainer" /></NavLink>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Select;