import { liveEvent, upcomingEvents, pastResults } from '../../data/events';
import './Competitions.css';

export default function Competitions() {
  return (
    <section className="section competitions" id="events">
      <div className="container">
        <p className="section-label">Competitions & Events</p>
        <div className="competitions-grid">

          {/* LIVE */}
          <div className="comp-col">
            <div className="comp-col-header">
              <h3>Live Now</h3>
              <span className="tag">LIVE</span>
            </div>
            <div className="live-card">
              <p className="live-event-name">{liveEvent.name}</p>
              <div className="bracket">
                {liveEvent.bracket.map((match, i) => (
                  <div className="bracket-match" key={i}>
                    <span className={match.winner === match.team1 ? 'winner' : ''}>{match.team1}</span>
                    <span className="vs">vs</span>
                    <span className={match.winner === match.team2 ? 'winner' : ''}>{match.team2}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* UPCOMING */}
          <div className="comp-col">
            <div className="comp-col-header"><h3>Upcoming</h3></div>
            <div className="upcoming-list">
              {upcomingEvents.map(ev => (
                <div className="upcoming-card" key={ev.id}>
                  <p className="upcoming-name">{ev.name}</p>
                  <div className="upcoming-meta">
                    <span>📅 {ev.date}</span>
                    <span>📍 {ev.location}</span>
                    <span className="cat-tag">{ev.category}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="#register" className="btn-primary" style={{ marginTop: '16px', display: 'inline-block' }}>Register</a>
          </div>

          {/* PAST */}
          <div className="comp-col">
            <div className="comp-col-header"><h3>Past Results</h3></div>
            <div className="past-list">
              {pastResults.map(r => (
                <div className="past-card" key={r.id}>
                  <p className="past-name">{r.name}</p>
                  <p className="past-sub">{r.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
