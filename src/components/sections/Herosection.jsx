const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-800 to-emerald-600 text-white">
      
      {/* Background Glow */}
      <div
        className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2
                   w-[500px] h-[500px]
                   bg-emerald-700/20 blur-3xl rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Optimize Efficiency <br />
          <span className="text-emerald-300">with Data</span>
        </h1>

        <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
          Enhance business efficiency through precise data, optimizing
          operations and decision-making.
        </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full">

  {/* Primary Button */}
  <button
    className="
      w-full sm:w-auto
      px-8 py-3.5
      bg-gradient-to-r from-emerald-400 to-emerald-500
      text-slate-900
      font-semibold text-base
      rounded-2xl
      shadow-lg shadow-emerald-900/30
      hover:shadow-emerald-500/40
      hover:-translate-y-1
      hover:scale-[1.03]
      active:scale-95
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-emerald-300
    "
  >
    Explore Products
  </button>

  {/* Secondary Button */}
  <button
    className="
      w-full sm:w-auto
      px-8 py-3.5
      border border-white/30
      text-white font-medium text-base
      rounded-2xl
      backdrop-blur-md
      bg-white/5
      hover:bg-white/10
      hover:-translate-y-1
      hover:scale-[1.03]
      active:scale-95
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-white/30
    "
  >
    Learn More
  </button>

</div>
      </div>
    </section>
  );
};

export default HeroSection;