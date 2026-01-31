import whyChooseUsImg from "../assets/why.png";

const reasons = [
  {
    title: "Trained & Police-Verified Drivers",
    description:
      "All our drivers are professionally trained, background-checked, and police-verified to ensure safety, trust, and reliability.",
  },
  {
    title: "Flexible Hiring Models",
    description:
      "Choose what fits your business best — daily, weekly, or monthly driver deployment with zero hassle.",
  },
  {
    title: "On-Demand & Long-Term Availability",
    description:
      "Instant driver availability for peak hours, plus stable long-term drivers for continuous operations.",
  },
  {
    title: "Reduced Operational & HR Costs",
    description:
      "We handle recruitment, verification, onboarding, and replacements—saving you time, money, and management effort.",
  },
  {
    title: "Reliable Backup Drivers",
    description:
      "No service disruptions. We provide quick replacement drivers to keep your operations running smoothly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="whychooseus"
      className="py-20 bg-white scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900">
          Why Choose Us
        </h2>

        {/* Content */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Styled List */}
          <div className="space-y-5">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-600"
                    >
                      <path d="M5 10l4 4L19 4" />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-gray-900 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center md:justify-end h-[650px]">
            <img
              src={whyChooseUsImg}
              alt="Why Choose SR Work Force"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
