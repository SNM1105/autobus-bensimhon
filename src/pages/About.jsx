import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Trusted school transportation in Quebec since 2008</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section company-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <p>
                Founded almost two decades ago in 2008, Autobus Bensimhon has grown 
                to become a trusted provider of safe and reliable transportation for 
                students throughout Quebec.
              </p>
              <p>
                Our company's primary goal has always been to ensure that every child 
                arrives to and back from school, safely and on time. Over the years, 
                we have built lasting relationships with schools, parents, and communities 
                across the province.
              </p>
              <p>
                Today, we operate a modern fleet of buses and continue to invest in 
                the latest safety technology and eco-friendly vehicles to better serve 
                our communities and protect our environment.
              </p>
            </div>
            <div className="story-image">
              <div className="story-card">
                <div className="year-badge">2008</div>
                <h3>Founded in Quebec</h3>
                <p>Started with a vision to provide the safest school transportation services in the region.</p>
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
              <h3>Our Mission</h3>
              <p>
                To provide safe, reliable, and efficient transportation services that 
                give parents peace of mind and help students arrive at school ready to learn.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be Quebec's most trusted school transportation provider, known for 
                our commitment to safety, sustainability, and community partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section core-values">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              These values guide everything we do at Autobus Bensimhon
            </p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-number">01</div>
              <div className="value-content">
                <h3>Safety</h3>
                <p>
                  The safety of every child is our top priority. Our drivers undergo 
                  rigorous training, and our buses are maintained to the highest standards.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">02</div>
              <div className="value-content">
                <h3>Reliability</h3>
                <p>
                  Parents and schools trust us to be on time, every time. Our efficient 
                  route management ensures punctual and dependable service.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">03</div>
              <div className="value-content">
                <h3>Loyalty</h3>
                <p>
                  We build lasting relationships with the communities we serve, standing 
                  by our partners through every challenge and milestone.
                </p>
              </div>
            </div>
            <div className="value-item">
              <div className="value-number">04</div>
              <div className="value-content">
                <h3>Community</h3>
                <p>
                  We're more than a bus company—we're part of your community, committed 
                  to making a positive impact on students' lives and the environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section sustainability bg-dark">
        <div className="container">
          <div className="sustainability-content">
            <div className="sustainability-text">
              <h2>Committed to Sustainability</h2>
              <p>
                Autobus Bensimhon is committed to sustainability, slowly incorporating 
                electric buses into our fleet of buses to reduce emissions. We believe 
                in protecting the environment for future generations—the very children 
                we transport every day.
              </p>
              <div className="eco-features">
                <div className="eco-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAD124" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Electric buses in our fleet</span>
                </div>
                <div className="eco-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAD124" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Reduced carbon emissions</span>
                </div>
                <div className="eco-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAD124" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Eco-friendly practices</span>
                </div>
              </div>
            </div>
            <div className="sustainability-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#FAD124" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Learn More?</h2>
          <p>Contact us today to discuss how we can serve your transportation needs.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          
          <div className="follow-us-content" style={{ marginTop: '50px' }}>
            <p style={{ marginBottom: '20px', fontSize: '1rem' }}>Follow us on social media</p>
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
    </div>
  )
}

export default About
