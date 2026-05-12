import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useCart } from '../context/CartContext'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const { cart } = useCart()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-icon">
              <span className="filter-icon">🔵</span>
            </div>
            <div className="logo-text">
              <span className="logo-name">AIR FILTER</span>
              <span className="logo-name">CO.</span>
            </div>
          </Link>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link" onClick={closeMenu}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/products" className="nav-link shop-link" onClick={closeMenu}>
              {t('nav.products')}
            </NavLink>
            <Link to="/cart" className="cart-button" onClick={closeMenu} title="View cart">
              🛒 {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </Link>
            <button 
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
