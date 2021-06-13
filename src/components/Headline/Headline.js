import React from "react";
import video from "../videos/video.mp4";
import "../styles/Headline.css";
import TypeWriter from "typewriter-effect";

const AboutUs = () => {
  return (
    <div className="aboutUs-container">
      <video src={video} loop muted></video>
      <h1>
        <TypeWriter
          onInit={(typewriter) => {
            typewriter.typeString("Ready for your best holiday?").start();
          }}
        />
      </h1>
      <button className="btn-contact">Let's get in touch!</button>
    </div>
  );
};

export default AboutUs;
