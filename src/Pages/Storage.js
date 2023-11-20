import React, { useState } from "react";
import "./Storage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const Storage = () => {
  const initialPasswords = [
    "YourPassword1",
    "YourPassword2",
    "YourPassword3",
    "YourPassword4",
    "YourPassword5",
  ];

  const [passwords, setPasswords] = useState(initialPasswords);
  const [showPasswords, setShowPasswords] = useState(
    new Array(initialPasswords.length).fill(false)
  );

  const togglePasswordVisibility = (index) => {
    const newShowPasswords = [...showPasswords];
    newShowPasswords[index] = !newShowPasswords[index];
    setShowPasswords(newShowPasswords);
  };

  return (
    <div>
      <h1 className="title-storage text-align-center">Your Data!</h1>
      <div className="storage-content">
        {passwords.map((password, index) => (
          <div className="storage-item" key={index}>
            <h2 className="storage-item-title">Username</h2>
            <span className="user-account">example@outlook.com</span>
            <span>
              Password:
              <FontAwesomeIcon
                className="icon-eye"
                icon={showPasswords[index] ? faEye : faEyeSlash}
                onClick={() => togglePasswordVisibility(index)}
              />
              <input
                className="input-password"
                type={showPasswords[index] ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  const newPasswords = [...passwords];
                  newPasswords[index] = e.target.value;
                  setPasswords(newPasswords);
                }}
                style={{ width: `${password.length + 1}ch` }}
                readOnly
              ></input>
            </span>
            <p className="storage-item-text">
              Hi!, My name is Samuel and I am a programmer, I like too much to
              eat pizza and read a lot!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storage;
