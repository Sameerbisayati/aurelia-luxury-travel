import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

function ExperienceCard({ experience, onSelect, index }) {
  const cardRef = useReveal();

  return (
    <article
      ref={cardRef}
      className={`experience-card reveal reveal-up experience-delay-${(index % 6) + 1}`}
    >
      <div className="experience-number">
        {experience.number}
      </div>

      <div className="experience-image">
        <img
          src={experience.image}
          alt={experience.title}
          loading="lazy"
        />
      </div>

      <div className="experience-content">
        <h3>{experience.title}</h3>

        <p>{experience.description}</p>
      </div>

      <button
        type="button"
        className="experience-arrow"
        onClick={() => onSelect(experience)}
        aria-label={`Explore ${experience.title}`}
      >
        <ArrowUpRight size={18} />
      </button>
    </article>
  );
}

export default ExperienceCard;