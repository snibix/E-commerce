import Order from "../components/Order";
import ShoppingCart from "../components/ShoppingCart";

export default function Cart() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="flex h-auto w-250 mx-auto justify-between gap-10 py-8">
        <div className="flex flex-col w-[65%]">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5 text-center">
            Mon panier
          </h2>
          <ShoppingCart />
        </div>

        <div className="flex flex-col w-[35%]">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5 text-center">
            Commande
          </h2>
          <div className="sticky top-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <Order />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
