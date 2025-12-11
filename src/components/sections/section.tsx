import { cn } from "@/libs/style";

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("h-dvh py-8 shrink-0", className)}>
      {children}
    </section>
  );
}

export default Section;
