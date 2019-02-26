import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/add" activeClassName="active">Add</NavLink>
            <NavLink to="/help" activeClassName="active">Help</NavLink>
        </header>
    )
}
