import { Link } from "@tanstack/react-router";
import logo from "@/assets/replate-logo.png";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        <Link to="/" className="flex items-center -my-2">
          <img src={logo} alt="RePlate" className="h-16 w-auto block" />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="text-foreground/80 hover:text-primary"
            activeProps={{ className: "text-primary font-medium" }}
          >
            Accueil
          </Link>
          <Link
            to="/offres"
            className="text-foreground/80 hover:text-primary"
            activeProps={{ className: "text-primary font-medium" }}
          >
            Offres
          </Link>
          <Link
            to="/devenir-partenaire"
            className="text-foreground/80 hover:text-primary"
            activeProps={{ className: "text-primary font-medium" }}
          >
            Devenir partenaire
          </Link>
          <Link
            to="/restaurant/login"
            className="rounded-md border border-border px-3 py-1.5 text-foreground hover:border-primary hover:text-primary"
          >
            Restaurant
          </Link>
        </nav>
      </div>
    </header>
  );
}
