import useReveal from "../hooks/useReveal";

export default function Intro() {
  const introRef = useReveal();

  return (
    <section className="intro" id="intro">
      <div className="container intro-grid" ref={introRef}>
        <div className="section-label reveal reveal-up">
          <span>01</span>
          THE AURELIA WAY
        </div>

        <div className="intro-content reveal reveal-up">
          <h2>
            Luxury is not
            <em>where you go.</em>
            <br />
            It is how you feel.
          </h2>

          <p>
            Aurelia creates deeply personal journeys shaped around
            your pace, your passions and the places you've always
            wanted to experience differently.
          </p>

          <p>
            From secluded Mediterranean villas to private wilderness
            retreats, every detail is considered before you arrive.
          </p>

          <a href="#about" className="text-link">
            Discover our philosophy →
          </a>
        </div>
      </div>
    </section>
  );
}