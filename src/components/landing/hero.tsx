import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-dashboard");

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Your Credentials,{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Organized & Verified
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          CrediKey is the secure, modern platform for managing and showcasing your educational and professional achievements with confidence.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg">
            Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {heroImage && (
          <div className="mt-16 sm:mt-24">
            <div className="rounded-xl bg-white/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4 shadow-2xl">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl ring-1 ring-gray-900/10"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
