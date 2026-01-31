import healthCare from "../assets/healthcare.png";
import retail from "../assets/retail.png";
import logistics from "../assets/logistics.png";
import construction from "../assets/construction.png";
import automobile from "../assets/automobile.png";
import manufacturing from "../assets/manufacturing.png";
import hospitality from "../assets/hospitality.png";
import telecom from "../assets/telecom.png";

const services = [
  { title: "Health care", icon: healthCare },
  { title: "Retail", icon: retail },
  { title: "Logistics", icon: logistics },
  { title: "Construction", icon: construction },
  { title: "Auto Mobile", icon: automobile },
  { title: "Manufacturing", icon: manufacturing },
  { title: "Hospitality", icon: hospitality },
  { title: "Telecom", icon: telecom },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          SR Work Force Group – A Trusted Workforce & Mobility
          <br />
          <span className="block mt-2">Solutions Partner</span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          At SR Work Force Group, we specialize in delivering reliable workforce
          and mobility support solutions for businesses across industries. Our
          services are designed to help organizations build a skilled, job-ready
          workforce through structured training and efficient workforce
          management. Our commitment to quality, compliance, and service
          excellence reflects our focus on workforce development, operational
          efficiency, and long-term industry growth.
        </p>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-36 h-auto flex items-center justify-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-30 h-auto object-contain"
                />
              </div>

              {/* Label */}
              <p className="mt-4 font-medium text-gray-800 whitespace-nowrap text-center text-sm md:text-base">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
