import { Link } from "@tanstack/react-router";
import logo from "@/assets/replate-logo.png";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

export function Header() {
  const { t } = useLanguage();
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RePlate" className="block h-12 w-auto" />
        </Link>
        <nav className="flex items-center gap-7 text-sm">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="text-foreground/80 hover:text-primary"
            activeProps={{ className: "text-primary font-medium" }}
          >
            {t("nav_home")}
          </Link>
          <Link
            to="/offres"
            className="text-foreground/80 hover:text-primary"
            activeProps={{ className: "text-primary font-medium" }}
          >
            {t("nav_offers")}
          </Link>
          <Link
            to="/devenir-partenaire"
            className="text-foreground/80 hover:text-primary"
            activeProps={{ className: "text-primary font-medium" }}
          >
            {t("nav_partner")}
          </Link>
          <Link
            to="/restaurant/login"
            className="rounded-md border border-border px-3 py-1.5 text-foreground hover:border-primary hover:text-primary"
          >
            {t("nav_restaurant")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
