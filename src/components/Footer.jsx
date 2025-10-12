export default function Footer() {
  return (
    <footer className="relative">
      <div className="container py-14">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <img src="/assets/logo.svg" alt="Stimuler" className="h-7 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-muted">
              For more details and enquiries, reach out to us anytime!
            </p>
            <a id="contact" href="mailto:contact@stimuler.tech" className="mt-3 inline-block text-sm underline">Contact</a>
          </div>

          <div>
            <div className="text-sm font-semibold text-muted">Product</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About us</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms and Conditions</a></li>
              <li><a href="/refund" className="hover:underline">Cancellation & Refund policy</a></li>
              <li><a href="/deletion" className="hover:underline">Data Deletion</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-muted">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#download" className="hover:underline">Download</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-xs text-muted">© Stimuler</div>
      </div>
    </footer>
  );
}
