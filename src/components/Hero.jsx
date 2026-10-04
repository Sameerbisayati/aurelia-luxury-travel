import { ArrowDown, ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function Hero() {
  const heroContentRef = useReveal();

  return (
    <section className="hero">
      <div className="hero-video" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          tabIndex={-1}
          className="hero-video-element"
        >
          <source src="/videos/destinations/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content reveal reveal-up" ref={heroContentRef}>
        <div className="hero-eyebrow">
          <span></span>
          BESPOKE TRAVEL · EST. 2012
        </div>

        <h1>
          Travel
          <em>beautifully.</em>
        </h1>

        <p>
          Privately crafted journeys for those who believe
          the finest way to travel is entirely their own.
        </p>

        <a href="#destinations" className="hero-button">
          <span>Discover our journeys</span>
          <ArrowUpRight size={17} />
        </a>
      </div>

      <div className="hero-bottom">
        <span>THE WORLD, EXCEPTIONALLY YOURS</span>

        <a href="#intro" aria-label="Scroll to introduction">
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}