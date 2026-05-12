import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

function About() {
  const { t } = useLanguage()

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>{t('about.title')}</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="content-grid">
            <div className="text-content">
              <h2>{t('about.mission')}</h2>
              <p className="large-text">{t('about.missionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do It */}
      <section className="section why-we-do-it bg-light">
        <div className="container">
          <h2 className="section-title text-center">{t('about.values')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">1</div>
              <h3>{t('about.quality')}</h3>
              <p>{t('about.qualityText')}</p>
            </div>
            <div className="value-card">
              <div className="value-number">2</div>
              <h3>{t('about.simplicity')}</h3>
              <p>{t('about.simplicityText')}</p>
            </div>
            <div className="value-card">
              <div className="value-number">3</div>
              <h3>{t('about.service')}</h3>
              <p>{t('about.serviceText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section what-we-offer">
        <div className="container">
          <h2 className="section-title text-center">What We Offer</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <h3>✓ Color-Coded Filters</h3>
              <p>Easy to identify the right filter type for your home</p>
            </div>
            <div className="offer-card">
              <h3>✓ Quality Products</h3>
              <p>All filters meet or exceed industry standards</p>
            </div>
            <div className="offer-card">
              <h3>✓ Fast Delivery</h3>
              <p>Get your filters delivered to your door quickly</p>
            </div>
            <div className="offer-card">
              <h3>✓ Expert Support</h3>
              <p>Friendly team ready to answer your questions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Types Info */}
      <section className="section filter-info bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Filter Types</h2>
          <div className="filters-info-grid">
            <div className="filter-info-card">
              <div className="filter-color" style={{ backgroundColor: '#F5F5F5', border: '2px solid #ddd' }}></div>
              <h4>Standard Filter</h4>
              <p>Basic dust protection. Budget-friendly choice for general air filtering.</p>
              <span className="price">From $19.99</span>
            </div>
            <div className="filter-info-card">
              <div className="filter-color" style={{ backgroundColor: '#87CEEB' }}></div>
              <h4>Pleated Filter</h4>
              <p>Improved filtration with more surface area for better air quality.</p>
              <span className="price">From $29.99</span>
            </div>
            <div className="filter-info-card">
              <div className="filter-color" style={{ backgroundColor: '#90EE90' }}></div>
              <h4>HEPA/Allergen Filter</h4>
              <p>Premium allergen capture. Perfect for those with allergies or respiratory sensitivity.</p>
              <span className="price">From $39.99</span>
            </div>
            <div className="filter-info-card">
              <div className="filter-color" style={{ backgroundColor: '#FFD700' }}></div>
              <h4>Electrostatic Filter</h4>
              <p>Advanced technology with maximum efficiency. Our top-of-the-line option.</p>
              <span className="price">From $44.99</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Shop our selection of premium furnace air filters today.</p>
          <div className="cta-buttons">
            <Link to="/products" className="btn btn-primary">Shop Filters</Link>
            <Link to="/contact" className="btn btn-outline">Questions?</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
