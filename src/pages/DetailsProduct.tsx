import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Ajustez le chemin selon votre structure

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
}

export default function DetailsProduct() {
  const [prod, setProdruct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // Intégration du panier
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProdruct(data);
        setTimeout(() => {
          setLoading(false);
        }, 100);
      })
      .catch();
  }, [id]);

  const handleAddToCart = () => {
    if (prod) {
      addToCart({
        id: prod.id.toString(), // Conversion en string pour la cohérence
        name: prod.title,
        price: prod.price,
        image: prod.images,
      });
    }
  };

  if (loading || !prod) {
    return (
      <div className="flex justify-center items-center p-10 h-170">
        <span
          className="loading loading-spinner loading-xl"
          style={{ width: "3rem", height: "3rem" }}
        ></span>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-250 mx-auto flex items-end h-15">
        <Link to="/products" className="py-5">
          <ArrowLeftIcon className="w-7 h-7" />
        </Link>
      </div>
      <div className="flex w-250 mx-auto justify-between gap-10 h-156">
        <div className="w-[50%]">
          <img src={prod.images} alt="images du prod" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-5 w-[50%]">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl">
            {prod.title}
          </h2>
          <span className="text-4xl">{prod.price} €</span>
          <p className="text-md">{prod.description}</p>
          <div>
            <button
              onClick={handleAddToCart}
              className="btn border-0 text-white text-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
