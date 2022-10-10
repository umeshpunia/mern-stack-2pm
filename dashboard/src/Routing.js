import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCategory from "./pages/AddCategory";
import AddPro from "./pages/AddPro";
import AddUser from "./pages/AddUser";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Profile from "./pages/Profile";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="adduser" element={<AddUser />} />
        <Route path="categories" element={<Category />} />
        <Route path="addcat" element={<AddCategory />} />
        <Route path="products" element={<Products />} />
        <Route path="addpro" element={<AddPro />} />
      </Routes>
    </>
  );
}

export default Routing;
