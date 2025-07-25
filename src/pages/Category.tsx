import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import CardCateg from "../components/CardCateg";
interface Category {
  id: number;
}
export default function Category() {
  const [categ, setCateg] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setCateg(data);
        setTimeout(() => {
          setLoading(false);
        }, 100);
      })
      .catch((e) => console.error(e));
  }, []);

  if (loading) {
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
    <section className="flex flex-col items-center">
      <motion.h2
        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Nos Catégories
      </motion.h2>

      <div className="flex justify-center size-full mx-auto flex-wrap gap-5 py-6">
        {categ.map((cat) => (
          <CardCateg key={cat.id} category={cat} />
        ))}
      </div>
    </section>
  );
}
