import { journeySteps } from '../../data/journey';
import './UserJourney.css';

export default function UserJourney() {
  return (
    <section className="section user-journey">
      <div className="container">
        <p className="section-label">User Journey</p>
        <h2 className="section-title">Your Path to the League</h2>
        <p className="journey-sub">Leave sport / enjoy great sport / awesome sport</p>

        <div className="journey-steps">
          {journeySteps.map((s, i) => (
            <div className="journey-step" key={s.step}>
              <div className="step-icon">{s.icon}</div>
              <div className="step-connector" style={{ display: i === journeySteps.length - 1 ? 'none' : 'block' }} />
              <p className="step-num">Step {s.step}</p>
              <p className="step-title">{s.title}</p>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
