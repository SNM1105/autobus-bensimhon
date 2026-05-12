import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Home.css'

function Home() {
  const { t } = useLanguage()

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero hero-fullscreen">
        <div className="hero-background">
          <div className="hero-gradient"></div>
        </div>
        <div className="container">
          <div className="hero-content hero-centered">
            <h1>
              {t('home.hero.title')}
              <span className="highlight">{t('home.hero.titleHighlight')}</span>
              {t('home.hero.titleEnd')}
            </h1>
            <p className="hero-description">{t('home.hero.description')}</p>
            <div className="hero-buttons">
              <Link to="/products" className="btn btn-primary">{t('home.hero.getQuote')}</Link>
              <Link to="/about" className="btn btn-outline-light">{t('home.hero.ourServices')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section why-choose-home">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('home.values.title')}</h2>
            <p className="section-subtitle">{t('home.values.subtitle')}</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>{t('home.values.safety.title')}</h3>
              <p>{t('home.values.safety.description')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚙️</div>
              <h3>{t('home.values.reliability.title')}</h3>
              <p>{t('home.values.reliability.description')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚚</div>
              <h3>{t('home.values.loyalty.title')}</h3>
              <p>{t('home.values.loyalty.description')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📞</div>
              <h3>{t('home.values.community.title')}</h3>
              <p>{t('home.values.community.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section products-preview bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('home.products.title')}</h2>
            <p className="section-subtitle">{t('home.products.description')}</p>
          </div>
          <div className="filters-preview">
            <div className="filter-preview-card">
              <div className="preview-color" style={{ backgroundColor: '#F5F5F5', border: '2px solid #ddd' }}></div>
              <h4>Standard</h4>
              <p>Budget-friendly protection</p>
            </div>
            <div className="filter-preview-card">
              <div className="preview-color" style={{ backgroundColor: '#87CEEB' }}></div>
              <h4>Pleated</h4>
              <p>Improved filtration</p>
            </div>
            <div className="filter-preview-card">
              <div className="preview-color" style={{ backgroundColor: '#90EE90' }}></div>
              <h4>HEPA/Allergen</h4>
              <p>Maximum protection</p>
            </div>
            <div className="filter-preview-card">
              <div className="preview-color" style={{ backgroundColor: '#FFD700' }}></div>
              <h4>Electrostatic</h4>
              <p>Advanced technology</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/products" className="btn btn-primary">{t('home.products.viewAll')}</Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section faq-preview">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t('home.faq.title')}</h2>
            <p className="section-subtitle">{t('home.faq.subtitle')}</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>❓ {t('home.faq.questions.q1.question')}</h4>
              <p>{t('home.faq.questions.q1.answer')}</p>
            </div>
            <div className="faq-item">
              <h4>❓ {t('home.faq.questions.q2.question')}</h4>
              <p>{t('home.faq.questions.q2.answer')}</p>
            </div>
            <div className="faq-item">
              <h4>❓ {t('home.faq.questions.q4.question')}</h4>
              <p>{t('home.faq.questions.q4.answer')}</p>
            </div>
            <div className="faq-item">
              <h4>❓ {t('home.faq.questions.q5.question')}</h4>
              <p>{t('home.faq.questions.q5.answer')}</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/faq" className="btn btn-outline">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-home">
        <div className="container">
          <div className="cta-box">
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.description')}</p>
            <Link to="/products" className="btn btn-primary">{t('home.cta.button')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
