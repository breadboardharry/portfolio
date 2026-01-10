import { urls } from "@/data";
import { cn } from "@/libs/style";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { useIsMobile } from "../../hooks/use-mobile";
import { useIsTablet } from "../../hooks/use-tablet";
import { Button } from "../ui/button";

export function Header({ className }: { className?: string }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  if (isMobile || isTablet) {
    return (
      <div className={cn("w-full p-4", className)}>
        <div className="flex items-center w-full h-12 bg-white/25 backdrop-blur-2xl rounded-full">
          <p className="grow">ANTOINE LEROUX \ PORTFOLIO</p>
          <button className="rounded-full bg-white size-8 mr-2 flex items-center justify-center">
            +
          </button>
        </div>
      </div>
    );
  }

  return (
    <header
      className={cn(
        "w-full h-14 px-4 bg-black flex items-center justify-between",
        className
      )}
    >
      <a href="#">
        <p className="text-white font-medium text-lg uppercase">
          Antoine Leroux
        </p>
      </a>
      <button className="see-more">ssszsazsda</button>

      <ul className="flex gap-3">
        <li>
          <Button variant="ghost" className="p-0 size-7" asChild>
            <a href={urls.github} target="_blank" rel="noreferrer">
              <GitHubLogoIcon className="text-white size-5" />
            </a>
          </Button>
        </li>
        <li>
          <Button variant="ghost" className="p-0 size-7" asChild>
            <a href={urls.instagram} target="_blank" rel="noreferrer">
              <InstagramLogoIcon className="text-white size-5" />
            </a>
          </Button>
        </li>
        <li>
          <Button variant="ghost" className="p-0 size-7" asChild>
            <a href={urls.linkedin} target="_blank" rel="noreferrer">
              <LinkedInLogoIcon className="text-white size-5" />
            </a>
          </Button>
        </li>
      </ul>
    </header>
  );
}
