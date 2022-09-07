import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
const MyNav = () => {
    return (
        <nav  style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
            <Link className='btn btn-success' to="/login">login</Link>|{" "}
            <Link to="/About">About</Link>|{" "}
            <Link to="/note">Note</Link>|{" "}
            <Link to="/categories">Shop</Link>|{" "}
        </nav>
    )
}

export default MyNav