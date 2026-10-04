import useReveal from "../hooks/useReveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useReveal();

  return (
    <footer className="footer reveal reveal-up" ref={footerRef}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              AURELIA
            </a>

            <p>
              Extraordinary journeys,
              <br />
              thoughtfully designed.
            </p>
          </div>

          <nav className="footer-column" aria-label="Footer Navigation">
            <span>EXPLORE</span>

            <a href="#destinations">Destinations</a>
            <a href="#experiences">Experiences</a>
            <a href="#about">About</a>
            <a href="#journal">Journal</a>
          </nav>

          <div className="footer-column">
            <span>CONTACT</span>

            <a href="mailto:journeys@aureliatravel.com">
              journeys@aureliatravel.com
            </a>

            <a href="tel:+18005550142">
              +1 800 555 0142
            </a>

            <span className="footer-cities">New York · London · Dubai</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} AURELIA LUXURY TRAVEL</span>

          <a href="#contact">
            Plan your journey
          </a>

          <a href="#top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}