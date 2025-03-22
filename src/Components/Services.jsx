import React from "react";
import { useNavigate } from "react-router-dom";

// Service Data
const serviceCategories = [
  {
    category: "Content Creation",
    services: [
      {
        id: "product-photography",
        icon: "fa-camera",
        title: "Product Photography",
        description: "Capture stunning visuals of your products to make them shine.",
      },
      {
        id: "cinematic-videography",
        icon: "fa-video",
        title: "Cinematic Videography",
        description: "Tell captivating stories through beautifully shot cinematic videos.",
      },
      {
        id: "commercial-shoots",
        icon: "fa-bullseye",
        title: "Commercial Shoots",
        description: "Professional shoots tailored for marketing and branding success.",
      },
    ],
  },
  {
    category: "Social Media Management",
    services: [
      {
        id: "instagram-marketing",
        icon: "fa-brands fa-instagram",
        title: "Instagram Marketing",
        description: "Boost engagement and grow your brand with tailored Instagram strategies.",
      },
      {
        id: "facebook-marketing",
        icon: "fa-brands fa-facebook-f",
        title: "Facebook Marketing",
        description: "Create impactful campaigns and connect with your audience on Facebook.",
      },
      {
        id: "social-media-handling",
        icon: "fa-share-alt",
        title: "Social Media Handling",
        description: "End-to-end management of your social media presence across platforms.",
      },
    ],
  },
  {
    category: "Digital Marketing",
    services: [
      {
        id: "seo-optimization",
        icon: "fa-magnifying-glass-chart",
        title: "SEO Optimization",
        description: "Increase your website's visibility and rank higher on search engines.",
      },
      {
        id: "smm-strategies",
        icon: "fa-bullhorn",
        title: "SMM Strategies",
        description: "Leverage social media platforms to drive traffic and build brand awareness.",
      },
      {
        id: "content-marketing",
        icon: "fa-pen-nib",
        title: "Content Marketing",
        description: "Craft compelling content that resonates with your audience and drives action.",
      },
    ],
  },
  {
    category: "Web Solutions",
    services: [
      {
        id: "website-design",
        icon: "fa-laptop-code",
        title: "Website Design",
        description: "Design stunning, user-friendly websites tailored to your brand identity.",
      },
      {
        id: "website-development",
        icon: "fa-code",
        title: "Website Development",
        description: "Develop fast, secure, and scalable websites with cutting-edge technologies.",
      },
    ],
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="container-fluid py-5" style={{ background: "#f0f0f3" }}>
      <div className="container pt-5 pb-3">
        {/* Section Title */}
        <h1 className="display-4 text-uppercase text-center mb-5" style={{ color: "#222", fontWeight: "bold" }}>
          Our Creative Services
        </h1>

        {/* Category Loop */}
        {serviceCategories.map((category, index) => (
          <div key={index} className="mb-5">
            {/* Category Title */}
            <h2 className="text-center text-uppercase mb-4" style={{ color: "#ffaa17", fontWeight: "700" }}>
              {category.category}
            </h2>

            {/* Services Loop */}
            <div className="row">
              {category.services.map((service, idx) => (
                <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                  <div className="service-item" onClick={() => handleServiceClick(service.id)}>
                    <div className="service-content">
                      <div className="service-icon">
                        <i className={`fa ${service.icon}`}></i>
                      </div>
                      <h4 className="service-title">{service.title}</h4>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Service Item */
        .service-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 40px 20px;
          text-align: center;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          color: #222;
          overflow: hidden;
        }

        /* Hover Effects */
        .service-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        /* Service Content */
        .service-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          padding: 20px;
        }

        /* Service Icon */
        .service-icon {
          font-size: 50px;
          color: #ffaa17;
        }

        /* Service Title */
        .service-title {
          font-size: 24px;
          font-weight: 700;
        }

        /* Service Description */
        .service-description {
          font-size: 16px;
          color: #555;
          max-width: 90%;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .service-item {
            padding: 20px;
            max-width: 100%;
            margin: 0 auto;
          }

          .service-icon {
            font-size: 40px;
          }

          .service-title {
            font-size: 20px;
          }

          .service-description {
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .service-item {
            padding: 15px;
          }

          .service-icon {
            font-size: 35px;
          }

          .service-title {
            font-size: 18px;
          }

          .service-description {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;

