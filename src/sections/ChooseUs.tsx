import {Award, Clock, Wrench} from "lucide-react";

import {Card, CardContent} from "@/components/ui/card";

export function ChooseUs() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Why Choose Way Computer</h2>
          <p className="text-muted-foreground md:w-2/3">
            We are committed to providing the best PC components with exceptional service.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            description="All our products are genuine with manufacturer warranty and quality assurance."
            icon={<Award className="text-primary h-10 w-10" />}
            title="Quality Guaranteed"
          />
          <FeatureCard
            description="Servicio técnico/mantenimiento para todo tipo de pc."
            icon={<Wrench className="text-primary h-10 w-10" />}
            title="Servicio tecnico"
          />
          <FeatureCard
            description="Our team of tech experts is available 7 days Link week to help with any questions."
            icon={<Clock className="text-primary h-10 w-10" />}
            title="Expert Support"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({icon, title, description}) {
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
