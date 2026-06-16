import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-bot">BOT</span>
          <span className="logo-league">LEAGUE</span>
          <span className="logo-bolt">⚡</span>
        </div>

        <div className="footer-links">
          <p className="footer-heading">Quick Links</p>
          <ul>
            <li><a href="#events">Events</a></li>
            <li><a href="#categories">Programs</a></li>
            <li><a href="#ecosystem">Community</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <p className="footer-heading">Social Media</p>
          <div className="social-icons">
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BotLeague. All rights reserved.</p>
      </div>
    </footer>
  );
}
