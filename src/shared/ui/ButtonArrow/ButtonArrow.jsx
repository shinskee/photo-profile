import styles from "./ButtonArrow.module.scss"
import arrowButton from './../../image/arrow-button.svg'

function ButtonArrow() {
    return ( 
        <div className={styles.buttonArrow}>
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
     );
}

export default ButtonArrow;