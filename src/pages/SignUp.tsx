import * as motion from "motion/react-client";

export default function SignUp() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5">
        Rejoignez-nous en vous inscrivant dès maintenant
      </h2>

      <div className="flex justify-center items-center h-[40vh] mb-[206px]">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend">Inscription</legend>

          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-1">
              <label className="label">Nom</label>
              <input type="text" className="input w-80" placeholder="Nom" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="label">Prenom</label>
              <input type="text" className="input w-80" placeholder="Prenom" />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-1">
              <label className="label">Email</label>
              <input type="email" className="input w-80" placeholder="Email" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-80"
                placeholder="Password"
              />
            </div>
          </div>

          <button className="btn btn-neutral mt-4">Inscription</button>
        </fieldset>
      </div>
    </motion.div>
  );
}
