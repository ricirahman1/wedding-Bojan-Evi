export default function Footer() {
  return (
    <footer className="relative bg-white py-16 overflow-hidden">

      {/* soft sky glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.12),transparent_60%)]" />

      {/* top divider */}
      <div className="w-24 h-[1px] bg-sky-200 mx-auto mb-8" />

      <div className="relative text-center px-6">

        {/* quote */}
        <p className="text-sky-500 text-sm tracking-[0.3em] uppercase">
          “Two souls, one heart, forever begins here”
        </p>

        {/* couple name */}
        <h2 className="mt-6 text-4xl md:text-5xl font-serif text-sky-800">
          Bojan  <span className="text-sky-400">&</span> Evi
        </h2>

        {/* small description */}
        <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
          With love and gratitude, we invite you to be part of our beautiful journey
          as we begin our forever together.
        </p>

        {/* signature line */}
        

      </div>

      {/* bottom accent */}
      <div className="w-32 h-[2px] bg-sky-300 mx-auto mt-10 rounded-full opacity-60" />
    </footer>
  );
}