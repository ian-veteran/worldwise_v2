// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      
      <section>
        <div>
          <h2>
            Old Town
            <br />
            Just ksh 200 only.
          </h2>
          <p>
            Get to experience and explore the first Coastal Town in Kenya ,its swahili cultures and architectural designs. 
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
