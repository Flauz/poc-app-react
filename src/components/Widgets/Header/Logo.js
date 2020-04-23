import React from 'react'
import './Header.css'
import logo from "../../../assets/noonoo2.svg"
import logoLeoo from '../../../assets/Leoo.png'

const Header = () => {

    return (
        <div className ='container-fluid headerWebsite'>
            <nav className ='justify-content-center  navbarWebsite' >
                <div className='col-12'>
                    <img className ='headerLogo' src ={logoLeoo} alt = 'logo' />
                </div>                                
            </nav>            
        </div>
    )
}


export default Header