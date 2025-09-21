import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Your Credentials,{" "}
          <span className="bg-gradient-to-r from-primary via-purple-500 to-red-500 bg-clip-text text-transparent">
            Organized & Verified
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          CredentialHub is the secure, modern platform for managing and showcasing your educational and professional achievements with confidence.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <Link href="/login">
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {heroImage && (
          <div className="mt-16 sm:mt-24">
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
