import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss"
import logo from './../../../shared/image/logo.svg'
import NavMenu from "../../../shared/ui/NavMenu";

function Header() {
    return ( 
        <header className={`${styles.header} container`}>
            <NavLink to={"/"}>
                <img src={logo} alt="" width={"134px"} />
            </NavLink>
            <NavMenu />
            <button>Contact</button>
        </header>
     );
}

export default Header;