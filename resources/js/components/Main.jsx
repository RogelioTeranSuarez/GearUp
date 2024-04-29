import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import Menu from "./Menu";
import Home from "./Home";


function Main() {
    return (
        <Routes>
            <Route path="/" element={<Menu />}>
                <Route index element={<Home />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>


        </Routes>
    );
}

export default Main;
