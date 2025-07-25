import * as motion from "motion/react-client";
import { Link } from "react-router-dom";
export default function Card({ category }: any) {
  return (
    <motion.div
      className="card bg-base-300 w-96 shadow-sm cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Link to={`/categories/${category.id}`}>
        <figure>
          <img
            src={category.image}
            alt={category.title}
            className="h-60 object-cover w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category.name}</h2>
          <p className="line-clamp-2 text-sm">{category.name}</p>
          <div className="card-actions justify-end">
            <button className="btn border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 text-lg p-4">
              Voir plus
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
