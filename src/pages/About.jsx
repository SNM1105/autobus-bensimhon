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
        </div>
      </section>
    </div>
  )
}

export default About
