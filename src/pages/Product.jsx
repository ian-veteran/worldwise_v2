import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
          Discover the world like never before with worldwise. From breathtaking beaches to majestic mountains, our tailored travel experiences bring your dream destinations to life. Immerse yourself in new cultures, taste exotic cuisines, and uncover hidden gems with our expertly crafted itineraries. Whether you’re seeking a thrilling adventure, a relaxing getaway, or a cultural exploration, we turn your travel dreams into unforgettable memories. Let us handle the details while you focus on the fun. Your next adventure awaits—book with us and experience travel beyond your imagination. Where will your journey take you next?
          </p>
          
        </div>
      </section>
    </main>
  );
}
