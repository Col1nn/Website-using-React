import React, { useState } from "react";
import "../styles/Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [text, setText] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handleTopic = (e) => setTopic(e.target.value);
  const handleText = (e) => setText(e.target.value);

  const submitForm = (e) => {
    if (email.length === 0) {
      alert("You need to write an e-mail!");
      if (topic.length === 0) {
        alert("You need to write a topic");
      }
      if (text.length === 0) {
        alert("Write a message!");
      }
      e.preventDefault();
    } else {
      alert("Form has been send!");
      return;
    }
  };
  return (
    <>
      <form className="form-container">
        <h3 className="form-container-heading">Contact Us</h3>
        <p className="form-container-text">
          Any question or remarks? Just write us a message!
        </p>
        <input
          type="text"
          placeholder="Your Email"
          className="form-container-inputEmail"
          onChange={handleEmail}
        />

        <input
          type="text"
          placeholder="Topic"
          className="form-container-inputTopic"
          onChange={handleTopic}
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Insert your message here..."
          className="form-container-textarea"
          onChange={handleText}
        ></textarea>
        <button
          type="submit"
          className="form-container-button btn"
          onClick={submitForm}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
