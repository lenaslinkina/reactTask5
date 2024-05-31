import React from 'react';
import Header from "../Components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Sidebar from '../Components/Sidebar/Sidebar.jsx';

const MainLayout = () => (
    <div>
        <Header />
        <Outlet />
        <Sidebar />
    </div>
);

export default MainLayout;