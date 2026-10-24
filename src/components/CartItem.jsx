import { useContext } from "react";
import CartContext from "../utilities/CartContext.js";
import "../assets/css/cart.css";

const formatPrice = (value) =>
  Number(value || 0).toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function CartItem({ cartitemdata }) {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const item = cartitemdata;
  const quantity = Number(item.quantity || 0);
  const unitPrice = Number(item.price || 0);

  return (
    <article className="cart-item">
      <div className="cart-item__image-wrap">
        <img
          className="cart-item__image"
          src={item.image}
          alt={item.name || "Product"}
          loading="lazy"
        />
      </div>

      <div className="cart-item__details">
        <h3 className="cart-item__name">{item.name}</h3>
        <p className="cart-item__unit-price">₱{formatPrice(unitPrice)} each</p>

        <div className="cart-item__bottom">
          <div className="cart-quantity" aria-label={`Quantity: ${quantity}`}>
            <button
              className="cart-quantity__button"
              type="button"
              aria-label={`Decrease quantity of ${item.name}`}
              onClick={() => removeFromCart(item)}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h12" />
              </svg>
            </button>
            <output className="cart-quantity__value" aria-live="polite">
              {quantity}
            </output>
            <button
              className="cart-quantity__button"
              type="button"
              aria-label={`Increase quantity of ${item.name}`}
              onClick={() => addToCart(item)}
            >
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h12M10 4v12" />
              </svg>
            </button>
          </div>

          <strong className="cart-item__line-total">
            ₱{formatPrice(unitPrice * quantity)}
          </strong>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
