import ContactForm from "../components/ContactForm.js";
import FeaturedBooks from "../components/FeaturedBooks.js";
import Hero from "../components/Hero.js";
import React from "react";
import Services from "../components/Services.js";

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedBooks />
      <Services />
      <ContactForm />
    </main>
  );
}

export default HomePage;
