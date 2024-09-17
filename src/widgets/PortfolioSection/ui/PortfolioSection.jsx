import Title from "../../../shared/ui/Title";
import arrow45 from "./../../../shared/image/icons/arrow45.svg"
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./PortfolioSection.module.scss"
import 'swiper/css';
import 'swiper/css/navigation';

function PortfolioSection() {
    const portfolioCards = [
        {
            id: 1,
            title: "Faces of Resilience",
            date: "March 2022"
        },
        {
            id: 2,
            title: "A Wedding Tale",
            date: "January 2020"
        },
        {
            id: 3,
            title: "Product Elegance",
            date: "January 2020"
        },
        {
            id: 4,
            title: "Faces of Resilience",
            date: "March 2022"
        },
        {
            id: 5,
            title: "A Wedding Tale",
            date: "January 2020"
        },
        {
            id: 6,
            title: "Product Elegance",
            date: "January 2020"
        },
    ]

    return ( 
        <div className={`${styles.portfolio} container section`}>
            <Title subtitle={"Portfolio"} title={"Explore My photography work."} button={true} variant={"h2"} 
                slider={true} buttonText={"View All Testimonials ->"} sliderNext={'nextPortfolio'} sliderPrev={'prevPortfolio'} />
            <Swiper 
                className={styles.content} 
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={35}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.nextPortfolio',
                    prevEl: '.prevPortfolio'
                }}
                breakpoints={
                    {
                        768: {
                            slidesPerView: 3
                        }
                    }
                }
                >
                {portfolioCards.map(i => (
                    <SwiperSlide key={i.id} className={styles.card}>
                        <div className={styles.image}>
                            <img src={`./src/shared/image/home-page/portfolio-${i.id}.png`} alt="" width={"400"} />
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.description}>
                                <div className={styles.title}><p>{i.title}</p></div>
                                <div className={styles.date}><p>{i.date}</p></div>
                            </div>
                            <div className={styles.link} >
                                <NavLink to="/">
                                    View Project
                                </NavLink>
                                <img src={arrow45} alt="" width={24} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
     );
}

export default PortfolioSection;