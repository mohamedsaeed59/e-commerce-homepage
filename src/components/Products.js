import styles from "../styles/Products.module.css";

const products = [
  { id: 1, image: "https://img.freepik.com/premium-photo/minimal-podium-beige-background-cosmetic-product_1031240-19523.jpg", title: "Product 1", price: "$10" },
  { id: 2, image: "https://img.freepik.com/premium-photo/minimal-podium-beige-background-cosmetic-product_1031240-19523.jpg", title: "Product 2", price: "$20" },
  { id: 3, image: "https://img.freepik.com/premium-photo/minimal-podium-beige-background-cosmetic-product_1031240-19523.jpg", title: "Product 3", price: "$30" },
];

const Products = () => {
  return (
    <section className={styles.productGrid}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image} className={styles.productImg} alt={product.title} />
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.productPrice}>{product.price}</p>
          <button className={styles.productBtn}>Add to Cart</button>
        </div>
      ))}
    </section>
  );
};

export default Products;
