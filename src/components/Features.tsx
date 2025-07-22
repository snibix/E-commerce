const features = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zm0-10h14"
        />
      </svg>
    ),
    title: "Livraison Gratuite",
    description: "Livraison gratuite sur commande supérieure à 100€",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    title: "Paiements Flexibles",
    description: "Payez avec plusieurs cartes de crédit",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
        />
      </svg>
    ),
    title: "Retour Facile",
    description: "15 jours de retour facile",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1L5 5l4 4"
        />
      </svg>
    ),
    title: "Nouveautés Quotidiennes",
    description: "Nous mettons à jour notre collection chaque jour",
  },
];
export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
      {features.map((feature, index) => (
        <div
          key={index}
          className="card bg-base-300 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="card-body items-center text-center p-6 text-white">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="card-title text-lg font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-white text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
