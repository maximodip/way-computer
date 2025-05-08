import {ChevronRight, Cpu, CpuIcon as Gpu, HardDrive, Monitor} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

export function Categories() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Shop By Category</h2>
          <p className="text-muted-foreground md:w-2/3">
            Browse our extensive collection of PC components and peripherals to find exactly what
            you need.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <CategoryCard count={42} icon={<Cpu className="h-8 w-8" />} title="Processors" />
          <CategoryCard count={38} icon={<Gpu className="h-8 w-8" />} title="Graphics Cards" />
          <CategoryCard count={56} icon={<HardDrive className="h-8 w-8" />} title="Storage" />
          <CategoryCard count={29} icon={<Monitor className="h-8 w-8" />} title="Monitors" />
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="gap-1" variant="outline">
            View All Categories <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({icon, title, count}) {
  return (
    <Card className="group transition-all duration-200 hover:shadow-lg">
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
