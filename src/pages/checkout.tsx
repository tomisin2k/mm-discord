import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Load your publishable key from Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
console.log(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface Plan {
  name: string;
  price: number; // Price in cents
}

const CheckoutForm = ({ selectedPlan }: { selectedPlan: Plan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!stripe || !elements) {
      setError("Stripe is not loaded.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Card element not found.");
      setLoading(false);
      return;
    }

    try {
      // Fetch the PaymentIntent client secret from your server
      const response = await fetch(
        "http://localhost:3001/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: selectedPlan.price }),
        }
      );

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        throw new Error("Failed to create PaymentIntent.");
      }

      // Confirm the card payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (result.error) {
        setError(result.error.message || "Payment failed.");
      } else if (result.paymentIntent?.status === "succeeded") {
        alert("Payment successful!");
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#fff",
              "::placeholder": {
                color: "#888",
              },
            },
          },
        }}
      />
      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
      <button
        type="submit"
        disabled={!stripe || loading}
        style={{ marginTop: "20px" }}
      >
        {loading
          ? "Processing..."
          : `Pay $${(selectedPlan.price / 100).toFixed(2)}`}
      </button>
    </form>
  );
};

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isPlanConfirmed, setIsPlanConfirmed] = useState(false);

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsPlanConfirmed(false);
  };

  const handleConfirmPlan = () => {
    if (selectedPlan) {
      setIsPlanConfirmed(true);
    }
  };

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
          }

          body {
            background-color: #0a0a0a;
            color: #fff;
            min-height: 100vh;
            display: flex;
            background-image: linear-gradient(rgba(128, 0, 128, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(128, 0, 128, 0.05) 1px, transparent 1px);
            background-size: 30px 30px;
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
            border-right: 1px solid rgba(128, 0, 128, 0.3);
            display: none; /* Hidden by default */
          }

          .unlock-title {
            font-size: 2.5em;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #fff;
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
            color: #aaa;
          }

          .checkmark {
            color: rgb(10, 108, 10);
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
            color: #fff;
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
            background: rgba(10, 10, 10, 0.8);
            border: 1px solid rgba(128, 0, 128, 0.3);
            border-radius: 8px;
            color: #fff;
            font-size: 1em;
            transition: all 0.3s ease;
          }

          .input-field:focus {
            border-color: rgba(128, 0, 128, 0.8);
            box-shadow: 0 0 10px rgba(128, 0, 128, 0.4);
          }

          .plan-option {
            background: rgba(10, 10, 10, 0.8);
            padding: 20px;
            border-radius: 16px;
            margin-bottom: 15px;
            cursor: pointer;
            position: relative;
            border: 1px solid rgba(128, 0, 128, 0.3);
            transition: all 0.3s ease;
          }

          .plan-option.selected {
            border-color: rgba(128, 0, 128, 0.8);
            box-shadow: 0 0 20px rgba(128, 0, 128, 0.2);
          }

          .plan-option:hover {
            border-color: rgba(128, 0, 128, 0.8);
            box-shadow: 0 0 20px rgba(128, 0, 128, 0.2);
            transform: translateY(-5px);
          }

          .plan-option .price {
            font-size: 2em;
            margin-bottom: 10px;
            font-weight: bold;
            color: #fff;
          }

          .plan-option .period {
            color: #888;
            font-size: 0.5em;
          }

          .plan-name {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #fff;
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
            color: #aaa;
          }

          .most-popular {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(10, 108, 10, 0.2);
            color: rgb(10, 108, 10);
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.8em;
            font-weight: bold;
          }

          .save-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(10, 108, 10, 0.2);
            color: rgb(10, 108, 10);
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.8em;
            font-weight: bold;
          }

          .plan-confirmation {
            margin-top: 20px;
            text-align: center;
          }

          .plan-confirmation p {
            font-size: 1.2em;
            color: #fff;
          }

          .confirm-button {
            background: rgba(128, 0, 128, 0.8);
            color: #fff;
            border: none;
            padding: 14px 20px;
            margin-top: 17px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1em;
            transition: all 0.3s ease;
          }

          .confirm-button:hover {
            background: rgba(128, 0, 128, 1);
          }

          /* Show left section only on desktop */
          @media (min-width: 769px) {
            .left-section {
              display: block; /* Show on desktop */
            }
          }

          /* Mobile Responsive Adjustments */
          @media (max-width: 768px) {
            .container {
              flex-direction: column;
            }

            .left-section {
              display: none; /* Hide on tablet and mobile */
            }

            .right-section {
              padding: 20px;
            }

            .signup-container {
              max-width: 100%;
            }

            .plan-option {
              padding: 15px;
            }

            .plan-option .price {
              font-size: 1.5em;
            }

            .plan-option .period {
              font-size: 0.4em;
            }

            .plan-name {
              font-size: 1.2em;
            }

            .plan-features li {
              font-size: 0.9em;
            }

            .most-popular, .save-badge {
              font-size: 0.7em;
              padding: 3px 8px;
            }
          }
        `}
      </style>

      <div className="container">
        {/* Left Section - Only visible on desktop */}
        <section className="left-section">
          <h1 className="unlock-title">
            <span className="key-icon">🔑</span>
            UNLOCK ACCESS TO...
          </h1>
          <ul className="features-list">
            <li>
              <span className="checkmark">✓</span> Live calls and AMAs with
              Experts
            </li>
            <li>
              <span className="checkmark">✓</span> 24/7 Support and on-demand
              guidance
            </li>
            <li>
              <span className="checkmark">✓</span> Exclusive memecoin insights
            </li>
          </ul>
        </section>

        {/* Right Section */}
        <section className="right-section">
          <div className="signup-container">
            <div className="signup-header">
              <h1>JOIN MEMECOINMANIA</h1>
              <p>THE WORLD IS YOURS</p>
            </div>

            <div className="form-section">
              <h2>SELECT PLAN</h2>
              <div
                className={`plan-option ${
                  selectedPlan?.name === "Bull Run Club" ? "selected" : ""
                }`}
                onClick={() =>
                  handlePlanSelect({ name: "Bull Run Club", price: 2499 })
                }
              >
                <div className="price">
                  $24.99 <span className="period">/ monthly</span>
                </div>
                <div className="plan-name">Bull Run Club</div>
                <ul className="plan-features">
                  <li>
                    <span className="checkmark">✓</span> Daily live broadcasts
                  </li>
                  <li>
                    <span className="checkmark">✓</span> Exclusive insights
                  </li>
                </ul>
              </div>

              <div
                className={`plan-option ${
                  selectedPlan?.name === "Diamond Hands" ? "selected" : ""
                }`}
                onClick={() =>
                  handlePlanSelect({ name: "Diamond Hands", price: 7499 })
                }
              >
                <div className="most-popular">MOST POPULAR</div>
                <div className="price">
                  $74.99 <span className="period">/ 3 months</span>
                </div>
                <div className="plan-name">Diamond Hands</div>
                <ul className="plan-features">
                  <li>
                    <span className="checkmark">✓</span> Daily live broadcasts
                  </li>
                  <li>
                    <span className="checkmark">✓</span> Exclusive insights
                  </li>
                </ul>
              </div>

              <div
                className={`plan-option ${
                  selectedPlan?.name === "Crypto Visionary" ? "selected" : ""
                }`}
                onClick={() =>
                  handlePlanSelect({ name: "Crypto Visionary", price: 24999 })
                }
              >
                <div className="save-badge">SAVE $50</div>
                <div className="price">
                  $249.99 <span className="period">/ 1 year</span>
                </div>
                <div className="plan-name">Crypto Visionary</div>
                <ul className="plan-features">
                  <li>
                    <span className="checkmark">✓</span> Daily live broadcasts
                  </li>
                  <li>
                    <span className="checkmark">✓</span> Exclusive insights
                  </li>
                  <li>
                    <span className="checkmark">✓</span> Priority support
                  </li>
                </ul>
              </div>

              {selectedPlan && !isPlanConfirmed && (
                <div className="plan-confirmation">
                  <p>
                    You selected: <strong>{selectedPlan.name}</strong>
                  </p>
                  <button
                    onClick={handleConfirmPlan}
                    className="confirm-button"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}
            </div>

            {/* Stripe Payment Section */}
            {isPlanConfirmed && selectedPlan && (
              <div className="form-section">
                <h2>PAY WITH CARD</h2>
                <Elements stripe={stripePromise}>
                  <CheckoutForm selectedPlan={selectedPlan} />
                </Elements>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Checkout;
