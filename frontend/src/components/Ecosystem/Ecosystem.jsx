import './Ecosystem.css';

const roles = [
  { id: 1, title: 'Become a Judge',     fields: ['Name', 'Location', 'Email'] },
  { id: 2, title: 'Volunteer',          fields: ['Name', 'Location', 'Email'] },
  { id: 3, title: 'Community Member',   fields: ['Name', 'Location', 'Email'] },
];

export default function Ecosystem() {
  return (
    <section className="section ecosystem-section" id="ecosystem">
      <div className="container">
        <h2 className="section-title">Join the Ecosystem</h2>
        <div className="ecosystem-grid">
          {roles.map(role => (
            <div className="eco-card" key={role.id}>
              <h3 className="eco-title">{role.title}</h3>
              <div className="eco-form">
                {role.fields.map(f => (
                  <input key={f} className="eco-input" type="text" placeholder={f} />
                ))}
                <button className="btn-primary eco-btn">Sign Up</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
