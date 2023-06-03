import React, { useEffect, useState } from "react";
import "./home.css";
import p1 from "../../assets/p1.png";

const Home = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isScrolledToTop, setIsScrolledToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
      const isScrolledToNextPage = scrollPercentage > 0;

      setIsScrolledToTop(scrollY === 0);
      setIsHomePage(!isScrolledToNextPage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={`headerContainer ${isScrolledToTop ? "visible" : "hidden"}`}>
        <div className="Bg">
          <img src={p1} alt="BgImage" />
        </div>
        <div className={`leftText ${isHomePage ? "fadeIn" : "fadeOut"}`}>
          <div>
            <span className="tagline">BookVerse</span>
            <p className="motto">
              <span>"Unlock the Power of Books:</span>
              <br />
              <span> Your Ultimate Library Solution!"</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
