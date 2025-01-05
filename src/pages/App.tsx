import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#testimonials">TESTIMONIALS</a>
          <a href="#faq">FAQ</a>
          <a href="#">ABOUT</a>
          <a href="#socials">SOCIALS</a>
        </div>

        <button className="glow-button" onClick={()=>{}}>Join Now</button>
      </nav>

      <div className="logo-container">
        <div className="navbar-logo">
          <img src="images/mm-logo.jpg" alt="Logo" />
        </div>
      </div>

      <main className="container">
        <section className="hero">
          <p>MemecoinMania - Official Platform</p>
          <h1 className="hero-h1">Life is what you <span className="hero-make">make</span> it.</h1>
          <h1 id="dynamic-text">
            "Ever Since Joining I have been upping my profits"
          </h1>

          <div className="video-container">
            <video src="videos/mm-vid1.MP4" controls></video>
          </div>
        </section>

        <section className="stats-wrapper">
          <div className="button-container">
            <button className="glow-button" onClick={()=>{}}>Join Now</button>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <h2 className="testimonials-h2">This is just the beginning - <span className="testimonials-real">Real</span> People, <span className="testimonials-real">Real</span> Results!
            Every Success Story Started With One Bold Decision - Yours Is Next</h2>
          <div className="track-horizontal">
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/3R05CCr/Whats-App-Image-2024-12-23-at-15-32-15.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/09PTsVr/Whats-App-Image-2024-12-23-at-15-32-29.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/ph1455k/Whats-App-Image-2024-12-26-at-03-10-44.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/28ynJWZ/Whats-App-Image-2024-11-28-at-23-41-03.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/Rjp1dTm/Whats-App-Image-2024-12-08-at-16-25-11.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/T2whnrL/Whats-App-Image-2024-12-08-at-16-38-28-1.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/PNjR7hV/Whats-App-Image-2024-12-08-at-16-38-28.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/G0VGtN6/Whats-App-Image-2024-12-08-at-16-38-28-2.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/G506Hmr/Whats-App-Image-2024-12-08-at-16-38-28-3.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/SP5kWMQ/Whats-App-Image-2024-12-11-at-12-41-45.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/Lz610bb/Whats-App-Image-2024-12-08-at-16-39-07.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/pzJDFTf/Whats-App-Image-2024-12-15-at-02-30-47-1.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/S7wm5Fg/Whats-App-Image-2024-12-15-at-02-30-47.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/pvHc0wj/Whats-App-Image-2024-12-15-at-02-30-48-1.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/XLW50r6/Whats-App-Image-2024-12-15-at-02-30-48.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/FsPtpzK/Whats-App-Image-2024-12-17-at-20-47-30.jpg"
                alt="Strategic"
              />
            </div>
            <div className="testimonial_card">
              <img
                src="https://i.ibb.co/wy2Y6hZ/Whats-App-Image-2024-12-17-at-20-47-30-1.jpg"
                alt="Strategic"
              />
            </div>
          </div>
        </section>

        <div className="testimonials-button-container">
          <button className="glow-button">Join Now</button>
        </div>

      </main>

      <div className="modal">
        <span className="close-modal">&times;</span>
        <div className="modal-content">
          <img src="" alt="Modal Image" />
        </div>
      </div>

      <section className="faq" id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <div className="faq-question">What is MemecoinMania?</div>
            <div className="faq-answer">
              MemecoinMania is a platform dedicated to helping people understand and navigate the memecoin market. We provide insights, analysis, and strategies for cryptocurrency trading.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">How do I get started?</div>
            <div className="faq-answer">
              Getting started is simple - just click the "Join Now" button at the top of the page. You'll get immediate access to our community, resources, and trading insights.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">What support do you provide?</div>
            <div className="faq-answer">
              We provide 24/7 community support, detailed market analysis, trading signals, and educational resources to help you make informed decisions in the memecoin market.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Is cryptocurrency trading risky?</div>
            <div className="faq-answer">
              Yes, cryptocurrency trading involves significant risks. Market volatility can lead to both profits and losses. We recommend thorough research and never investing more than you can afford to lose.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">What makes your platform different?</div>
            <div className="faq-answer">
              We focus specifically on memecoins and building a supportive community. Our platform combines market analysis, real-time alerts, and educational resources to help our members make informed decisions.
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-message">
          Memecoin Mania is like NO other community in the ENTIRE memecoin space. Once inside, you will discover how this game is REALLY played from top performers who have had immense success in trading memecoins. The information inside and value provided is something you will NOT find anywhere else in the entire memecoin or crypto space. This is the ONLY guarantee we make.
        </div>
        
        <div className="see-inside">
          See You Inside
        </div>

        <div className="final-button-container">
          <button className="glow-button">Join Now</button>
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
        </div>
      </footer>
    </>
  )
}

export default App