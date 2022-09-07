import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./app/Login";
import Note from "./Note";
import MyCats from "./MyCats";
import Products from "./Products";
import About from "./app/About";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/login" element={<Login />} />
          <Route path="/note" element={<Note />} />
          <Route path="/categories" element={<MyCats />}>
            <Route path=":cat_id" element={<Products />} />
          </Route>
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
