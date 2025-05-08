import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Components
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Peripherals
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Networking
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Shipping
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between border-t pt-6 md:flex-row">
          <div className="mb-4 flex items-center gap-2 md:mb-0">
            <Image
              alt="Way Computer Logo"
              className="object-contain invert"
              height={60}
              src="/logo-removebg-preview.png"
              width={60}
            />
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Way Computer. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
