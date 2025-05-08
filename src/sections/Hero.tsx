import Image from "next/image";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-20 text-white md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Badge className="bg-primary text-primary-foreground">Nuevos Productos</Badge>
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              Arma la PC de tus sueños
            </h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Componentes premium, asesoramiento experto y precios inmejorables. Tu solución
              integral para todas tus necesidades informáticas.
            </p>
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <Button className="bg-primary text-primary-foreground cursor-pointer" size="lg">
                Ver componentes
              </Button>
              <Button
                className="cursor-pointer border-white text-white hover:bg-white hover:text-black"
                size="lg"
                variant="outline"
              >
                Armados Personalizados
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <div className="absolute inset-0">
              <Image
                fill
                alt="Blurred"
                className="scale-110 object-contain blur-xl"
                src="/pc.jpeg"
              />
            </div>
            <div className="relative z-30 h-full w-full">
              <Image
                fill
                priority
                alt="High-performance PC components"
                className="object-contain backdrop-blur-xl"
                src="/pc.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
