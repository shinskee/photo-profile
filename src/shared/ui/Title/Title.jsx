import styles from "./Title.module.scss"

function Title({ title, subtitle, variant, button, buttonText, slider, sliderPrev, sliderNext, ...props }) {
    return ( 
        <div {...props} className={variant === "h1" ? `${styles.h1}` : variant === "h2" && `${styles.h2}`}>
            <div>
                <p>{subtitle}</p>
                {variant === "h1" ? (
                    <h1>{title}</h1>
                ) : variant === "h2" && (
                    <h2>{title}</h2>
                )}
            </div>
            {slider === true && (
                <div className={styles.sliderButtons}>
                        <button className={sliderPrev}>{`<`}</button>
                        <button className={sliderNext}>{`>`}</button>
                </div>
            )}
            {button === true && (
                <button>{ buttonText }</button>
            )}
        </div>
     );
}

export default Title;