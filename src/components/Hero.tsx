import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
            Discover Premium
            <span className="text-accent"> Technology</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90">
            Experience the latest in innovative technology with our curated collection of premium devices and accessories.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              Browse Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;