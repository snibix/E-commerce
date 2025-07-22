import { useEffect, useState } from "react";
import Card from "./Card";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
