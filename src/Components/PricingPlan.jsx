import React from "react";

const PricingPlan = () => {
  return (
   <div className="pricing-container">
  {/* Header */}
  <h1 className="display-4 text-uppercase text-center mb-5">Competitive Pricing</h1>

  {/* Pricing Plans */}
  <div className="pricing-inner">
    <div className="row justify-content-center">
      {/* Plans */}
      {[
        {
          title: "Starter Plan",
          price: "₹14,999",
          features: [
            "Instagram & Facebook Management (8 posts/month)",
            "Basic Product Photography",
            "SEO Starter Setup (On-page basics)",
            "2 Posters/Banners per month",
            "Monthly Performance Report",
          ],
        },
        {
          title: "Growth Plan",
          price: "₹29,999",
          features: [
            "Everything in Starter Plan",
            "Advanced Social Media Strategy (12 posts + reels)",
            "Cinematic Video Editing (1/month)",
            "Content Marketing & Blog Writing",
            "AI-Powered Visuals for Ads",
            "Advanced SEO + Keyword Strategy",
            "Monthly Analytics Dashboard",
          ],
        },
        {
          title: "Premium Plan",
          price: "₹49,999",
          features: [
            "Everything in Growth Plan",
            "Full Photography & Videography Package",
            "Commercial Ad Shoots",
            "AI Video + Image Content",
            "Website Design & Development",
            "PPC Ad Campaigns & Influencer Marketing",
            "24/7 Strategy & Support",
          ],
        },
      ].map((plan, index) => (
        <div key={index} className="col-lg-4 col-md-6 mb-4">
          <div className="pricing-card">
            {/* Plan Title */}
            <h2 className="plan-title">{plan.title}</h2>

            {/* Price Section */}
            <div className="price-section">
              <p className="starts-from">Starts from</p>
              <h1 className="price">
                {plan.price}
                <span className="price-duration">/ Month</span>
              </h1>
            </div>

            {/* Features List */}
            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <div className="btn-container">
      <a href="#" className="btn btn-dark order-now-btn">Get Started</a>
    </div>
  </div>

      {/* CSS */}
      <style jsx>{`
        /* Outer Container */
        .pricing-container {
          background: #ffaa17;
          width: 90%;
          max-width: 1400px;
          margin: 40px auto;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border: 6px solid #212529;
          animation: fadeIn 1s ease-in-out;
        }

        /* Inner Section */
        .pricing-inner {
          background: #ffaa17;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        /* Grid */
        .row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        /* Pricing Card */
        .pricing-card {
          background: #fffdf3;
          border: 1px solid #e0e0e0;
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          height: 100%;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        /* Plan Titles */
        .plan-title {
          font-size: 1.8rem;
          font-weight: bold;
          text-transform: uppercase;
          color: #212529;
          margin-bottom: 10px;
        }

        /* Price Section */
        .price-section {
          border-top: 2px solid #212529;
          border-bottom: 2px solid #212529;
          padding: 15px 0;
          width: 100%;
          max-width: 80%;
        }

        .starts-from {
          color: #6c757d;
          font-size: 1rem;
          margin: 0;
        }

        .price {
          color: #000;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .price-duration {
          font-size: 1rem;
          color: #6c757d;
          margin-left: 5px;
          display: inline-block;
          vertical-align: top;
        }

        /* Features List */
        .features-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
          text-align: left;
          width: 100%;
        }

        .features-list li {
          margin-bottom: 10px;
          color: #212529;
        }

        /* Button */
        .btn-container {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .order-now-btn {
          background: #212529;
          color: #fff;
          padding: 12px 25px;
          text-transform: uppercase;
          border-radius: 5px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          font-size: 1rem;
        }

        .order-now-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .pricing-container {
            padding: 20px;
          }
          .pricing-inner {
            padding: 15px;
          }
          .col-lg-4 {
            width: 100%;
          }
          /* Center Price on Mobile */
          .price-section {
            max-width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingPlan;
