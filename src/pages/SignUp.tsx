import * as motion from "motion/react-client";
import { useState } from "react";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(""); // Réinitialiser les messages
    setErrorMessage("");

    const form = e.target as HTMLFormElement;
    const prenom = (form.elements.namedItem("prenom") as HTMLInputElement)
      ?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      ?.value;

    console.log("Bouton pressé");

    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: prenom,
          email,
          password,
          avatar: "https://picsum.photos/800",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'inscription.");
      }

      console.log("Inscription réussie :", data);
      setSuccessMessage(
        "✅ Inscription réussie ! Vous pouvez maintenant vous connecter."
      );
      form.reset(); // facultatif : vide le formulaire
    } catch (e: any) {
      console.error("Erreur lors de l'inscription :", e);
      setErrorMessage(`❌ ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-10 h-170">
        <span
          className="loading loading-spinner loading-xl"
          style={{ width: "3rem", height: "3rem" }}
        ></span>
      </div>
    );
  }

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

      {/* ✅ Messages d'état */}
      {successMessage && (
        <div className="alert alert-success shadow-lg my-4 w-[600px]">
          <span>{successMessage}</span>
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-error shadow-lg my-4 w-[600px]">
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="flex justify-center items-center h-[40vh] mb-[206px]">
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
            <legend className="fieldset-legend">Inscription</legend>

            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-1">
                <label className="label">Nom</label>
                <input
                  type="text"
                  className="input w-80"
                  placeholder="Nom"
                  name="nom"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="label">Prenom</label>
                <input
                  type="text"
                  className="input w-80"
                  placeholder="Prenom"
                  name="prenom"
                />
              </div>
            </div>

            <div className="flex justify-between gap-2 mt-2">
              <div className="flex flex-col gap-1">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-80"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-80"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>

            <button className="btn btn-neutral mt-4">Inscription</button>
          </fieldset>
        </form>
      </div>
    </motion.div>
  );
}
