import React from "react";
import './home.css'
import p1 from "../../assets/p1.png";

const Home = () => {
  return (
    <header>
      <div className='headerContainer'>
        <div className="Bg">
          <img src={p1} alt="BgImage" />
        </div>
      </div>
    </header>
  );
};

export default Home;
