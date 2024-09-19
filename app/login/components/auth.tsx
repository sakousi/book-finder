"use client";

import { useState } from "react";

export default function AuthForm() {
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
      }}
      className="grid gap-4 flex-col items-center"
    >
      <div className="grid gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg">
            E-mail
          </p>
          <input
              className={" rounded-lg text-lg py-1.5 px-3"}
              id="email"
              name="email"
              type="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg">
            Mot de passe
          </p>
          <input
              className={" rounded-lg text-lg py-1.5 px-3"}
              id="password"
              name="password"
              type="password"
          />
        </div>
      </div>
      <button className="mt-4 bg-primary rounded-xl py-2.5 mx-auto px-8 text-white" disabled={loading}>{loading ? "Chargement..." : "Valider"}</button>
    </form>
  );
}
