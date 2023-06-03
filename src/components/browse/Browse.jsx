import React from 'react';
import './browse.css';
import book1 from "../../assets/book1.jpg";

const Browse = () => {
  return (
    <div className="browse-container"> 
      <div id="browse">
        <div className="browseContainer">
          <div className="Bg">
            <div className="overlay"></div>
            <div className="book-container">

              <div className="book">
                <img src={book1} alt="Book 1" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">The Da Vinci Code</h3>
                  <p className="book-author">Brown Dan</p>
                  <div className="book-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                </div>
              </div>

              <div className="book">
                <img src={book1} alt="Book 2" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">Harry Potter and the Deathly Hallows</h3>
                  <p className="book-author">Rowling, J.K.</p>
                  <div className="book-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                  </div>
                </div>
              </div>

              <div className="book">
                <img src={book1} alt="Book 3" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">Harry Potter and the Philosopher's Stone</h3>
                  <p className="book-author">Rowling, J.K.</p>
                  <div className="book-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                  </div>
                </div>
              </div>

              <div className="book">
                <img src={book1} alt="Book 4" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">	Harry Potter and the Order of the Phoenix</h3>
                  <p className="book-author">Rowling, J.K.</p>
                  <div className="book-rating">
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                  </div>
                </div>
              </div>

              <div className="book">
                <img src={book1} alt="Book 5" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">Fifty Shades of Grey</h3>
                  <p className="book-author">James E. L.</p>
                  <div className="book-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                </div>
              </div>
 
              <div className="book">
                <img src={book1} alt="Book 6" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">Harry Potter and the Goblet of Fire</h3>
                  <p className="book-author">Rowling, J.K.</p>
                  <div className="book-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                  </div>
                </div>
              </div>
 
              <div className="book">
                <img src={book1} alt="Book 7" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">Harry Potter and the Chamber of Secrets</h3>
                  <p className="book-author">Rowling, J.K.</p>
                  <div className="book-rating">
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                  </div>
                </div>
              </div>

              <div className="book">
                <img src={book1} alt="Book 8" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">Harry Potter and the Prisoner of Azkaban</h3>
                  <p className="book-author">Rowling, J.K.</p>
                  <div className="book-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                  </div>
                </div>
              </div>
 
              <div className="book">
                <img src={book1} alt="Book 9" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">Angels and Demons</h3>
                  <p className="book-author">Brown Dan</p>
                  <div className="book-rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                  </div>
                </div>
              </div>
    
              <div className="book">
                <img src={book1} alt="Book 10" className="book-image" />
                <div className="book-content">
                  <h3 className="book-title">	Harry Potter and the Half-blood Prince</h3>
                  <p className="book-author">Rowling, J.K.</p>
                  <div className="book-rating">
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                    <span className="star">&#9734;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browse;
