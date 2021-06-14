import React, { useEffect, useState } from "react";
import "../styles/FAQsSection.css";
import people from "../images/people.jpg";
import baggage from "../images/baggage.jpg";
import trip from "../images/trip.jpg";

const FAQsSesction = () => {
  const [activeElement, setActiveElement] = useState(0);
  const timeChange = 4000;
  const images = [people, baggage, trip];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((activeElement) => {
        if (activeElement + 1 > images.length - 1) {
          return 0;
        } else {
          return activeElement + 1;
        }
      });
    }, timeChange);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="faq-container">
      <div className="faq-inner">
        <h1>FaQ Section</h1>
        <div className="faq-images">
          <img
            src={`${images[activeElement]}`}
            alt="images"
            className="faq-images"
          />
        </div>
        <div className="faq-row">
          <div className="faq-col">
            <div className="faq-faq">
              <div className="faq-topic">
                1) Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore, molestiae, aliquid mollitia rem aspernatur quia in
                deleniti a asperiores nihil reiciendis nulla accusamus ullam!
              </p>
            </div>
          </div>
          <div className="faq-col">
            <div className="faq-faq">
              <div className="faq-topic">2) Lorem ipsum, dolor.</div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore, molestiae, aliquid mollitia rem aspernatur quia in
                deleniti a asperiores nihil reiciendis nulla accusamus ullam!
              </p>
            </div>
          </div>
          <div className="faq-col">
            <div className="faq-faq">
              <div className="faq-topic">
                3) Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore, molestiae, aliquid mollitia rem aspernatur quia in
                deleniti a asperiores nihil reiciendis nulla accusamus ullam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsSesction;
