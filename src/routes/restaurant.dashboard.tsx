import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/restaurant/dashboard")({
  head: () => ({
    meta: [
      { title: "Tableau de bord — RePlate" },
      { name: "description", content: "Gérez vos offres et commandes RePlate." },
    ],
  }),
  component: RestaurantDashboard,
});

type OrderStatus = "Nouvelle" | "En préparation" | "Prête" | "Livrée";

type Order = {
  id: string;
  client: string;
  item: string;
  mode: "Livraison" | "Retrait";
  status: OrderStatus;
  total: number;
};

type Offer = {
  id: string;
  name: string;
  category: string;
  originalPrice: number;
  price: number;
  mode: "Livraison" | "Retrait" | "Les deux";
  city: string;
  image?: string;
};

const initialOrders: Order[] = [
  { id: "C-1042", client: "Yassine B.", item: "Sandwich poulet grillé", mode: "Livraison", status: "Nouvelle", total: 30 },
  { id: "C-1041", client: "Salma E.", item: "Box muffins & cookies", mode: "Retrait", status: "En préparation", total: 28 },
  { id: "C-1040", client: "Mehdi A.", item: "Burger maison + frites", mode: "Livraison", status: "Prête", total: 42 },
  { id: "C-1039", client: "Lina K.", item: "Wrap poulet healthy", mode: "Retrait", status: "Livrée", total: 24 },
];

const initialOffers: Offer[] = [
  { id: "o1", name: "Sandwich poulet grillé", category: "Sandwich", originalPrice: 45, price: 20, mode: "Les deux", city: "Casablanca" },
  { id: "o2", name: "Burger maison + frites", category: "Fast-food", originalPrice: 75, price: 32, mode: "Les deux", city: "Casablanca" },
];

const statusOptions: OrderStatus[] = ["Nouvelle", "En préparation", "Prête", "Livrée"];

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none";

function RestaurantDashboard() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [offers, setOffers] = useState<Offer[]>(initialOffers);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Omit<Offer, "id">>({
    name: "",
    category: "Sandwich",
    originalPrice: 0,
    price: 0,
    mode: "Les deux",
    city: "Casablanca",
    image: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, image: reader.result as string }));
    reader.readAsDataURL(file);
  };

  const activeOffers = offers.length;
  const ordersToday = orders.length;
  const salesToday = orders.reduce((s, o) => s + o.total, 0);

  const updateStatus = (id: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  const resetForm = () => {
    setForm({ name: "", category: "Sandwich", originalPrice: 0, price: 0, mode: "Les deux", city: "Casablanca", image: "" });
    setEditingId(null);
    setShowForm(false);
  };

  const submitOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || form.price <= 0 || form.originalPrice <= 0) return;
    if (editingId) {
      setOffers((prev) => prev.map((o) => (o.id === editingId ? { ...o, ...form } : o)));
    } else {
      setOffers((prev) => [...prev, { id: `o${Date.now()}`, ...form }]);
    }
    resetForm();
  };

  const editOffer = (offer: Offer) => {
    setForm({
      name: offer.name,
      category: offer.category,
      originalPrice: offer.originalPrice,
      price: offer.price,
      mode: offer.mode,
      city: offer.city,
      image: offer.image ?? "",
    });
    setEditingId(offer.id);
    setShowForm(true);
  };

  const deleteOffer = (id: string) => {
    setOffers((prev) => prev.filter((o) => o.id !== id));
  };

  const statusColor = (s: OrderStatus) => {
    if (s === "Nouvelle") return "bg-primary/10 text-primary";
    if (s === "En préparation") return "bg-amber-500/10 text-amber-600";
    if (s === "Prête") return "bg-blue-500/10 text-blue-600";
    return "bg-emerald-500/10 text-emerald-600";
  };

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tableau de bord</h1>
            <p className="mt-1 text-muted-foreground">Gérez vos commandes et vos offres.</p>
          </div>
          <button
            onClick={() => navigate({ to: "/" })}
            className="rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-primary"
          >
            Se déconnecter
          </button>
        </div>

        {/* Summary cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Commandes reçues</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{ordersToday}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Offres actives</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{activeOffers}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Ventes du jour</p>
            <p className="mt-2 text-3xl font-bold text-primary">{salesToday} MAD</p>
          </div>
        </div>

        {/* Orders */}
        <div className="mt-10 rounded-xl border border-border bg-card">
          <div className="border-b border-border p-5">
            <h2 className="text-lg font-semibold text-foreground">Commandes reçues</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-left text-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-5 py-3">N°</th>
                  <th className="px-5 py-3">Client</th>
                  <th className="px-5 py-3">Article</th>
                  <th className="px-5 py-3">Mode</th>
                  <th className="px-5 py-3">Total</th>
                  <th className="px-5 py-3">Statut</th>
                  <th className="px-5 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-t border-border">
                    <td className="px-5 py-3 font-medium text-foreground">{o.id}</td>
                    <td className="px-5 py-3 text-foreground">{o.client}</td>
                    <td className="px-5 py-3 text-muted-foreground">{o.item}</td>
                    <td className="px-5 py-3 text-muted-foreground">{o.mode}</td>
                    <td className="px-5 py-3 text-foreground">{o.total} MAD</td>
                    <td className="px-5 py-3">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs ${statusColor(o.status)}`}>
                        {o.status}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <select
                        value={o.status}
                        onChange={(e) => updateStatus(o.id, e.target.value as OrderStatus)}
                        className="rounded-md border border-border bg-background px-2 py-1 text-xs text-foreground focus:border-primary focus:outline-none"
                      >
                        {statusOptions.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Offers */}
        <div className="mt-10 rounded-xl border border-border bg-card">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5">
            <h2 className="text-lg font-semibold text-foreground">Mes offres</h2>
            <button
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              + Ajouter une offre
            </button>
          </div>

          <div className="divide-y divide-border">
            {offers.length === 0 && (
              <p className="p-5 text-sm text-muted-foreground">Aucune offre pour le moment.</p>
            )}
            {offers.map((o) => (
              <div key={o.id} className="flex flex-wrap items-center justify-between gap-3 p-5">
                <div className="flex items-center gap-4">
                  {o.image ? (
                    <img
                      src={o.image}
                      alt={o.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-md bg-secondary text-xs text-muted-foreground">
                      No img
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-foreground">{o.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {o.category} • {o.city} • {o.mode}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-primary">{o.price} MAD</p>
                    <p className="text-xs text-muted-foreground line-through">{o.originalPrice} MAD</p>
                  </div>
                  <button
                    onClick={() => editOffer(o)}
                    className="rounded-md border border-border px-3 py-1.5 text-xs text-foreground hover:border-primary"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => deleteOffer(o.id)}
                    className="rounded-md border border-destructive/40 px-3 py-1.5 text-xs text-destructive hover:bg-destructive/10"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add / Edit offer form */}
        {showForm && (
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              {editingId ? "Modifier l'offre" : "Nouvelle offre"}
            </h3>
            <form onSubmit={submitOffer} className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-foreground">Nom du plat</label>
                <input
                  required
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Catégorie</label>
                <select
                  className={inputClass}
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                  {["Sandwich", "Pizza", "Fast-food", "Street food", "Boulangerie", "Dessert", "Healthy"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Ville</label>
                <select
                  className={inputClass}
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                >
                  {["Casablanca", "Rabat", "Marrakech", "Fès"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Prix initial (MAD)</label>
                <input
                  required
                  type="number"
                  min={1}
                  className={inputClass}
                  value={form.originalPrice || ""}
                  onChange={(e) => setForm({ ...form, originalPrice: Number(e.target.value) })}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">Prix réduit (MAD)</label>
                <input
                  required
                  type="number"
                  min={1}
                  className={inputClass}
                  value={form.price || ""}
                  onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-foreground">Mode</label>
                <select
                  className={inputClass}
                  value={form.mode}
                  onChange={(e) => setForm({ ...form, mode: e.target.value as Offer["mode"] })}
                >
                  {(["Livraison", "Retrait", "Les deux"] as const).map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Image du plat
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                />
                {form.image && (
                  <img
                    src={form.image}
                    alt="Aperçu"
                    className="mt-3 h-32 w-32 rounded-md border border-border object-cover"
                  />
                )}
              </div>
              <div className="flex gap-3 sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  {editingId ? "Enregistrer" : "Ajouter"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-md border border-border px-5 py-2.5 text-sm text-foreground hover:border-primary"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </Layout>
  );
}
