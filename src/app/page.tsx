import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 lg:pt-40 pb-16 sm:pb-24">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Image
              src="/jg_mark_light.svg"
              alt="logo mark"
              className="w-10 h-10 mb-16 sm:mb-24"
              width={40}
              height={40}
            />
          </BlurFade>

          <BlurFadeText
            delay={BLUR_FADE_DELAY * 3}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            yOffset={12}
            text={DATA.name}
          />

          <BlurFadeText
            delay={BLUR_FADE_DELAY * 5}
            className="mt-4 text-xl sm:text-2xl text-muted-foreground max-w-xl"
            yOffset={8}
            text={DATA.description}
          />

          {/* Social Links */}
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex items-center gap-6 mt-8">
              <Link
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Icons.github className="size-5" />
              </Link>
              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Icons.linkedin className="size-5" />
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto w-full max-w-2xl space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              {DATA.summary}
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
              Previously at: ForUsAll, SF Chronicle, and the U.S. Air Force.
            </p>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mt-4"
            >
              View full experience
              <span aria-hidden="true">→</span>
            </Link>
          </BlurFade>
        </div>
      </section>

      {/* Selected Work Section */}
      {/* <section className="py-20 sm:py-32">
        <div className="mx-auto w-full max-w-4xl">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground/70 mb-8">
              Selected Work
            </h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BlurFade delay={BLUR_FADE_DELAY * 20}>
              <Link href="#" className="group block">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-sm">Project Preview</span>
                  </div>
                </div>
                <h3 className="font-medium group-hover:text-muted-foreground transition-colors">
                  Project Title
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A brief description of what this project does and the problem it solves.
                </p>
              </Link>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 22}>
              <Link href="#" className="group block">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-sm">Project Preview</span>
                  </div>
                </div>
                <h3 className="font-medium group-hover:text-muted-foreground transition-colors">
                  Project Title
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  A brief description of what this project does and the problem it solves.
                </p>
              </Link>
            </BlurFade>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20 sm:py-32 pb-32">
        <div className="mx-auto w-full max-w-2xl text-center">
          <BlurFade delay={BLUR_FADE_DELAY * 30}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Wanna work together?
            </h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 32}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
