import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss"
import logo from './../../../shared/image/logo.svg'
import NavMenu from "../../../shared/ui/NavMenu";
import { useState } from "react";

function Header() {
    const [ isActiveBurger, setIsActiveBurger ] = useState(false)

    const onClickBurger = () => {
        setIsActiveBurger(!isActiveBurger)
    }

    const onClickNavLink = () => {
        setIsActiveBurger(false)
    }

    return ( 
        <header className={`${styles.header} container`}>
            <NavLink className={styles.logo} to={"/"}>
                <img src={logo} alt="" width={"134px"} />
            </NavLink>
            <NavMenu onClickBurger={onClickBurger} isActiveBurger={isActiveBurger} onClickNavLink={onClickNavLink} />
            <button className="hidden-mobile">Contact</button>
        </header>
     );
}

export default Header;