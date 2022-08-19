import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Sidebar from "./Components/Sidebar/Sidebar"
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="sidebar">
                    <Navbar/>
                    <Sidebar state={props.state.sidebar}/>
                </div>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/" element={<Profile state={props.state.profilePage}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs state={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
