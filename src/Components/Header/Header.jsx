import React from 'react';
import { NavLink } from "react-router-dom";

const getStyles = ({ isActive }) => ({ color: isActive ? 'blue' : 'grey' });

const Header = () => (
    <div className="header">
        <NavLink
            style={getStyles} to="/">
            Главная
        </NavLink>
        <NavLink to="/search" style={getStyles} className='lk-link'>Поиск фильмов</NavLink>
    </div>
);

export default Header;