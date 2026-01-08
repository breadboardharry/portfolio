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
    <section id={id} className={cn("section relative overflow-hidden", className)}>
      {children}
    </section>
  );
}

export default Section;
