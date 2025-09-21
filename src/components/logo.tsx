import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary text-primary-foreground p-1.5 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M14.5 9.5a2 2 0 1 1-3 3.46" />
          <path d="m12 12-7.81 7.81" />
          <path d="m15 15 2.19 2.19" />
          <path d="m18 12 2.19 2.19" />
          <path d="M21 9h-3" />
          <path d="M3 15h3" />
          <path d="M15 3v3" />
          <path d="M9 21v-3" />
        </svg>
      </div>
      <span className="text-lg font-bold tracking-tight">CredentialHub</span>
    </div>
  );
}
