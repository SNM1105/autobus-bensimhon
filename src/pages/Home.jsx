import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const faqData = [
  {
    question: "How do I register my child for school bus transportation?",
    answer: "To register your child, please contact us via phone or email with your child's school name, grade, and home address. We'll work with your school district to set up the appropriate route and pick-up times."
  },
  {
    question: "What safety measures are in place on your buses?",
    answer: "All our buses are equipped with GPS tracking, security cameras, and meet or exceed Transport Canada safety standards. Our drivers undergo rigorous background checks, safety training, and regular performance evaluations."
  },
  {
    question: "What are your operating hours?",
    answer: "Our buses operate Monday through Friday during the school year, with morning pick-ups starting around 6:30 AM and afternoon drop-offs completing by 5:30 PM. Our office is open from 7:00 AM to 6:00 PM for inquiries."
  },
  {
    question: "Do you offer transportation for field trips and special events?",
    answer: "Yes! We provide charter services for field trips, sports events, and special occasions. Contact us at least two weeks in advance to ensure availability and receive a customized quote."
  },
  {
    question: "What happens if my child misses the bus?",
    answer: "If your child misses the bus, please contact our office immediately. While we cannot guarantee a return trip, we'll do our best to accommodate the situation. For safety, buses cannot wait beyond the scheduled time."
  },
  {
    question: "Are your buses equipped for students with special needs?",
    answer: "Yes, we have buses equipped with wheelchair lifts and can accommodate students with various mobility needs. Please contact us to discuss specific requirements so we can ensure proper accommodations."
  }
]

function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Safe & Reliable <span>School Bus</span> Transportation</h1>
            <p>
              Trusted by Quebec families since 2008. We ensure every child arrives 
              safely to school and back home, on time, every time.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
              <Link to="/services" className="btn btn-outline">Our Services</Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image">
              <img src="/autobus-bensimhon-type.png" alt="School Bus Transportation" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">17+</span>
              <span className="stat-label">Years of Service</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Buses in Fleet</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Schools Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Students Daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Everything we do is guided by our commitment to these fundamental principles
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
              <h3>Safety First</h3>
              <p>The safety of every child is our top priority. Our drivers are trained professionals and our buses meet the highest safety standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Reliability</h3>
              <p>Parents and schools trust us to be on time, every time. Our efficient route management ensures punctual service.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3>Loyalty</h3>
              <p>We build lasting relationships with the communities we serve, standing by our partners through every challenge.</p>
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
              <h3>Community</h3>
              <p>We're more than a bus company—we're part of your community, committed to making a positive impact on students' lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview bg-light">
        <div className="container">
          <div className="services-content">
            <div className="services-text">
              <h2 className="section-title">Transportation Solutions for Every Need</h2>
              <p>
                From daily school routes to special events and field trips, Autobus Bensimhon 
                provides comprehensive transportation services tailored to your requirements.
              </p>
              <ul className="services-list">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Regular School Routes
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Charter & Private Services
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Field Trip Transportation
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  After-School Programs
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Special Events & Sports Teams
                </li>
              </ul>
              <Link to="/services" className="btn btn-secondary">View All Services</Link>
            </div>
            <div className="services-image">
              <div className="services-image-card">
                <div className="eco-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAD124" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                  <span>Eco-Friendly Fleet</span>
                </div>
                <p>Committed to sustainability with electric buses being added to our fleet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Find answers to common questions about our transportation services
            </p>
          </div>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
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
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner with Us?</h2>
            <p>Contact us today to discuss your transportation needs and get a customized quote.</p>
            <Link to="/contact" className="btn btn-primary">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
