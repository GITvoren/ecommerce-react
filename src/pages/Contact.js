import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/contact.css";

const contactTopics = [
  {
    title: "Orders & Shipping",
    description: "Questions about purchases, delivery, or order status?",
    href: "#",
    linkLabel: "Track your order",
  },
  {
    title: "Returns & Exchanges",
    description: "Need help with a return or an exchange?",
    href: "#",
    linkLabel: "View return information",
  },
  {
    title: "General Inquiries",
    description: "Have a question about our products or collections?",
    href: "/products",
    linkLabel: "Explore our products",
  },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <header className="contact-page__header">
        <span className="contact-page__eyebrow">GET IN TOUCH</span>

        <h1 className="contact-page__title">CONTACT DETOUR.</h1>

        <p className="contact-page__intro">
          Have a question? We'd love to hear from you.
          Send us a message and let us know how we can help.
        </p>
      </header>

      <div className="contact-page__content">
        <section className="contact-page__form-section">
          <h2 className="contact-page__heading">Send us a message</h2>

          <p className="contact-page__description">
            Fill out the form below with your inquiry.
          </p>

          <form
            className="contact-page__form"
            action="/contact"
            method="post"
          >
            <div className="contact-page__field">
              <label htmlFor="contact-name">
                Your name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="contact-page__field">
              <label htmlFor="contact-email">
                Email address
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="contact-page__field">
              <label htmlFor="contact-order">
                Order number <span>(optional)</span>
              </label>

              <input
                id="contact-order"
                name="orderNumber"
                type="text"
                placeholder="e.g. DT-1001"
              />
            </div>

            <div className="contact-page__field">
              <label htmlFor="contact-subject">
                Subject
              </label>

              <select
                id="contact-subject"
                name="subject"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="product">Product inquiry</option>
                <option value="order">Order and shipping</option>
                <option value="return">Returns and exchanges</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="contact-page__field">
              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="How can we help you?"
                required
              />
            </div>

            <button
              className="contact-page__submit"
              type="button"
            >
              SEND MESSAGE
            </button>
          </form>
        </section>

        <aside className="contact-page__aside">
          <div className="contact-page__aside-intro">
            <h2 className="contact-page__heading">
              How can we help?
            </h2>

            <p className="contact-page__description">
              Whether you're looking for a product or need help with
              an order, start with one of the options below.
            </p>
          </div>

          <div className="contact-page__topics">
            {contactTopics.map((topic) => (
              <article
                className="contact-page__topic"
                key={topic.title}
              >
                <h3 className="contact-page__topic-title">
                  {topic.title}
                </h3>

                <p className="contact-page__description">
                  {topic.description}
                </p>

                <Link
                  className="contact-page__topic-link"
                  to={topic.href}
                >
                  {topic.linkLabel}
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="contact-page__note">
            <h3 className="contact-page__topic-title">
              A little more about us
            </h3>

            <p className="contact-page__description">
              Get to know the idea behind Detour and the essentials
              we bring together for life's journeys.
            </p>

            <Link
              className="contact-page__topic-link"
              to="/about"
            >
              About Detour
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}