//    Shop now We are available all across the globe With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. Shop now Manufactured with the best materials Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office. Shop now
// Challenge by Frontend Mentor. Coded by Your Name Here.
import React, { useState } from "react";
import logoSvg from "./images/logo.svg";
import imageAboutDark from "./images/image-about-dark.jpg";
import imageAboutLight from "./images/image-about-light.jpg";
import imageHeroDesktop1 from "./images/desktop-image-hero-1.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSliderSection />
      <AboutUsSection />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logoSvg} alt="logo-svg" />
      <ul className="nav-menu">
        <li>home</li>
        <li>shop</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}

function HeroSliderSection() {
  return (
    <section>
      <img src={imageHeroDesktop1} alt="hero-image" />
      <div>
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <Button className={"shop-now-btn"}>SHOP NOW</Button>
      </div>
      <div>
        <Button className={"arrow-left-btn"}>left</Button>
        <Button className={"arrow-right-btn"}>right</Button>
      </div>
    </section>
  );
}

function Button({ children, className, onClick }) {
  return <button className={className}>{children}</button>;
}

function AboutUsSection() {
  return (
    <section>
      <img src={imageAboutDark} alt="image-about-dark" />
      <div>
        <h3>About our furniture</h3>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={imageAboutLight} alt="image-about-light" />
    </section>
  );
}
export default App;
