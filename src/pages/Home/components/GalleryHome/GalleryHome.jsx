import styles from "./GalleryHome.module.scss"

function GalleryHome() {
    return ( 
        <div className={`${styles.galleryHome} container section-bottom`}>
            {[...Array(6)].map((_, index) => (
                <div className={styles.item} key={index}>
                    <img src={`./src/shared/image/home-page/gallery/${Number(index+1)}.jpg`} alt="" />
                </div>
            ))}
        </div>
     );
}

export default GalleryHome;