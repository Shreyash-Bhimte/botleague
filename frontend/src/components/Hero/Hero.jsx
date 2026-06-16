import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="section-label">India's Ultimate</p>
        <h1 className="hero-title">ROBOTICS<br />ARENA</h1>
        <p className="hero-sub">
          Build. Compete. Rank. The National Ecosystem for Robotics Arena.
        </p>
        <div className="hero-actions">
          <a href="#register" className="btn-primary">Create Account</a>
          <a href="#events" className="btn-outline">Explore Events</a>
        </div>
      </div>
    </section>
  );
}
