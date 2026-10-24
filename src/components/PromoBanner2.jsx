import "../assets/css/promobanner.css";

const promoCards = [
  {
    id: "capture-the-moment",
    imageSrc: "/images/banner-camera.jpg",
    imageAlt: "Cameras and photography gear for travel",
    eyebrow: "TRAVEL PHOTOGRAPHY",
    title: "MAKE EVERY MOMENT LAST.",
    description: "Capture the places, people, and moments worth remembering.",
    buttonLabel: "EXPLORE CAMERAS",
    buttonHref: "/products?categories=648602acfc9ab15f65c87bbe",
    theme: "promo-banner__card--primary",
  },
  {
    id: "finishing-touches",
    imageSrc: "/images/banner-watches.jpg",
    imageAlt: "Watches and wallets for everyday travel",
    eyebrow: "EVERYDAY ESSENTIALS",
    title: "THE DETAILS MATTER.",
    description: "Timeless watches and everyday essentials, wherever you go.",
    buttonLabel: "SHOP THE COLLECTION",
    buttonHref: "/products?categories=648602b8fc9ab15f65c87bc0",
    theme: "promo-banner__card--secondary",
  }
];

function PromoCard({ card }) {
  const hasImage = Boolean(card.imageSrc);

  return (
    <article
      className={`promo-banner__card ${card.theme}`}
    >
      {/* Replace this placeholder with your own product or lifestyle image. */}
      <div
        className={`promo-banner__asset ${
          hasImage ? "promo-banner__asset--loaded" : ""
        }`}
        data-asset-slot={card.id}
        role={hasImage ? "img" : undefined}
        aria-label={hasImage ? card.imageAlt : undefined}
        aria-hidden={hasImage ? undefined : "true"}
        style={
          hasImage
            ? { backgroundImage: `url("${card.imageSrc}")` }
            : undefined
        }
      />

      <div className="promo-banner__overlay" />

      <div className="promo-banner__content">
        {card.eyebrow && (
          <span className="promo-banner__eyebrow">
            {card.eyebrow}
          </span>
        )}

        <h2 className="promo-banner__title">
          {card.title}
        </h2>

        {card.description && (
          <p className="promo-banner__description">
            {card.description}
          </p>
        )}

        <a
          className="promo-banner__button"
          href={card.buttonHref}
        >
          {card.buttonLabel}
        </a>
      </div>
    </article>
  );
}

export default function PromoBanner() {
  return (
    <section
      className="promo-banner"
      aria-label="Featured collections"
    >
      {promoCards.map((card) => (
        <PromoCard key={card.id} card={card} />
      ))}
    </section>
  );
}