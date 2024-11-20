import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Help Center</a>
      </div>
      <div className={styles.socialIcons}>
        <a className={styles.link} href="https://facebook.com">
           <Image src="/assets/images/facebook.png" className={styles.img} alt="Facebook" width={24} height={24} />
        </a>
        <a className={styles.link} href="https://twitter.com">
           <Image src="/assets/images/twitter.png" className={styles.img} alt="Twitter" width={24} height={24} />
        </a>
        <a className={styles.link} href="https://instagram.com">
            <Image src="/assets/images/instagram.jpeg" className={styles.img} alt="Instagram" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
