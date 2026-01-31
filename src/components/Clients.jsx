import spotify from "../assets/logo1.png";
import google from "../assets/logo2.png";
import uber from "../assets/logo3.png";
import microsoft from "../assets/logo4.png";
import shopify from "../assets/logo5.png";

const clients = [
  { name: "Spotify", logo: spotify },
  { name: "Google", logo: google },
  { name: "Uber", logo: uber },
  { name: "Microsoft", logo: microsoft },
  { name: "Shopify", logo: shopify },
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="py-20 bg-white scroll-mt-16 md:scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Our Valued Clients
        </h2>

        <div className="mt-10 text-gray-900 font-medium text-lg leading-relaxed">
            <p>We believe that the success of our clients is a testament to our own. If you are seeking a trusted partner for your staffing needs,<br /> we invite you to become a part of our esteemed clientele. Contact us today to discover how we can assist you in achieving your recruitment goals.</p>
        </div>

        {/* Logos Container */}
        <div className="mt-12 bg-sky-300 rounded-xl py-8 px-6">
          
          {/* Mobile = Grid | Desktop = Flex */}
          <div className="grid grid-cols-2 gap-8 md:flex md:items-center md:justify-center md:gap-16">

            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                //   className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
