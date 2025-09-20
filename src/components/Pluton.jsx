const Pluton = () => {
  return (
    <section className="bg-black text-white md:py-10 py-6 px-4 sm:px-6 lg:px-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {/* Left Section - Planet Image */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1758173998/asset-21-1_odubb0.png"
            alt="Pluto"
            className="w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 h-auto rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Middle Section - Text Content */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left bg-gradient-to-b from-gray-900/40 to-gray-800/20 p-6 sm:p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            Pluto
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base md:text-lg  md:text-left">
            Pluto, once considered the ninth planet in our solar system, was
            reclassified as a dwarf planet in 2006. It is a complex and
            fascinating world with a heart-shaped glacier on its surface, a thin
            atmosphere, and five known moons. Its unique orbit is highly
            elliptical and tilted, sometimes bringing it closer to the Sun than
            Neptune.
          </p>

          {/* Facts list - Single Line Sentences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-300 text-[15px] ">
              <li className="flex items-start md:whitespace-nowrap whitespace-normal">
                <span className="text-sm sm:text-xl text-[#8A4C24] mr-3">
                  •
                </span>
                A dwarf planet in the Kuiper Belt
              </li>

              <li className="flex items-start md:whitespace-nowrap whitespace-normal">
                <span className="text-sm sm:text-xl text-[#8A4C24] mr-3">
                  •
                </span>
                Its largest moon is Charon
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Orbit Image */}
        <div className="hidden lg:flex justify-center items-start mt-12">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1758174011/asset-26_qvbl1g.png"
            alt="Pluto's Orbit"
            className="w-48  md:w-64  h-auto drop-shadow-[0_0_25px_rgba(0,200,255,0.4)] transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Pluton;
