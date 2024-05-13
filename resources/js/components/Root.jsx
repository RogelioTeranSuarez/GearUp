import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Catalog from "./Catalog";
import FileUpload from "./FileUpload";

function Root() {
    return (
        <Routes>
            <Route path="/" element={<Menu />}>
                <Route path="Home" element={<Home />} />
                <Route path="Catalog" element={<Catalog />} />
                <Route path="FileUpload" element={<FileUpload />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    );
}

export default Root;