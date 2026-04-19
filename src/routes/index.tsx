import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { OfferCard } from "@/components/OfferCard";
import { offers } from "@/lib/offers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RePlate — Donnez une seconde vie aux bons repas" },
      {
        name: "description",
        content:
          "RePlate aide à réduire le gaspillage alimentaire au Maroc. Commandez les invendus des restaurants à prix réduit.",
      },
      { property: "og:title", content: "RePlate — Donnez une seconde vie aux bons repas" },
      {
        property: "og:description",
        content: "Commandez les invendus à prix réduit près de chez vous.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = offers.slice(0, 3);
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Donnez une seconde vie aux bons repas.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Commandez les invendus à prix réduit près de chez vous.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/offres"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Voir les offres
          </Link>
          <Link
            to="/devenir-partenaire"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
          >
            Devenir partenaire
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-foreground">Offres du moment</h2>
          <Link to="/offres" className="text-sm text-primary hover:underline">
            Tout voir →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
