import { advantages } from '../../data/advantages';
import './Advantages.css';

export default function Advantages() {
  return (
    <section className="section advantages-section">
      <div className="container advantages-inner">
        <div className="advantages-left">
          <p className="section-label">Why Register?</p>
          <h2 className="section-title">The League Advantage</h2>
          <div className="advantages-list">
            {advantages.map(a => (
              <div className="advantage-item" key={a.id}>
                <span className="adv-icon">{a.icon}</span>
                <div>
                  <h4 className="adv-title">{a.title}</h4>
                  <p className="adv-desc">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="leaderboard-card">
          <p className="lb-label">Leaderboard</p>
          <div className="lb-score">508754</div>
          <div className="lb-rows">
            {[1,2,3,4,5].map(i => (
              <div className="lb-row" key={i}>
                <span className="lb-rank">#{i}</span>
                <span className="lb-name">Player Name</span>
                <span className="lb-pts">{(600000 - i * 40000).toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
