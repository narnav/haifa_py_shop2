import React from 'react';
import './App.css';
import Login from './app/Login';
import { useSelector, useDispatch } from 'react-redux';
import Note from './Note';
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import MyNav from './MyNav';
import Left_m from './Left_m';
import R_side from './R_side';
import {selectUserName,logout,selectToken,doSignupAsync,selectFullScreen} from './app/loginSlice'
function App() {
    const userName = useSelector(selectUserName);
    const fullScreen = useSelector(selectFullScreen);
    return (
        <div className="App" style={{ backgroundColor: 'yellow' }}>
            {/* header */}
            <div className="p-5 bg-primary text-white text-center">
                <h1>My First Bootstrap 5 Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            {/* navbar */}
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <MyNav></MyNav>
                </div>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    {/* <!-- left --> */}
                {fullScreen &&
                    <div className="col-sm-4">
                        <Left_m></Left_m>
                    </div>}
                    {/* <!-- right --> */}
                    <div className="col-sm-8">
                        <R_side></R_side>
                    </div>
                </div>
            </div>

            {userName && <div>Hello {userName}</div>}

        </div >
    );
}

export default App;
