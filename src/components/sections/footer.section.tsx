import { email, phone, urls } from "@/data";
import { cn } from "@/libs/style";
import { useGSAP } from "@gsap/react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { MailIcon, PhoneIcon } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";
import { SigningSVG } from "../common/signing";
import { Button } from "../ui/button";

function Footer({ className }: { className?: string }) {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".footer-locker",
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        gsap.fromTo(
          "#signing-path1",
          {
            drawSVG: 0,
            duration: 0,
          },
          {
            drawSVG: "100%",
            duration: 1.5,
            ease: "power1.inOut",
            delay: 1,
          }
        );

        gsap.fromTo(
          "#signing-path2",
          {
            drawSVG: 0,
            duration: 0,
          },
          {
            drawSVG: "100%",
            duration: 1,
            ease: "power1.inOut",
            delay: 1,
          }
        );

        gsap.fromTo(
          "#signing-path3",
          {
            drawSVG: 0,
            duration: 0,
          },
          {
            drawSVG: "100%",
            duration: 0.5,
            ease: "power1.inOut",
            delay: 2,
          }
        );
      },
    });
  });

  useGSAP(() => {
    const titles = gsap.utils.toArray<HTMLTitleElement>(".footer-title");

    ScrollTrigger.create({
      trigger: ".footer-locker",
      start: "top 60%",
      end: "bottom top",
      onEnter: () => {
        console.log("ezad");
        titles.forEach((title, index) => {
          const split = SplitText.create(title, { type: "chars" });
          gsap.fromTo(
            split.chars,
            {
              yPercent: 50,
              opacity: 0,
              stagger: 0.04,
            },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.4,
              delay: 0.25 * (index + 1),
              ease: "power3.out",
              stagger: 0.04,
            }
          );
        });
      },
    });
  });

  const copyToClipboard = (content: string, message?: string) => {
    navigator.clipboard.writeText(content);
    if (message) toast(message);
  };

  return (
    <footer className={cn("w-full h-dvh", className)} ref={footerRef}>
      <div className="w-full h-full relative">
        <div className="absolute top-9/20 lg:2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 xl:gap-0">
          <p className="footer-title text-5xl md:text-[100px] lg:text-[120px] xl:text-[160px] font-semibold whitespace-nowrap leading-none">
            LET'S WORK
          </p>
          <p className="footer-title text-5xl md:text-[100px] lg:text-[120px] xl:text-[160px] font-semibold whitespace-nowrap leading-none">
            TOGETHER
          </p>
        </div>

        {/* INFOS */}
        <div className="absolute w-3/5 left-1/2 -translate-x-1/2 bottom-6 md:bottom-8 flex flex-col items-center xl:items-start xl:justify-between gap-8">
          <div className="flex flex-col-reverse xl:flex-row justify-between gap-2 xl:w-full">
            <div className="flex flex-col items-center xl:items-start gap-4 xl:gap-4 justify-between">
              <div className="flex flex-col items-center md:items-center gap-3 xl:gap-0">
                <SigningSVG className="w-40 md:w-40 xl:w-36 opacity-90" />

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
