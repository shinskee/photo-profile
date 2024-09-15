import RunningLineV2 from "../../shared/ui/RunningLineV2";
import ServicesSection from "../../widgets/ServicesSection";
import About from "../../widgets/About";
import Banner from "./components/Banner";
import GalleryHome from "./components/GalleryHome";
import styles from './Home.module.scss'
import PortfolioSection from "../../widgets/PortfolioSection";
import Faq from "../../widgets/Faq/ui/Faq";
import Testimonials from "../../widgets/Testimonials/ui/Testimonials";

function Home() {
    return ( 
        <div className={styles.home}>
            <Banner />
            <RunningLineV2 />
            <GalleryHome />
            <About />
            <ServicesSection />
            <PortfolioSection />
            <Faq />
            <Testimonials />
        </div>
     );
}

export default Home;
