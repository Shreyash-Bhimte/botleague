import './AboutLeague.css';

const items = [
  { num: '1.', title: 'Structured Events',  desc: 'From one-off events to a year-round competitive season.' },
  { num: '2.', title: 'Digital Identity',   desc: 'Your professional robotics legacy tracked and verified.' },
  { num: '3.', title: 'National Ranking',   desc: 'Benchmark your skills against the best engineers in India.' },
  { num: '4.', title: 'Career Pathway',     desc: 'Training leads pathways into real-world industry opportunities.' },
];

export default function AboutLeague() {
  return (
    <section className="section about-league">
      <div className="container">
        <h2 className="section-title">What is BotLeague?</h2>
        <div className="about-grid">
          {items.map(it => (
            <div className="about-item" key={it.num}>
              <p className="about-num">{it.num}</p>
              <h3 className="about-item-title">{it.title}</h3>
              <p className="about-item-desc">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
