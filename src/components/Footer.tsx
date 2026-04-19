import logo from "@/assets/replate-logo.png";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <img src={logo} alt="RePlate" className="h-7 w-auto" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RePlate — Réduisons le gaspillage alimentaire au Maroc.
        </p>
      </div>
    </footer>
  );
}
