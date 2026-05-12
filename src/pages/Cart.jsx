import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLanguage } from '../context/LanguageContext'
import './Cart.css'

function Cart() {
  const { cart, removeFromCart, getTotalPrice } = useCart()
  const { t } = useLanguage()

  return (
    <div className="cart-page">
      <section className="cart-hero">
        <div className="container">
          <h1>Shopping Cart</h1>
          <p>Review your selected filters below</p>
        </div>
      </section>

      <section className="section cart-content">
        <div className="container">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h2>Your cart is empty</h2>
              <p>Start shopping for premium furnace filters today!</p>
              <Link to="/products" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="cart-wrapper">
              <div className="cart-items-section">
                <h2>Items in Cart ({cart.length})</h2>
                <div className="cart-items">
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <div className="cart-item-color" style={{ backgroundColor: item.color }}></div>
                      <div className="cart-item-details">
                        <h3>{item.name}</h3>
                        <p className="color-name">{item.colorName}</p>
                        <p className="item-price">${item.price.toFixed(2)}</p>
                      </div>
                      <button 
                        className="btn-remove"
                        onClick={() => removeFromCart(index)}
                        title="Remove from cart"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cart-summary">
                <div className="summary-box">
                  <h3>Order Summary</h3>
                  <div className="summary-line">
                    <span>Subtotal ({cart.length} items)</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  <div className="summary-line">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="summary-line tax">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="summary-total">
                    <span>Total</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  <button className="btn btn-primary btn-checkout">
                    Proceed to Checkout
                  </button>
                  <Link to="/products" className="btn btn-secondary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Cart
