import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex overflow-hidden rounded-md border border-border">
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={`px-2.5 py-1 text-xs font-medium transition-colors ${
          lang === "fr"
            ? "bg-primary text-primary-foreground"
            : "bg-background text-foreground hover:text-primary"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        aria-pressed={lang === "ar"}
        className={`px-2.5 py-1 text-xs font-medium transition-colors ${
          lang === "ar"
            ? "bg-primary text-primary-foreground"
            : "bg-background text-foreground hover:text-primary"
        }`}
      >
        AR
      </button>
    </div>
  );
}