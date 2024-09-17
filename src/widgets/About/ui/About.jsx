import Title from "../../../shared/ui/Title";
import styles from "./About.module.scss"
import about from "./../../../shared/image/home-page/about.png"
import star from "./../../../shared/image/icons/star.svg"
import facebook from "./../../../shared/image/icons/facebook.svg"
import twitter from "./../../../shared/image/icons/twitter.svg"
import linkedln from "./../../../shared/image/icons/linkedln.svg"
import SocialIcons from "../../../shared/ui/SocialIcons/SocialIcons";

function About() {
    return ( 
        <div className={`${styles.about} container section`}>
            <Title subtitle={"About"} title={"I am Damien"} variant={"h2"} button={true} buttonText={"Know More ->"} />
            <div className={styles.content} >
                <div className={styles.image}>
                    <img src={about} alt="about" width={""} />
                </div>
                <div className={styles.info}>
                    <div className={styles.intro}>
                        <div className={styles.title}>
                            <img src={star} alt="" width={40} />
                            <h4>
                                Introduction
                            </h4>
                        </div>
                        <div className={styles.description}>
                            <p>
                                My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.
                            </p>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.title}>
                            <img src={star} alt="" width={40} />
                            <h4>
                                Contact Information
                            </h4>
                        </div>
                        <div className={styles.contacts}>
                            <div className={styles.email}>
                                <div>
                                    <p>
                                        Email
                                    </p>
                                </div>
                                <a href="mailto:damienbraun@gmail.com">damienbraun@gmail.com</a>
                            </div>
                            <div className={styles.tel}>
                                <div>
                                    <p>
                                        Phone Number
                                    </p>
                                </div>
                                <a href="tel:+00000000000">+00 000000000</a>
                            </div>
                        </div>
                        <div className={styles.socials}>
                            <SocialIcons />
                            <div className={styles.buttons}>
                                <button>Let's Work</button>
                                <button>Download CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default About;