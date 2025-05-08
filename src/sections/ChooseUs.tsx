import {Award, Clock, Wrench} from "lucide-react";
import {ReactNode} from "react";

import {Card, CardContent} from "@/components/ui/card";

export function ChooseUs() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Por qué elegir Way Computer</h2>
          <p className="text-muted-foreground md:w-2/3">
            Nos comprometemos a proporcionar los mejores componentes de PC con un servicio
            excepcional.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            description="Todos nuestros productos son genuinos con garantía del fabricante y garantía de calidad."
            icon={<Award className="text-primary h-10 w-10" />}
            title="Calidad Garantizada"
          />
          <FeatureCard
            description="Servicio técnico/mantenimiento para todo tipo de pc."
            icon={<Wrench className="text-primary h-10 w-10" />}
            title="Servicio Técnico"
          />
          <FeatureCard
            description="Nuestro equipo de expertos en tecnología está disponible los 7 días de la semana para ayudarle con cualquier pregunta."
            icon={<Clock className="text-primary h-10 w-10" />}
            title="Soporte Experto"
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({icon, title, description}: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
