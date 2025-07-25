import ShoppingCart from "../components/ShoppingCart";

export default function Cart() {
  return (
    <div className="flex h-175 w-250 mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5">
          Mon panier
        </h2>
        <ShoppingCart />
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
}
