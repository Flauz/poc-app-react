import React from 'react'
import { NavLink, withRouter } from "react-router-dom"
import axios from "axios"
import { useSelector } from 'react-redux'
import "./Navbar.css"

const Navbar = () => {

    const menus = useSelector(state => state.PagesReducer)
    const menu = useSelector(state => state.PagesReducer.pages.menu.header)
    
    return (
        <>
            {!menus.isLoaded ? (<div>Loading</div>) :
                <nav className="navbar-light bg-light" >
                    <ul className="nav">
                        {menu &&
                            menu.map((item, index) => {
                                return <li key={index}><NavLink activeClassName="nav-item" className="navlink" to={item.url}>{item.item}</NavLink></li>
                            })}
                    </ul>
                </nav>
            }
        </>
    )
}

export default Navbar