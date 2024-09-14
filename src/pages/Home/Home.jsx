import RunningLine from "../../shared/ui/RunningLine";
import Banner from "./components/Banner";
import styles from './Home.module.scss'

function Home() {
    return ( 
        <div className={styles.home}>
            <Banner />
            <RunningLine />
            <div className={`${styles.hero}`} />
        </div>
     );
}

export default Home;
