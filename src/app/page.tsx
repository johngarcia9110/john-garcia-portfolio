"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ChevronsDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [allWorkItemsExpanded, setAllWorkItemsExpanded] = useState(false);
  const [numberOfWorkItemsExpanded, setNumberOfWorkItemsExpanded] = useState(0);

  const toggleAllWorkItemsExpanded = (allWorkItemsExpanded: boolean) => {
    setAllWorkItemsExpanded(allWorkItemsExpanded);
    if (allWorkItemsExpanded) {
      setNumberOfWorkItemsExpanded(DATA.work.length);
    } else {
      setNumberOfWorkItemsExpanded(0);
    }
  };

  const toggleAllWorkItemsExpandedText = useMemo(() => {
    if (allWorkItemsExpanded && numberOfWorkItemsExpanded > 0) {
      return `Collapse ${numberOfWorkItemsExpanded} items`;
    } else if (allWorkItemsExpanded && numberOfWorkItemsExpanded === 0) {
      return "Expand All";
    } else {
      return "Expand All";
    }
  }, [numberOfWorkItemsExpanded, allWorkItemsExpanded]);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className=" mb-20">
              <Image
                src="/jg_mark_light.svg"
                alt="logo mark"
                className="w-10 h-10"
                width={32}
                height={32}
              />
            </div>
          </BlurFade>
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-2">About me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Work Experience</h2>
              <Button
                className="text-sm text-muted-foreground"
                variant="ghost"
                onClick={() =>
                  toggleAllWorkItemsExpanded(!allWorkItemsExpanded)
                }
              >
                {toggleAllWorkItemsExpandedText}
                <ChevronsDown
                  className={`inline-block ml-2 size-4 ${cn(
                    "size-3 transform transition-all duration-300 ease-in-out",
                    allWorkItemsExpanded && numberOfWorkItemsExpanded > 0
                      ? "rotate-180"
                      : "rotate-0"
                  )}`}
                />
              </Button>
            </div>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company + work.start + work.end}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                isDefaultExpanded={allWorkItemsExpanded}
                onExpand={() => {
                  setNumberOfWorkItemsExpanded(numberOfWorkItemsExpanded + 1);
                  if (numberOfWorkItemsExpanded + 1 === DATA.work.length) {
                    setAllWorkItemsExpanded(true);
                  }
                }}
                onCollapse={() => {
                  setNumberOfWorkItemsExpanded(numberOfWorkItemsExpanded - 1);
                  if (numberOfWorkItemsExpanded - 1 === 0) {
                    setAllWorkItemsExpanded(false);
                  }
                }}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Stuff I&apos;ve worked with</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      {/* <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-200 dark:bg-gray-600 text-black dark:text-white text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Wanna chat? Just send me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
