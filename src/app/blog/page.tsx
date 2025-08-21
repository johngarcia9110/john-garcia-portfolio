import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { getBlogPosts } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
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
      <div className="gap-2 flex justify-between mb-20">
        <div className="flex-col flex flex-1 space-y-1.5">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              John&apos;s Blog
            </h1>
          </BlurFade>
          <BlurFadeText
            className="max-w-[600px] md:text-xl"
            delay={BLUR_FADE_DELAY}
            text={"Occasionally, I have thoughts worth sharing."}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl ">
            Latest Posts
          </h2>
        </BlurFade>
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
