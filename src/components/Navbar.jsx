import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars, FaInstagram, FaFacebookF, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const imageUrl =
    "https://res.cloudinary.com/dxohwanal/image/upload/v1758091799/Banner_almyda.jpg";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const orbitImageVariants = {
    hidden: { x: 0, y: 0, scale: 1, rotate: 0 },
    show: {
      x: [0, 20, 40, 20, 0, -20, -40, -20, 0],
      y: [0, -10, 0, 10, 0, -10, 0, 10, 0],
      rotate: [0, 15, -15, 10, -10, 0, 15, -15, 0],
      scale: [1, 1.05, 0.95, 1, 1, 1.05, 0.95, 1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const floatingImageVariants = {
    hidden: { opacity: 0, y: 20, rotate: 0, scale: 1 },
    show: {
      opacity: 1,
      y: [0, -10, 5, -5, 0],
      rotate: [0, 5, -5, 3, 0],
      scale: [1, 1.05, 0.95, 1],
      transition: {
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        rotate: {
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        scale: {
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
        delay: Math.random() * 0.5,
      },
    },
  };

  const planetVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: [0.95, 1.05, 0.95, 1],
      opacity: 1,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <nav
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Top Navbar */}
      <motion.div
        className="relative z-20 flex items-center justify-between p-2 sm:p-4 md:p-6 text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Hamburger + Social Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div
            className="p-2 sm:p-3 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-xl sm:text-2xl md:text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>
          <FaInstagram className="text-lg sm:text-xl md:text-2xl cursor-pointer" />
          <FaFacebookF className="text-lg sm:text-xl md:text-2xl cursor-pointer" />
        </div>

        {/* Website Name */}
        <div className="flex-1 text-center">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase">
            GALAXMIND
          </span>
        </div>

        {/* Register + Search */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a
            href="#"
            className="hidden md:block border px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm md:text-sm hover:bg-white hover:text-black transition-colors duration-300"
          >
            Register
          </a>
          <FaSearch className="text-lg sm:text-xl md:text-2xl cursor-pointer" />
        </div>
      </motion.div>

      {/* Hero Animated Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.img
          src="/images/man.png"
          alt="Space Object 1"
          className="absolute w-16 h-16 md:w-40 md:h-40 top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
          variants={orbitImageVariants}
          initial="hidden"
          animate="show"
        />

        <motion.img
          src="/images/p2.png"
          alt="Space Object 2"
          className="absolute w-12 h-12 md:w-16 md:h-16 top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
          variants={floatingImageVariants}
        />
        <motion.img
          src="/images/p3.png"
          alt="Space Object 3"
          className="absolute w-20 h-20 md:w-24 md:h-24 bottom-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0"
          variants={floatingImageVariants}
        />
        <motion.img
          src="/images/p1.png"
          alt="Space Object 4"
          className="absolute w-14 h-14 md:w-18 md:h-18 top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0"
          variants={floatingImageVariants}
        />
        <motion.img
          src="/images/p2.png"
          alt="Space Object 5"
          className="absolute w-18 h-18 md:w-22 md:h-22 bottom-1/4 right-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0"
          variants={floatingImageVariants}
        />

        <motion.div
          className="relative flex items-center justify-center"
          variants={planetVariants}
        >
          <div className="absolute z-20 text-center">
            <motion.h1
              className="text-8xl md:text-9xl font-bold font-['Arial']"
              variants={textVariants}
            >
              AI
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mt-2 tracking-wide font-['Arial']"
              variants={textVariants}
            >
              IN SPACE SCIENCE
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Info */}
      <motion.div
        className="absolute bottom-4 left-4 z-10 text-white p-4 hidden md:block"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex space-x-12">
          <div>
            <h3 className="font-light text-gray-400">Moons</h3>
            <p className="font-semibold">Phobos, Deimos</p>
          </div>
          <div>
            <h3 className="font-light text-gray-400">Radius</h3>
            <p className="font-semibold">3,390 km</p>
          </div>
          <div>
            <h3 className="font-light text-gray-400">Orbital Period</h3>
            <p className="font-semibold">687 Day</p>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0e0f12] text-white flex flex-col lg:flex-row items-center justify-center px-8 py-12">
          {/* Close Button */}
          <div
            className="absolute top-4 right-4 sm:top-10 sm:right-16 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer text-2xl sm:text-3xl md:text-4xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </div>

          {/* Fancy Animated Website Name */}
          <motion.h1
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 120 }}
            className="absolute top-4 sm:top-10 left-1/2 transform -translate-x-1/2 text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest"
          >
            GALAXMIND
          </motion.h1>

          <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-16 mt-16 lg:mt-48">
            {/* Navigation */}
            <div className="flex-1">
              <h2 className="text-lg text-gray-400 mb-4">Home</h2>
              <ul className="space-y-4">
                <li className="text-xl hover:text-orange-400 transition">
                  Services
                </li>
                <li className="text-xl hover:text-orange-400 transition">
                  About
                </li>
                <li className="text-xl hover:text-orange-400 transition">
                  Success
                </li>
                <li className="text-xl hover:text-orange-400 transition">
                  Shop
                </li>
                <li className="text-xl hover:text-orange-400 transition">
                  Contact Us
                </li>
              </ul>
            </div>

            {/* Submenu */}
            <div className="flex-1">
              <ul className="space-y-2">
                <li>Computer AI</li>
                <li>Construction</li>
                <li>Automobile</li>
                <li>Data Analytics</li>
                <li>Digital Marketing</li>
                <li>Ecommerce</li>
                <li>Education</li>
                <li>Fashion</li>
                <li>Finance</li>
              </ul>
            </div>

            {/* Image and Contact */}
            <div className="flex-1 flex flex-col items-start gap-4">
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1758099010/Petrolium-Chamber_ldez6u.jpg"
                alt="Industry"
                className="w-full h-64 object-cover rounded"
              />

              <div className="text-sm mt-4">
                <p>
                  <strong>Email:</strong> neaz@gmail.com
                </p>
                <p>
                  <strong>Contact Us:</strong> +880 130 3660481
                </p>
              </div>

              <div className="flex gap-4 mt-4">
                <FaInstagram className="cursor-pointer text-xl sm:text-2xl md:text-3xl" />
                <FaFacebookF className="cursor-pointer text-xl sm:text-2xl md:text-3xl" />
                <FaSearch className="cursor-pointer text-xl sm:text-2xl md:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;