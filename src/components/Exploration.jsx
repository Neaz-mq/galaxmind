import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Exploration = () => {
  const points = [
    "Cutting-edge aerospace research and development",
    "Sustainable space travel technologies",
    "Advanced data analysis and simulation systems",
    "Global collaboration with leading space agencies",
  ];

  return (
    <section className="relative text-white  bg-black/40 ">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dxohwanal/image/upload/v1758106867/planet-earth-background_cmi9ys.jpg"
        alt="Planet Earth Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Content */}
      <div className="relative bg-black/70 md:py-28 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="min-w-0 pr-0 md:pr-8 lg:pr-12">
            <p className="text-sm uppercase tracking-[4px] text-[#8A4C24] mb-2">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold pt-6">
              Exploration Content
            </h2>

            <p className="text-gray-300 mt-6 leading-relaxed">
              At GalaxMind, we are committed to pushing the boundaries of human
              knowledge and innovation. Our mission is to make space exploration
              accessible, sustainable, and impactful for future generations.
              Through groundbreaking technologies and bold ideas, we aim to
              connect humanity with the universe like never before.
            </p>

            {/* Bullet Points (two columns on small+, single column on xs) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <FaCheckCircle className="flex-shrink-0 mt-1 text-[#8A4C24]" />
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex items-start justify-center md:justify-end">
            <motion.img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1758105298/image-44_dmdjih.png"
              alt="Exploration Rocket"
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[460px] object-contain"
              animate={{
                y: [0, -20, 0], // floating effect
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exploration;
