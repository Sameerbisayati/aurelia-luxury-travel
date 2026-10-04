import { X, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { journalPosts } from "../data/travelData";
import JournalCard from "./JournalCard";
import useReveal from "../hooks/useReveal";

export default function Journal() {
  const [selectedPost, setSelectedPost] = useState(null);
  const headingRef = useReveal();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPost(null);
    };

    if (selectedPost) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPost]);

  return (
    <section className="journal" id="journal">
      <div className="container">
        <div
          ref={headingRef}
          className="section-heading journal-heading reveal reveal-up"
        >
          <div>
            <div className="section-label">
              <span>07</span>
              THE JOURNAL
            </div>

            <h2>
              Notes from
              <br />
              <em>the road.</em>
            </h2>
          </div>

          <p>
            Stories, places and ideas from the world
            of considered travel.
          </p>
        </div>

        <div className="journal-grid">
          {journalPosts.map((post, index) => (
            <JournalCard
              key={post.number || post.title}
              post={post}
              index={index}
              onReadStory={() => setSelectedPost(post)}
            />
          ))}
        </div>
      </div>

      {selectedPost && (
        <div
          className="journal-modal"
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="journal-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedPost(null)}
              aria-label="Close article"
            >
              <X size={20} />
            </button>

            <div className="journal-article-header">
              <div className="journal-meta">
                <span>{selectedPost.category}</span>
                <span>•</span>
                <span className="read-time">
                  <Clock size={12} /> {selectedPost.readTime}
                </span>
              </div>
              <h2>{selectedPost.title}</h2>
            </div>

            <div className="journal-article-hero">
              <img src={selectedPost.image} alt={selectedPost.title} />
            </div>

            <div className="journal-article-body">
              <p className="article-lead">{selectedPost.lead}</p>
              
              {selectedPost.content.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              {selectedPost.quote && (
                <blockquote>"{selectedPost.quote}"</blockquote>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}