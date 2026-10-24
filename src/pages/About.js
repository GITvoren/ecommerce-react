import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/about.css";

const values = [
  {
    number: "01",
    title: "Made for the Journey",
    description:
      "From everyday commutes to weekend escapes, discover essentials that fit naturally into your life.",
  },
  {
    number: "02",
    title: "Thoughtfully Selected",
    description:
      "Bags, cameras, wallets, and watches chosen for their practicality, style, and everyday usefulness.",
  },
  {
    number: "03",
    title: "Explore Your Own Way",
    description:
      "We believe the best experiences often happen when you take a different route and make the journey your own.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-page__hero">
        <span className="about-page__eyebrow">GET TO KNOW US</span>

        <h1 className="about-page__title">ABOUT DETOUR.</h1>

        <p className="about-page__intro">
          Essentials for the journey. Inspiration for the unexpected.
        </p>
      </section>

      <section className="about-page__story">
        <div className="about-page__story-content">
          <span className="about-page__eyebrow">OUR STORY</span>

          <h2 className="about-page__heading">
            The journey is yours to make.
          </h2>

          <p className="about-page__text">
            Detour is a travel-inspired lifestyle store built around the
            things you take with you. We bring together bags, cameras,
            wallets, watches, and everyday essentials for wherever life
            leads.
          </p>

          <p className="about-page__text">
            Whether you're planning your next expedition or simply heading
            out for the day, we believe the right essentials can make
            every journey a little better.
          </p>

          <p className="about-page__text">
            Because sometimes, the best part of getting there is
            discovering somewhere unexpected along the way.
          </p>
        </div>

        <div
          className="about-page__image"
          role="img"
          aria-label="detour travel lifestyle photograph"
        >
          <div className="about-page__image-container">
            <img src="/images/about-banner-image.jpg" alt="detour travel lifestyle photograph" />
          </div>
        </div>
      </section>

      <section className="about-page__values">
        <div className="about-page__section-heading">
          <span className="about-page__eyebrow">WHAT WE'RE ABOUT</span>

          <h2 className="about-page__heading">
            Essentials for every kind of journey.
          </h2>
        </div>

        <div className="about-page__values-grid">
          {values.map((value) => (
            <article className="about-page__value" key={value.number}>
              <span className="about-page__value-number">
                {value.number}
              </span>

              <h3 className="about-page__value-title">
                {value.title}
              </h3>

              <p className="about-page__text">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-page__cta">
        <h2 className="about-page__heading">
          Wherever you're headed, start here.
        </h2>

        <p className="about-page__text">
          Find the essentials that travel with you.
        </p>

        <Link className="about-page__button" to="/products">
          EXPLORE OUR COLLECTION
        </Link>
      </section>
    </main>
  );
}