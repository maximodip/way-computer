import {ChevronRight, Cpu, CpuIcon as Gpu, HardDrive, Monitor} from "lucide-react";
import {ReactNode} from "react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

export function Categories() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Compra por Categoría</h2>
          <p className="text-muted-foreground md:w-2/3">
            Explora nuestra extensa colección de componentes y periféricos para PC para encontrar
            exactamente lo que necesitas.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <CategoryCard count={42} icon={<Cpu className="h-8 w-8" />} title="Procesadores" />
          <CategoryCard count={38} icon={<Gpu className="h-8 w-8" />} title="Tarjetas Gráficas" />
          <CategoryCard
            count={56}
            icon={<HardDrive className="h-8 w-8" />}
            title="Almacenamiento"
          />
          <CategoryCard count={29} icon={<Monitor className="h-8 w-8" />} title="Monitores" />
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="cursor-pointer gap-1" variant="outline">
            Ver Todas las Categorías <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  count: number;
}

function CategoryCard({icon, title, count}: CategoryCardProps) {
  return (
    <Card className="group cursor-pointer transition-all duration-200 hover:shadow-lg">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-4 rounded-full p-3 transition-colors">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{count} Products</p>
      </CardContent>
    </Card>
  );
}
