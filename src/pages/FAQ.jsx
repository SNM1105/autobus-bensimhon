import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './FAQ.css'

function FAQ() {
  const [openFaq, setOpenFaq] = useState(null)
  const { t } = useLanguage()

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7']

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <h1>{t('home.faq.title')}</h1>
          <p>{t('home.faq.subtitle')}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-content">
        <div className="container">
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
      <section className="faq-cta">
        <div className="container">
          <h2>{t('home.faq.stillHaveQuestions')}</h2>
          <p>{t('home.faq.contactMessage')}</p>
          <Link to="/contact" className="btn btn-primary">{t('nav.contact')}</Link>
        </div>
      </section>
    </div>
  )
}

export default FAQ
