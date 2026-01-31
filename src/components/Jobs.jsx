import deliveryBoy from "../assets/deliveryboy.png"
import driver from "../assets/driver.png"

const jobs = [
  {
    image: deliveryBoy,
    description:
      "We recruit, train, and deploy delivery executives for leading food delivery and e-commerce platforms, helping businesses scale faster without operational stress.",
  },
  {
    image: driver,
    description:
      "We offer trained, verified car drivers and hailing services for ride-hailing platforms, corporate mobility, and on-demand transportation needs—ensuring safe, reliable, and efficient rides.",
  },
]

const Jobs = () => {
  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900">
          Jobs we provide
        </h2>

        {/* Jobs List */}
        <div className="mt-12 space-y-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={job.image}
                  alt="Job role"
                  className="w-36 h-36 object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-gray-600 md:text-base leading-relaxed text-center md:text-left">
                {job.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Jobs
