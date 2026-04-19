import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/restaurant/login")({
  head: () => ({
    meta: [
      { title: "Connexion restaurant — RePlate" },
      { name: "description", content: "Connectez-vous à votre espace restaurant RePlate." },
    ],
  }),
  component: RestaurantLogin,
});

function RestaurantLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const inputClass =
    "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none";

  return (
    <Layout>
      <section className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-3xl font-bold text-foreground">Espace restaurant</h1>
        <p className="mt-2 text-muted-foreground">
          Connectez-vous pour gérer vos offres et commandes.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 space-y-4 rounded-xl border border-border bg-card p-6"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">Email</label>
            <input
              required
              type="email"
              className={inputClass}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">Mot de passe</label>
            <input
              required
              type="password"
              className={inputClass}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Pas encore partenaire ?{" "}
          <Link to="/devenir-partenaire" className="text-primary hover:underline">
            Faire une demande
          </Link>
        </p>
      </section>
    </Layout>
  );
}
