import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

function CTA() {
  const ctaRef = useReveal();

  return (
    <section className="cta" ref={ctaRef}>
      <div className="container reveal reveal-up">
        <div className="cta-label">
          THE NEXT CHAPTER
        </div>

        <h2>
          Where will
          <br />
          <em>you go next?</em>
        </h2>

        <p>
          Tell us what you're dreaming about.
          We'll turn it into a journey worth remembering.
        </p>

        <a href="#contact" className="cta-link">
          Begin your journey
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

export default CTA;
