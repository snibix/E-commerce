const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-150 mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Collection de produits"
        />
        <div>
          <h1 className="text-5xl font-bold">Nouvelle Collection Arrivée!</h1>
          <p className="py-6">
            Découvrez notre sélection exclusive de produits tendances. Qualité
            premium, design moderne et prix imbattables. Profitez de la
            livraison gratuite dès 50€ d'achat.
          </p>
          <button className="btn border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 text-xl">
            Découvrir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
