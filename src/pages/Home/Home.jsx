import RunningLineV2 from "../../shared/ui/RunningLineV2";
import ServicesSection from "../../widgets/ServicesSection";
import About from "../../widgets/About";
import Banner from "./components/Banner";
import GalleryHome from "./components/GalleryHome";
import PortfolioSection from "../../widgets/PortfolioSection";
import Faq from "../../widgets/Faq/ui/Faq";
import Testimonials from "../../widgets/Testimonials/ui/Testimonials";
import styles from './Home.module.scss'
import Slider from "../../widgets/Slider";

function Home() {
    const portfolioCards = [
        {
            id: 1,
            title: "Faces of Resilience",
            date: "March 2022",
            image: `./src/shared/image/home-page/portfolio-1.png`
        },
        {
            id: 2,
            title: "A Wedding Tale",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-2.png`
        },
        {
            id: 3,
            title: "Product Elegance",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-3.png`
        },
        {
            id: 4,
            title: "Faces of Resilience",
            date: "March 2022",
            image: `./src/shared/image/home-page/portfolio-4.png`
        },
        {
            id: 5,
            title: "A Wedding Tale",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-5.png`
        },
        {
            id: 6,
            title: "Product Elegance",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-6.png`
        },
    ]

    return ( 
        <div className={styles.home}>
            <Banner />
            <RunningLineV2 />
            <GalleryHome />
            <About />
            <ServicesSection />
            <div className="container">
                <Slider data={portfolioCards} title={"Explore My photography work."}
                    subtitle={"Portfolio"} buttonText={"View All Testimonials ->"}
                    sliderNext={'nextPortfolio'} sliderPrev={'prevPortfolio'} 
                    button={true} variant={"h2"} />
            </div>
            <Faq />
            <Testimonials />
        </div>
     );
}

export default Home;
