import logo from "@/assets/replate-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <img src={logo} alt="RePlate" className="block h-9 w-auto" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RePlate — {t("footer_text")}
        </p>
      </div>
    </footer>
  );
}
