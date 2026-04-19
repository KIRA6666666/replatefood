import { createFileRoute, Link } from "@tanstack/react-router";
import { Store, ShoppingBag, Bike, Leaf, Wallet, HeartHandshake } from "lucide-react";
import { Layout } from "@/components/Layout";
import { OfferCard } from "@/components/OfferCard";
import { offers } from "@/lib/offers";
import foodSandwich from "@/assets/food-sandwich.jpg";
import foodPizza from "@/assets/food-pizza.jpg";
import foodCroissants from "@/assets/food-croissants.jpg";
import foodMuffins from "@/assets/food-muffins.jpg";
import foodFrites from "@/assets/food-frites.jpg";
import foodShawarma from "@/assets/food-shawarma.jpg";

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

const foodImages = [
  { src: foodSandwich, label: "Sandwich" },
  { src: foodPizza, label: "Pizza" },
  { src: foodCroissants, label: "Viennoiseries" },
  { src: foodMuffins, label: "Muffins" },
  { src: foodFrites, label: "Frites & nuggets" },
  { src: foodShawarma, label: "Shawarma" },
];

const steps = [
  {
    icon: Store,
    title: "Les restaurants publient",
    text: "Chaque jour, les restaurants partenaires mettent en ligne leurs invendus à prix réduit.",
  },
  {
    icon: ShoppingBag,
    title: "Vous commandez",
    text: "Parcourez les offres près de chez vous et passez commande en quelques clics.",
  },
  {
    icon: Bike,
    title: "Récupération ou livraison",
    text: "Choisissez le retrait sur place ou la livraison à domicile, selon ce qui vous convient.",
  },
];

const reasons = [
  {
    icon: Leaf,
    title: "Réduire le gaspillage",
    text: "Chaque repas sauvé, c'est moins de nourriture jetée et moins d'impact sur la planète.",
  },
  {
    icon: Wallet,
    title: "Manger à petit prix",
    text: "Profitez de bons repas de restaurants jusqu'à -60% sur le prix initial.",
  },
  {
    icon: HeartHandshake,
    title: "Aider les restaurants",
    text: "Soutenez les commerçants locaux qui valorisent leurs invendus au lieu de les jeter.",
  },
];

const stats = [
  { value: "320", label: "Repas sauvés" },
  { value: "12", label: "Restaurants partenaires" },
  { value: "2", label: "Villes au Maroc" },
  { value: "-50%", label: "Prix moyen vs. carte" },
];

function Index() {
  const featured = offers.slice(0, 3);
  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-12 text-center sm:py-16">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Donnez une seconde vie aux bons repas.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          Commandez les invendus à prix réduit près de chez vous.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/offres"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
          >
            Voir les offres
          </Link>
          <Link
            to="/devenir-partenaire"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5"
          >
            Devenir partenaire
          </Link>
        </div>
      </section>

      {/* Food grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            Des repas près de chez vous
          </h2>
          <p className="mt-2 text-muted-foreground">
            Sandwichs, pizzas, viennoiseries, desserts… une variété d'invendus chaque jour.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {foodImages.map((img) => (
            <div
              key={img.label}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={img.src}
                alt={img.label}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <span className="text-sm font-medium text-white">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Comment ça marche
            </h2>
            <p className="mt-2 text-muted-foreground">Trois étapes simples, rien de plus.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="h-full rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
                  <step.icon size={22} />
                </div>
                <div className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                  Étape {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured offers */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Offres du moment</h2>
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

      {/* Why RePlate */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Pourquoi RePlate
            </h2>
            <p className="mt-2 text-muted-foreground">
              Une bonne action pour vous, les restaurants et la planète.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <r.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Notre impact</h2>
          <p className="mt-2 text-muted-foreground">
            Ensemble, nous changeons la manière de consommer au Maroc.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-10 text-center transition-all duration-300 hover:shadow-lg">
          <h3 className="text-2xl font-semibold text-foreground">
            Prêt à sauver votre premier repas ?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Découvrez les offres disponibles aujourd'hui dans votre ville.
          </p>
          <Link
            to="/offres"
            className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md"
          >
            Parcourir les offres
          </Link>
        </div>
      </section>
    </Layout>
  );
}
