import React from "react";
import "../assets/css/Footer.css";
import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "SHOP",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Bags & Backpacks", href: "/products?categories=648602a3fc9ab15f65c87bba" },
      { label: "Cameras", href: "/products?categories=648602acfc9ab15f65c87bbe" },
      { label: "Wallets", href: "/products?categories=648602a8fc9ab15f65c87bbc" },
      { label: "Watches", href: "/products?categories=648602b8fc9ab15f65c87bc0" },
      { label: "Accessories", href: "#" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "#" },
      { label: "Shipping & Delivery", href: "#" },
      { label: "Returns & Exchanges", href: "#" },
      { label: "Track Your Order", href: "#" },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

function FooterLinkGroup({ section }) {
  return (
    <div className="footer__column">
      <h3 className="footer__heading">{section.title}</h3>

      <ul className="footer__link-list">
        {section.links.map((link) => (
          <li key={link.label}>
            <Link className="footer__link" to={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <a
            className="footer__logo-link"
            href="/"
            aria-label="Detour home"
          >
            <img
              className="footer__logo"
              src="/images/logo.png"
              alt="Detour"
            />
          </a>

          <p className="footer__tagline">
            Essentials for the journey.
          </p>

          <p className="footer__description">
            Discover thoughtfully selected bags, cameras, wallets,
            watches, and everyday essentials for wherever life takes you.
          </p>
        </div>

        <div className="footer__navigation" aria-label="Footer navigation">
          {footerSections.map((section) => (
            <FooterLinkGroup
              key={section.title}
              section={section}
            />
          ))}
        </div>

        <div className="footer__newsletter">
          <h3 className="footer__heading">STAY IN THE LOOP</h3>

          <p className="footer__newsletter-description">
            Get updates on new arrivals, travel essentials, and more.
          </p>

          <form
            className="footer__newsletter-form"
            action="/newsletter"
            method="get"
          >
            <label
              className="footer__sr-only"
              htmlFor="footer-email"
            >
              Email address
            </label>

            <input
              className="footer__email-input"
              id="footer-email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
            />

            <button
              className="footer__subscribe-button"
              type="button"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} detour. All rights reserved.
        </p>
        <p className="footer__copyright">
          Developed by Voren Tejuco
        </p>
        <div className="footer__legal" aria-label="Legal information">
          {legalLinks.map((link) => (
            <a
              className="footer__link"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}