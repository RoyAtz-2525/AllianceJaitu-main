const AboutHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2859B808_1px,transparent_1px),linear-gradient(to_bottom,#2859B808_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Top Left Large Diagonal Shape */}
      <div className="absolute -left-32 -top-32 h-[420px] w-[700px] -rotate-12 bg-[#2859B8]/[0.04]" />

      {/* Bottom Right Large Diagonal Shape */}
      <div className="absolute -bottom-40 -right-32 h-[400px] w-[700px] rotate-12 bg-[#F59A01]/[0.05]" />

      {/* Decorative Lines */}
      <div className="absolute left-[8%] top-20 h-[2px] w-40 -rotate-45 bg-[#2859B8]/15" />

      <div className="absolute right-[10%] bottom-24 h-[2px] w-52 rotate-[35deg] bg-[#F59A01]/20" />

      {/* Small Geometric Blocks */}
      <div className="absolute left-[15%] bottom-24 h-10 w-10 border border-[#2859B8]/15 rotate-12" />

      <div className="absolute right-[18%] top-24 h-14 w-14 border border-[#F59A01]/20 -rotate-12" />

      <div className="absolute right-[30%] top-40 h-5 w-20 bg-[#2859B8]/10" />

      <div className="absolute left-[28%] top-32 h-4 w-4 bg-[#F59A01]/50 rotate-45" />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[460px] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center lg:px-8">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#F59A01]">
          Discover Our Story
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-[#172554] sm:text-6xl lg:text-7xl">
          About Us
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
          A place where young minds are inspired, knowledge is nurtured, and
          every child is encouraged to grow with confidence.
        </p>

        {/* Accent */}
        <div className="mt-10 flex items-center gap-3">
          <span className="h-px w-16 bg-[#2859B8]/20" />
          <span className="h-2 w-2 bg-[#F59A01] rotate-45" />
          <span className="h-px w-16 bg-[#2859B8]/20" />
        </div>
      </div>

      {/* Bottom Diagonal Layer */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-white [clip-path:polygon(0_35%,100%_100%,0_100%)]" />
    </section>
  );
};

export default AboutHero;
