const CTA = () => {
  return (
    <section className="mb-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-black to-gray-900 px-8 py-16 md:px-16">

          {/* Decorative Shapes */}
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute left-40 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                We Deliver Talent Work People <br />
                Start Your Journey Today.
              </h2>
            </div>

            {/* CTA Button */}
            <div className="flex md:justify-end">
              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-14 py-4
                  rounded-full
                  bg-white text-gray-900
                  font-semibold
                  shadow-lg
                  hover:bg-gray-200
                  transition mr-10 text-lg
                "
              >
                Contact Us
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
