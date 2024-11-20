import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartSum, setCartSum] = useState(0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li onClick={() => setIsOpen(false)} className={styles.list}>
          <a className={styles.item} href="#home">Home</a>
        </li>
        <li onClick={() => setIsOpen(false)} className={styles.list}>
          <a className={styles.item} href="#shop">Shop</a>
        </li>
        <li onClick={() => setIsOpen(false)} className={styles.list}>
          <a className={styles.item} href="#about">About Us</a>
        </li>
        <li onClick={() => setIsOpen(false)} className={styles.list}>
          <a className={styles.item} href="#contact">Contact</a>
        </li>
        <div className={styles.cartIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H2V4H6L7.6 11H18.7L20 6H6ZM7.4 13L6.7 10H19L17.4 13H7.4ZM9 19C8.45 19 8 19.45 8 20C8 20.55 8.45 21 9 21C9.55 21 10 20.55 10 20C10 19.45 9.55 19 9 19ZM15 19C14.45 19 14 19.45 14 20C14 20.55 14.45 21 15 21C15.55 21 16 20.55 16 20C16 19.45 15.55 19 15 19Z" />
          </svg>
          <span className={styles.cartBadge}>{cartSum}</span>
        </div>
      </ul>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
