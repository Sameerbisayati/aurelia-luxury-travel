import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";
import { featuredJourneys } from "../data/travelData";

function JourneyCard({ journey, index }) {
  const imageRef = useReveal();
  const contentRef = useReveal();
  const isEven = index % 2 === 0;

  return (
    <div className={`featured-grid ${!isEven ? "featured-grid-reverse" : ""}`}>
      <div
        ref={imageRef}
        className={`featured-image reveal ${isEven ? "reveal-left" : "reveal-right"}`}
      >
        <img
          src={journey.image}
          alt={`${journey.title} signature journey`}
          loading="lazy"
        />
      </div>

      <div
        ref={contentRef}
        className={`featured-content reveal ${isEven ? "reveal-right" : "reveal-left"}`}
      >
        <div className="section-label">
          <span>{journey.number}</span>
          SIGNATURE JOURNEY
        </div>

        <h2>
          {journey.title}
          <br />
          <em>{journey.subtitle}</em>
        </h2>

        <div className="featured-location">{journey.location}</div>

        <p>{journey.description}</p>

        <div className="featured-details">
          <div>
            <span>STAY</span>
            <strong>{journey.stay}</strong>
          </div>

          <div>
            <span>STYLE</span>
            <strong>{journey.style}</strong>
          </div>

          <div>
            <span>FROM</span>
            <strong>{journey.price}</strong>
          </div>
        </div>

        <a href="#contact" className="featured-link">
          <span>Enquire about this journey</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default function FeaturedJourney() {
  return (
    <section className="featured-journey" id="journey">
      <div className="container">
        <div className="featured-journeys-list">
          {featuredJourneys.map((journey, index) => (
            <JourneyCard
              key={journey.id || journey.title}
              journey={journey}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}