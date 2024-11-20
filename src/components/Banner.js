import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>E-commerce Shopping</h1>
        <button className={styles.ctaButton}>Shop Now</button>
      </div>
    </section>
  );
};

export default Banner;
