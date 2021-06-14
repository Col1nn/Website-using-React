import React from "react";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import "../styles/SocialProof.css";
import manImage from "../images/man.png";
import womanImage from "../images/woman.png";

const SocialProof = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-inner">
        <h1>Customers Testimonials</h1>
        <div className="testimonials-border"></div>
        <div className="testimonials-row">
          <div className="testimonials-col">
            <div className="testimonials-testimonial first-background">
              <img src={manImage} alt="" className="testimonials-img" />
              <div className="testimonials-name">Bruno</div>
              <div className="testimonials-stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore, molestiae, aliquid mollitia rem aspernatur quia in
                deleniti a asperiores nihil reiciendis nulla accusamus ullam!
              </p>
            </div>
          </div>

          <div className="testimonials-col">
            <div className="testimonials-testimonial second-background">
              <img src={womanImage} alt="" className="testimonials-img" />
              <div className="testimonials-name">Helene</div>
              <div className="testimonials-stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                quibusdam harum tempore suscipit. Iusto officiis cumque et
                voluptate! Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.
              </p>
            </div>
          </div>

          <div className="testimonials-col">
            <div className="testimonials-testimonial third-background">
              <img src={womanImage} alt="" className="testimonials-img" />
              <div className="testimonials-name">Melania</div>
              <div className="testimonials-stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex
                repudiandae hic et neque mollitia porro sint nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
