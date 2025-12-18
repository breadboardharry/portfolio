import { useIsMobile } from "../hooks/use-mobile";
import { useIsTablet } from "../hooks/use-tablet";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "./ui/button";

const items = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "PLAYGROUND", href: "#playground" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return isMobile || isTablet ? (
    <div className="fixed w-full p-4 z-40">
      <div className="flex items-center w-full h-12 bg-white/25 backdrop-blur-2xl rounded-full">
        <p className="grow">ANTOINE LEROUX \ PORTFOLIO</p>
        <button className="rounded-full bg-white size-8 mr-2 flex items-center justify-center">
          +
        </button>
      </div>
    </div>
  ) : (
    <ul className="fixed top-4 left-1/2 z-40 flex items-center gap-3 px-2 w-[900px] transform -translate-x-1/2 h-14 bg-stone-100/35 dark:bg-stone-800/35 backdrop-blur-lg rounded-full">
      {items.map((item) => (
        <li key={item.label} className="flex-1">
          <Button
            className="w-full rounded-full text-base bg-white/75 dark:bg-black/60"
            variant="ghost"
            size="lg"
            asChild
          >
            <a href={item.href} className="font-semibold">
              {item.label}
            </a>
          </Button>
        </li>
      ))}
      <li>
        <Button
          className="w-full rounded-full h-10 bg-white/75 dark:bg-black/60"
          variant="ghost"
          asChild
        >
          <AnimatedThemeToggler />
        </Button>
      </li>
    </ul>
  );
}
