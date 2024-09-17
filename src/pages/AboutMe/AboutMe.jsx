import Title from '../../shared/ui/Title';
import styles from './AboutMe.module.scss'
import titleImage from './../../shared/image/about-page/hero.png'
import Statistics from './components/Statistics';
import Journey from './components/Journey/Journey';
import Testimonials from '../../widgets/Testimonials/ui/Testimonials';

function AboutMe() {
    return ( 
        <div className={`${styles.aboutMe} container`}>
            <div className={`${styles.hero} section`}>
                <div className={`${styles.heroImage}`}>
                    <div className={`${styles.img1} section`}>
                        <img src={titleImage} alt="" />
                    </div>
                    <div className={`${styles.img2} section`}>
                        <img src={titleImage} alt="" />
                    </div>
                </div>
                <Title style={{marginBottom: 0, paddingBottom: "40px"}} variant={"h2"} title={"About damien braun"} subtitle={"About"} />
                <Statistics />
            </div>
            <div className={`${styles.biography} section`}>
                    <div className={styles.biographyTitle}>
                        <p>
                            My Biography
                        </p>
                    </div>
                    <div className={styles.biographyContent}>
                        <p>
                            Damien Braun's love affair with photography began at a young age, nurtured by the captivating landscapes and vibrant cultures surrounding her in the heart of the USA. Her passion for storytelling through imagery led her to embark on a photography journey that has spanned over 15 years.
                            Driven by an insatiable curiosity to explore the beauty in everyday moments, Damien has honed her craft meticulously. Her background in digital media provided her with a solid foundation, but it's her keen eye for detail and an innate ability to capture raw emotions that truly set her apart.
                            Damien's journey is more than just taking pictures; it's about capturing the essence of the human spirit, the fleeting magic of nature, and the emotions that define our lives. With each click of her camera, she weaves stories that transcend time and space.
                        </p>
                    </div>
            </div>
            <Journey />
            <Testimonials />
        </div>
     );
}

export default AboutMe;