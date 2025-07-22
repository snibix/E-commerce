import * as motion from "motion/react-client";
export default function Contact() {
  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 text-4xl py-5 mt-5">
        Contactez-nous
      </h2>

      <div className="flex justify-center items-center h-[40vh] mb-[206px] mt-15">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <legend className="fieldset-legend">Contact</legend>

          <div className="flex flex-col gap-1">
            <label className="label">Nom</label>
            <input type="text" className="input w-full" placeholder="Nom" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="label">Prenom</label>
            <input type="text" className="input w-full" placeholder="Prenom" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="label">Votre message</label>
            <textarea
              className="textarea w-full"
              placeholder="Bonjour ..."
            ></textarea>
          </div>

          <button className="btn border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 text-xl w-75 mx-auto my-3">
            Envoyer
          </button>
        </fieldset>
      </div>
    </motion.div>
  );
}
