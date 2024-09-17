import Title from "../../../shared/ui/Title";
import styles from "./Faq.module.scss"
import Accordion from "../../../shared/ui/Accordion";

function Faq() {
    const faqs = [
        {
            id: 1,
            question: "What type of photography do you specialize in?",
            ask: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
        },
        {
            id: 2,
            question: "What is your editing process like?",
            ask: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
        },
        {
            id: 3,
            question: "How can I book a photography session with you?",
            ask: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
        },
        {
            id: 4,
            question: "What equipment do you use for your photography?",
            ask: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
        },
        {
            id: 5,
            question: "Can I request a specific location for a ",
            ask: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
        },
        {
            id: 6,
            question: "Are digital files included in your photography packages?",
            ask: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
        },
        {
            id: 7,
            question: "Do you offer prints of your photographs?",
            ask: "Yes, prints are available for purchase. Explore the 'Prints' section for more details on sizes and pricing."
        },
        {
            id: 8,
            question: "How long does it take to receive the edited photos after a session?",
            ask: "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
        },
    ]

    return ( 
        <div className={`${styles.faq} container section`}>
            <Title subtitle={"FAQ'S"} title={"Frequently Asked Questions"} variant={"h2"} />
            <div className={styles.content}>
                {faqs.map(i => (
                    <Accordion key={i.id} title={i.question} description={i.ask}
                         styleAccordion={styles.accordion} styleDescription={styles.ask} styleTitle={styles.question} />
                ))}
            </div>
        </div>
     );
}

export default Faq;