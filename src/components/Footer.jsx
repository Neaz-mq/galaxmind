import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative w-full h-[300px] flex flex-col justify-between text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/space.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
        {/* Logo + Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-11/12 max-w-7xl mx-auto">
          {/* Logo */}
          <h1 className="text-3xl font-bold mb-4 lg:mb-0">
            GALAXMIND
          </h1>

          {/* Navigation */}
          <nav className="flex space-x-6 text-sm sm:text-base">
            <a href="#" className="hover:text-purple-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              About Us
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Success
            </a>
            <a href="#" className="hover:text-purple-400 transition">
              Services
            </a>
          </nav>
        </div>

        {/* Copyright + Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-11/12 max-w-7xl mx-auto mt-6">
          <p className="text-xs sm:text-sm text-white">
            © {currentYear} Galaxmind All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded bg-black/40 hover:bg-[#8A4C24] transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded bg-black/40 hover:bg-[#8A4C24] transition"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded bg-black/40 hover:bg-[#8A4C24] transition"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;