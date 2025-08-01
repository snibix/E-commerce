import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=500",
    title: "Nouvelle Collection Été",
    subtitle: "Découvrez nos dernières tendances",
    description: "Des styles uniques pour un été inoubliable",
    buttonText: "Découvrir",
    buttonAction: "collection-ete",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&h=500",
    title: "Livraison Gratuite",
    subtitle: "Partout en France",
    description: "Commandez dès maintenant et recevez vos produits sans frais",
    buttonText: "Commander",
    buttonAction: "boutique",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=500",
    title: "Qualité Premium",
    subtitle: "Excellence garantie",
    description: "Des produits sélectionnés avec soin pour votre satisfaction",
    buttonText: "En savoir plus",
    buttonAction: "qualite",
  },
];

export default function TextCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full max-w-[1600px] mx-auto rounded-lg overflow-hidden shadow-2xl mt-8">
      <div className="relative h-[700px]">
        {/* Current slide */}
        <div
          className="absolute w-full h-full transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

          {/* Text content */}
          <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
            <div className="text-white max-w-xl ms-5">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {slides[current].title}
              </h2>
              <h3 className="text-4xl md:text-xl font-bold mb-4 animate-fade-in">
                {slides[current].subtitle}
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {slides[current].description}
              </p>
              <button
                className="btn border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 text-xl p-6"
                onClick={() =>
                  console.log(`Action: ${slides[current].buttonAction}`)
                }
              >
                {slides[current].buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Image précédente"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
        aria-label="Image suivante"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Pagination bullets */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Aller à la diapositive ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
