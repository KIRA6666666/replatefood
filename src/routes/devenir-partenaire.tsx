import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/devenir-partenaire")({
  head: () => ({
    meta: [
      { title: "Devenir partenaire — RePlate" },
      {
        name: "description",
        content:
          "Restaurants, rejoignez RePlate pour vendre vos invendus et réduire le gaspillage.",
      },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", ville: "" });

  const inputClass =
    "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="mx-auto max-w-xl px-6 py-12">
        <h1 className="text-3xl font-bold text-foreground">Devenir partenaire</h1>
        <p className="mt-2 text-muted-foreground">
          Remplissez ce formulaire. Notre équipe examinera votre demande et vous créera un compte
          si elle est acceptée.
        </p>

        {sent ? (
          <div className="mt-8 rounded-xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl text-primary">
              ✓
            </div>
            <h2 className="text-lg font-semibold">Demande envoyée</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Merci ! Vous recevrez une réponse de l'équipe RePlate par email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-xl border border-border bg-card p-6">
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Nom du restaurant</label>
              <input
                required
                className={inputClass}
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
              />
            </div>
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
              <label className="mb-1 block text-sm font-medium text-foreground">Téléphone</label>
              <input
                required
                className={inputClass}
                value={form.telephone}
                onChange={(e) => setForm({ ...form, telephone: e.target.value })}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">Ville</label>
              <input
                required
                className={inputClass}
                value={form.ville}
                onChange={(e) => setForm({ ...form, ville: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Envoyer la demande
            </button>
          </form>
        )}
      </section>
    </Layout>
  );
}
