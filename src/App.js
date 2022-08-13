import "./App.css";
import bg from "./bg.png";
import logo from "./logo.png";
import user from "./user.png";
import Header from "./Header";
import Navbar from "./Navbar";
import Profile from "./Profile";
import React from "react";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
