import React from "react";
import "./Nav.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="link-navbar">HOME</a>
      <a href="#imc" className="link-navbar">IMC</a>
      <a href="#contato" className="link-navbar">CONTATAR INSTRUTOR</a>
    </nav>
  );
}

