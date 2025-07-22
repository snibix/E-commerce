export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center h-[72.5vh]">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl">
        S'incrire
      </h2>
      <div className="flex justify-center items-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Inscription</legend>

          <label className="label">Nom</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Prenom</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Inscription</button>
        </fieldset>
      </div>
    </div>
  );
}
