import { UserPlus, FileUp, Share2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: UserPlus,
    title: "Sign Up in Seconds",
    description: "Create your secure CrediKey account with just a few clicks. It's fast, free, and easy to get started.",
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
    <section id="how-it-works" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get Started in 3 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Managing your credentials has never been easier.
          </p>
        </div>
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden md:flex items-center"
          >
            <div className="w-full border-t border-dashed border-gray-400" />
          </div>
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-md ring-1 ring-border">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <div className="mt-6">
                  <step.icon className="h-10 w-10 mx-auto text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
