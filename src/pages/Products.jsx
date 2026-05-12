import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Products.css'

function Products() {
  const { t } = useLanguage()
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const filters = [
    {
      id: 1,
      name: 'Standard Filter',
      nameF: 'Filtre Standard',
      color: '#F5F5F5',
      colorName: 'White',
      colorNameF: 'Blanc',
      price: 19.99,
      rating: 4.2,
      description: 'Basic furnace filter for general dust protection.',
      descriptionF: 'Filtre de fournaise basique pour la protection contre la poussière.',
      features: ['Basic dust protection', 'Budget-friendly', '1-3 month lifespan', '16x25x1 or 20x25x1'],
      featuresF: ['Protection contre la poussière', 'Économique', 'Durée de vie 1-3 mois', 'Plusieurs formats']
    },
    {
      id: 2,
      name: 'Pleated Filter',
      nameF: 'Filtre Plissé',
      color: '#87CEEB',
      colorName: 'Light Blue',
      colorNameF: 'Bleu Clair',
      price: 29.99,
      rating: 4.5,
      description: 'Improved filtration with pleated design for better air quality.',
      descriptionF: 'Filtration améliorée avec conception plissée pour une meilleure qualité de l\'air.',
      features: ['Better filtration', 'Extended lifespan', 'Reduced allergens', '3-month protection'],
      featuresF: ['Meilleure filtration', 'Durée de vie prolongée', 'Allergènes réduits', 'Protection 3 mois']
    },
    {
      id: 3,
      name: 'HEPA/Allergen Filter',
      nameF: 'Filtre HEPA/Allergies',
      color: '#90EE90',
      colorName: 'Green',
      colorNameF: 'Vert',
      price: 39.99,
      rating: 4.8,
      description: 'Premium allergen-fighting filter for allergy sufferers.',
      descriptionF: 'Filtre premium contre les allergies pour les personnes allergiques.',
      features: ['HEPA filtration', 'Captures 99.97% of particles', 'Allergy relief', 'Ideal for pet homes'],
      featuresF: ['Filtration HEPA', 'Capture 99.97% des particules', 'Soulagement des allergies', 'Idéal pour animaux']
    },
    {
      id: 4,
      name: 'Charcoal/Odor Control',
      nameF: 'Charbon/Contrôle Odeurs',
      color: '#2F4F4F',
      colorName: 'Dark Slate',
      colorNameF: 'Ardoise Foncée',
      price: 34.99,
      rating: 4.6,
      description: 'Activated charcoal reduces odors and pet smells.',
      descriptionF: 'Le charbon actif réduit les odeurs et les senteurs des animaux.',
      features: ['Odor control', 'Activated charcoal', 'Pet-friendly', '3-month lifespan'],
      featuresF: ['Contrôle des odeurs', 'Charbon actif', 'Adapté aux animaux', 'Durée de vie 3 mois']
    },
    {
      id: 5,
      name: 'Pet-Friendly Filter',
      nameF: 'Filtre pour Animaux',
      color: '#D2691E',
      colorName: 'Brown',
      colorNameF: 'Brun',
      price: 36.99,
      rating: 4.7,
      description: 'Specially designed to capture pet hair and dander.',
      descriptionF: 'Conçu spécialement pour capturer les poils et les squames d\'animaux.',
      features: ['Pet hair capture', 'Dander reduction', 'Extended lifespan', 'Great for multi-pet homes'],
      featuresF: ['Capture poils', 'Réduction des squames', 'Durée de vie prolongée', 'Idéal multiples animaux']
    },
    {
      id: 6,
      name: 'Electrostatic Filter',
      nameF: 'Filtre Électrostatique',
      color: '#FFD700',
      colorName: 'Gold',
      colorNameF: 'Or',
      price: 44.99,
      rating: 4.9,
      description: 'Advanced electrostatic technology for maximum protection.',
      descriptionF: 'Technologie électrostatique avancée pour une protection maximale.',
      features: ['Electrostatic technology', 'Reusable option available', 'Highest efficiency', '12-month warranty'],
      featuresF: ['Technologie électrostatique', 'Option réutilisable', 'Efficacité maximale', 'Garantie 12 mois']
    }
  ]

  const addToCart = (filter) => {
    setCart([...cart, filter])
  }

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1>{t('home.products.title')}</h1>
          <p>{t('home.products.description')}</p>
          <button 
            className="cart-toggle-button"
            onClick={() => setShowCart(!showCart)}
          >
            🛒 {t('nav.contact')} ({cart.length})
          </button>
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <section className="cart-section">
          <div className="container">
            <div className="cart-content">
              <h2>Shopping Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty. Add filters to get started!</p>
              ) : (
                <>
                  <div className="cart-items">
                    {cart.map((item, index) => (
                      <div key={index} className="cart-item">
                        <div className="cart-item-info">
                          <h4>{item.name}</h4>
                          <span className="cart-item-price">${item.price.toFixed(2)}</span>
                        </div>
                        <button 
                          className="btn-remove"
                          onClick={() => removeFromCart(index)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="cart-total">
                    <p>Total: <strong>${totalPrice}</strong></p>
                    <button className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="section products-main">
        <div className="container">
          <div className="products-grid">
            {filters.map((filter) => (
              <div key={filter.id} className="product-card">
                <div className="product-color" style={{ backgroundColor: filter.color }}>
                  <div className="color-label">
                    {filter.colorName}
                  </div>
                </div>
                <div className="product-content">
                  <h3>{filter.name}</h3>
                  <p className="product-description">{filter.description}</p>
                  
                  <div className="product-rating">
                    <span className="stars">★★★★★</span>
                    <span className="rating-value">{filter.rating}</span>
                  </div>

                  <ul className="product-features">
                    {filter.features.map((feature, i) => (
                      <li key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="product-footer">
                    <span className="product-price">${filter.price.toFixed(2)}</span>
                    <button 
                      className="btn btn-primary"
                      onClick={() => addToCart(filter)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Sizes Section */}
      <section className="section filter-sizes bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Standard Filter Sizes</h2>
            <p className="section-subtitle">All our filters are available in these standard furnace sizes</p>
          </div>
          <div className="sizes-grid">
            <div className="size-card">
              <h4>16x25x1</h4>
              <p>Most common size</p>
              <p className="size-note">Perfect for standard furnaces</p>
            </div>
            <div className="size-card">
              <h4>20x25x1</h4>
              <p>Larger furnaces</p>
              <p className="size-note">Increased air flow</p>
            </div>
            <div className="size-card">
              <h4>16x25x4</h4>
              <p>4-inch depth</p>
              <p className="size-note">Extended lifespan</p>
            </div>
            <div className="size-card">
              <h4>20x25x4</h4>
              <p>4-inch depth</p>
              <p className="size-note">Premium option</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section why-choose">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Why Choose Air Filter Co.</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h4>Easy Selection</h4>
              <p>Color-coded filters make choosing simple</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📦</div>
              <h4>Fast Delivery</h4>
              <p>Your filters arrive in 2-3 business days</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <h4>Great Prices</h4>
              <p>Quality filters at competitive prices</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">☎️</div>
              <h4>Expert Help</h4>
              <p>Call or email us for personalized advice</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
