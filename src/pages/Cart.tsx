import Order from "../components/Order";
import ShoppingCart from "../components/ShoppingCart";

export default function Cart() {
  return (
    <div className="flex h-175 w-250 mx-auto jusitfy-between gap-50">
      <div className="flex flex-col items-center w-[45%]">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5">
          Mon panier
        </h2>
        <ShoppingCart />
      </div>
      <div className="flex flex-col items-center w-[45%]">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5">
          Orders
        </h2>
        <Order />
      </div>
    </div>
  );
}
