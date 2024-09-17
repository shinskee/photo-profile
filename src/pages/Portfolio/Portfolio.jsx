import Title from '../../shared/ui/Title';
import Faq from '../../widgets/Faq/ui/Faq';
import Slider from '../../widgets/Slider';
import Testimonials from '../../widgets/Testimonials/ui/Testimonials';
import styles from './Portfolio.module.scss'
import star4 from './../../shared/image/portfolio-page/star4.svg'


function Portfolio() {
    const portraitsCards = [
        {
            id: 1,
            title: "Faces of Resilience",
            date: "March 2022",
            image: `./src/shared/image/about-page/portraits-1.jpg`
        },
        {
            id: 2,
            title: "A Wedding Tale",
            date: "January 2020",
            image: `./src/shared/image/about-page/portraits-2.jpg`
        },
        {
            id: 3,
            title: "Product Elegance",
            date: "January 2020",
            image: `./src/shared/image/about-page/portraits-3.jpg`
        },
        {
            id: 4,
            title: "Faces of Resilience",
            date: "March 2022",
            image: `./src/shared/image/home-page/portfolio-1.png`
        },
        {
            id: 5,
            title: "A Wedding Tale",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-2.png`
        },
        {
            id: 6,
            title: "Product Elegance",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-3.png`
        },
    ]
    const eventsCards = [
        {
            id: 1,
            title: "A Wedding Tale",
            date: "September 2021",
            image: `./src/shared/image/about-page/events-1.jpg`
        },
        {
            id: 2,
            title: "Corporate Excellence Summit",
            date: "November 2019",
            image: `./src/shared/image/about-page/events-2.jpg`
        },
        {
            id: 3,
            title: "Festival of Colors",
            date: "March 2018",
            image: `./src/shared/image/about-page/events-3.jpg`
        },
        {
            id: 4,
            title: "Faces of Resilience",
            date: "March 2022",
            image: `./src/shared/image/home-page/portfolio-1.png`
        },
        {
            id: 5,
            title: "A Wedding Tale",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-2.png`
        },
        {
            id: 6,
            title: "Product Elegance",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-3.png`
        },
    ]
    const commercialCards = [
        {
            id: 1,
            title: "Product Elegance",
            date: "August 2020",
            image: `./src/shared/image/about-page/commercial-1.jpg`
        },
        {
            id: 2,
            title: "Culinary Delights",
            date: "February 2017",
            image: `./src/shared/image/about-page/commercial-2.jpg`
        },
        {
            id: 3,
            title: "Brand Storytelling",
            date: "May 2019",
            image: `./src/shared/image/about-page/commercial-3.jpg`
        },
        {
            id: 4,
            title: "Faces of Resilience",
            date: "March 2022",
            image: `./src/shared/image/home-page/portfolio-1.png`
        },
        {
            id: 5,
            title: "A Wedding Tale",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-2.png`
        },
        {
            id: 6,
            title: "Product Elegance",
            date: "January 2020",
            image: `./src/shared/image/home-page/portfolio-3.png`
        },
    ]

    return ( 
        <div className={`${styles.portfolio}`}>
            <div className={`${styles.hero} container section`}>
                <div className={`${styles.heroImage}`}>
                    <div className={`${styles.title} hidden-tablet`}>
                        <Title style={{paddingBottom: 0, marginBottom: "30px", borderBottom: "none"}} title={"Visual Poetry in Pixels"} subtitle={"Portfolio"} variant={"h2"} />
                        <div className={styles.description}>
                            <p>
                                Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens. 
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.bottomHero} hidden-tablet`}>
                        <img src={star4} alt="" />
                        <div>
                            <p>
                                Scroll Down To See <br /> The Works
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.hero} visible-tablet`}>
                        <Title style={{paddingBottom: 0, marginBottom: "30px", borderBottom: "none"}} title={"Visual Poetry in Pixels"} subtitle={"Portfolio"} variant={"h2"} />
                        <div className={styles.description}>
                            <p>
                                Step into a visual journey that encapsulates the essence of my lens. Each photograph in this portfolio is a narrative, a frozen moment in time, and a testament to the artistry and passion poured into every frame. Explore the diverse tapestry of stories I've had the privilege to capture and witness the world through my lens. 
                            </p>
                        </div>
                    </div>
            </div>
            <div className={styles.brandsWrapper}>
                <div className={styles.brandsTitle}>
                    <p>bRANDS i hAVE wORKED wITH</p>
                </div>
                <div className={styles.brands}>
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className={styles.brand}>
                            <img src={`./src/shared/image/portfolio-page/brands/logo-${Number(index+1)}.svg`} alt="" />
                        </div>
                    ))}
                </div>
                </div>
            <div className='container'>
                <Slider data={portraitsCards} title={"Portraits Photography"}
                    sliderNext={'nextPortraits'} sliderPrev={'prevPortraits'}
                    variant={"graySlider"} />
                <Slider data={eventsCards} title={"Events Photography"}
                    sliderNext={'nextEvents'} sliderPrev={'prevEvents'}
                    variant={"graySlider"} />
                <Slider data={commercialCards} title={"Commercial Photography"}
                    sliderNext={'nextCommercial'} sliderPrev={'prevCommercial'}
                    variant={"graySlider"} />
                <Faq />
                <Testimonials />
            </div>
        </div>
     );
}

export default Portfolio;