import { useEffect, useState } from "react";
import CardCateg from "../components/CardCateg";

export default function Category() {
  const [categ, setCateg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setCateg(data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center p-10">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

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
