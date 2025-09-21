import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, Lock, DatabaseZap } from "lucide-react";

const securityFeatures = [
    {
        icon: ShieldCheck,
        title: "End-to-End Encryption",
        description: "Your data is encrypted from the moment you upload it until it's viewed by someone you authorize.",
    },
    {
        icon: Lock,
        title: "Complete Privacy Control",
        description: "You have full control over your documents. Share them securely and revoke access at any time.",
    },
    {
        icon: DatabaseZap,
        title: "Secure Infrastructure",
        description: "Our platform is built on enterprise-grade infrastructure, ensuring the highest level of security and uptime.",
    }
]

export function TrustSecurity() {
  const securityImage = PlaceHolderImages.find(
    (img) => img.id === "trust-security-illustration"
  );

  return (
    <section id="security" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Trust is Our Top Priority
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              At CredentialHub, we are committed to protecting your sensitive information with state-of-the-art security measures. Your credentials are safe, secure, and always under your control.
            </p>
            <div className="mt-8 space-y-6">
                {securityFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                            <feature.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="mt-1 text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          {securityImage && (
            <div className="flex items-center justify-center">
              <Image
                src={securityImage.imageUrl}
                alt={securityImage.description}
                data-ai-hint={securityImage.imageHint}
                width={800}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
