import React, { useState } from "react";
import "./Home.css";
import Modal from "react-modal";

export const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [passwordLength, setPasswordLength] = useState("");
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [password, setPassword] = useState(""); 

  const togglePopUp = () => {
    setisOpen(isOpen);
    setShowAnnouncement(false);
  };

  const handleAnnouncement = async (event) => {
    if (phrase.trim() !== "" && passwordLength.trim() !== "") {
      event.preventDefault();
      fetch("https://generador-de-contrasenas.onrender.com/GENERAR_CONTRASENA", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          frase: phrase,
          longitud: passwordLength,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setPassword(data);
        }
        );
      setShowAnnouncement(true);
      setTimeout(() => {
        setShowAnnouncement(false);
      }, 10000);
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
          <form className="main-form"
          onSubmit={(event) => {
            handleAnnouncement(event);
          }
          }
          >
            <label>Enter your phrase!</label>
            <input
              placeholder="Phrase"
              required
              onChange={(event) => {
                const phrase = event.target.value;
                const spaceCount = (phrase.match(/ /g) || []).length; // Cuenta los espacios en la frase
                if (spaceCount <= 2) {
                  setPhrase(phrase); // Actualiza el estado si hay 2 o menos espacios
                }
              }}
            ></input>
            <label>Number greater than 14</label>
            <input
              placeholder="Number..."
              required
              type="number"
              min = "14"
              onChange={(event) => setPasswordLength(event.target.value)}
            ></input>
            <button type="submit">
              Send
            </button>
            {showAnnouncement && (
              <Modal isOpen={showAnnouncement} className="modal-content">
                <div className="modal-content-div">
                  <h2>YOUR SECURITY PASSWORD</h2>
                  <div className="content">
                    <p>{password}</p>
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
