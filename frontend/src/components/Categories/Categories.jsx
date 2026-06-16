import { categories } from '../../data/categories';
import './Categories.css';

export default function Categories() {
  return (
    <section className="section categories-section" id="categories">
      <div className="container">
        <h2 className="section-title">Categories</h2>
        <div className="categories-grid">
          {categories.map(cat => (
            <div className="category-card" key={cat.id}>
              <div className="cat-icon">{cat.icon}</div>
              <h3 className="cat-name">{cat.name}</h3>
              <p className="cat-tagline">{cat.tagline}</p>
              <p className="cat-desc">{cat.description}</p>
              <a href="#" className="cat-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
