import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BLUR_FADE_DELAY = 0.04;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = await getPost(slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  let post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />

      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="mb-8 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/jg_mark_light.svg"
              alt="logo mark"
              className="w-10 h-10"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to blog
          </Link>
        </div>
      </BlurFade>

      {post.metadata.image && (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.metadata.image}
              alt={post.metadata.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </BlurFade>
      )}

      <BlurFade delay={post.metadata.image ? BLUR_FADE_DELAY * 3 : BLUR_FADE_DELAY * 2}>
        <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
          {post.metadata.title}
        </h1>
      </BlurFade>

      <BlurFade delay={post.metadata.image ? BLUR_FADE_DELAY * 4 : BLUR_FADE_DELAY * 3}>
        <div className="flex items-center gap-3 mt-4 mb-8">
          <Avatar className="size-10 border">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{DATA.name}</span>
            <span className="text-sm text-muted-foreground">
              {formatDate(post.metadata.publishedAt)} · {post.readingTime} min read
            </span>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={post.metadata.image ? BLUR_FADE_DELAY * 5 : BLUR_FADE_DELAY * 4}>
        <article
          className="prose dark:prose-invert w-full max-w-full"
          dangerouslySetInnerHTML={{ __html: post.source }}
        />
      </BlurFade>

      <BlurFade delay={post.metadata.image ? BLUR_FADE_DELAY * 6 : BLUR_FADE_DELAY * 5}>
        <div className="mt-12 pt-8 border-t max-w-full w-full">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to all posts
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}
