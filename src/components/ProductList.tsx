import { useEffect, useState } from "react";
import Card from "./Card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
}
export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-10 h-150">
        <span
          className="loading loading-spinner loading-xl"
          style={{ width: "3rem", height: "3rem" }}
        ></span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
