import "../assets/css/promobanner.css";

const promoCards = [
  {
    id: "travel-gear",
    imageSrc: "/images/banner-allgears.jpg",
    imageAlt: "Travel bags and travel gear",
    eyebrow: "TRAVEL ESSENTIALS",
    title: "READY FOR THE JOURNEY.",
    description: "Reliable companions for every adventure.",
    buttonLabel: "EXPLORE COLLECTION",
    buttonHref: "/products/",
    theme: "promo-banner__card--primary",
  },
  {
    id: "everyday-carry",
    imageSrc: "/images/banner-wallet.jpg",
    imageAlt: "Travel accessories and everyday carry essentials",
    eyebrow: "EVERYDAY CARRY",
    title: "CARRY WHAT MATTERS.",
    description: "Discover accessories made for life on the go.",
    buttonLabel: "SHOP ACCESSORIES",
    buttonHref: "/products/",
    theme: "promo-banner__card--secondary",
  },
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