import styles from './RunningLineV2.module.scss'
import runningLine from './../../image/running-line.svg'

function RunningLineV2() {
    return ( 
        <div className={styles.runningLineWrapper} style={{
            "--width": "250px",
            "--quantity": "10",
            "--time": "40s"
            }}>
            <div className={styles.runningLineSlider}>
                {[...Array(10)].map((_, index) => (
                    <div key={index} className={styles.runningLine} style={{
                       "--position" : Number(index+1) 
                    }}>
                        <img src={runningLine} alt="" />
                    </div>
                ))}
            </div>
        </div>
     );
}

export default RunningLineV2;