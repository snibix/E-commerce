import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

interface Product {
  id: number;
  cateogory: {
    id: number;
    name: string;
  };
}

export default function ProductListByCategory() {
  const [product, setProduct] = useState<Product[]>([]);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Réponse brute de l’API :", data);
        if (Array.isArray(data)) {
          setProduct(data);
        } else {
          console.error("API n’a pas retourné un tableau :", data);
        }
      })
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {product.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
}
