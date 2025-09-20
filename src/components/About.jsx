import React from 'react';

const About = () => {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center md:py-16 py-2 px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxohwanal/image/upload/v1758344019/image-51_ew1ije.png')",
      }}
    >
      {/* Overlay to darken background slightly */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-7xl text-white">
        {/* Right content */}
        <div className="w-full md:w-1/2 md:ml-auto mt-12 md:mt-0 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-[#8A4C24] mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Pioneering the Next Frontier
          </h2>
          <p className="text-gray-300 leading-relaxed mb-10 text-base sm:text-lg">
            We are dedicated to pushing the boundaries of human knowledge and
            technological capability. Our mission is to explore the cosmos,
            innovate for a sustainable future, and inspire the next generation
            of pioneers. We believe that the biggest challenges require the
            boldest visions.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex items-start gap-4">
              <span className="text-orange-400 text-4xl">🚀</span>
              <div>
                <h3 className="text-lg font-semibold">Proven Missions</h3>
                <p className="text-gray-400 text-sm sm:text-base mt-2">
                  We have a track record of successful projects, from deploying
                  advanced orbital satellites to developing sustainable energy
                  solutions for both Earth and space.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-orange-400 text-4xl">🌟</span>
              <div>
                <h3 className="text-lg font-semibold">Innovative Partners</h3>
                <p className="text-gray-400 text-sm sm:text-base mt-2">
                  Our partnerships with leading space agencies and technology
                  companies drive our most ambitious projects, ensuring we stay
                  at the forefront of global innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
