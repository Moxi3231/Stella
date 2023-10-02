"use client";

import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container>
     

      <div className="homepage">
        <header>
          <h1>Welcome to Our Shopify Store</h1>
        </header>

        <section className="about">
          <h2>About Us</h2>
          <p>
            We offer a curated selection of high-quality products, handpicked
            for our discerning customers. Explore our collection and find
            something unique today.
          </p>
        </section>

      </div>
    </Container>
  );
}
