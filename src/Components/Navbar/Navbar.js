import React from "react";
import Styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar =()=>{
    return(
        <div className={Styles.navbar}>
            <div className={Styles.navlogo}>
                <h1 className={Styles.logotext}>RECIPE HUB</h1>
            </div>
            <div className={Styles.navlinks}>
                <ul className={Styles.linkli}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className={Styles.link}>Categories</li>
                    </Link>
                    <Link to="/HomePage" style={{ textDecoration: 'none' }}>
                        <li>Search Recipe</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
    
}

export default Navbar;