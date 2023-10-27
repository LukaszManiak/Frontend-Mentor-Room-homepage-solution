// Challenge by Frontend Mentor. Coded by Your Name Here.

import React, { useState } from "react";
import logoSvg from "./images/logo.svg";
import hambrgerMenu from "./images/icon-hamburger.svg";
import closeMenu from "./images/icon-close.svg";
import imageAboutDark from "./images/image-about-dark.jpg";
import imageAboutLight from "./images/image-about-light.jpg";
import imageHeroDesktop0 from "./images/desktop-image-hero-1.jpg";
import imageHeroDesktop1 from "./images/desktop-image-hero-2.jpg";
import imageHeroDesktop2 from "./images/desktop-image-hero-3.jpg";
import arrowLeft from "./images/icon-angle-left.svg";
import arrowRight from "./images/icon-angle-right.svg";
import shopArrow from "./images/icon-arrow.svg";

const heroSlides = [
  {
    image: imageHeroDesktop0,
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: imageHeroDesktop1,
    title: "Discover innovative ways to decorate",
    description:
      "We are available all across the globe With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: imageHeroDesktop2,
    title: "Discover innovative ways to decorate",
    description:
      "Manufactured with the best materials Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

function App() {
  const [mobileView, setMobileView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    if (slide === heroSlides.length - 1) return;

    setSlide((s) => s + 1);
  }

  function previousSlide() {
    if (slide === 0) return;

    setSlide((s) => s - 1);
  }

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
      <div className={isOpen ? "mobile-menu" : "mobile-menu hidden"}>
        <NavMenu className={"mobile-nav-menu"} />
      </div>
      <HeroSliderSection
        curSlide={slide}
        onSetNext={nextSlide}
        onSetPrevious={previousSlide}
      />
      <AboutUsSection />
    </div>
  );
}
// navbar
function Navbar({ mobileView, isOpen, onChangeOpen }) {
  return (
    <nav className="navbar">
      <img className={isOpen ? "hide" : ""} src={logoSvg} alt="logo-svg" />

      {mobileView && <NavMenu className={"nav-menu"} />}

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
function HeroSliderSection({ curSlide, onSetNext, onSetPrevious }) {
  return (
    <section className="hero-section">
      <img
        className="hero-img"
        src={heroSlides[curSlide].image}
        alt="hero-img"
      />
      <div className="hero-container">
        <h1>{heroSlides[curSlide].title}</h1>
        <p>{heroSlides[curSlide].description}</p>
        <Button className={"shop-now-btn"}>
          SHOP NOW <img src={shopArrow} alt="shop arrow" />
        </Button>
        <div className="arrow-btns-container">
          <Button onClick={() => onSetPrevious()} className={"arrow-left-btn"}>
            <img src={arrowLeft} alt="arrow-left" />
          </Button>
          <Button onClick={() => onSetNext()} className={"arrow-right-btn"}>
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

function NavMenu({ className }) {
  return (
    <ul className={className}>
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
  );
}
export default App;
