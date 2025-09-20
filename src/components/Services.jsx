import { FaBookOpen, FaBrain, FaRocket } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaBookOpen className="text-5xl mx-auto text-[#8A4C24]" />,
      title: "Study",
      desc: "Gain structured knowledge with modern tools that make learning easier and more effective for everyone.",
    },
    {
      icon: <FaBrain className="text-5xl mx-auto text-[#8A4C24]" />,
      title: "Remember",
      desc: "Enhance your memory and retain information with techniques designed to boost long-term understanding.",
    },
    {
      icon: <FaRocket className="text-5xl mx-auto text-[#8A4C24]" />,
      title: "Take Off",
      desc: "Turn your ideas into reality and launch forward with the confidence and resources you need to succeed.",
    },
  ];

  return (
    <section className="bg-black text-white py-36 px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[4px] text-[#8A4C24]">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold pt-6">
          Solutions For All Your Needs
        </h2>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0f0f12] p-8 rounded-lg text-center relative group mt-6"
          >
            {/* Icon */}
            {service.icon}

            {/* Title */}
            <h3 className="text-xl font-semibold mt-6">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-4">{service.desc}</p>

            {/* Round Button */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <button className="p-3 rounded-full text-black bg-[#8A4C24] transition">
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
