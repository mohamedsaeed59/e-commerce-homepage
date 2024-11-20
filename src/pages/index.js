import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <Products />
      </main>
      <Footer />
    </>
  );
}
