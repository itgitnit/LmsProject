import React from "react";
import "./select.css"

const Step5 = () => {
    return (
        <>
            <div className="container">
                <div className="title">What you want to do now??</div>
                <form action="#">
                    <a href="">
                        <div className="button">
                            <input type="submit" value="Account Customization & Company Details" />
                        </div>
                    </a>
                    <div className="button">
                        <input type="submit" value="How LMS Works??" />
                    </div>
                    <div className="button">
                        <input type="submit" value="Start Making Your Courses" />
                    </div>
                    <div className="button">
                        <input type="submit" value="Go to Administration Panel" />
                    </div>
                </form>
            </div>
        </>
    );
};
export default Step5;