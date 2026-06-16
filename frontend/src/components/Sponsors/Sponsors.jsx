import { sponsors } from '../../data/sponsors';
import './Sponsors.css';

export default function Sponsors() {
  return (
    <section className="section sponsors-section" id="sponsors">
      <div className="container">
        <h2 className="section-title">Sponsors</h2>
        <div className="sponsors-grid">
          {sponsors.map(s => (
            <div className="sponsor-logo" key={s.id}>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
