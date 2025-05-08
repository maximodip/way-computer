"use client";

import {ShoppingCart, Store, User} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {Button} from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();

  const isShopPage = pathname.startsWith("/shop");

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              alt="Way Computer Logo"
              className="object-contain invert"
              height={120}
              src="/logo-removebg-preview.png"
              width={120}
            />
          </Link>
          {/* <span className="text-xl font-bold">Way Computer</span> */}
        </div>
        {isShopPage && (
          <div className="flex items-center gap-4">
            <input
              className="justify-center rounded border px-2 py-1"
              placeholder="Buscar productos..."
              type="text"
            />
            <Link
              className="flex items-center gap-x-2 rounded px-4 py-2 duration-100 hover:bg-gray-500"
              href="/login"
            >
              <User className="h-5 w-5" />
              Ingresá
            </Link>
            <Button ref={null} className="cursor-pointer" size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        )}
        {!isShopPage && (
          <>
            <nav className="hidden items-center gap-6 md:flex">
              <Link className="hover:text-primary text-sm font-medium text-white/85" href="/">
                Principal
              </Link>
              <Link className="hover:text-primary text-sm font-medium text-white/85" href="/">
                Categorias
              </Link>
              <Link className="hover:text-primary text-sm font-medium text-white/85" href="/">
                Presupuestos
              </Link>
              <Link className="hover:text-primary text-sm font-medium text-white/85" href="/">
                Nosotros
              </Link>
              <Link className="hover:text-primary text-sm font-medium text-white/85" href="/">
                Contacto
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button className="flex cursor-pointer items-center gap-x-2">
                <Store className="h-5 w-5" />
                <Link href="/shop">Tienda</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
