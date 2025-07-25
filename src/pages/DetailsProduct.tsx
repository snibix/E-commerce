import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
// TODO : Ajouter la categ plus tard

export default function DetailsProduct() {
  const [prod, setProdruct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProdruct(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch();
  }, [id]);

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
    <article className="flex w-250 mx-auto justify-between mt-15 gap-10 h-156">
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
          <button className="btn border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 text-xl">
            Ajoutez au panier
          </button>
        </div>
      </div>
    </article>
  );
}
