import * as motion from "motion/react-client";
import ProductList from "../components/ProductList";
export default function Product() {
  return (
    <section className="flex flex-col items-center">
      <motion.h2
        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Nos Produits
      </motion.h2>
      <div className="flex justify-center size-full mx-auto flex-wrap gap-5 py-6">
        <ProductList />
      </div>
    </section>
  );
}
