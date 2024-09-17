import Title from "../../../shared/ui/Title";
import styles from "./Testimonials.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import SocialIcons from "../../../shared/ui/SocialIcons/SocialIcons";
import { Navigation } from "swiper/modules";
import star from "./../../../shared/image/icons/star-raiting.svg"
import 'swiper/css';
import 'swiper/css/navigation';

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Emily Johnson",
            country: "USA, California",
            raiting: 5,
            feedback: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
        },
        {
            id: 2,
            name: "John Smith",
            country: "USA, California",
            raiting: 5,
            feedback: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
        },
        {
            id: 3,
            name: "Samantha Davis",
            country: "USA, California",
            raiting: 5,
            feedback: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
        },
        {
            id: 4,
            name: "Emily Johnson",
            country: "USA, California",
            raiting: 5,
            feedback: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
        },
        {
            id: 5,
            name: "Samantha Davis",
            country: "USA, California",
            raiting: 5,
            feedback: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
        },
        {
            id: 6,
            name: "Emily Johnson",
            country: "USA, California",
            raiting: 5,
            feedback: "Damien's photography doesn't just capture moments; it captures emotions. Hes work is simply mesmerizing."
        },
    ]
    return ( 
        <div className={`${styles.testimonials} container section`}>
            <Title subtitle={"Testimonials"} title={"What My Clients Say"} button={true} slider={true}
                 variant={"h2"} buttonText={"View All Services ->"} sliderNext={'nextTestimonial'} sliderPrev={'prevTestimonial'} />
            <Swiper 
                className={styles.content}
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={{
                    nextEl: '.nextTestimonial',
                    prevEl: '.prevTestimonial'
                }} 
                breakpoints={
                    {
                        768: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        },
                    }
                }
                >
                {testimonials.map(i => (
                    <SwiperSlide key={i.id} className={styles.card}>
                        <div className={styles.top}>
                            <div className={styles.person}>
                                <div className={styles.name}>
                                    <p>
                                        {i.name}
                                    </p>
                                </div>
                                <div className={styles.country}>
                                    <p>
                                        {i.country}
                                    </p>
                                </div>
                            </div>
                            <SocialIcons />
                        </div>
                        <div className={styles.raiting}>
                            {[...Array(Number(`${i.raiting}`))].map((_,index) => (
                                <img key={index} src={star} alt="" />
                            ))}
                        </div>
                        <div className={styles.feedback}>
                            <p>
                                {i.feedback}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
     );
}

export default Testimonials;