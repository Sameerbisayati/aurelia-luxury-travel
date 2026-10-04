import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <a href="#" className="logo" aria-label="Aurelia Home">
          AURELIA
        </a>

        <nav
          className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}
          aria-label="Main Navigation"
        >
          <a href="#destinations" onClick={() => setMobileMenuOpen(false)}>
            DESTINATIONS
          </a>
          <a href="#experiences" onClick={() => setMobileMenuOpen(false)}>
            EXPERIENCES
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            ABOUT
          </a>
          <a href="#journal" onClick={() => setMobileMenuOpen(false)}>
            JOURNAL
          </a>
          <a
            href="#contact"
            className="nav-cta-mobile"
            onClick={() => setMobileMenuOpen(false)}
          >
            PLAN A JOURNEY
          </a>
        </nav>

        <a href="#contact" className="nav-cta-desktop">
          PLAN A JOURNEY
        </a>

        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}