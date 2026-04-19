import { Link } from "@tanstack/react-router";
import type { Offer } from "@/lib/offers";
import { getOfferImage } from "@/lib/offerImages";

export function OfferCard({ offer }: { offer: Offer }) {
  const image = getOfferImage(offer.id);
  return (
    <Link
      to="/offres/$offerId"
      params={{ offerId: offer.id }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={offer.title}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground shadow-sm">
          -{Math.round(((offer.originalPrice - offer.price) / offer.originalPrice) * 100)}%
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
            {offer.category}
          </span>
          <span className="text-xs text-muted-foreground">{offer.city}</span>
        </div>
        <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
          {offer.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{offer.restaurant}</p>
        <div className="mt-auto flex items-end justify-between pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">{offer.price} MAD</span>
            <span className="text-sm text-muted-foreground line-through">
              {offer.originalPrice} MAD
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{offer.mode}</span>
        </div>
      </div>
    </Link>
  );
}
