import React from "react";

const Step4 = () => {
    return (
        <>
            <div className="container">
                <div className="title">How many people you want to give training??</div>

                <div className="contact-form">
                    <form action="">
                        <select name="" id="department">
                            <option value="department">10 - 20</option>
                            <option value="department">20 - 300</option>
                            <option value="department">300 - 1000</option>
                        </select>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};
export default Step4;