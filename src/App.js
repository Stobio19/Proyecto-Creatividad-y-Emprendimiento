import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Storage } from "./Pages/Storage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/About-us" element={<AboutUs />} />
          <Route path="/Storage" element={<Storage />} />
        </Route>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
