
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/css/categories.css";

const categories = [
  {
    id: "bags",
    label: "BAGS",
    to: "/products?categories=648602a3fc9ab15f65c87bba",
    primaryImage: "/images/bag.jpg",
    secondaryImage: "/images/bag2.jpg",
  },
  {
    id: "wallets",
    label: "WALLETS",
    to: "/products?categories=648602a8fc9ab15f65c87bbc",
    primaryImage: "/images/wallet2.jpg",
    secondaryImage: "/images/wallet1.jpg",
  },
  {
    id: "cameras",
    label: "CAMERAS",
    to: "/products?categories=648602acfc9ab15f65c87bbe",
    primaryImage: "/images/camera1.jpg",
    secondaryImage: "/images/camera2.jpg",
  },
  {
    id: "watches",
    label: "WATCHES",
    to: "/products?categories=648602b8fc9ab15f65c87bc0",
    primaryImage: "/images/watches2.jpg",
    secondaryImage: "/images/watches1.jpg",
  },
];

export default function Categories() {
  const trackRef = useRef(null);

  const scrollCategories = (direction) => {
    const track = trackRef.current;

    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="categories"
      aria-labelledby="categories-title"
    >
      <header className="categories__header">
        <h2
          className="categories__title"
          id="categories-title"
        >
          EXPLORE OUR GEARS
        </h2>

        <div className="categories__controls">
          <button
            className="categories__arrow"
            type="button"
            aria-label="Scroll categories left"
            onClick={() => scrollCategories(-1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
          </button>

          <button
            className="categories__arrow"
            type="button"
            aria-label="Scroll categories right"
            onClick={() => scrollCategories(1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className="categories__track"
        ref={trackRef}
      >
        {categories.map((category) => (
          <Link
            className="categories__card"
            to={category.to}
            key={category.id}
            aria-label={`Browse ${category.label.toLowerCase()}`}
          >
            <div className="categories__media">
              {category.primaryImage ? (
                <img
                  className="categories__image categories__image--primary"
                  src={category.primaryImage}
                  alt=""
                  draggable="false"
                />
              ) : (
                <div
                  className="categories__placeholder categories__placeholder--primary"
                  aria-hidden="true"
                />
              )}

              {category.secondaryImage ? (
                <img
                  className="categories__image categories__image--secondary"
                  src={category.secondaryImage}
                  alt=""
                  draggable="false"
                />
              ) : (
                <div
                  className="categories__placeholder categories__placeholder--secondary"
                  aria-hidden="true"
                />
              )}
            </div>

            <span className="categories__label">
              {category.label}

              <svg
                className="categories__label-arrow"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M2 8h11M8 3l5 5-5 5" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
