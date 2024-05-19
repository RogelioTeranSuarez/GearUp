import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Catalog from "./Catalog";
import FileUpload from "./FileUpload";
import Suppliers from "./Suppliers";
import Accounts from "./Accounts";
import Transactions from "./Transactions";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

function Root() {
    return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Menu />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Catalog />} />
                    <Route path="suppliers" element={<Suppliers />} />
                    <Route path="accounts" element={<Accounts />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="fileupload" element={<FileUpload />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Route>
            </Routes>
    );
}

export default Root;