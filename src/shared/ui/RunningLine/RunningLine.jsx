import styles from './RunningLine.module.scss'
import runningLine from './../../image/running-line.svg'

function RunningLine() {
    return ( 
        <div className={styles.runningLineWrapper}>
            <div className={styles.runningLine1}></div>
            <div className={styles.runningLine2}></div>
            <div className={styles.runningLine3}></div>
            <div className={styles.runningLine4}></div>
            <div className={styles.runningLine5}></div>
            <div className={styles.runningLine6}></div>
            <div className={styles.runningLine7}></div>
            <div className={styles.runningLine8}></div>
        </div>
     );
}

export default RunningLine;