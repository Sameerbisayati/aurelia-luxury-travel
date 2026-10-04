import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function DestinationCard({ destination, index }) {
  const videoRef = useRef(null);
  const cardRef = useReveal();

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Play interrupted or prevented
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      ref={cardRef}
      className={`destination-card reveal reveal-up destination-delay-${(index % 6) + 1}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="destination-media">
        <img
          src={destination.image}
          alt={destination.title}
          className="destination-image"
          loading="lazy"
        />

        {destination.video && (
          <video
            ref={videoRef}
            src={destination.video}
            className="destination-hover-video"
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}

        <div className="destination-overlay" />
      </div>

      <div className="destination-content">
        <div>
          <span>{destination.location}</span>
          <h3>{destination.title}</h3>
        </div>

        <a
          href="#contact"
          className="destination-arrow"
          aria-label={`Explore ${destination.title}`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}