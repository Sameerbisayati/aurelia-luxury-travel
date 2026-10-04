import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

function About() {
  const imageRef = useReveal();
  const contentRef = useReveal();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div
            ref={imageRef}
            className="about-image-wrap reveal reveal-left"
          >
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85"
              alt="Aurelia Private Journey"
              className="about-image"
            />

            <div className="about-image-caption">
              <span>EST. 2012</span>
              <span>AURELIA TRAVEL</span>
            </div>
          </div>

          <div
            ref={contentRef}
            className="about-content reveal reveal-right"
          >
            <div className="section-label">
              <span>04</span>
              ABOUT AURELIA
            </div>

            <h2>
              Travel with
              <em>intention.</em>
            </h2>

            <p>
              We believe extraordinary travel should feel effortless.
              Aurelia is a boutique luxury travel agency dedicated to
              creating meaningful journeys for discerning travellers.
            </p>

            <p>
              Our approach is personal from the very beginning.
              We listen carefully, understand how you like to travel,
              and then create an itinerary around you.
            </p>

            <div className="about-signature">
              <strong>Aurelia</strong>
              <span>Private journeys, thoughtfully designed.</span>
            </div>

            <a href="#contact" className="outline-button">
              <span>Start a conversation</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;