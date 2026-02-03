import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext'
import { EMAILJS_CONFIG } from '../config/emailjs'
import './Contact.css'

function Contact() {
  const { t } = useLanguage()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    serviceType: '',
    bookingDate: '',
    bookingTime: '',
    numberOfBuses: '1',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        organization: formData.organization || 'Not provided',
        service_type: formData.serviceType,
        booking_date: formData.bookingDate || 'Not specified',
        booking_time: formData.bookingTime || 'Not specified',
        number_of_buses: formData.numberOfBuses || '1',
        message: formData.message,
        to_email: 'info@autobusbensimhon.com'
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        serviceType: '',
        bookingDate: '',
        bookingTime: '',
        numberOfBuses: '1',
        message: ''
      })
    } catch (err) {
      console.error('EmailJS Error:', err)
      setError('Failed to send message. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const serviceOptions = [
    { value: 'school-routes', key: 'schoolRoutes' },
    { value: 'charter', key: 'charter' },
    { value: 'field-trips', key: 'fieldTrips' },
    { value: 'after-school', key: 'afterSchool' },
    { value: 'special-events', key: 'specialEvents' },
    { value: 'other', key: 'other' }
  ]

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>{t('contact.hero.title')}</h1>
          <p>{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>{t('contact.info.title')}</h2>
              <p>{t('contact.info.description')}</p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>{t('contact.info.phone.title')}</h4>
                    <p>(514) 983-9247</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>{t('contact.info.email.title')}</h4>
                    <p>info@autobusbensimhon.com</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>{t('contact.info.location.title')}</h4>
                    <p>Montreal, Quebec, Canada</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div className="info-content">
                    <h4>{t('contact.info.hours.title')}</h4>
                    <p>{t('contact.info.hours.value')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {error && (
                <div className="error-message" style={{
                  padding: '15px',
                  marginBottom: '20px',
                  backgroundColor: '#fee',
                  border: '1px solid #fcc',
                  borderRadius: '8px',
                  color: '#c33'
                }}>
                  {error}
                </div>
              )}
              {isSubmitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3>{t('contact.form.success.title')}</h3>
                  <p>{t('contact.form.success.message')}</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      setIsSubmitted(false)
                      setError(null)
                    }}
                  >
                    {t('contact.form.success.button')}
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>{t('contact.form.title')}</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{t('contact.form.name.label')} *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.name.placeholder')}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">{t('contact.form.email.label')} *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.form.email.placeholder')}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">{t('contact.form.phone.label')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('contact.form.phone.placeholder')}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="organization">{t('contact.form.organization.label')}</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder={t('contact.form.organization.placeholder')}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceType">{t('contact.form.serviceType.label')} *</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t('contact.form.serviceType.placeholder')}</option>
                      {serviceOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {t(`contact.form.serviceType.options.${option.key}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Booking Details */}
                  <div className="form-row form-row-three">
                      <div className="form-group">
                        <label htmlFor="bookingDate">{t('contact.form.booking.date.label')}</label>
                        <input
                          type="date"
                          id="bookingDate"
                          name="bookingDate"
                          value={formData.bookingDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="bookingTime">{t('contact.form.booking.time.label')}</label>
                        <input
                          type="time"
                          id="bookingTime"
                          name="bookingTime"
                          value={formData.bookingTime}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="numberOfBuses">{t('contact.form.booking.buses.label')}</label>
                        <select
                          id="numberOfBuses"
                          name="numberOfBuses"
                          value={formData.numberOfBuses}
                          onChange={handleChange}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? t('contact.form.booking.buses.singular') : t('contact.form.booking.buses.plural')}</option>
                          ))}
                          <option value="10+">{t('contact.form.booking.buses.moreThan10')}</option>
                        </select>
                      </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">{t('contact.form.message.label')} *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder={t('contact.form.message.placeholder')}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit" disabled={isLoading}>
                    {isLoading ? t('contact.form.sending') || 'Sending...' : t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
