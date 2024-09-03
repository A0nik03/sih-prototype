import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";

const App = () => (
  <>
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/add" element={<Add />} />
      <Route path="/list" element={<List />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  </>
);

export default App;
