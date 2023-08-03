import React, { useState } from "react";

import "../styles/twelve.css";

const Twelve = () => {
  const [background, setBackground] = useState("white");
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const toggleBackground = () => {
    if(background==='white'){
      setBackground("lightgray");
    } else if(background==='lightgray'){
      setBackground('white')
    }
  };

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      console.log("Submitted:", inputValue);
      setError(null);
      setShowModal(true);
      setInputValue('')
    } else {
      setError("Please enter something before submitting!");
    }
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container" style={{backgroundColor:background }}>
      <h1 className="title">React App</h1>

      <button className="toggle-btn" onClick={toggleBackground}>
        Toggle Background
      </button>

      <p className="counter">Counter: {counter}</p>
      <button className="increment-btn" onClick={incrementCounter}>
        Increment Counter
      </button>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something"
        />
        <button
          className="submit-btn"
          type="submit"
        >
          Submit
        </button>
      </form>

      <p className="error-message">{error}</p>

      {showModal &&(
        <div className="showModal">
          <div className="modalContent">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Thanks for submitting your response!</p>
          </div>
        </div>
      )} 
    </div>
  );
};

export default Twelve;
