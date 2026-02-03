import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Home.css'

function Home() {
  const { t } = useLanguage()

  return (
    <div className="home">
      {/* Hero Section - Simplified with school bus background */}
      <section className="hero hero-fullscreen">
        <div className="hero-background">
          <img src="public/schoolbus.png" alt="" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content hero-centered">
            <div className="hero-logo">
              <img src="/autobus-bensimhon-logo.png" alt="Autobus Bensimhon" />
            </div>
            <h1>AUTOBUS BENSIMHON</h1>
            <p>{t('home.hero.description')}</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">{t('home.hero.getQuote')}</Link>
              <Link to="/services" className="btn btn-outline-light">{t('home.hero.ourServices')}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
