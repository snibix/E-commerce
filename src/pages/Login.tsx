export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5">
        Se Connecter
      </h2>
      <div className="h-[50vh] mt-5 mb-18">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  );
}
