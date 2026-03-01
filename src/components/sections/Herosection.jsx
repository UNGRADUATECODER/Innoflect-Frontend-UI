import React from "react";


const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2
                   w-[600px] h-[600px]
                   bg-emerald-500/40 blur-[160px] rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h1 className="text-white text-5xl md:text-6xl sm:text-9xl font-bold leading-tight">
          Optimize Efficiency <br />
          <span className="text-emerald-400">with Data</span>
        </h1>

        <p className="mt-4 font-bold text-white/80 max-w-xl text-lg">
          Enhance business efficiency through precise data, optimizing
          operations and decision-making.
        </p>

        <div className="mt-8 flex gap-4">
           {/* Primary Button */}
  <button
    className="
      px-7 py-3
      bg-emerald-400 text-black
      font-semibold rounded-xl
      shadow-lg shadow-emerald-500/30
      hover:bg-emerald-300
      hover:scale-105
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-emerald-300
    "
  >
    Explore Products
  </button>

  {/* Secondary Button */}
  <button
    className="
      px-7 py-3
      border border-white/40
      text-white font-medium
      rounded-xl
      backdrop-blur-md
      hover:bg-white/10
      hover:border-white
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-white/40
    "
  >
    Learn More
  </button>
        </div>
      </div>

      </div>
    </section>
  );
};

export default HeroSection;
