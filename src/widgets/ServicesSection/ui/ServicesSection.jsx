import ButtonArrow from "../../../shared/ui/ButtonArrow";
import Title from "../../../shared/ui/Title";
import styles from "./ServicesSection.module.scss"
import services from "./../../../shared/image/home-page/services.png"
import star8 from "./../../../shared/image/icons/star8.svg"

function ServicesSection() {
    const highlights = [
        {
            id: 1,
            content: "Coverage for weddings, parties, corporate functions, and more."
        },
        {
            id: 2,
            content: "Skilled photographers who know how to seize the moment."
        },
        {
            id: 3,
            content: "A mix of candid and posed shots for a comprehensive story."
        },
        {
            id: 4,
            content: "Quick turnaround for you to relive the day's highlights."
        },
    ]
    return ( 
        <div className={`${styles.servicesSection} container section`}>
            <Title subtitle={"Services"} title={"My Photography Services"} button={true} variant={"h2"} buttonText={"View All Services ->"} />
            <div className={styles.content} >
                <div className={styles.text} >
                    <div className={styles.title}>
                        <ButtonArrow variant={"v2"}>Events</ButtonArrow>
                        <div>
                            <p>
                                Our event photography service is dedicated to capturing the magic of your special occasions. Whether it's a wedding, corporate event, or milestone celebration, we're there to document every heartfelt moment. We blend into the background, ensuring natural and candid shots that reflect the emotions of the day.
                            </p>
                        </div>
                    </div>
                    <div className={styles.highlightsWrapper}>
                        <p>
                            Service Highlights
                        </p>
                        <div className={styles.highlights}>
                            {highlights.map(i => (
                                <div key={i.id} className={styles.highlight}>
                                    <img src={star8} alt="" width={40} />
                                    <p>
                                        {i.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={services} alt="" width={""} />
                </div>
            </div>
        </div>
     );
}

export default ServicesSection;