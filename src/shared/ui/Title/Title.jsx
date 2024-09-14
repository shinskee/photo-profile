import styles from "./Title.module.scss"

function Title({ title, subtitle, variant, ...props }) {
    return ( 
        <div {...props} className={variant === "h1" ? `${styles.h1}` : variant === "h2" && `${styles.h2}`}>
            <p>{subtitle}</p>
            <h1>{title}</h1>
        </div>
     );
}

export default Title;