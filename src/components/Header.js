import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Shubodeep</h1>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#work-experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
