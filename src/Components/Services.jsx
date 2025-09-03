import React from "react";
import { useNavigate } from "react-router-dom";

// Service Data
const serviceCategories = [
  {
    category: "Social Media Management",
    services: [
      {
        id: "instagram-management",
        icon: "fa-brands fa-instagram",
        title: "Instagram Management",
        description: "Monthly content creation, posting, and audience engagement to grow your Instagram presence.",
      },
      {
        id: "facebook-management",
        icon: "fa-brands fa-facebook-f",
        title: "Facebook Management",
        description: "End-to-end Facebook page handling with regular updates, community engagement, and ad support.",
      },
      {
        id: "social-media-marketing",
        icon: "fa-bullhorn",
        title: "Social Media Marketing",
        description: "Targeted ad campaigns and growth strategies across Instagram and Facebook to boost reach and conversions.",
      },
    ],
  },
  

  {
    category: "Photography",
    services: [
      {
        id: "product-photography",
        icon: "fa-camera",
        title: "Product Photography",
        description: "Capture and edit stunning visuals of your products to make them shine.",
        keyFeatures: [
          "Professional product photoshoot",
          "High-quality retouching & color correction",
          "Optimized for web & social media",
          "Creative styling included",
        ],
      },
      {
        id: "brand-shoots",
        icon: "fa-users",
        title: "Brand & Lifestyle Shoots",
        description: "Bring your brand to life with lifestyle, team, and concept photography.",
        keyFeatures: [
          "On-location or studio shoots",
          "Professional editing & retouching",
          "Creative direction tailored to brand",
          "High-resolution delivery",
        ],
      },
      {
        id: "poster-design",
        icon: "fa-image",
        title: "Poster & Banner Design",
        description: "Design visually appealing static creatives for campaigns and promotions.",
        keyFeatures: [
          "Custom creative layouts",
          "Print & digital-friendly designs",
          "Brand-consistent visuals",
          "Editable formats on request",
        ],
      },
    ],
  },
  
  {
    category: "Videography",
    services: [
      {
        id: "cinematic-videography",
        icon: "fa-video",
        title: "Cinematic Videography",
        description: "Tell captivating stories through beautifully shot cinematic videos.",
        keyFeatures: [
          "4K professional video shoots",
          "Color grading & editing included",
          "Creative storytelling approach",
          "Optimized for social media & ads",
        ],
      },
      {
        id: "commercial-shoots",
        icon: "fa-bullseye",
        title: "Commercial Ad Shoots",
        description: "Professional ad shoots designed for impactful brand campaigns.",
        keyFeatures: [
          "Concept-to-final delivery",
          "Script & direction included",
          "Editing & post-production",
          "High-quality ad-ready formats",
        ],
      },
      {
        id: "video-editing",
        icon: "fa-clapperboard",
        title: "Video Editing",
        description: "Transform raw footage into polished, engaging videos ready for campaigns.",
        keyFeatures: [
          "Cutting, trimming & sequencing",
          "Sound design & background music",
          "Transitions & effects",
          "Export in multiple formats",
        ],
      },
    ],
  },
  

  {
    category: "AI-Powered Solutions",
    services: [
      {
        id: "ai-video-creation",
        icon: "fa-robot",
        title: "AI Video Creation",
        description: "Generate engaging, high-quality videos using AI tools tailored to your brand.",
      },
      {
        id: "ai-image-generation",
        icon: "fa-wand-magic-sparkles",
        title: "AI Image Generation",
        description: "Create unique, eye-catching visuals and product images with AI technology.",
      },
      {
        id: "ai-content-assist",
        icon: "fa-brain",
        title: "AI Content Assistance",
        description: "Boost your content strategy with AI-powered copywriting and idea generation.",
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

