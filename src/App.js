import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Timemanagement from "./components/Timemanagment/Timemanagement";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/timemanagement" element={<Timemanagement />}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
