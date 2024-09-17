import { NavLink } from "react-router-dom";
import styles from './NavMenu.module.scss'

const navMenuData = [
    {
        id: 1,
        title: "Home",
        path: "/",
        children: [
            {
                id: 1,
                title: "About Me",
                path: "/",
            },
            {
                id: 2,
                title: "About Me",
                path: "/",
            },
        ]
    },
    {
        id: 2,
        title: "About Me",
        path: "/AboutMe",
        children: [
            {
                id: 1,
                title: "About Me",
                path: "/",
            },
            {
                id: 2,
                title: "About Me",
                path: "/",
            },
        ]
    },
    {
        id: 3,
        title: "Portfolio",
        path: "/Portfolio",
        children: [
            {
                id: 1,
                title: "About Me",
                path: "/",
            },
            {
                id: 2,
                title: "About Me",
                path: "/",
            },
        ]
    },
    {
        id: 4,
        title: "Services",
        path: "/Services",
        children: [
            {
                id: 1,
                title: "About Me",
                path: "/",
            },
            {
                id: 2,
                title: "About Me",
                path: "/",
            },
        ]
    },
]

export const navMenuFooterData = [
    {
        id: 1,
        title: "Home",
        path: "/",
        children: [
            {
                id: 1,
                title: "About Me",
                path: "/AboutMe",
            },
            {
                id: 2,
                title: "My Works",
                path: "/MyWorks",
            },
            {
                id: 3,
                title: "Testimonials",
                path: "/Testimonials",
            },
        ]
    },
    {
        id: 2,
        title: "Clients",
        path: "/Clients",
        children: [
            {
                id: 1,
                title: "Klovesto",
                path: "/Klovesto",
            },
            {
                id: 2,
                title: "Nukeway",
                path: "/Nukeway",
            },
            {
                id: 3,
                title: "Cloven’s",
                path: "/Clovens",
            },
            {
                id: 4,
                title: "MenVol",
                path: "/MenVol",
            },
        ]
    },
    {
        id: 3,
        title: "Portfolio",
        path: "/Portfolio",
        children: [
            {
                id: 1,
                title: "Events",
                path: "/Events",
            },
            {
                id: 2,
                title: "Portrait",
                path: "/Portrait",
            },
            {
                id: 3,
                title: "Branding",
                path: "/Branding",
            },
            {
                id: 4,
                title: "Commerciale",
                path: "/Commerciale",
            },
            {
                id: 5,
                title: "Wedding",
                path: "/Wedding",
            },
        ]
    },
    {
        id: 4,
        title: "Services",
        path: "/Services",
        children: [
            {
                id: 1,
                title: "Portraits",
                path: "/Portraits",
            },
            {
                id: 2,
                title: "Events",
                path: "/Events",
            },
            {
                id: 3,
                title: "Commercial",
                path: "/Commercial",
            },
        ]
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