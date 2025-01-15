import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Checkout from "./checkout";
import DynamicText from "./DynamicText";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Add FAQ toggle function
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const toggleMenu = () => {
    console.log("Menu toggled:", !isMenuOpen); // Debugging
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Close menu when a link is clicked
    setIsMenuOpen(false);
  };

  const handleJoinClick = () => {
    navigate("/checkout");
  };

  // Modal functions
  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileNav = document.querySelector(".mobile-nav");
      const hamburger = document.querySelector(".hamburger-menu");

      if (
        isMenuOpen &&
        mobileNav &&
        hamburger &&
        !mobileNav.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Add ESC key listener for modal
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
            />

            <nav className="navbar">
              <button className="glow-button" onClick={handleJoinClick}>
                Join Now
              </button>

              <div className="desktop-nav navbar-left">
                <a href="#testimonials">TESTIMONIALS</a>
                <a href="#faq">FAQ</a>
                <a href="#">ABOUT</a>
                <a href="#socials">SOCIALS</a>
              </div>

              <div
                className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={`mobile-nav ${isMenuOpen ? "active" : ""}`}>
                <div className="navbar-left">
                  <a href="#testimonials" onClick={handleMenuClick}>
                    TESTIMONIALS
                  </a>
                  <a href="#faq" onClick={handleMenuClick}>
                    FAQ
                  </a>
                  <a href="#" onClick={handleMenuClick}>
                    ABOUT
                  </a>
                  <a href="#socials" onClick={handleMenuClick}>
                    SOCIALS
                  </a>
                </div>
              </div>
            </nav>

            <div className="logo-container">
              <div className="navbar-logo">
                <img src="images/mm-logo.jpg" alt="Logo" />
              </div>
            </div>

            <main className="container">
              <section className="hero">
                <p>MemecoinMania - Official Platform</p>
                <h1 className="hero-h1">
                  Life is what you <span className="hero-make">make</span> it.
                </h1>
                {/* <h1 id="dynamic-text">
                  "Ever Since Joining I have been upping my profits"
                </h1> */}
                <DynamicText />

                <div className="video-container">
                  <video
                    src="videos/mm-vid1.MP4"
                    controls
                    poster="/images/kas-testimonial.png" // Path to your thumbnail image
                    preload="metadata"
                  ></video>
                </div>
              </section>

              <section className="stats-wrapper">
                <div className="button-container">
                  <button className="glow-button" onClick={handleJoinClick}>
                    Join Now
                  </button>
                </div>
              </section>

              <section className="mm-copy">
                <h3>
                  Memecoin Mania is like NO other community in the ENTIRE
                  memecoin space. Once inside, you will discover how this game
                  is REALLY played from top performers who have had immense
                  success in trading memecoins. The information inside and value
                  provided is something you will NOT find anywhere else in the
                  entire memecoin or crypto space. This is the ONLY guarantee we
                  make.
                </h3>
              </section>

              <section className="features">
                <h2 className="features-title">
                  WHAT YOU WILL <span className="features-highlight">GET</span>
                </h2>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h3>Proven Strategy</h3>
                    <p>
                      Master our time-tested strategy for consistent profits in
                      the memecoin market
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3>Scam Detection Course</h3>
                    <p>
                      Learn to identify and avoid memecoin scams with our
                      comprehensive guide
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3>Live SCAM Alerts</h3>
                    <p>
                      Receive real-time alerts about potential scams in the
                      memecoin space
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Educational Courses</h3>
                    <p>
                      Access our library of educational content to master
                      memecoin trading
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-video"></i>
                    </div>
                    <h3>Live Q&A Sessions</h3>
                    <p>
                      Join our live-streaming sessions where we expose scams and
                      answer your questions
                    </p>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-bolt"></i>
                    </div>
                    <h3>Short Term Plays</h3>
                    <p>Get actionable calls for quick profit opportunities</p>
                    <div className="feature-metrics">
                      <span className="risk-level">Risk: High</span>
                      <span className="potential">3-5x Potential</span>
                    </div>
                  </div>

                  <div className="feature-card">
                    <div className="feature-icon">
                      <i className="fas fa-chart-bar"></i>
                    </div>
                    <h3>Long Term Plays</h3>
                    <p>Strategic calls for sustained growth potential</p>
                    <div className="feature-metrics">
                      <span className="risk-level">Risk: Medium</span>
                      <span className="potential">10x+ Potential</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="testimonials" id="testimonials">
                <h2 className="testimonials-h2">
                  This is just the beginning -{" "}
                  <span className="testimonials-real">Real</span> People,{" "}
                  <span className="testimonials-real">Real</span> Results! Every
                  Success Story Started With One Bold Decision - Yours Is Next
                </h2>
                <div className="track-horizontal">
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/3R05CCr/Whats-App-Image-2024-12-23-at-15-32-15.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/3R05CCr/Whats-App-Image-2024-12-23-at-15-32-15.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/09PTsVr/Whats-App-Image-2024-12-23-at-15-32-29.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/09PTsVr/Whats-App-Image-2024-12-23-at-15-32-29.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/ph1455k/Whats-App-Image-2024-12-26-at-03-10-44.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/ph1455k/Whats-App-Image-2024-12-26-at-03-10-44.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/28ynJWZ/Whats-App-Image-2024-11-28-at-23-41-03.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/28ynJWZ/Whats-App-Image-2024-11-28-at-23-41-03.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/Rjp1dTm/Whats-App-Image-2024-12-08-at-16-25-11.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/Rjp1dTm/Whats-App-Image-2024-12-08-at-16-25-11.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/T2whnrL/Whats-App-Image-2024-12-08-at-16-38-28-1.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/T2whnrL/Whats-App-Image-2024-12-08-at-16-38-28-1.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/PNjR7hV/Whats-App-Image-2024-12-08-at-16-38-28.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/PNjR7hV/Whats-App-Image-2024-12-08-at-16-38-28.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/G0VGtN6/Whats-App-Image-2024-12-08-at-16-38-28-2.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/G0VGtN6/Whats-App-Image-2024-12-08-at-16-38-28-2.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/G506Hmr/Whats-App-Image-2024-12-08-at-16-38-28-3.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/G506Hmr/Whats-App-Image-2024-12-08-at-16-38-28-3.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/SP5kWMQ/Whats-App-Image-2024-12-11-at-12-41-45.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/SP5kWMQ/Whats-App-Image-2024-12-11-at-12-41-45.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/Lz610bb/Whats-App-Image-2024-12-08-at-16-39-07.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/Lz610bb/Whats-App-Image-2024-12-08-at-16-39-07.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/pzJDFTf/Whats-App-Image-2024-12-15-at-02-30-47-1.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/pzJDFTf/Whats-App-Image-2024-12-15-at-02-30-47-1.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/S7wm5Fg/Whats-App-Image-2024-12-15-at-02-30-47.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/S7wm5Fg/Whats-App-Image-2024-12-15-at-02-30-47.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/pvHc0wj/Whats-App-Image-2024-12-15-at-02-30-48-1.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/pvHc0wj/Whats-App-Image-2024-12-15-at-02-30-48-1.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/XLW50r6/Whats-App-Image-2024-12-15-at-02-30-48.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/XLW50r6/Whats-App-Image-2024-12-15-at-02-30-48.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/FsPtpzK/Whats-App-Image-2024-12-17-at-20-47-30.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/FsPtpzK/Whats-App-Image-2024-12-17-at-20-47-30.jpg"
                      alt="Strategic"
                    />
                  </div>
                  <div
                    className="testimonial_card"
                    onClick={() =>
                      openModal(
                        "https://i.ibb.co/wy2Y6hZ/Whats-App-Image-2024-12-17-at-20-47-30-1.jpg"
                      )
                    }
                  >
                    <img
                      src="https://i.ibb.co/wy2Y6hZ/Whats-App-Image-2024-12-17-at-20-47-30-1.jpg"
                      alt="Strategic"
                    />
                  </div>
                </div>
              </section>

              <div className="testimonials-button-container">
                <button className="glow-button" onClick={handleJoinClick}>
                  Join Now
                </button>
              </div>
            </main>

            {/* Modal */}
            <div
              className={`modal ${isModalOpen ? "active" : ""}`}
              onClick={closeModal}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close-modal" onClick={closeModal}>
                  &times;
                </span>
                {modalImage && <img src={modalImage} alt="Full size" />}
              </div>
            </div>

            <section className="faq" id="faq">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-grid">
                <div className={`faq-item ${activeFaq === 0 ? "active" : ""}`}>
                  <div className="faq-question" onClick={() => toggleFaq(0)}>
                    What is MemecoinMania?
                  </div>
                  <div className="faq-answer">
                    MemecoinMania is a platform dedicated to helping people
                    understand and navigate the memecoin market. We provide
                    insights, analysis, and strategies for cryptocurrency
                    trading.
                  </div>
                </div>

                <div className={`faq-item ${activeFaq === 1 ? "active" : ""}`}>
                  <div className="faq-question" onClick={() => toggleFaq(1)}>
                    How do I get started?
                  </div>
                  <div className="faq-answer">
                    Getting started is simple - just click the "Join Now" button
                    at the top of the page. You'll get immediate access to our
                    community, resources, and trading insights.
                  </div>
                </div>

                <div className={`faq-item ${activeFaq === 2 ? "active" : ""}`}>
                  <div className="faq-question" onClick={() => toggleFaq(2)}>
                    What support do you provide?
                  </div>
                  <div className="faq-answer">
                    We provide 24/7 community support, detailed market analysis,
                    trading signals, and educational resources to help you make
                    informed decisions in the memecoin market.
                  </div>
                </div>

                <div className={`faq-item ${activeFaq === 3 ? "active" : ""}`}>
                  <div className="faq-question" onClick={() => toggleFaq(3)}>
                    Is cryptocurrency trading risky?
                  </div>
                  <div className="faq-answer">
                    Yes, cryptocurrency trading involves significant risks.
                    Market volatility can lead to both profits and losses. We
                    recommend thorough research and never investing more than
                    you can afford to lose.
                  </div>
                </div>

                <div className={`faq-item ${activeFaq === 4 ? "active" : ""}`}>
                  <div className="faq-question" onClick={() => toggleFaq(4)}>
                    What makes your platform different?
                  </div>
                  <div className="faq-answer">
                    We focus specifically on memecoins and building a supportive
                    community. Our platform combines market analysis, real-time
                    alerts, and educational resources to help our members make
                    informed decisions.
                  </div>
                </div>
              </div>
            </section>

            <section className="final-cta">
              <div className="final-message">
                Memecoin Mania is like NO other community in the ENTIRE memecoin
                space. Once inside, you will discover how this game is REALLY
                played from top performers who have had immense success in
                trading memecoins. The information inside and value provided is
                something you will NOT find anywhere else in the entire memecoin
                or crypto space. This is the ONLY guarantee we make.
              </div>

              <div className="see-inside">See You Inside</div>

              <div className="final-button-container">
                <button className="glow-button" onClick={handleJoinClick}>
                  Join Now
                </button>
              </div>
            </section>

            <footer className="footer" id="socials">
              <div className="footer-content">
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="TikTok">
                    <i className="fab fa-tiktok"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Telegram">
                    <i className="fab fa-telegram"></i>
                  </a>
                </div>
                <div className="footer-text">
                  &copy; {new Date().getFullYear()} MemecoinMania. All rights
                  reserved. |{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>{" "}
                  |{" "}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Terms of Service
                  </a>
                </div>
              </div>
            </footer>
          </>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
