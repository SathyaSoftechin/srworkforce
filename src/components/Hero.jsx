import heroBg from "../assets/hero-bg.png";
import centerImg from "../assets/hero-center.png";
import img1 from "../assets/hero-1.png";
import img2 from "../assets/hero-2.png";
import img3 from "../assets/hero-3.png";
import img4 from "../assets/hero-4.png";

const Hero = () => {
  return (
    <section
      className="relative w-full"
      style={{ minHeight: "calc(70vh - 60px)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 h-full flex flex-col items-center justify-center text-center text-white pt-16 md:pt-20">
        {/* Heading */}
        <h1 className="text-5xl md:text-4xl font-bold leading-tight mt-16 font-serif">
          India’s largest leading skilling & staffing <br />
          <span className="text-blue-400">Company</span>
        </h1>

        {/* Circle Layout */}
        {/* Circle Row */}
        {/* Circle Row */}
        <div
          className="
  mt-12
  w-full
  overflow-x-auto
  md:overflow-visible
"
        >
          <div
            className="
      flex
      items-center
      justify-start
      md:justify-center
      gap-4
      md:gap-10
      px-6
      md:px-0
      min-w-max
    "
          >
            {/* Small Circle 1 */}
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
              <img src={img1} className="w-full h-full object-cover" />
            </div>

            {/* Small Circle 2 */}
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
              <img src={img2} className="w-full h-full object-cover" />
            </div>

            {/* Center Big Circle */}
            <div className="w-36 h-36 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl flex-shrink-0">
              <img src={centerImg} className="w-full h-full object-cover" />
            </div>

            {/* Small Circle 3 */}
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
              <img src={img3} className="w-full h-full object-cover" />
            </div>

            {/* Small Circle 4 */}
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
              <img src={img4} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 mb-6">
          <a
            href="/contact"
            className="inline-block bg-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
