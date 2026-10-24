import React from "react";
import "../assets/css/BrandIntro.css";

const brandMarks = [
  { id: "mark-1", label: "Brand mark 1" },
  { id: "mark-2", label: "Brand mark 2" },
  { id: "mark-3", label: "Brand mark 3" },
];

export default function BrandIntro() {
  return (
    <section className="brand-intro" aria-labelledby="brand-intro-title">
      <div className="brand-intro__inner">
        <a
          className="brand-intro__logo-link"
          href="/"
          aria-label="Detour home"
        >
          <img
            className="brand-intro__logo"
            src="/images/logo.png"
            alt="Detour"
          />
        </a>

        <h2
          className="brand-intro__tagline"
          id="brand-intro-title"
        >
          ESSENTIALS FOR THE JOURNEY.
        </h2>

        <p className="brand-intro__description">
          Thoughtfully selected essentials for wherever life takes you.
          <br className="brand-intro__desktop-break" />
          From everyday carry to your next great escape, discover bags,
          cameras, wallets, and watches made to go further.
          <br className="brand-intro__desktop-break" />
          Pack light. Explore more. Take the detour.
        </p>

        <div
          className="brand-intro__marks"
          aria-label="Additional brand marks"
        >
          {brandMarks.map((mark) => (
            <div
              className="brand-intro__mark-slot"
              key={mark.id}
              data-asset-slot={mark.id}
              role="img"
              aria-label={mark.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}