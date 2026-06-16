import { disciplines } from '../../data/disciplines';
import './Disciplines.css';

export default function Disciplines() {
  return (
    <section className="section disciplines-section">
      <div className="container">
        <p className="section-label">Sports</p>
        <h2 className="section-title">Competition Disciplines</h2>
        <div className="disciplines-grid">
          {disciplines.map(d => (
            <div className="discipline-card" key={d.id}>
              <div className="disc-emoji">{d.emoji}</div>
              <p className="disc-name">{d.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
