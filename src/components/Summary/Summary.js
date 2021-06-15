import React, { useState } from "react";
import "../styles/Summary.css";
import { AiFillStar } from "react-icons/ai";

const Summary = () => {
  const [subscription, setSubscription] = useState("");

  const handleSubscription = (e) => setSubscription(e.target.value);
  return (
    <div className="summary-container">
      <h2 className="summary-team border">We are the TEAM</h2>
      <p className="summary-description">
        Our team is a group of enthusiats of travelling and <br /> experts of
        tourism. We will help you plan, book and <br /> spend your holiday most
        comfortably.
      </p>
      <div className="summary-values">
        <h3>Our values:</h3>
        <p>
          <AiFillStar className="summary-item" /> Quality
        </p>
        <p>
          <AiFillStar className="summary-item" /> Safety
        </p>
        <p>
          <AiFillStar className="summary-item" /> Creativity
        </p>
        <p>
          <AiFillStar className="summary-item" /> Location
        </p>
        <p>
          <AiFillStar className="summary-item" /> Availability of services
        </p>
      </div>

      <div className="summary-newsletter">
        <p className="summary-newsletter-description">
          Wanna know about latest offers and news ? <br />
          Jump into our newsletter!
          <div className="summary-subscription">
            <input
              type="text"
              placeholder="Your Email"
              className="summary-subscription-input"
              onChange={handleSubscription}
            />
            <button type="submit" className="summary-subscription-button">
              Subscribe
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Summary;
