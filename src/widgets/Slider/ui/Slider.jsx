import Title from "../../../shared/ui/Title";
import arrow45 from "./../../../shared/image/icons/arrow45.svg"
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import styles from "./Slider.module.scss"
import 'swiper/css';
import 'swiper/css/navigation';

function Slider( {data, title, subtitle, buttonText, sliderNext, sliderPrev, button, variant } ) {

    return ( 
        <div className={`${styles.slider} section`}>
            <Title subtitle={subtitle} title={title} button={button} variant={variant} 
                slider={true} buttonText={buttonText} sliderNext={sliderNext} sliderPrev={sliderPrev} />
            <Swiper 
                className={styles.content} 
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={35}
                modules={[Navigation]}
                navigation={{
                    nextEl: `.${sliderNext}`,
                    prevEl: `.${sliderPrev}`
                }}
                breakpoints={
                    {
                        768: {
                            slidesPerView: 3
                        }
                    }
                }
                >
                {data.map(i => (
                    <SwiperSlide key={i.id} className={styles.card}>
                        <div className={styles.image}>
                            <img src={i.image} alt="" width={"400"} />
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
            {variant === "graySlider" && (
                <div className={`${styles.sliderButtons} visible-mobile`}>
                    <button className={sliderPrev}>{`<`}</button>
                    <button className={sliderNext}>{`>`}</button>
                </div>
            )}
        </div>
     );
}

export default Slider;