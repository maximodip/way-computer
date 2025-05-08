import {ChevronRight, ShoppingCart} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Productos Destacados</h2>
          <p className="text-muted-foreground md:w-2/3">
            Descubre nuestros componentes más populares y últimas novedades.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard
            image="/r9.webp"
            originalPrice={449999.99}
            price={359999.99}
            rating={4.9}
            reviews={128}
            title="AMD Ryzen 9 5900X"
          />
          <ProductCard
            image="/rtx.png"
            originalPrice={764999.99}
            price={719999.99}
            rating={4.8}
            reviews={96}
            title="NVIDIA RTX 4070 Ti"
          />
          <ProductCard
            image="/980.png"
            originalPrice={134999.99}
            price={116999.99}
            rating={4.7}
            reviews={215}
            title="Samsung 980 PRO 1TB SSD"
          />
          <ProductCard
            image="/asus.png"
            originalPrice={539999.99}
            price={494999.99}
            rating={4.6}
            reviews={87}
            title='Monitor ASUS ROG Swift 27"'
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="gap-1">
            <Link className="flex items-center gap-x-2" href="/shop">
              Ver Todos los Productos <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
}

function ProductCard({image, title, price, originalPrice, rating, reviews}: ProductCardProps) {
  // Función para formatear precios en formato argentino
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="bg-muted relative flex h-48 items-center justify-center px-4 pt-4">
        <Badge className="bg-primary text-primary-foreground absolute top-2 right-2">Oferta</Badge>
        <Image
          alt={title}
          className="object-contain transition-transform group-hover:scale-105"
          height={150}
          src={image || "/placeholder.svg"}
          width={150}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="truncate font-semibold">{title}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-bold">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-muted-foreground text-sm line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        <div className="mt-2 flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-muted-foreground text-xs">({reviews})</span>
        </div>
        <Button className="mt-3 w-full gap-2">
          <Link className="flex items-center gap-x-2" href="/shop">
            <ShoppingCart className="h-4 w-4" /> Ver en tienda
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
