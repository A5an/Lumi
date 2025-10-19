export default function Footer() {
  return (
    <footer className="relative">
      <div className="container py-14">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <img src="/assets/logo.png" alt="Lumi" className="h-7 w-auto" />
            <span className="text-xl font-bold text-fg">Lumi</span>
          </div>
          <div className="text-xs text-muted">© 2025 Lumi. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
