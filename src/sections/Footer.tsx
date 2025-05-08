import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Tienda</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Componentes
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Periféricos
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Redes
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Contáctanos
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Envíos
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Devoluciones
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Empleo
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Prensa
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a className="text-muted-foreground hover:text-foreground text-sm" href="/">
                  Garantía
                </a>
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
