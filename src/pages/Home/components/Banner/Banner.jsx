import ButtonArrow from "../../../../shared/ui/ButtonArrow";
import Title from "../../../../shared/ui/Title";
import styles from "./Banner.module.scss"

function Banner() {
    return ( 
        <div className="border">
            <div className={`${styles.banner} container`}>
                <Title variant={"h1"} title={"Damien Braun"} subtitle={"Stunning Photography by"} />
                <ButtonArrow variant={"v1"} />
            </div>
        </div>
     );
}

export default Banner;