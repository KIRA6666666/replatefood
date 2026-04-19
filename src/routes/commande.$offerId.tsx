import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { offers } from "@/lib/offers";

export const Route = createFileRoute("/commande/$offerId")({
  loader: ({ params }) => {
    const offer = offers.find((o) => o.id === params.offerId);
    if (!offer) throw notFound();
    return { offer };
  },
  head: () => ({
    meta: [{ title: "Commande — RePlate" }],
  }),
  component: CommandePage,
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Offre introuvable</h1>
        <Link to="/offres" className="mt-4 inline-block text-primary hover:underline">
          Retour aux offres
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
});

function CommandePage() {
  const { offer } = Route.useLoaderData();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"Livraison" | "Retrait">(
    offer.mode === "Retrait" ? "Retrait" : "Livraison",
  );
  const [confirmed, setConfirmed] = useState(false);

  const deliveryFee = mode === "Livraison" ? 10 : 0;
  const total = offer.price + deliveryFee;

  if (confirmed) {
    return (
      <Layout>
        <section className="mx-auto max-w-xl px-6 py-20 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
            ✓
          </div>
          <h1 className="text-2xl font-bold text-foreground">Commande confirmée</h1>
          <p className="mt-2 text-muted-foreground">
            Merci ! Votre commande chez {offer.restaurant} a bien été enregistrée.
          </p>
          <button
            onClick={() => navigate({ to: "/offres" })}
            className="mt-6 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Voir d'autres offres
          </button>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-3xl font-bold text-foreground">Votre commande</h1>

        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold">{offer.title}</h2>
              <p className="text-sm text-muted-foreground">
                {offer.restaurant} • {offer.city}
              </p>
            </div>
            <span className="font-medium text-foreground">{offer.price} MAD</span>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-foreground">Mode de récupération</p>
            <div className="flex gap-2">
              {(["Livraison", "Retrait"] as const).map((m) => {
                const allowed =
                  offer.mode === "Les deux" || offer.mode === m;
                return (
                  <button
                    key={m}
                    disabled={!allowed}
                    onClick={() => setMode(m)}
                    className={`rounded-md border px-4 py-2 text-sm transition ${
                      mode === m
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground hover:border-primary"
                    } ${!allowed ? "cursor-not-allowed opacity-40" : ""}`}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Sous-total</span>
              <span>{offer.price} MAD</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Frais de {mode.toLowerCase()}</span>
              <span>{deliveryFee} MAD</span>
            </div>
            <div className="flex justify-between border-t border-border pt-2 text-base font-semibold text-foreground">
              <span>Total</span>
              <span>{total} MAD</span>
            </div>
          </div>

          <button
            onClick={() => setConfirmed(true)}
            className="mt-6 w-full rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Valider la commande
          </button>
        </div>
      </section>
    </Layout>
  );
}
