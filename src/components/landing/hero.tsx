import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "../logo";

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-dashboard");

  return (
    <section className="relative py-20 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 z-0 bg-gradient-to-b from-background to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 h-48 bg-gradient-to-t from-background to-transparent"
      />
      <div className="container relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        <div className="text-center lg:text-left">
            <span className="text-xl font-bold tracking-tight text-primary">CREDENTIALSHUB</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mt-4">
            Keep All Your Credentials In One Place
            </h1>
            <p className="mt-6 text-2xl text-muted-foreground">
            View. Track. Verify.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-6 gap-y-4">
            <Button size="lg" asChild>
                <Link href="/login">
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            </div>
        </div>

        {heroImage && (
          <div className="flex justify-center">
            <div className="rounded-xl bg-secondary/50 p-2 ring-1 ring-inset ring-border lg:rounded-2xl lg:p-4 shadow-2xl shadow-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-primary/20">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl ring-1 ring-border"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
