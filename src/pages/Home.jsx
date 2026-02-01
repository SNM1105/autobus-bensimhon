import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Home.css'

function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const { t } = useLanguage()

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{t('home.hero.title')} <span>{t('home.hero.titleHighlight')}</span> {t('home.hero.titleEnd')}</h1>
            <p>{t('home.hero.description')}</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">{t('home.hero.getQuote')}</Link>
              <Link to="/services" className="btn btn-outline">{t('home.hero.ourServices')}</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/autobus-bensimhon-type.png" alt="School Bus Transportation" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">17+</span>
              <span className="stat-label">{t('home.stats.years')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">{t('home.stats.available')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Multi-City</span>
              <span className="stat-label">{t('home.stats.coverage')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">{t('home.stats.safety')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('home.values.title')}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              {t('home.values.subtitle')}
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <h3>{t('home.values.safety.title')}</h3>
              <p>{t('home.values.safety.description')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>{t('home.values.reliability.title')}</h3>
              <p>{t('home.values.reliability.description')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>{t('home.values.loyalty.title')}</h3>
              <p>{t('home.values.loyalty.description')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>{t('home.values.community.title')}</h3>
              <p>{t('home.values.community.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview bg-light">
        <div className="container">
          <div className="services-content">
            <div className="services-text">
              <h2 className="section-title">{t('home.services.title')}</h2>
              <p>{t('home.services.description')}</p>
              <ul className="services-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {t('home.services.schoolRoutes')}
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {t('home.services.charter')}
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {t('home.services.fieldTrips')}
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {t('home.services.afterSchool')}
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {t('home.services.specialEvents')}
                </li>
              </ul>
              <Link to="/services" className="btn btn-secondary">{t('home.services.viewAll')}</Link>
            </div>
            <div className="services-image">
              <div className="services-image-card">
                <div className="eco-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAD124" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                  <span>{t('home.services.ecoBadge')}</span>
                </div>
                <p>{t('home.services.ecoDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('home.faq.title')}</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              {t('home.faq.subtitle')}
            </p>
          </div>
          <div className="faq-list">
            {faqKeys.map((key, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{t(`home.faq.questions.${key}.question`)}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="faq-icon"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="faq-answer">
                  <p>{t(`home.faq.questions.${key}.answer`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="follow-us-section">
        <div className="container">
          <div className="follow-us-content text-center">
            <h2>{t('home.followUs.title')}</h2>
            <p>{t('home.followUs.description')}</p>
            <div className="social-buttons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.description')}</p>
            <Link to="/contact" className="btn btn-primary">{t('home.cta.button')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
