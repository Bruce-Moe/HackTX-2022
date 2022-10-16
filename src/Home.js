import React from "react";
import "./App.css";
import "./Home.css";
import Blimp from "./Images/BlimpTrans.png"

export const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome to <span className="sub">Near</span>Blimp!</h1>
            <h2>Here you will find all of the information you need about Smart Contracts on the <span className="sub">Near</span> Protocol</h2>
            <div class="flier">
                <img src={Blimp} alt="Logo" />
            </div>
        </div >
    );
};


