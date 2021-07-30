import React from "react"
import { NavLink } from "react-router-dom";
import './pricing.css';

const Pricing = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Subscription Plan</h1>
            <div class="pricing-grid">
                <div class="plan plan1">
                    <h2>Trial Pack</h2>
                    <p class="price">Free</p>
                    <NavLink to="/registeration" class="cta">Buy →</NavLink>
                    <p>Limited To 5 Course Creation</p>
                    <ul class="features">
                        <li>Upto 500 Users</li>
                        <li>Event Scheduler ✔️</li>
                        <li>Discussion Panels ❌</li>
                        <li>Smart Alerts & Notifications ❌</li>
                        <li>Reports ❌</li>
                        <li>Administration Process ❌</li>
                        <li>Recruitment Process ❌</li>
                        <li>Certified Courses ✔️</li>
                        <li>Online Learning ✔️</li>
                        <li>Blended Learning ✔️</li>
                        <li>Media Master ✔️</li>
                        <li>Promotional Offers ❌</li>
                        <li>Referrals ❌</li>
                        <li>Coupons ❌</li>
                        <li>Automations ❌</li>
                    </ul>
                </div>

                <div class="plan plan2">
                    <h2>Plus Level</h2>

                    <p class="price">$90</p>
                    <NavLink to="/registeration" class="cta">Buy →</NavLink>
                    <p>Unlimited Course Creation</p>
                    <ul class="features">
                        <li>Upto 500 Users</li>
                        <li>Event Scheduler ✔️</li>
                        <li>Discussion Panels ✔️</li>
                        <li>Smart Alerts & Notifications ✔️</li>
                        <li>Reports ✔️</li>
                        <li>Administration Process ✔️</li>
                        <li>Recruitment Process ✔️</li>
                        <li>Certified Courses ✔️</li>
                        <li>Online Learning ✔️</li>
                        <li>Blended Learning ✔️</li>
                        <li>Media Master ✔️</li>
                        <li>Promotional Offers ✔️</li>
                        <li>Referrals ✔️</li>
                        <li>Coupons ✔️</li>
                        <li>Automations ✔️</li>
                    </ul>
                </div>

                <div class="plan plan3">
                    <h2>Basic Plan</h2>
                    <p class="price">$50</p>

                    <NavLink to="/registeration" class="cta">Buy →</NavLink>
                    <p>Unlimited Course Creation</p>
                    <ul class="features">
                        <li>Upto 50 Users</li>
                        <li>Event Scheduler ✔️</li>
                        <li>Discussion Panels ✔️</li>
                        <li>Smart Alerts & Notifications ✔️</li>
                        <li>Reports ✔️</li>
                        <li>Administration Process ❌</li>
                        <li>Recruitment Process ❌</li>
                        <li>Certified Courses ✔️</li>
                        <li>Online Learning ✔️</li>
                        <li>Blended Learning ✔️</li>
                        <li>Media Master ✔️</li>
                        <li>Promotional Offers ❌</li>
                        <li>Referrals ❌</li>
                        <li>Coupons ❌</li>
                        <li>Automations ❌</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Pricing;
