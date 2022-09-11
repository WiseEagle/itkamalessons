import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Sidebar from "./Components/Sidebar/Sidebar"
import {Route, Routes} from "react-router-dom";
import MyFuture from "./Components/MyFuture/MyFuture";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import MyFutureContainer from "./Components/MyFuture/MyFutureContainer";

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
                    <Route path="/" element={<Profile store={props.store} />}/>

                    <Route path="/dialogs/*"
                           element={<DialogsContainer store={props.store} />}/>

                    <Route path="/myfuture/*"
                           element={<MyFutureContainer store={props.store} />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
