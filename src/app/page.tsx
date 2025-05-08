import {Hero} from "@/sections/Hero";
import {Categories} from "@/sections/Categories";
import {FeaturedProducts} from "@/sections/FeaturedProducts";
import {ChooseUs} from "@/sections/ChooseUs";
import Map from "@/sections/Map";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Categories />
        <FeaturedProducts />
        <ChooseUs />
        <Map />
      </main>
    </div>
  );
}
