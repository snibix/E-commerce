import { useEffect, useState } from "react";
import CardCateg from "../components/CardCateg";

export default function Category() {
  const [categ, setCateg] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setCateg(data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5">
        Nos Catégories
      </h2>
      <div className="flex justify-center size-full mx-auto flex-wrap gap-5 py-6">
        {categ.map((cat) => (
          <CardCateg key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
