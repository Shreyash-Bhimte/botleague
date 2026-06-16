import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="navbar-logo">
          <span className="logo-bot">BOT</span>
          <span className="logo-league">LEAGUE</span>
          <span className="logo-bolt">⚡</span>
        </a>

        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#events">Events</a></li>
          <li><a href="#categories">Programs</a></li>
          <li><a href="#ecosystem">Community</a></li>
          <li><a href="#sponsors">Ranks</a></li>
        </ul>

        <div className="navbar-actions">
          <a href="#login" className="btn-outline">Login</a>
          <a href="#register" className="btn-primary">Register Now</a>
        </div>
      </div>
    </nav>
  );
}
