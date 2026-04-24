import { createFileRoute, Link } from "@tanstack/react-router";
import { Store, ShoppingBag, Bike, Leaf, Wallet, HeartHandshake } from "lucide-react";
import { Layout } from "@/components/Layout";
import { OfferCard } from "@/components/OfferCard";
import { offers } from "@/lib/offers";
import { useLanguage } from "@/i18n/LanguageContext";
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

function Index() {
  const { t } = useLanguage();
  const steps = [
    { icon: Store, title: t("step1_title"), text: t("step1_text") },
    { icon: ShoppingBag, title: t("step2_title"), text: t("step2_text") },
    { icon: Bike, title: t("step3_title"), text: t("step3_text") },
  ];
  const reasons = [
    { icon: Leaf, title: t("why1_title"), text: t("why1_text") },
    { icon: Wallet, title: t("why2_title"), text: t("why2_text") },
    { icon: HeartHandshake, title: t("why3_title"), text: t("why3_text") },
  ];
  const stats = [
    { value: "320", label: t("stat1") },
    { value: "12", label: t("stat2") },
    { value: "2", label: t("stat3") },
    { value: "-50%", label: t("stat4") },
  ];
  const featured = offers.slice(0, 3);
  return (
    <Layout>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-12 text-center sm:py-16">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t("hero_title")}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          {t("hero_subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/offres"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5"
          >
            {t("cta_see_offers")}
          </Link>
          <Link
            to="/devenir-partenaire"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:text-primary hover:-translate-y-0.5"
          >
            {t("cta_become_partner")}
          </Link>
        </div>
      </section>

      {/* Food grid */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
            {t("food_title")}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {t("food_subtitle")}
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
              {t("how_title")}
            </h2>
            <p className="mt-2 text-muted-foreground">{t("how_subtitle")}</p>
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
                  {t("step_label")} {i + 1}
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
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{t("featured_title")}</h2>
          <Link to="/offres" className="text-sm text-primary hover:underline">
            {t("see_all")}
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
              {t("why_title")}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {t("why_subtitle")}
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
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{t("impact_title")}</h2>
          <p className="mt-2 text-muted-foreground">
            {t("impact_subtitle")}
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
            {t("cta_ready_title")}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            {t("cta_ready_text")}
          </p>
          <Link
            to="/offres"
            className="mt-6 inline-block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md"
          >
            {t("cta_browse")}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
