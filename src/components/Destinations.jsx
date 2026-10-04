import DestinationCard from "./DestinationCard";
import { destinations } from "../data/travelData";
import useReveal from "../hooks/useReveal";

function Destinations() {
  const sectionRef = useReveal();

  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className="section-heading reveal reveal-up" ref={sectionRef}>
          <div>
            <div className="section-label">
              <span>02</span>
              FEATURED DESTINATIONS
            </div>
            <h2>
              Sanctuaries of
              <br />
              <em> quiet luxury.</em>
            </h2>
          </div>
          <p>
            Handpicked locations where extraordinary natural beauty meets
            unparalleled privacy and personalized service.
          </p>
        </div>

        <div className="destination-grid">
          {destinations.map((item, index) => (
            <DestinationCard
              key={item.id || item.title}
              destination={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;