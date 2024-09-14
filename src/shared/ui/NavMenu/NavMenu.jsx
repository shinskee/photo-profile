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

function NavMenu({ isActiveBurger, onClickBurger, onClickNavLink }) {
    return ( 
        <div className={styles.navMenu}>
            <button onClick={onClickBurger} className={!isActiveBurger ? `${styles.burger} visible-mobile` : `${styles.burger} ${styles.activeBurger} visible-mobile`}>
                <span></span>
            </button>
            <div className={!isActiveBurger ? `${styles.navMenuDesktop} hidden-mobile` : `${styles.navMenuMobile} visible-mobile`}>
                <nav className={``}>
                    {navMenuData.map((i) => (
                        <NavLink onClick={onClickNavLink} className={({ isActive }) => [
                            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                        ]} to={i.path} key={i.id}>
                            {i.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
     );
}

export default NavMenu;