import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/hero.css";

const slides = [
  {
    title: "READY FOR\nMOVEMENT.",
    description: (
      <>
        From morning commute to late-night streets.
        <br />
        Carry everything you need, anywhere you go.
      </>
    ),
    link: "/products",
    buttonText: "SHOP ALL GEAR",
    image: "/images/hero-allgears.jpg",
    imagePosition: "center center",
  },
  {
    title: "PACK FOR\nTHE MISSION.",
    description: (
      <>
        Wherever you're headed, bring what matters.
        <br />
        Discover bags built for every kind of journey.
      </>
    ),
    link: "/products?categories=648602a3fc9ab15f65c87bba",
    buttonText: "SHOP BAGS",
    image: "/images/hero-bags.jpg",
    imagePosition: "center center",
  },
  {
    title: "CAPTURE\nTHE JOURNEY.",
    description: (
      <>
        From hidden gems to unforgettable views.
        <br />
        Bring every moment into focus with travel cameras.
      </>
    ),
    link: "/products?categories=648602acfc9ab15f65c87bbe",
    buttonText: "SHOP CAMERAS",
    image: "/images/hero-cameras.jpg", 
    imagePosition: "center center",
  },
  {
    title: "TRAVEL\nLIGHT.",
    description: (
      <>
        Keep your essentials close, wherever you go.
        <br />
        Discover wallets made for life on the move.
      </>
    ),
    link: "/products?categories=648602a8fc9ab15f65c87bbc",
    buttonText: "SHOP WALLETS",
    image: "/images/hero-wallet.jpg",
    imagePosition: "center center",
  },
  {
    title: "EVERY SECOND.\nWELL SPENT.",
    description: (
      <>
        From takeoff to your next destination.
        <br />
        Find watches that keep pace with your adventures.
      </>
    ),
    link: "/products?categories=648602b8fc9ab15f65c87bc0",
    buttonText: "SHOP WATCHES",
    image: "/images/hero-watches.jpg",
    imagePosition: "center center",
  }
];

export default function HeroCarousel({
  items = slides,
  onShopClick,
  autoPlay = true,
  interval = 6000,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % items.length;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [autoPlay, interval, items.length]);

  if (!items.length) return null;

  function goToSlide(index) {
    setActiveIndex((index + items.length) % items.length);
  }

  function goPrevious() {
    goToSlide(activeIndex - 1);
  }

  function goNext() {
    goToSlide(activeIndex + 1);
  }

  return (
    <section
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label="Featured collection"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") goPrevious();
        if (event.key === "ArrowRight") goNext();
      }}
      tabIndex={0}
    >
      {/* Sliding Track Container holding all slides side-by-side */}
      <div 
        className="hero-carousel__track"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`
        }}
      >
        {items.map((slide, index) => (
          <div 
            className="hero-carousel__slide" 
            key={`${slide.title}-${index}`}
            aria-hidden={index !== activeIndex}
          >
            <div
              className="hero-carousel__media"
              style={{
                backgroundImage: slide.image
                  ? `url("${slide.image}")`
                  : "none",
                backgroundPosition: slide.imagePosition || "center",
              }}
              aria-hidden="true"
            />

            <div className="hero-carousel__overlay" aria-hidden="true" />

            <div className="hero-carousel__content" aria-live="polite">
              <h2 className="hero-carousel__title">
                {slide.title.split("\n").map((line, lineIndex) => (
                  <span key={`${line}-${lineIndex}`}>{line}</span>
                ))}
              </h2>

              <p className="hero-carousel__description">
                {slide.description}
              </p>

              <Link
                to={slide.link || "/products"}
                className="hero-carousel__cta"
                onClick={() => onShopClick?.(slide, index)}
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-carousel__controls">
        <div
          className="hero-carousel__indicators"
          role="group"
          aria-label="Choose slide"
        >
          {items.map((slide, index) => (
            <button
              key={`${slide.title}-${index}`}
              className={`hero-carousel__indicator ${
                index === activeIndex
                  ? "hero-carousel__indicator--active"
                  : ""
              }`}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <button
          className="hero-carousel__arrow"
          type="button"
          aria-label="Previous slide"
          onClick={goPrevious}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>

        <button
          className="hero-carousel__arrow"
          type="button"
          aria-label="Next slide"
          onClick={goNext}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}