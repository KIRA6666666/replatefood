import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { offers } from "@/lib/offers";
import { getOfferImage } from "@/lib/offerImages";

export const Route = createFileRoute("/offres/$offerId")({
  loader: ({ params }) => {
    const offer = offers.find((o) => o.id === params.offerId);
    if (!offer) throw notFound();
    return { offer };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.offer.title} — RePlate` : "Offre — RePlate" },
      {
        name: "description",
        content: loaderData?.offer.description ?? "Détail de l'offre.",
      },
    ],
  }),
  component: OfferDetail,
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Offre introuvable</h1>
        <Link to="/offres" className="mt-4 inline-block text-primary hover:underline">
          ← Retour aux offres
        </Link>
      </div>
    </Layout>
  ),
  errorComponent: ({ error }) => (
    <Layout>
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Une erreur est survenue</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </Layout>
  ),
});

function OfferDetail() {
  const { offer } = Route.useLoaderData();

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 py-12">
        <Link to="/offres" className="text-sm text-muted-foreground hover:text-primary">
          ← Retour aux offres
        </Link>

        <div className="mt-6 rounded-xl border border-border bg-card p-8">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
              {offer.category}
            </span>
            <span className="text-xs text-muted-foreground">• {offer.city}</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold text-foreground">{offer.title}</h1>
          <p className="mt-1 text-muted-foreground">{offer.restaurant}</p>

          <p className="mt-6 text-foreground/90">{offer.description}</p>

          <div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <div>
              <span className="text-foreground">Mode :</span> {offer.mode}
            </div>
            <div>
              <span className="text-foreground">Disponibilité :</span> {offer.pickupTime}
            </div>
          </div>

          <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">{offer.price} MAD</span>
              <span className="text-base text-muted-foreground line-through">
                {offer.originalPrice} MAD
              </span>
            </div>
            <Link
              to="/commande/$offerId"
              params={{ offerId: offer.id }}
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Commander
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
