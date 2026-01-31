import missionImg from "../assets/mission.png";
import visionImg from "../assets/vision.png";
import goalsImg from "../assets/goals.png";

const aboutData = [
  {
    title: "Our Mission",
    image: missionImg,
    description:
      "To provide safe, reliable, and professionally trained drivers through flexible and scalable hiring models, helping mobility and hailing partners operate smoothly while reducing operational and workforce management challenges.",
  },
  {
    title: "Our Vision",
    image: visionImg,
    description:
      "To become a leading driver workforce and mobility support partner, trusted across cities for setting high standards in safety, reliability, and service excellence in the transportation and ride-hailing ecosystem.",
  },
  {
    title: "Our Goals",
    image: goalsImg,
    description:
      "We provide trained, police-verified drivers with flexible hiring and on-demand availability for safe, reliable, and uninterrupted operations. Our end-to-end driver management and backup network reduce costs while powering the growth of mobility businesses.",
  },
];

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900">
          About Us
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

          {aboutData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-white"
            >
              {/* Card Title */}
              <h3 className="text-center font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              {/* Image */}
              <div className="mt-4 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
