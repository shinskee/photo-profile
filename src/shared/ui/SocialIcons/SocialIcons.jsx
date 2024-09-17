import styles from "./SocialIcons.module.scss"
import facebook from "./../../../shared/image/icons/facebook.svg"
import twitter from "./../../../shared/image/icons/twitter.svg"
import linkedln from "./../../../shared/image/icons/linkedln.svg"

function SocialIcons() {
  return (
    <div className={styles.socials}>
      <div className={styles.icons}>
        <a href="https://facebook.com/">
          <img src={facebook} alt="" width={20} />
        </a>
        <a href="https://twitter.com/">
          <img src={twitter} alt="" width={20} />
        </a>
        <a href="https://linkedln.ru/">
          <img src={linkedln} alt="" width={20} />
        </a>
      </div>
    </div>
  );
}

export default SocialIcons;
