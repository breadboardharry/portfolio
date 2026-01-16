import { cn } from "@/libs/style";

function Section({
  id,
  children,
  className,
  ref,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLElement>;
}) {
  return (
    <section
      id={id}
      className={cn("section relative overflow-hidden", className)}
      ref={ref}
    >
      {children}
    </section>
  );
}

export default Section;
