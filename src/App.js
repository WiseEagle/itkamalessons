import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Sidebar from "./Components/Sidebar/Sidebar"
import {Route, Routes} from "react-router-dom";

const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <div className="sidebar">
                <Navbar/>
                <Sidebar state={props.state.sidebar}/>
            </div>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}/>

                    <Route path="/dialogs/*"
                           element={<Dialogs
                               dialogsPage={props.state.dialogsPage}
                               dispatch={props.dispatch}
                           />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
