import { KeyRound } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
        <KeyRound className="h-5 w-5" />
      </div>
      <span className="text-lg sm:text-xl font-bold tracking-tight">CredentialHub</span>
    </div>
  );
}
