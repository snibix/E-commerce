import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

interface Product {
  id: number;
  cateogory: {
    id: number;
    name: string;
  };
  title: string;
  description: string;
  price: number;
  images: string;
}

export default function ProductListByCategory() {
  const [product, setProduct] = useState<Product[]>([]);
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
        setTimeout(() => {
          setLoading(false);
        });
      })
      .catch((e) => console.log(e));
  }, [id]);

  if (loading || !product) {
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
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {product.length === 0 ? (
        <div className="flex h-160 items-center">
          <h2 className="text-4xl">
            Aucun produits avec cette catégorie et disponible
          </h2>
        </div>
      ) : (
        product.map((item) => <Card key={item.id} product={item} />)
      )}
    </div>
  );
}
