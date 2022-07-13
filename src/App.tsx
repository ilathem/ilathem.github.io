import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./styles/app.scss"
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Container from "./components/Container";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
