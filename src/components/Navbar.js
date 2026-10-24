import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import '../assets/css/navbar.css';
import logo from '../assets/images/logo.png';
import cart from '../assets/images/cart.png';
import user1212 from '../assets/images/user1212.png';
import UserContext from '../utilities/UserContext.js';
import CartContext from '../utilities/CartContext.js';

function AppNavbar() {
  const { user } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLoggedIn = user?.id != null;
  const isAdmin = isLoggedIn && user?.isAdmin === true;
  const cartCount = cartItems?.length ?? 0;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="detour-navbar" aria-label="Main navigation">
      <div className="detour-navbar__inner">
        <Link to="/" className="detour-navbar__brand" aria-label="Detour home" onClick={closeMenu}>
          <img src={logo} className="nav-logo" alt="Detour" />
        </Link>

        <div
          id="detour-primary-navigation"
          className={`detour-navbar__links${isMenuOpen ? ' is-open' : ''}`}
        >
          <Link to="/" className="nav-list" onClick={closeMenu}>Home</Link>
          <Link to="/products" className="nav-list" onClick={closeMenu}>Products</Link>
          <Link to="/contact" className="nav-list" onClick={closeMenu}>Contact</Link>
          <Link to="/about" className="nav-list" onClick={closeMenu}>About</Link>

          <div className="detour-navbar__mobile-account">
            {isAdmin && (
              <Link to="/admin" className="detour-navbar__mobile-link" onClick={closeMenu}>
                <i className="fa fa-gears" aria-hidden="true" />
                <span>Admin dashboard</span>
              </Link>
            )}
            {isLoggedIn ? (
              <Link to="/logout" className="detour-navbar__mobile-link" onClick={closeMenu}>
                <i className="fa fa-sign-out" aria-hidden="true" />
                <span>Log out</span>
              </Link>
            ) : (
              <Link to="/accounts/login" className="detour-navbar__mobile-link" onClick={closeMenu}>
                <i className="fa fa-user" aria-hidden="true" />
                <span>Sign in</span>
              </Link>
            )}
            <Link
              to="/cart"
              state={{ background: location }}
              className="detour-navbar__mobile-link"
              onClick={closeMenu}
            >
              <i className="fa fa-shopping-bag" aria-hidden="true" />
              <span>Shopping cart{cartCount > 0 ? ` (${cartCount})` : ''}</span>
            </Link>
          </div>
        </div>

        <div className="detour-navbar__actions">
          {isAdmin && (
            <Link to="/admin" className="detour-navbar__icon-link" aria-label="Admin dashboard" title="Admin dashboard">
              <i className="nav-admin-icon fa fa-gears" aria-hidden="true" />
            </Link>
          )}

          {isLoggedIn ? (
            <Link to="/logout" className="detour-navbar__icon-link logout-icon" aria-label="Log out" title="Log out">
              <i className="nav-icon fa fa-sign-out" aria-hidden="true" />
            </Link>
          ) : (
            <Link to="/accounts/login" className="detour-navbar__icon-link" aria-label="Sign in" title="Sign in">
              <img className="user-icon" src={user1212} alt="" />
            </Link>
          )}

          <Link
            to="/cart"
            state={{ background: location }}
            className="detour-navbar__icon-link cart-a"
            aria-label={`Shopping cart${cartCount > 0 ? `, ${cartCount} items` : ''}`}
            title="Shopping cart"
          >
            <img className="cart-icon" src={cart} alt="" />
            {cartCount > 0 && <span className="cart-number-nav">{cartCount}</span>}
          </Link>

          <button
            type="button"
            className={`nav-toggle${isMenuOpen ? ' is-open' : ''}`}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="detour-primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="nav-toggle__line" />
            <span className="nav-toggle__line" />
            <span className="nav-toggle__line" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
