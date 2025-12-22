import { cn } from "@/libs/style";
import { ReactNode } from "react";

export function MarkdownStyleWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        className
      )}
    >
      {children}
    </div>
  );
}
