import React from 'react';
import './newArrival.css';
import p2 from "../../assets/p2.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

const NewArrival = () => {
  return (
    <section id="newArrival">
      <div className="headerContainer">
        <div className="Bg" style={{ backgroundImage: `url(${p2})` }}>
          <div className="overlay"></div>
          <div className="card-container">
            <div className="card">
              <img src={card1} alt="Card 1" className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">ZINES & POSTERS</h3>
                <p className="card-description"></p>
              </div>
            </div>
            <div className="card">
              <img src={card2} alt="card 2" className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">ZINES & POSTERS</h3>
                <p className="card-description"></p>
              </div>
            </div>
            <div className="card">
              <img src={card3} alt="Card 3" className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">GRAPHIC NOVELS</h3>
                <p className="card-description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;