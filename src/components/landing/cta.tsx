import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-accent p-12 shadow-lg">
          <div className="relative z-10 text-center text-primary-foreground">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to Secure Your Future?
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/90">
              Join Doclify today and take the first step towards a more organized and verifiable professional life. Sign up now and experience the future of credential management.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get Started for Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
