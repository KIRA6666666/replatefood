import { Link } from "@tanstack/react-router";
import type { Offer } from "@/lib/offers";

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <Link
      to="/offres/$offerId"
      params={{ offerId: offer.id }}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-sm"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
          {offer.category}
        </span>
        <span className="text-xs text-muted-foreground">{offer.city}</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
        {offer.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{offer.restaurant}</p>
      <div className="mt-4 flex items-end justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-primary">{offer.price} MAD</span>
          <span className="text-sm text-muted-foreground line-through">
            {offer.originalPrice} MAD
          </span>
        </div>
        <span className="text-xs text-muted-foreground">{offer.mode}</span>
      </div>
    </Link>
  );
}
