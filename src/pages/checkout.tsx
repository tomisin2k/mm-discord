import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Arial', sans-serif;
    }

    body {
      background-color: #000;
      color: #fff;
      min-height: 100vh;
      display: flex;
    }

    .container {
      display: flex;
      width: 100%;
      min-height: 100vh;
    }

    .left-section, .right-section {
      flex: 1;
      padding: 40px;
      overflow-y: auto;
    }

    .left-section {
      border-right: 1px solid #333;
    }

    .unlock-title {
      font-size: 2.5em;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .features-list {
      list-style: none;
    }

    .features-list li {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.2em;
    }

    .checkmark {
      color: #1db954;
    }

    .signup-container {
      max-width: 500px;
      margin: 0 auto;
    }

    .signup-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .signup-header h1 {
      font-size: 2em;
      margin-bottom: 10px;
    }

    .signup-header p {
      color: #888;
    }

    .form-section {
      margin-bottom: 30px;
    }

    .form-section h2 {
      margin-bottom: 20px;
      color: #888;
      font-size: 1.2em;
    }

    .input-field {
      width: 100%;
      padding: 15px;
      margin-bottom: 15px;
      background: #1a1a1a;
      border: 1px solid #333;
      border-radius: 5px;
      color: #fff;
      font-size: 1em;
    }

    .plan-option {
      background: #1a1a1a;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 15px;
      cursor: pointer;
      position: relative;
      border: 1px solid #333;
      transition: all 0.3s ease;
    }

    .plan-option:hover {
      border-color: #1db954;
    }

    .plan-option .price {
      font-size: 2em;
      margin-bottom: 10px;
      font-weight: bold;
    }

    .plan-option .period {
      color: #888;
      font-size: 0.5em;
    }

    .plan-name {
      font-size: 1.5em;
      margin-bottom: 10px;
    }

    .plan-features {
      list-style: none;
      margin-top: 15px;
    }

    .plan-features li {
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #888;
    }

    .most-popular {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #1db954;
      color: black;
      padding: 4px 12px;
      border-radius: 15px;
      font-size: 0.8em;
      font-weight: bold;
    }

    .save-badge {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #1db954;
      color: black;
      padding: 4px 12px;
      border-radius: 15px;
      font-size: 0.8em;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }
      
      .left-section, .right-section {
        padding: 20px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        <section className="left-section">
          <h1 className="unlock-title">
            <span className="key-icon">🔑</span>
            UNLOCK ACCESS TO...
          </h1>
          <ul className="features-list">
            <li><span className="checkmark">✓</span> Live calls and AMAs with Experts</li>
            <li><span className="checkmark">✓</span> 24/7 Support and on-demand guidance</li>
            <li><span className="checkmark">✓</span> Live calls and AMAs with Experts</li>
            <li><span className="checkmark">✓</span> 24/7 Support and on-demand guidance</li>
            <li><span className="checkmark">✓</span> 24/7 Support and on-demand guidance</li>
            <li><span className="checkmark">✓</span> 24/7 Support and on-demand guidance</li>
          </ul>
        </section>

        <section className="right-section">
          <div className="signup-container">
            <div className="signup-header">
              <h1>JOIN MEMECOINMANIA</h1>
              <p>THE WORLD IS YOURS</p>
            </div>

            <div className="form-section">
              <h2>PERSONAL INFORMATION</h2>
              <input type="email" placeholder="Email address" className="input-field" />
              <input type="text" placeholder="First Name" className="input-field" />
              <input type="text" placeholder="Last Name" className="input-field" />
            </div>

            <div className="form-section">
              <h2>SELECT PLAN</h2>
              <div className="plan-option">
                <div className="price">$24.99 <span className="period">/ monthly</span></div>
                <div className="plan-name">Bull Run Club</div>
                <ul className="plan-features">
                  <li><span className="checkmark">✓</span> Daily live broadcasts</li>
                  <li><span className="checkmark">✓</span> Daily live broadcasts</li>
                  <li><span className="checkmark">✓</span> Daily live broadcasts</li>
                </ul>
              </div>

              <div className="plan-option">
                <div className="most-popular">MOST POPULAR</div>
                <div className="price">$74.99 <span className="period">/ 3 months</span></div>
                <div className="plan-name">Diamond Hands</div>
                <ul className="plan-features">
                  <li><span className="checkmark">✓</span> Daily live broadcasts</li>
                  <li><span className="checkmark">✓</span> Daily live broadcasts</li>
                  <li><span className="checkmark">✓</span> Daily live broadcasts</li>
                </ul>
              </div>

              <div className="plan-option">
                <div className="save-badge">SAVE $50</div>
                <div className="price">$249.99 <span className="period">/ 1 year</span></div>
                <div className="plan-name">Crypto Visionary</div>
                <ul className="plan-features">
                  <li><span className="checkmark">✓</span> Daily live broadcasts</li>
                  <li><span className="checkmark">✓</span> Daily live broadcasts</li>
                  <li><span className="checkmark">✓</span> Exclusive chats and lessons</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Checkout;