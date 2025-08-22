import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "John Garcia",
  initials: "JG",
  url: "https://johngarcia.app",
  location: "Bay Area, CA",
  locationLink: "https://www.google.com/maps/place/bayarea",
  description:
    "Product-focused engineering leader who helps teams build software that people love to use",
  summary:
    "I lead product and engineering at Lumanu, where I work with a great team to build payment solutions that make it easy for businesses to pay contractors quickly and at scale. \n\n My path into software started in the U.S. Air Force, where I was an Avionics Technician dealing with clunky tools that made tough jobs even harder. That frustration pushed me to start coding, and I’ve been hooked ever since. These days, the same motivation drives me to build tools that actually make life easier and put the user experience at the center of everything I do.",
  avatarUrl: "/me2.jpeg",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Python", "Postgres"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@johngarcia.app",
    tel: "520.780.4950",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/johngarcia9110",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/johngarcia9110/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Lumanu",
      href: "https://www.lumanu.com",
      badges: ["Current"],
      location: "Remote",
      title: "Director of Product and Engineering",
      logoUrl: "/lumanu_logo.jpeg",
      start: "Oct 2024",
      end: "Present",
      description:
        "I oversee day-to-day execution across product development and engineering. I ensure teams deliver secure, scalable, and compliant solutions on time while driving alignment between business goals and technical delivery. My focus is on building high-performing teams, improving processes, and shipping features that directly impact growth and customer success.",
    },
    {
      company: "Lumanu",
      href: "https://www.lumanu.com",
      badges: [],
      location: "Remote",
      title: "Lead Software Engineer",
      logoUrl: "/lumanu_logo.jpeg",
      start: "Nov 2020",
      end: "Oct 2024",
      description:
        "As Lead Software Engineer at Lumanu, I drove technical strategy, architected scalable systems, and mentored engineers to deliver impactful features to buyers and vendors on the Lumanu platform. I worked across teams to build secure, compliant, and innovative payment solutions. Blending hands-on engineering with leadership to ensure quality, speed, and long-term scalability.",
    },
    {
      company: "ForUsAll",
      badges: [],
      href: "https://www.forusall.com",
      location: "Remote",
      title: "Front End Software Engineer",
      logoUrl: "/forusall_logo.jpeg",
      start: "Dec 2019",
      end: "Nov 2020",
      description:
        "I built and maintained responsive, user-friendly web applications that simplified complex financial workflows.I collaborated with designers, product managers, and backend engineers to deliver seamless, accessible experiences using modern technologies like React and TypeScript. I also improved performance, reduced technical debt, and contributed to a scalable design system that streamlined development across the platform.",
    },
    {
      company: "San Francisco Chronicle",
      href: "https://www.sfchronicle.com/",
      badges: [],
      location: "San Francisco, CA",
      title: "Full Stack Software Engineer",
      logoUrl: "/sfchronicle_logo.jpeg",
      start: "Apr 2017",
      end: "Dec 2019",
      description:
        "I developed and maintained web applications that supported both newsroom operations and subscriber experiences. I worked across the stack with technologies like JavaScript, React, Node.js, and SQL to deliver scalable features and ensure reliable performance. I collaborated with cross-functional teams to modernize legacy systems, improve site performance, and enhance digital storytelling capabilities.",
    },
    {
      company: "Adam D Technology",
      href: "",
      badges: [],
      location: "San Jose, CA",
      title: "Web Developer",
      logoUrl: "",
      start: "Jan 2015",
      end: "Apr 2017",
      description:
        "I designed and built custom websites and applications for local businesses. I worked directly with clients to translate their needs into functional, responsive solutions while also handling maintenance, troubleshooting, and performance optimizations. This role gave me hands-on experience across the full development cycle, from initial concept to deployment and ongoing support.",
    },
    {
      company: "United States Air Force",
      href: "https://www.airforce.com/",
      badges: [],
      location: "Tucson, AZ",
      title: "Integrated Avionics Technician",
      logoUrl: "/usaf_logo.jpeg",
      start: "Mar 2012",
      end: "Mar 2015",
      description:
        "I maintained, repaired, and tested advanced avionics systems to ensure mission readiness and flight safety. I diagnosed and resolved issues across navigation, communication, and weapons control systems while adhering to strict technical standards and safety protocols. This role required precision, problem-solving, and collaboration in high-pressure environments to support critical operations.",
    },
  ],
  education: [
    {
      school: "Vets Who Code",
      href: "https://vetswhocode.io/",
      degree: "Modern software development bootcamp",
      logoUrl: "/vetswhocode_logo.jpeg",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
