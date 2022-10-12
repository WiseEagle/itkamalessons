import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Sidebar from "./Components/Sidebar/Sidebar";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import MyFutureContainer from "./Components/MyFuture/MyFutureContainer";
import {Route, Routes} from "react-router-dom";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className="sidebar">
                <Navbar/>
                <Sidebar/>
            </div>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Profile />}/>

                    <Route path="/dialogs/*"
                           element={<DialogsContainer />}/>

                    <Route path="/myfuture/*"
                           element={<MyFutureContainer />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
