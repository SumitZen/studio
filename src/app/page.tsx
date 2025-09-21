
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { TrustSecurity } from "@/components/landing/trust-security";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <TrustSecurity />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
