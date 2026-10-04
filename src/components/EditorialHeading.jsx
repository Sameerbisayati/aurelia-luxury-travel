// src/components/EditorialHeading.jsx
import { motion } from "framer-motion";

export default function EditorialHeading({ number, label, title, subtitle }) {
  const itemVars = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="section-heading">
      {label && (
        <div className="section-label">
          {number && <span>{number}</span>}
          {label}
        </div>
      )}
      <div style={{ overflow: "hidden" }}>
        <motion.h2
          variants={itemVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title} <br />
          {subtitle && <em>{subtitle}</em>}
        </motion.h2>
      </div>
    </div>
  );
}