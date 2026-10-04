import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import useReveal from "../hooks/useReveal";

function Contact() {
  const headingRef = useReveal();
  const gridRef = useReveal();

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    destination: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform API call or submission logic here
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      destination: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div ref={headingRef} className="contact-heading reveal reveal-up">
          <div className="section-label">
            <span>08</span>
            CONTACT
          </div>

          <h2>
            Begin your
            <br />
            <em>journey.</em>
          </h2>

          <p>
            Tell us where you'd like to go, how you'd like to travel,
            and we'll take care of the rest.
          </p>
        </div>

        <div ref={gridRef} className="contact-grid reveal reveal-up">
          <div className="contact-details">
            <div className="contact-detail">
              <Mail size={19} />
              <div>
                <span>Email</span>
                <a href="mailto:journeys@aureliatravel.com">
                  journeys@aureliatravel.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <Phone size={19} />
              <div>
                <span>Private travel desk</span>
                <a href="tel:+18005550142">
                  +1 800 555 0142
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <MapPin size={19} />
              <div>
                <span>Studios</span>
                <p>New York · London · Dubai</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="contact-success-card">
              <CheckCircle2 size={42} className="success-icon" />
              <h3>Enquiry Received</h3>
              <p>
                Thank you, <strong>{formData.firstName || "traveler"}</strong>.
                Our private travel desk is reviewing your request and will reach out shortly to begin designing your experience.
              </p>
              <button
                type="button"
                className="reset-button"
                onClick={handleReset}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="firstName">First name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="destination">Where would you like to go?</label>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="A destination, experience or simply 'surprise me'"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Tell us about your journey</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Dates, occasion, travel style or anything you'd like us to know..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <span>Send enquiry</span>
                <ArrowUpRight size={17} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;