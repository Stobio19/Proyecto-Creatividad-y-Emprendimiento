import React, { useState } from "react";
import "./Home.css";
import Modal from "react-modal";

// Función para generar la contraseña a partir de la frase y longitud proporcionada
const generatePassword = (phrase, length) => {
  let passwordBase = phrase.replace(/\s+/g, ''); // Eliminar espacios en blanco
  while (passwordBase.length < length) {
    passwordBase += passwordBase; // Repetir la frase hasta alcanzar la longitud deseada
  }
  return passwordBase.substring(0, length); // Recortar a la longitud exacta
};

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla si el modal está abierto
  const [phrase, setPhrase] = useState(""); // Almacena la frase proporcionada
  const [passwordLength, setPasswordLength] = useState(""); // Almacena la longitud de la contraseña
  const [showAnnouncement, setShowAnnouncement] = useState(false); // Controla si se muestra el modal
  const [password, setPassword] = useState(""); // Almacena la contraseña generada

  const togglePopUp = () => {
    setIsOpen(!isOpen);  // Alterna entre abrir y cerrar el modal
    setShowAnnouncement(false);  // Oculta el anuncio al cerrar el modal
  };

  const handleAnnouncement = (event) => {
    event.preventDefault();
    if (phrase.trim() !== "" && passwordLength.trim() !== "" && Number(passwordLength) > 14) {
      // Generar la contraseña internamente
      const generatedPassword = generatePassword(phrase, Number(passwordLength));
      setPassword(generatedPassword); // Actualizar el estado con la contraseña generada
      setShowAnnouncement(true); // Mostrar el modal
      setIsOpen(true); // Asegurarse de que el modal se abra
    } else {
      alert("¡Please, fill the fields and ensure password length is greater than 14!");
    }
  };

  return (
    <div className="home-content">
      <div className="div-main-form">
        <h1>Try Us!</h1>
        <div className="div-main-form-content">
          <h2>Enter Your Data!</h2>
          <form className="main-form" onSubmit={handleAnnouncement}>
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
            />
            <label>Number greater than 14</label>
            <input
              placeholder="Number..."
              required
              type="number"
              min="14"
              onChange={(event) => setPasswordLength(event.target.value)}
            />
            <button type="submit">
              Send
            </button>
            {showAnnouncement && (
              <Modal isOpen={isOpen} onRequestClose={togglePopUp} className="modal-content">
                <div className="modal-content-div">
                  <h2>YOUR SECURITY PASSWORD</h2>
                  <div className="content">
                    <p>{password}</p> {/* Aquí se muestra la contraseña generada */}
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
