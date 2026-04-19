import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { OfferCard } from "@/components/OfferCard";
import { offers, cities, categories, modes } from "@/lib/offers";

export const Route = createFileRoute("/offres")({
  head: () => ({
    meta: [
      { title: "Offres — RePlate" },
      { name: "description", content: "Parcourez les invendus disponibles près de chez vous." },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  const [city, setCity] = useState(cities[0]);
  const [category, setCategory] = useState(categories[0]);
  const [mode, setMode] = useState(modes[0]);

  const filtered = offers.filter(
    (o) =>
      (city === cities[0] || o.city === city) &&
      (category === categories[0] || o.category === category) &&
      (mode === modes[0] || o.mode === mode || o.mode === "Les deux"),
  );

  const selectClass =
    "rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none";

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold text-foreground">Toutes les offres</h1>
        <p className="mt-2 text-muted-foreground">
          Filtrez par ville, catégorie ou mode de récupération.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <select className={selectClass} value={city} onChange={(e) => setCity(e.target.value)}>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select
            className={selectClass}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <select className={selectClass} value={mode} onChange={(e) => setMode(e.target.value)}>
            {modes.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-12 text-center text-muted-foreground">
              Aucune offre ne correspond à vos critères.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}
