"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/libs/style";
import { useGSAP } from "@gsap/react";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import gsap, { SplitText } from "gsap/all";
import {
  ArrowRightIcon,
  CircuitBoardIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { ReactNode, useRef, useState } from "react";
import Markdown from "react-markdown";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";
import { MarkdownStyleWrapper } from "../ui/markdown-wrapper";

export abstract class Project {
  abstract readonly title: string;
  abstract readonly dates: { from: number; to?: number };
  abstract readonly status: StatusType;
  abstract readonly tags: TagType[];
  abstract readonly coverImageURL: string;
  abstract readonly thumbnailImageURL: string;
  abstract readonly links?: { type: LinkType; url: string }[];
  abstract readonly markdownContent: string;
}

export function ProjectThumbnail({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  const popoverPage = (
    <PagePopoverTemplate
      open={open}
      setOpen={setOpen}
      title={project.title}
      titleClassName=""
      fromYear={project.dates.from}
      toYear={project.dates.to}
      status={project.status}
      tags={project.tags}
      coverImageURL={project.coverImageURL}
      links={project.links}
      markdownContent={project.markdownContent}
    />
  );

  return (
    <ThumbnailTemplate
      onClick={() => {
        setOpen(true);
      }}
      title={project.title}
      thumbnail={project.thumbnailImageURL}
      className={className}
    >
      {popoverPage}
    </ThumbnailTemplate>
  );
}

export function ThumbnailTemplate({
  title,
  thumbnail,
  className,
  onClick,
  children,
}: {
  title: string;
  thumbnail: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const titleAnimationRef = useRef<gsap.core.Timeline | null>(null);
  const fromYear = 2020;
  const toYear = 2022;

  useGSAP(
    () => {
      const title = ref.current?.querySelector(".title");
      if (!title) return;
      const split = SplitText.create(title, { type: "chars" });
      console.log(split);

      const tl = gsap.timeline({ paused: true });

      tl.from(split.chars, {
        yPercent: 50,
        opacity: 0,
        duration: 0.2,
        ease: "power3.out",
        stagger: 0.04,
      });
      tl.progress(1).pause();

      titleAnimationRef.current = tl;

      return () => {
        tl.kill();
        split.revert(); // très important
      };
    },
    {
      scope: ref,
    }
  );

  const handleMouseEnter = () => {
    titleAnimationRef.current?.restart();
  };

  const handleMouseLeave = () => {
    titleAnimationRef.current?.pause(100);
  };

  return (
    <button
      className={cn(
        "see-more trigger bg-black border-8 border-primary transition-colors",
        "relative shrink-0 col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        className
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <img
        src={thumbnail}
        className="object-cover object-center absolute h-full w-full inset-0 scale-110 translate-y-4 group-hover:scale-100 transition duration-350"
        alt={title}
      />

      {/* <h2 className="absolute left-8 pt-6 z-10 leading-snug text-white font-medium text-5xl text-left break-words w-min -translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition duration-350">
        {title}
      </h2> */}

      <h2 className="title absolute left-8 pt-6 z-10 leading-snug font-medium text-6xl text-left uppercase line-clamp-2 text-white">
        {title}
      </h2>

      <p className="absolute left-8 bottom-6 group-hover:text-white">
        {fromYear + (toYear ? ` - ${toYear}` : "")}
      </p>

      {/* <Button
        variant="link"
        asChild
        size="sm"
        className="absolute left-6 bottom-0 pb-12 h-16 pointer-events-auto p-0 text-white translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-350"
      >
        <a>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button> */}

      {children}
    </button>
  );
}

export function PagePopoverTemplate({
  open,
  setOpen,
  title,
  titleClassName,
  coverImageURL,
  fromYear,
  toYear,
  status,
  tags,
  markdownContent,
  links,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  titleClassName?: string;
  coverImageURL: string;
  fromYear: number;
  toYear?: number;
  status: StatusType;
  tags: TagType[];
  markdownContent: string;
  links?: { type: LinkType; url: string }[];
}) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="min-h-dvh h-dvh max-h-dvh overflow-hidden">
          <DrawerHandle className="absolute top-0 left-1/2 -translate-x-1/2 z-10" />
          <ScrollArea className="flex-1 min-h-full h-full max-h-full">
            <DrawerHeader
              className="text-left bg-no-repeat bg-center bg-cover min-h-64 pt-12"
              style={{ backgroundImage: `url(${coverImageURL})` }}
            >
              <DrawerTitle className={cn("sticky top-0", titleClassName)}>
                {title}
              </DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DrawerDescription>
            </DrawerHeader>

            <div className="p-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut odio
              ipsum id mollitia! Esse accusantium blanditiis hic, enim ducimus
              praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ut odio ipsum id mollitia! Esse
              accusantium blanditiis hic, enim ducimus praesentium optio, beatae
              temporibus animi veritatis, exercitationem possimus dolorem ex
              dolores! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ut odio ipsum id mollitia! Esse accusantium blanditiis hic, enim
              ducimus praesentium optio, beatae temporibus animi veritatis,
              exercitationem possimus dolorem ex dolores!
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="h-dvh xl:min-h-[900px] xl:h-11/12 sm:min-w-dvw sm:max-w-dvw xl:min-w-7xl xl:max-w-7xl p-0 overflow-hidden border-none">
        <ScrollArea className="flex-1 min-h-full h-full max-h-full">
          <DialogHeader
            className="relative bg-no-repeat bg-center bg-cover min-h-80 p-6"
            style={{ backgroundImage: `url(${coverImageURL})` }}
          >
            <DialogTitle
              className={cn(
                "absolute bottom-6 left-6",
                "text-5xl text-white dark:text-black",
                titleClassName
              )}
            >
              {title}
            </DialogTitle>

            <div className="absolute z-10 left-0 right-0 bottom-0 px-6 translate-y-1/2 flex items-center">
              <div className="flex-1 flex items-center gap-2">
                {tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}

                <Badge
                  variant="secondary"
                  className="bg-gray-500 text-white dark:bg-gray-600"
                >
                  {fromYear + (toYear ? ` - ${toYear}` : "")}
                </Badge>
                <StatusBadge status={status} />
              </div>
              <div className="flex items-center gap-2">
                {links?.map((link) => (
                  <LinkButton key={link.type} type={link.type} url={link.url} />
                ))}
              </div>
            </div>
          </DialogHeader>

          <MarkdownStyleWrapper className="p-6">
            <Markdown>{markdownContent}</Markdown>
          </MarkdownStyleWrapper>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export type StatusType = "completed" | "in-progress" | "not-started";
export function StatusBadge({ status }: { status: StatusType }): JSX.Element {
  const statusStyles = {
    completed: "bg-green-500 text-white",
    "in-progress": "bg-yellow-500 text-white",
    "not-started": "bg-red-500 text-white",
  };

  const labels = {
    completed: "Completed",
    "in-progress": "In Progress",
    "not-started": "Not Started",
  };

  return (
    <Badge variant="secondary" className={statusStyles[status]}>
      <CircuitBoardIcon />
      {labels[status]}
    </Badge>
  );
}

export type TagType = "electronic" | "software" | "3d-printing";
export function TagBadge({ tag }: { tag: TagType }): JSX.Element {
  const statusStyles = {
    electronic: "bg-blue-500 text-white",
    software: "bg-green-500 text-white",
    "3d-printing": "bg-red-500 text-white",
  };

  const labels = {
    electronic: "Electronic",
    software: "Software",
    "3d-printing": "3D Printing",
  };

  return (
    <Badge variant="secondary" className={statusStyles[tag]}>
      <CircuitBoardIcon />
      {labels[tag]}
    </Badge>
  );
}

export type LinkType = "github" | "instagram";
export function LinkButton({
  type,
  url,
}: {
  type: LinkType;
  url: string;
}): JSX.Element {
  const LinkIcon = () => {
    switch (type) {
      case "github":
        return <GitHubLogoIcon />;
      case "instagram":
        return <InstagramLogoIcon />;
      default:
        return <ExternalLinkIcon />;
    }
  };

  return (
    <Button variant="outline" size="icon" className={cn("rounded-full")}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <LinkIcon />
      </a>
    </Button>
  );
}
