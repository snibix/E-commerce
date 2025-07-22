import * as motion from "motion/react-client";
export default function About() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center px-4 h-171"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5">
        À propos de nous
      </h2>

      <div className="max-w-3xl bg-base-200 border border-base-300 rounded-box p-6 shadow-lg mt-4 mb-20">
        <p className="text-lg mb-4">
          Bienvenue sur <span className="font-semibold">D&J</span>, votre
          boutique en ligne de confiance. Nous sommes une équipe passionnée par
          l'innovation, la qualité et la satisfaction client.
        </p>

        <p className="text-lg mb-4">
          Notre mission ? Vous offrir une sélection de produits tendance, utiles
          et fiables, tout en garantissant un service client irréprochable. Que
          vous recherchiez des accessoires lifestyle, des gadgets technologiques
          ou des articles pour votre quotidien, nous avons ce qu’il vous faut.
        </p>

        <p className="text-lg mb-4">
          Lancé en 2025, D&J s’engage à vous accompagner dans vos achats en
          ligne avec transparence, sécurité et rapidité. Rejoignez notre
          communauté dès aujourd’hui et vivez une nouvelle expérience shopping.
        </p>

        <p className="text-lg text-gray-500 italic">
          « D&J – L’e-commerce qui vous simplifie la vie. »
        </p>
      </div>
    </motion.div>
  );
}
