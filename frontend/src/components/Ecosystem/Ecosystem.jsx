import { useState } from 'react';
import './Ecosystem.css';

const API_URL = 'https://botleague-server.onrender.com';

const roles = [
  { id: 'judge',     title: 'Become a Judge' },
  { id: 'volunteer', title: 'Volunteer' },
  { id: 'member',    title: 'Community Member' },
];

export default function Ecosystem() {
  const [forms, setForms] = useState({
    judge:     { name: '', location: '', email: '' },
    volunteer: { name: '', location: '', email: '' },
    member:    { name: '', location: '', email: '' },
  });

  const [status, setStatus] = useState({
    judge: null, volunteer: null, member: null,
  });

  const handleChange = (role, field, value) => {
    setForms(prev => ({
      ...prev,
      [role]: { ...prev[role], [field]: value }
    }));
  };

  const handleSubmit = async (role) => {
    const { name, location, email } = forms[role];

    if (!name || !location || !email) {
      setStatus(prev => ({ ...prev, [role]: 'error' }));
      return;
    }

    try {
      setStatus(prev => ({ ...prev, [role]: 'loading' }));

      const res = await fetch(`${API_URL}/ecosystem/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location, email, role }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(prev => ({ ...prev, [role]: 'success' }));
        setForms(prev => ({
          ...prev,
          [role]: { name: '', location: '', email: '' }
        }));
      } else {
        setStatus(prev => ({ ...prev, [role]: data.detail || 'error' }));
      }
    } catch (err) {
      setStatus(prev => ({ ...prev, [role]: 'error' }));
    }
  };

  return (
    <section className="section ecosystem-section" id="ecosystem">
      <div className="container">
        <h2 className="section-title">Join the Ecosystem</h2>
        <div className="ecosystem-grid">
          {roles.map(role => (
            <div className="eco-card" key={role.id}>
              <h3 className="eco-title">{role.title}</h3>
              <div className="eco-form">
                {['name', 'location', 'email'].map(field => (
                  <input
                    key={field}
                    className="eco-input"
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={forms[role.id][field]}
                    onChange={e => handleChange(role.id, field, e.target.value)}
                  />
                ))}

                <button
                  className="btn-primary eco-btn"
                  onClick={() => handleSubmit(role.id)}
                  disabled={status[role.id] === 'loading'}
                >
                  {status[role.id] === 'loading' ? 'Submitting...' : 'Sign Up'}
                </button>

                {status[role.id] === 'success' && (
                  <p className="eco-msg success">✅ Registered successfully!</p>
                )}
                {status[role.id] === 'error' && (
                  <p className="eco-msg error">❌ Something went wrong. Try again.</p>
                )}
                {status[role.id] && status[role.id] !== 'success' && status[role.id] !== 'error' && status[role.id] !== 'loading' && (
                  <p className="eco-msg error">❌ {status[role.id]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}