import React, { useState } from "react";
import mockup2 from "./../assets/images/mockup2.png";
import logoIcon from "./../assets/images/logoIcon.png";

const NAVBAR_HEIGHT = 72; // px -- update if your navbar is taller!

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (hash) => (e) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileMenuOpen(false);
  };

  const navLinks = (
    <>
      <a href="#home" onClick={handleNav("#home")} className="nav-link">
        Home
      </a>
      <a href="#problem" onClick={handleNav("#problem")} className="nav-link">
        Problems
      </a>
      <a href="#features" onClick={handleNav("#features")} className="nav-link">
        Features
      </a>
      <a
        href="#investors"
        onClick={handleNav("#investors")}
        className="nav-link"
      >
        Investors
      </a>
      <a href="#founders" onClick={handleNav("#founders")} className="nav-link">
        About us
      </a>
    </>
  );

  return (
    <section id="home" style={{ position: "relative" }}>
      <style>{`
        .navbar {
          width: 100vw;
          height: ${NAVBAR_HEIGHT}px;
          background: transparent;
         
          left: 0;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          padding: 0 24px;
          box-sizing: border-box;
          border-bottom: 1px solid #2224;
        }
        .nav-row {
          display: flex;
          align-items: center;
          gap: 36px;
          width: 100%;
        }
        .logoIcon {
          height: 24px;
          width: 24px;
          font-weight: 700;
          font-size: 1.25rem;
          margin-right: 4px;
        }
        .logoIcon-img {
          height: 60px;
          width: auto;
          display: block;
          margin-right: 8px;
          margin-top: -6px;

        }
        .nav-title {
          font-weight: 700;
          color: #FFB14B;
          font-size: 1.25rem;
          margin-right: 36px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 1.04rem;
          font-weight: 500;
        }
        .nav-link:hover { color: #34BCD6; }
        .nav-btn {
          background: none;
          color: #FFB14B;
          border: 2px solid #FFB14B;
          border-radius: 7px;
          font-size: 1.02rem;
          font-weight: 600;
          padding: 8px 22px;
          cursor: pointer;
          margin-left: 16px;
        }
        .nav-hamburger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 12px;
          display: none;
          flex-direction: column;
          gap: 5px;
        }
        .nav-bar {
          width: 28px;
          height: 3px;
          border-radius: 2px;
          background: #FFB14B;
        }
        .nav-mobile-menu {
          position: absolute;
          top: ${NAVBAR_HEIGHT}px;
          left: 24px;
          background: #222;
          border-radius: 12px;
          padding: 24px 32px;
          box-shadow: 0 3px 16px rgba(0,0,0,0.25);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .hero-btn {
         position: relative;
  z-index: 2
  background: none;
  color: #FFB14B;
  border: 2px solid #FFB14B;
  border-radius: 8px;
  padding: 14px 34px;
  font-size: 1.09rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 0;
}

.hero-btn:hover {
  background: #444; /* grey background */
  border-color: #34BCD6; /* red border */
  color: #fff; /* optional: make text white for contrast */
}

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }
        .hero-section-bg {
          min-height: 100vh;
          width: 100vw;
          background: linear-gradient(120deg, #232323 60%, #1c1c1c 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          overflow: hidden;
          box-sizing: border-box;
        }
        .hero-container {
  max-width: 960px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* FIX: pad top for navbar! */
  padding: ${NAVBAR_HEIGHT + 80}px 32px 0 56px; /* ⬅ increased top padding */
}

        .hero-logo-row { margin-bottom: 38px; display: flex; align-items: center; }
        .hero-logo-orange { font-weight: 700; color: #FFB14B; font-size: 1.42rem; }
        .hero-logo-white { font-weight: 600; color: #fff; font-size: 1.42rem; margin-left: 6px; }
        .hero-headline {
          font-weight: 600; font-size: 2.7rem; margin: 0; color: #fff;
          line-height: 1.2; max-width: 640px; word-break: break-word;
          margin-left:-150px;
          margin-top:-100px;
        }
        .highlight-orange { color: #F7B14B; }
        .highlight-blue { color: #34BCD6; }
        .hero-subheading {
          margin-top: 24px; font-size: 1.07rem; color: #bdbdbd; font-weight: 400; max-width: 480px;
          margin-left:-150px;
        }
        .hero-btn-row { display: flex; gap: 20px; margin: 34px 0;
        margin-left:-150px; }
        .hero-btn {
          background: none; color: #FFB14B; border: 2px solid #FFB14B; border-radius: 8px;
          padding: 14px 34px; font-size: 1.09rem; font-weight: 500; cursor: pointer;
          transition: background 0.15s; margin: 0;
        }
        .hero-btn:hover { background: #FFB14B11; }
        .hero-image-row {
          width: 100vw; display: flex; justify-content: center; align-items: flex-end;
          margin-top: 38px; margin-bottom: 38px;
        }
        .hero-mockup-img {
          width: 1000px; border-radius: 15px; 
          // background: #191919;
          margin: -330px -360px 100px 50px; box-shadow: none; max-width: 100vw;
        }
        @media (max-width: 1200px) {
          .hero-mockup-img { width: 90vw; margin: -120px -220px 50px 20px; }
        }
        @media (max-width: 900px) {
          .hero-container { padding-left: 20px; padding-right: 20px; }
          .hero-headline { font-size: 2.16rem; }
          .hero-mockup-img { width: 80vw; margin: -70px -120px 30px 10px; }
        }
        @media (max-width: 600px) {
          .hero-container { padding-left: 12px; padding-right: 12px; padding-top: ${
            NAVBAR_HEIGHT + 12
          }px; }
          .hero-logo-row { margin-bottom: 24px; }
          .hero-headline { font-size: 1.32rem; max-width: 98vw;margin-left:15px;margin-top:0px;padding:2px; }
          .hero-subheading { font-size: 0.99rem; margin-top: 18px;margin-left:10px;         padding: 2px;}
          .hero-btn-row { flex-direction: column; gap: 10px; width: 100%; }
          .hero-btn { width: 90%; font-size: 1rem; padding: 12px 0;margin-left:170px }
          .hero-image-row { margin-top: 16px; margin-bottom: 16px; }
          .hero-mockup-img { width: 98vw; border-radius: 11px; margin: 0; }
            .nav-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 36px;
          width: 100%;
        }
        }
      `}</style>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-row">
          {/* <span className="nav-logo">E Cheque</span> */}
          <img
            src={logoIcon}
            alt="Echeque app mockups"
            className="logoIcon-img"
          />

          <span className="nav-title">Thank Pay</span>
          <div className="nav-links">{navLinks}</div>
          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="nav-bar"></div>
            <div className="nav-bar"></div>
            <div className="nav-bar"></div>
          </button>
        </div>
        {mobileMenuOpen && <div className="nav-mobile-menu">{navLinks}</div>}
      </nav>
      {/* HERO CONTENT */}
      <div className="hero-section-bg">
        <div className="hero-container">
          <h1 className="hero-headline">
            <span className="highlight-orange">Thank Pay</span>
            {" — The Future of Digital "}
            <span className="highlight-blue">Banking</span>
          </h1>
          <div className="hero-subheading">
            A secure, paperless platform to create cheques, track balances,
            manage deposits, send money, and analyze transactions — all in one
            intelligent app.
          </div>
          <div className="hero-btn-row">
            <button
              className="hero-btn"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/12Dna3MJF5vN6c3P_wbRzXSu553mPy6BS?usp=sharing",
                  "_blank"
                )
              }
            >
              Get App &rarr;
            </button>

            <button className="hero-btn" onClick={handleNav("#founders")}>
              Contact For Investment &rarr;
            </button>
          </div>
        </div>
        <div className="hero-image-row">
          <img
            src={mockup2}
            alt="App mockup"
            className="hero-mockup-img"
            style={{ width: "1200px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
