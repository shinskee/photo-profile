import styles from "./Statistics.module.scss"

function Statistics() {
    const statistics = [
        {
            id: 1,
            name: "Years in Business",
            value: "15+"
        },
        {
            id: 2,
            name: "Happy Clients",
            value: "500+"
        },
        {
            id: 3,
            name: "Photography Awards",
            value: "10+"
        },
        {
            id: 4,
            name: "International Shoots",
            value: "05+"
        },
        {
            id: 5,
            name: "Social Media Followers",
            value: "10,000+"
        },
        {
            id: 6,
            name: "Client Retention Rate",
            value: "90%"
        },
    ]

    return ( 
        <div className={styles.statistics}>
            {statistics.map(i => (
                <div key={i.id} className={styles.statistic}>
                    <div className={styles.value}>
                        <p>
                            {i.value}
                        </p>
                    </div>
                    <div className={styles.name}>
                        <p>
                            {i.name}
                        </p>
                    </div>
                </div>
            ))}
        </div>
     );
}

export default Statistics;