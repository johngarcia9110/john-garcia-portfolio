import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
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
        <div className="mb-20">
          <Link href="/">
            <Image
              src="/jg_mark_light.svg"
              alt="logo mark"
              className="w-10 h-10"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </BlurFade>
      <div className="gap-2 flex justify-between mb-12">
        <div className="flex-col flex flex-1 space-y-1.5">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              John&apos;s Blog
            </h1>
          </BlurFade>
          <BlurFadeText
            className="max-w-[600px] md:text-xl text-muted-foreground"
            delay={BLUR_FADE_DELAY}
            text={"Occasionally, I have thoughts worth sharing."}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="text-xl font-bold tracking-tighter">Latest Posts</h2>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <Card className="overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full flex flex-col">
                    {post.metadata.image && (
                      <Image
                        src={post.metadata.image}
                        alt={post.metadata.title}
                        width={500}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                    )}
                    <CardHeader className="flex-1 p-4">
                      <CardTitle className="text-lg">
                        {post.metadata.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.metadata.summary}
                      </p>
                      <p className="text-xs text-muted-foreground pt-2">
                        {formatDate(post.metadata.publishedAt)} ·{" "}
                        {post.readingTime} min read
                      </p>
                    </CardHeader>
                  </Card>
                </Link>
              </BlurFade>
            ))}
        </div>
      </div>
    </section>
  );
}
