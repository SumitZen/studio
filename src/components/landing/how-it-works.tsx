import { UserPlus, FileUp, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: UserPlus,
    title: "Sign Up in Seconds",
    description: "Create your secure CredentialHub account with just a few clicks. It's fast, free, and easy to get started.",
  },
  {
    icon: FileUp,
    title: "Upload Your Documents",
    description: "Add your certificates, degrees, and other credentials. Our system will encrypt and organize them for you.",
  },
  {
    icon: Share2,
    title: "Share & Get Verified",
    description: "Generate a professional portfolio link to share with employers or use our system for institutional verification.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get Started in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Managing your credentials has never been easier.
          </p>
        </div>
        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden md:flex items-center"
          >
            <div className="w-full border-t border-dashed border-border" />
          </div>
          <div className="relative grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
               <Card key={step.title} className="relative bg-card/50 backdrop-blur-lg border-border/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/20 shadow-lg text-center">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-8 ring-secondary/50">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <CardHeader className="pt-12">
                   <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
