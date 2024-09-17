import styles from "./ButtonArrow.module.scss"
import arrowButton from './../../image/arrow-button.svg'

function ButtonArrow({ variant, children }) {
    return ( 
        <div className={styles.buttonArrow}>
            {variant === "v1" ? (
                <div>
                    <div className={styles.top}>
                        <p>
                            Let's
                        </p>
                        <button>
                            <img src={arrowButton} alt="" />
                        </button>
                    </div>
                    <p>
                        Work Together
                    </p>
                </div>
            ) : variant === "v2" && (
                <div className={styles.v2}>
                    <p>
                        {children}
                    </p>
                    <button>
                        <img src={arrowButton} alt="" />
                    </button>
                </div>
            )}
        </div>
     );
}

export default ButtonArrow;