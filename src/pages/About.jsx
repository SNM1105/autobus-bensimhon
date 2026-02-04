import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

function About() {
  const [openFaq, setOpenFaq] = useState(null)
  const { t } = useLanguage()

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>{t('about.hero.title')}</h1>
          <p>{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section company-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>{t('about.story.title')}</h2>
              <p>{t('about.story.p1')}</p>
              <p>{t('about.story.p2')}</p>
            </div>
            <div className="story-image">
              <div className="story-card">
                <div className="story-card-inner">
                  <div className="year-badge">
                    <span className="year-label">EST.</span>
                    <span className="year-number">2007</span>
                  </div>
                  <div className="location-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{t('about.story.cardTitle')}</span>
                  </div>
                  <p className="story-card-description">{t('about.story.cardDescription')}</p>
                </div>
                <div className="story-card-decoration">
                  <div className="decoration-circle"></div>
                  <div className="decoration-circle"></div>
                  <div className="decoration-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision bg-light">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3>{t('about.mission.title')}</h3>
              <p>{t('about.mission.description')}</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3>{t('about.mission.visionTitle')}</h3>
              <p>{t('about.mission.visionDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section core-values">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('about.values.title')}</h2>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <div className="value-content">
                <h3>{t('about.values.safety.title')}</h3>
                <p>{t('about.values.safety.description')}</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <div className="value-content">
                <h3>{t('about.values.punctuality.title')}</h3>
                <p>{t('about.values.punctuality.description')}</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <div className="value-content">
                <h3>{t('about.values.goodPrices.title')}</h3>
                <p>{t('about.values.goodPrices.description')}</p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">04</div>
              <div className="value-content">
                <h3>{t('about.values.integrity.title')}</h3>
                <p>{t('about.values.integrity.description')}</p>
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

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>{t('about.cta.title')}</h2>
          <p>{t('about.cta.description')}</p>
          <Link to="/contact" className="btn btn-primary">{t('about.cta.button')}</Link>
          
          <div className="follow-us-content" style={{ marginTop: '50px' }}>
            <p style={{ marginBottom: '20px', fontSize: '1rem' }}>{t('home.followUs.title')}</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
