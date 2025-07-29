export default function Order() {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex justify-between w-full">
        <p className="w-70 text-lg font-semibold">Subtotal</p>
        <span className="text-md">2360 €</span>
      </div>
      <div className="flex justify-between">
        <p className="text-lg">Taxes</p>
        <span className="text-md"> 50 €</span>
      </div>
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Total</p>
        <span className="text-left text-md">2410 €</span>
      </div>
    </div>
  );
}
