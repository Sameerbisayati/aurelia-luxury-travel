import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { experiences } from "../data/travelData";
import ExperienceCard from "./ExperienceCard";
import useReveal from "../hooks/useReveal";

function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const headingRef = useReveal();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedExperience(null);
      }
    };

    if (selectedExperience) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedExperience]);

  return (
    <section className="experiences" id="experiences">
      <div className="container">
        <div
          ref={headingRef}
          className="section-heading reveal reveal-up"
        >
          <div>
            <div className="section-label">
              <span>03</span>
              SIGNATURE EXPERIENCES
            </div>

            <h2>
              Travel beyond
              <br />
              <em>the expected.</em>
            </h2>
          </div>

          <p>
            The experiences that transform a beautiful
            destination into an unforgettable journey.
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.number || experience.title}
              experience={experience}
              onSelect={setSelectedExperience}
              index={index}
            />
          ))}
        </div>
      </div>

      {selectedExperience && (
        <div
          className="experience-modal"
          onClick={() => setSelectedExperience(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="experience-modal-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedExperience(null)}
              aria-label="Close experience"
            >
              <X size={20} />
            </button>

            <div className="modal-content">
              <div className="modal-images">
                {selectedExperience.gallery?.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${selectedExperience.title} ${index + 1}`}
                    loading="lazy"
                  />
                ))}
              </div>

              <div className="modal-copy">
                <span>
                  EXPERIENCE {selectedExperience.number}
                </span>

                <h3 id="modal-title">{selectedExperience.title}</h3>

                <p>{selectedExperience.detail}</p>

                <a
                  href="#contact"
                  onClick={() => setSelectedExperience(null)}
                  className="modal-cta-link"
                >
                  Plan this experience →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Experiences;