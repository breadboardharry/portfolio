import { email, fullname, phone, urls } from "@/data";
import { cn } from "@/libs/style";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "sonner";
import { useIsTablet } from "@/hooks/use-tablet";

function Footer({ className }: { className?: string }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const copyToClipboard = (content: string, message?: string) => {
    navigator.clipboard.writeText(content);
    if (message) toast(message);
  };

  return (
    <footer className={cn("w-full h-dvh", className)}>
      <div className="w-full h-full relative">
        <div className="absolute top-9/20 lg:2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 xl:gap-0">
          <p className="text-5xl md:text-[100px] lg:text-[120px] xl:text-[160px] font-semibold whitespace-nowrap leading-none">
            LET'S WORK
          </p>
          <p className="text-5xl md:text-[100px] lg:text-[120px] xl:text-[160px] font-semibold whitespace-nowrap leading-none">
            TOGETHER
          </p>
        </div>

        {/* INFOS */}
        <div className="absolute w-3/5 left-1/2 -translate-x-1/2 bottom-6 md:bottom-8 flex flex-col items-center xl:items-start xl:justify-between gap-8">
          <div className="flex flex-col-reverse xl:flex-row justify-between gap-2">
            <div className="flex flex-col items-center xl:items-start gap-4 xl:gap-4 justify-between">
              <div className="flex flex-col items-center md:items-center gap-3">
                <p className="text-white text-sm md:text-lg xl:text-base font-medium">
                  {fullname}
                </p>

                {/* Icon list */}
                <div className="flex gap-2 xl:gap-2 -ml-1.5">
                  <Button
                    variant="ghost"
                    className="p-0 size-10 xl:size-7"
                    asChild
                  >
                    <a href={urls.github} target="_blank" rel="noreferrer">
                      <GitHubLogoIcon className="text-white size-6 xl:size-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 size-10 xl:size-7"
                    asChild
                  >
                    <a href={urls.instagram} target="_blank" rel="noreferrer">
                      <InstagramLogoIcon className="text-white size-6 xl:size-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    className="p-0 size-10 xl:size-7"
                    asChild
                  >
                    <a href={urls.linkedin} target="_blank" rel="noreferrer">
                      <LinkedInLogoIcon className="text-white size-6 xl:size-5" />
                    </a>
                  </Button>

                  <Button
                    variant="ghost"
                    className="xl:hidden p-0 size-10 xl:size-7"
                    onClick={() => {
                      copyToClipboard(email, "Email copied to clipboard!");
                    }}
                  >
                    <MailIcon className="text-white size-6 xl:size-5" />
                  </Button>
                </div>
              </div>
              <p className="h-6 text-center text-white font-normal text-sm md:text-xl xl:text-sm">
                © 2026 All rights reserved.
              </p>
            </div>

            {/* Links */}
            <div className="hidden xl:flex gap-20">
              {/* Services */}
              <div className="flex flex-col gap-4">
                <p className="text-white font-medium">Services</p>
                <div className="flex flex-col gap-3.5">
                  <p className="h-6 text-white font-medium text-sm">
                    Software Development
                  </p>
                  <p className="h-6 text-white font-medium text-sm">
                    Electronics Design
                  </p>
                  <p className="h-6 text-white font-medium text-sm">
                    Consulting
                  </p>
                </div>
              </div>

              {/* Sitemap */}
              <div className="flex flex-col gap-4">
                <p className="text-white font-medium">Sitemap</p>
                <div className="flex flex-col gap-3.5">
                  <a href="#">
                    <p className="h-6 text-white font-medium text-sm">Home</p>
                  </a>
                  <a href="#playground">
                    <p className="h-6 text-white font-medium text-sm">
                      Playground
                    </p>
                  </a>
                  <a href="#contact">
                    <p className="h-6 text-white font-medium text-sm">
                      Contact
                    </p>
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4">
                <p className="text-white font-medium">Contact</p>
                <div className="flex flex-col gap-1">
                  <div className="h-6 flex items-center gap-2">
                    <MailIcon className="size-3 text-white" />
                    <p className="text-white font-medium text-xs">{email}</p>
                  </div>
                  <div className="h-6 flex items-center gap-2">
                    <PhoneIcon className="size-3 text-white" />
                    <p className="text-white font-medium text-xs">{phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
