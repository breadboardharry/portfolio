import { fullname, urls } from "@/data";
import { cn } from "@/libs/style";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "w-full h-14 md:h-16 lg:h-18 xl:h-14 px-4 bg-background flex items-center justify-between transition-colors",
        className
      )}
    >
      <a href="#">
        <p className="text-primary font-medium text-lg md:text-2xl xl:text-lg uppercase">
          {fullname}
        </p>
      </a>

      <ul className="flex gap-3 md:gap-4 lg:gap-3">
        <li>
          <Button
            variant="ghost"
            className="p-0 size-7 md:size-9 xl:size-7"
            asChild
          >
            <a href={urls.github} target="_blank" rel="noreferrer">
              <GitHubLogoIcon className="text-primary size-5 md:size-7 xl:size-5" />
            </a>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            className="p-0 size-7 md:size-9 xl:size-7"
            asChild
          >
            <a href={urls.instagram} target="_blank" rel="noreferrer">
              <InstagramLogoIcon className="text-primary size-5 md:size-7 xl:size-5" />
            </a>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            className="p-0 size-7 md:size-9 xl:size-7"
            asChild
          >
            <a href={urls.linkedin} target="_blank" rel="noreferrer">
              <LinkedInLogoIcon className="text-primary size-5 md:size-7 xl:size-5" />
            </a>
          </Button>
        </li>
      </ul>
    </header>
  );
}
