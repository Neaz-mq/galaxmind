import { useEffect } from "react";

const Success = () => {
  const stats = [
    { value: "20 M", label: "Miles Traveled", color: "red" },
    { value: "900 Mph", label: "Average Speed", color: "blue" },
    { value: "200 K", label: "Successful Landings", color: "yellow" },
    { value: "10+", label: "Space Missions", color: "cyan" },
  ];

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    document.head.appendChild(styleSheet);

    const colors = {
      red: "rgba(239, 68, 68, 1)",
      blue: "rgba(59, 130, 246, 1)",
      yellow: "rgba(250, 204, 21, 1)",
      cyan: "rgba(6, 182, 212, 1)",
    };

    stats.forEach((stat) => {
      const color = stat.color;
      const keyframesName = `spin-slow-${color}`;
      const rule = `@keyframes ${keyframesName} {
        0% { transform: rotate(0deg); box-shadow: 0 0 10px 5px rgba(255,255,255,0.1); }
        50% { transform: rotate(180deg); box-shadow: 0 0 40px 10px ${colors[color]}; }
        100% { transform: rotate(360deg); box-shadow: 0 0 10px 5px rgba(255,255,255,0.1); }
      }`;
      styleSheet.sheet.insertRule(rule, styleSheet.sheet.cssRules.length);
    });

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const colors = {
    red: "#ef4444",
    blue: "#3b82f6",
    yellow: "#facc15",
    cyan: "#06b6d4",
  };

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-12 font-sans">
      {/* Top Section */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-[#8A4C24]">
          Success
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
          Our Space Count
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-10 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="relative rounded-full flex items-center justify-center p-1 transition-shadow duration-300
                w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 "
                style={{
                  border: `4px solid ${colors[stat.color]}`,
                  boxShadow: `0 0 25px ${colors[stat.color]}`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  style={{
                    animation: `spin-slow-${stat.color} 5s linear infinite`,
                  }}
                ></div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl  font-bold">
                    {stat.value}
                  </span>
                  <p className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg ">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 md:mt-28 items-center">
        {/* Left - Orbit Diagram */}
        <div className="flex justify-center items-center">
          <img
            src="/images/orbit.gif"
            alt="Planetary Orbit Diagram"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover rounded-full"
          />
        </div>

        {/* Right - Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Aeronautics & Space Exploration
          </h2>
          <p className="text-gray-400 mt-6 leading-relaxed text-sm sm:text-base md:text-lg">
            GalaxMind has been at the forefront of aeronautics and space
            exploration, pioneering sustainable technologies for interstellar
            travel. Our team of scientists and engineers develops cutting-edge
            spacecraft, satellite systems, and propulsion technologies to
            advance humanity's understanding of the cosmos. From orbiting
            satellites to deep-space missions, our innovations are helping
            humanity reach farther than ever before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Success;
