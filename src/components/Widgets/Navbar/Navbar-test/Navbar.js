import React from 'react'
import { NavLink, withRouter } from "react-router-dom"
import axios from "axios"
import { connect } from 'react-redux'
import "./Navbar.css"

var menu = null

class Navbar extends React.Component {

    render() {

        return (
            <>
                {!this.props.menu.isLoaded ? (<div>Loading</div>) :
                    menu = this.props.menu.pages.menu.header,
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
}

const mapStateToProps = state => {
    return {
        config: state.ConfigReducer.config.json_files.pages,
        menu: state.PagesReducer
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))