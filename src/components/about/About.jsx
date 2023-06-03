import React from "react";
import "./about.css";
import bookverseImage from "../../assets/bookverse.png";
import thankYouImage from "../../assets/thankyou.png";

const About = () => {
  return (
    <section id="about">
      <div className="content">
        <div className="left-side">
          <h2>About Bookverse</h2>
          <p>
            Bookverse is an online platform dedicated to book lovers, where you
            can discover, explore, and discuss your favorite books. We believe in
            the power of literature to inspire, educate, and entertain. Our
            mission is to connect readers with their next great read and foster a
            vibrant community of book enthusiasts.
          </p>
          <p>
            With Bookverse, you can browse through a vast collection of books
            across various genres, read reviews, and find recommendations from
            fellow readers. You can also create your own reading lists, track your
            progress, and join book clubs to engage in meaningful discussions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
