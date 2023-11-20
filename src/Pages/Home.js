import React, { useState } from "react";
import "./Home.css";
import Modal from "react-modal";

export const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [passwordLength, setPasswordLength] = useState("");
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const togglePopUp = () => {
    setisOpen(!isOpen);
  };

  const handleAnnouncement = () => {
    if (phrase.trim() !== "" && passwordLength.trim() !== "") {
      setShowAnnouncement(true);
      setTimeout(() => {
        setShowAnnouncement(false);
      }, 6000);
    } else {
      alert("¡Please, fill the fields!");
    }
  };

  return (
    <div className="home-content">
      <div className="div-main-form">
        <h1>Try Us!</h1>
        <div className="div-main-form-content">
          <h2>Enter Your Data!</h2>
          <form className="main-form">
            <label>Enter your phrase!</label>
            <input
              placeholder="Phrase"
              required

            ></input>
            <label>Number greater than 10</label>
            <input
              placeholder="Number..."
              required
              type="number"
     
            ></input>
            <button
              onClick={() => {
                togglePopUp();
              }}
              type="submit"
            >
              Send
            </button>
            {showAnnouncement && (
              <Modal isOpen={showAnnouncement} className="modal-content">
                <div className="modal-content-div">
                  <h2>Modal Window</h2>
                  <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, quod.
                  </div>
                  <button className="close-modal" onClick={togglePopUp}>
                    Close
                  </button>
                </div>
              </Modal>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
