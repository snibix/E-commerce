import * as motion from "motion/react-client";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Ajustez le chemin selon votre structure

// Type pour le produit (adaptez selon votre structure de données)
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

interface CardProps {
  readonly product: Product;
}

export default function Card({ product }: CardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.images,
    });
  };

  return (
    <motion.div
      className="card bg-base-300 w-96 shadow-sm cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Link to={`/products/${product.id}`}>
        <figure>
          <img
            src={product.images}
            alt={product.title}
            className="h-60 object-cover w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title h-15">{product.title}</h2>
          <p className="line-clamp-2 text-sm">{product.description}</p>
          <p className="font-bold text-blue-600">{product.price} €</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn border-0 text-white text-lg p-4 transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
