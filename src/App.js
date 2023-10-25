//    Shop now We are available all across the globe With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today. Shop now Manufactured with the best materials Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office. Shop now
// Challenge by Frontend Mentor. Coded by Your Name Here.
import React, { useState } from "react";
import logoSvg from "./images/logo.svg";
import hambrgerMenu from "./images/icon-hamburger.svg";
import closeMenu from "./images/icon-close.svg";
import imageAboutDark from "./images/image-about-dark.jpg";
import imageAboutLight from "./images/image-about-light.jpg";
import imageHeroDesktop1 from "./images/desktop-image-hero-1.jpg";
import arrowLeft from "./images/icon-angle-left.svg";
import arrowRight from "./images/icon-angle-right.svg";
import shopArrow from "./images/icon-arrow.svg";

function App() {
  const [mobileView, setMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function changeOpenStatus() {
    setIsOpen(!isOpen);
  }

  function changeImgSrc() {
    if (window.innerWidth >= 968) {
      setMobileView(true);
      setIsOpen(false);
    } else {
      setMobileView(false);
    }
  }

  window.addEventListener("resize", changeImgSrc);

  return (
    <div className="App">
      <div className={isOpen ? "dark-bg" : "dark-bg hidden"}></div>
      <Navbar
        mobileView={mobileView}
        onChangeOpen={changeOpenStatus}
        isOpen={isOpen}
      />
      <div className={isOpen ? "mobile-menu" : "mobile-menu hidden"}> </div>
      <HeroSliderSection />
      <AboutUsSection />
    </div>
  );
}
// navbar
function Navbar({ mobileView, isOpen, onChangeOpen }) {
  return (
    <nav className="navbar">
      <img src={logoSvg} alt="logo-svg" />

      {mobileView && (
        <ul className="nav-menu">
          <li>
            <a>home</a>
          </li>
          <li>
            <a>shop</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>contact</a>
          </li>
        </ul>
      )}

      {!mobileView && (
        <Button onClick={onChangeOpen} className={"hamburger-menu-btn"}>
          <img
            src={!isOpen ? hambrgerMenu : closeMenu}
            alt="hamburger-menu-icon"
          />
        </Button>
      )}
    </nav>
  );
}
// Hero section
function HeroSliderSection() {
  return (
    <section className="hero-section">
      <img className="hero-img" src={imageHeroDesktop1} alt="hero-img" />
      <div className="hero-container">
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <Button className={"shop-now-btn"}>
          SHOP NOW <img src={shopArrow} alt="shop arrow" />
        </Button>
        <div className="arrow-btns-container">
          <Button className={"arrow-left-btn"}>
            <img src={arrowLeft} alt="arrow-left" />
          </Button>
          <Button className={"arrow-right-btn"}>
            <img src={arrowRight} alt="arrow-right" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// about us section
function AboutUsSection() {
  return (
    <section className="about-us-section">
      <img className="about-us-img" src={imageAboutDark} alt="about-dark" />
      <div className="about-us-container">
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
      <img className="about-us-img" src={imageAboutLight} alt="about-light" />
    </section>
  );
}

// help components
// button
function Button({ children, className, onClick }) {
  return (
    <button onClick={() => onClick()} className={className}>
      {children}
    </button>
  );
}
export default App;
