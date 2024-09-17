import Title from "../../../../shared/ui/Title";
import styles from "./Journey.module.scss"

function Journey() {
    const journey = [
        {
            id: 1,
            year: "2005",
            content: "In 2005, Damien acquired her first camera, igniting her passion for photography. She started experimenting with landscapes and candid shots, marking the beginning of her visual storytelling journey."
        },
        {
            id: 2,
            year: "2010",
            content: "Damien pursued a degree in Fine Arts with a focus on photography, refining her technical skills and artistic sensibilities."
        },
        {
            id: 3,
            year: "2012",
            content: "In 2012, Damien held her first solo exhibition, showcasing her unique perspective on nature and people through her lens."
        },
        {
            id: 4,
            year: "2015",
            content: "Damien officially launched her photography business in 2015, offering portrait, event, and commercial photography services."
        },
        {
            id: 5,
            year: "2017",
            content: "Damien's work took her beyond the USA, capturing breathtaking scenes and cultures from around the world."
        },
        {
            id: 6,
            year: "2020",
            content: "In 2020, Damien's dedication and creativity earned her several prestigious photography awards, solidifying her position as a visionary photographer."
        },
    ]

    return ( 
        <div className={`${styles.journey} section`}>
            <Title variant={"h2"} title={"Damien's Journey - A Timeline"} subtitle={"Journey"} />
            <div className={styles.cards}>
                {journey.map(i => (
                    <div key={i.id} className={styles.card}>
                        <div className={styles.year}>
                            <p>
                                year - {i.year}
                            </p>
                        </div>
                        <div className={styles.content}>
                            <p>
                                {i.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Journey;