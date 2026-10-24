import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../utilities/CartContext.js";
import CartItem from "../components/CartItem.jsx";
import "../assets/css/cart.css";

const formatPrice = (value) =>
  Number(value || 0).toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function Cart() {
  const navigate = useNavigate();
  const { cartItems = [] } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price || 0) * Number(item.quantity || 0),
    0
  );

  const closeCart = () => navigate(-1);

  return (
    <div className="cart-modal">
      <button
        className="cart-modal__overlay"
        type="button"
        aria-label="Close shopping cart"
        onClick={closeCart}
      />

      <section
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <header className="cart-drawer__header">
          <div className="cart-drawer__heading">
            <h2 id="cart-title">Your Cart</h2>
            <span className="cart-drawer__count" aria-live="polite">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </span>
          </div>

          <button
            className="cart-drawer__close"
            type="button"
            aria-label="Close shopping cart"
            onClick={closeCart}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty__icon" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <path d="M8 10h5l4 21h20l5-15H15" />
                <circle cx="20" cy="38" r="2.5" />
                <circle cx="35" cy="38" r="2.5" />
              </svg>
            </div>
            <h3>Your cart is empty</h3>
            <p>Looks like you haven’t added anything to your cart yet.</p>
            <button
              className="cart-empty__button"
              type="button"
              onClick={closeCart}
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {cartItems.map((item) => (
                <div className="cart-drawer__item" key={item._id}>
                  <CartItem cartitemdata={item} />
                </div>
              ))}
            </div>

            <footer className="cart-summary">
              <div className="cart-summary__total">
                <span>Subtotal</span>
                <strong>₱{formatPrice(totalPrice)}</strong>
              </div>
              <p className="cart-summary__note">
                Shipping and any applicable fees are calculated at checkout.
              </p>
              <button
                className="cart-summary__checkout"
                type="button"
                onClick={() => navigate("/checkout")}
              >
                Proceed to checkout
              </button>
              <button
                className="cart-summary__continue"
                type="button"
                onClick={closeCart}
              >
                Continue shopping
              </button>
            </footer>
          </>
        )}
      </section>
    </div>
  );
}

export default Cart;
