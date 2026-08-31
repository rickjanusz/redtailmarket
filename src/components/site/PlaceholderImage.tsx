import { ImageIcon } from "lucide-react";

export function PlaceholderImage({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      aria-hidden
      className={`flex items-center justify-center border border-border bg-secondary text-muted-foreground ${className}`}
    >
      <span className="flex flex-col items-center gap-2">
        <ImageIcon className="h-6 w-6 opacity-60" />
        {label ? (
          <span className="text-[0.62rem] uppercase tracking-[0.24em] opacity-70">
            {label}
          </span>
        ) : null}
      </span>
    </div>
  );
}
