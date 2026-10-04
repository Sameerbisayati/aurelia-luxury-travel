import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

export default function JournalCard({ post, index, onReadStory }) {
  const cardRef = useReveal();

  const direction = index % 2 === 0 ? "reveal-left" : "reveal-right";

  return (
    <article
      ref={cardRef}
      className={`journal-card journal-card-${index + 1} reveal ${direction}`}
    >
      <div className="journal-top">
        <span>{post.number}</span>
        <span>{post.category}</span>
      </div>

      <div className="journal-image">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
        />
      </div>

      <div className="journal-copy">
        <h3>{post.title}</h3>

        <p>{post.description}</p>

        <button
          type="button"
          className="journal-link-btn"
          onClick={onReadStory}
        >
          <span>Read the story</span>
          <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
}