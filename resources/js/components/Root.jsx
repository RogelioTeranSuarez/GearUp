import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Catalog from "./Catalog";
import FileUpload from "./FileUpload";
import Suppliers from "./Suppliers";

function Root() {
    return (
        <Routes>
            <Route path="/" element={<Menu />}>
                <Route index element={<Catalog />} />
                <Route path="Suppliers" element={<Suppliers />} />
                <Route path="FileUpload" element={<FileUpload />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    );
}

export default Root;