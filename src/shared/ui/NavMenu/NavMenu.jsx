import { NavLink } from "react-router-dom";
import styles from './NavMenu.module.scss'

const navMenuData = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: 2,
        title: "About Me",
        path: "/AboutMe"
    },
    {
        id: 3,
        title: "Portfolio",
        path: "/Portfolio"
    },
    {
        id: 4,
        title: "Services",
        path: "/Services"
    },
]

function NavMenu() {
    return ( 
        <nav className={styles.navMenu}>
            {navMenuData.map((i) => (
                <NavLink className={({ isActive }) => [
                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                ]} to={i.path} key={i.id}>
                    {i.title}
                </NavLink>
            ))}
        </nav>
     );
}

export default NavMenu;