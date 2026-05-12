import { useLanguage } from '../context/LanguageContext'
import { useCart } from '../context/CartContext'
import './Products.css'

function FilterImage({ color }) {
  return (
    <div className="filter-image" style={{ backgroundColor: color }}>
      <div className="filter-pleats">
        <div className="pleat"></div>
        <div className="pleat"></div>
        <div className="pleat"></div>
      </div>
    </div>
  )
}

function Products() {
  const { t } = useLanguage()
  const { addToCart } = useCart()

  const filters = [
    {
      id: 1,
      name: 'Standard Filter',
      nameF: 'Filtre Standard',
      color: '#F5F5F5',
      colorName: 'White',
      colorNameF: 'Blanc',
      price: 19.99,
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
      description: 'Advanced electrostatic technology for maximum protection.',
      descriptionF: 'Technologie électrostatique avancée pour une protection maximale.',
      features: ['Electrostatic technology', 'Reusable option available', 'Highest efficiency', '12-month warranty'],
      featuresF: ['Technologie électrostatique', 'Option réutilisable', 'Efficacité maximale', 'Garantie 12 mois']
    }
  ]

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1>{t('home.products.title')}</h1>
          <p>{t('home.products.description')}</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section products-main">
        <div className="container">
          <div className="products-grid">
            {filters.map((filter) => (
              <div 
                key={filter.id} 
                className="product-card"
                onClick={() => addToCart(filter)}
                role="button"
                tabIndex={0}
              >
                <div className="product-image-wrapper">
                  <FilterImage color={filter.color} />
                  <div className="product-color-label">{filter.colorName}</div>
                </div>
                <div className="product-content">
                  <h3>{filter.name}</h3>
                  <p className="product-description">{filter.description}</p>

                  <ul className="product-features">
                    {filter.features.map((feature, i) => (
                      <li key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="product-footer">
                    <span className="product-price">${filter.price.toFixed(2)}</span>
                    <span className="add-to-cart-hint">Click to add</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes Section */}
      <section className="section">
        <div className="container">
          <div className="sizes-section">
            <div className="sizes-header">
              <h2>Standard Filter Sizes</h2>
              <p>All our filters are available in these standard furnace sizes</p>
            </div>
            <div className="sizes-grid">
              <div className="size-card">
                <h4>16x25x1</h4>
                <p>Most common size</p>
                <p className="size-detail">Perfect for standard furnaces</p>
              </div>
              <div className="size-card">
                <h4>20x25x1</h4>
                <p>Larger furnaces</p>
                <p className="size-detail">Increased air flow</p>
              </div>
              <div className="size-card">
                <h4>16x25x4</h4>
                <p>4-inch depth</p>
                <p className="size-detail">Extended lifespan</p>
              </div>
              <div className="size-card">
                <h4>20x25x4</h4>
                <p>4-inch depth</p>
                <p className="size-detail">Premium option</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="why-section">
            <h2>Why Choose Air Filter Co.</h2>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon">✓</div>
                <h4>Easy Selection</h4>
                <p>Color-coded filters make choosing simple</p>
              </div>
              <div className="why-card">
                <div className="why-icon">📦</div>
                <h4>Fast Delivery</h4>
                <p>Your filters arrive in 2-3 business days</p>
              </div>
              <div className="why-card">
                <div className="why-icon">💰</div>
                <h4>Great Prices</h4>
                <p>Quality filters at competitive prices</p>
              </div>
              <div className="why-card">
                <div className="why-icon">☎️</div>
                <h4>Expert Help</h4>
                <p>Call or email us for personalized advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
