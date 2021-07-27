import React from "react";
import "./select.css"

const Select = () => {
    return (
        <>
            <div className="container">
                <div className="title">What Best Defines You??</div>
                <form action="#">
                    <a href="">
                        <div className="button">
                            <input type="submit" value="Company/Organization" />
                        </div>
                    </a>
                    <div className="button">
                        <input type="submit" value="University" />
                    </div>
                    <div className="button">
                        <input type="submit" value="College" />
                    </div>
                    <div className="button">
                        <input type="submit" value="Learner" />
                    </div>
                    <div className="button">
                        <input type="submit" value="Individual Trainer" />
                    </div>
                </form>
            </div>
        </>
    );
};
export default Select;