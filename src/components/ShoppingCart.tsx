export default function ShoppingCart() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Nom du produit</th>
            <th>Produit</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">Produit</div>
            </td>
            <td className="h-70">
              <div className="flex">
                <div className="">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                    alt="Avatar Tailwind CSS Component"
                    className=""
                  />
                </div>
              </div>
            </td>
            <td>250€</td>
            <td>
              <input
                type="number"
                className="input validator"
                required
                placeholder="1"
                min="1"
                max="10"
              />
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">Produit</div>
            </td>
            <td>
              <div className="">
                <div className="">
                  <img
                    src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                    alt="Avatar Tailwind CSS Component"
                    className=""
                  />
                </div>
              </div>
            </td>
            <td>250€</td>
            <td>
              <input
                type="number"
                className="input validator"
                required
                placeholder="1"
                min="1"
                max="10"
              />
            </td>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
