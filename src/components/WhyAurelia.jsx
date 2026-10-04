import { Compass, Gem, Headphones, Globe2 } from "lucide-react";
import useReveal from "../hooks/useReveal";

const features = [
  {
    icon: Compass,
    number: "01",
    title: "Bespoke Itineraries",
    text: "Every journey is shaped around your interests, rhythm and definition of a perfect escape.",
  },
  {
    icon: Gem,
    number: "02",
    title: "Private Access",
    text: "We open doors to private villas, intimate experiences and places beyond the usual itinerary.",
  },
  {
    icon: Headphones,
    number: "03",
    title: "24/7 Concierge",
    text: "From the moment you leave home until you return, our team remains quietly at your service.",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Global Expertise",
    text: "Local knowledge and trusted relationships shape every destination we recommend.",
  },
];

function WhyCard({ feature, index }) {
  const cardRef = useReveal();
  const Icon = feature.icon;

  return (
    <article
      ref={cardRef}
      className={`why-card reveal reveal-up why-delay-${(index % 4) + 1}`}
    >
      <div className="why-top">
        <span>{feature.number}</span>

        <div className="why-icon">
          <Icon size={22} strokeWidth={1.3} />
        </div>
      </div>

      <h3>{feature.title}</h3>

      <p>{feature.text}</p>
    </article>
  );
}

export default function WhyAurelia() {
  const headingRef = useReveal();

  return (
    <section className="why-aurelia">
      <div className="container">
        <div
          ref={headingRef}
          className="section-heading reveal reveal-up"
        >
          <div>
            <div className="section-label">
              <span>05</span>
              WHY AURELIA
            </div>

            <h2>
              Thoughtful by
              <br />
              <em>nature.</em>
            </h2>
          </div>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <WhyCard
              key={feature.number}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}