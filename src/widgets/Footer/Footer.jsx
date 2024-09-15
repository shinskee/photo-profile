import { NavLink } from "react-router-dom";
import ButtonArrow from "../../shared/ui/ButtonArrow";
import { navMenuFooterData } from "../../shared/ui/NavMenu/NavMenu";
import styles from "./Footer.module.scss"
import RunningLineV2 from "../../shared/ui/RunningLineV2";
import SocialIcons from "../../shared/ui/SocialIcons/SocialIcons";

function Footer() {
    return ( 
        <div>
            <div>

            </div>
            <RunningLineV2 />
            <div className={styles.footerWrapper}>
                <div className={styles.footerBg}>
                </div>
                <footer className={`${styles.footer}`}>
                    <div className={styles.button}>
                        <div className={styles.text}>
                            <p>A more meaningful home for photography</p>
                        </div>
                        <ButtonArrow variant={"v1"} />
                    </div>
                    <div className={styles.navWrapper}>
                        {navMenuFooterData.map(i => (
                            <div key={i.id} className={styles.navParent}>
                                <NavLink to={i.path}>{i.title}</NavLink>
                                    {i.children.map(i => (
                                        <div key={i.id} className={styles.navChildren}>
                                            <NavLink to={i.path}>{i.title}</NavLink>
                                        </div>
                                    ))}
                            </div>
                        ))}
                    </div>
                </footer>
                <div className={styles.footerBg}>
                </div>
            </div>
            <div className={styles.bottomWrapper}>
                <div className={`${styles.bottom} container`}>
                    <div className={styles.links}>
                        <a>
                            Terms & Conditions
                        </a>
                        <a>
                            Privacy Policy
                        </a>
                    </div>
                    <SocialIcons />
                    <div className={styles.copyright}>
                        <p>
                            © 2024 Damien Braun Photography. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;