import { NavConfig } from "types";

const enNavConfig: NavConfig = {
  mainNav: [
    {
      title: "Prompt",
      href: "/group/new",
      path: "/group/",
    },
    // {
    //   title: "Apps",
    //   href: "/apptype/new",
    //   path: "/apptype/",
    // },
    // {
    //   title: "Search",
    //   href: "https://link.indiehackers.site/saas101",
    //   path: "https://link.indiehackers.site/saas101",
    //   external: true,
    // },
    // {
    //   title: "Guides",
    //   href: "/guides",
    //   path: "/guides",
    // },
    {
      title: "Prompt Lesson",
      href: "https://learningprompt.wiki/docs/midjourney-learning-path",
      path: "https://learningprompt.wiki/docs/midjourney-learning-path",
      external: true,
    },
    {
      title: "About",
      href: "/about",
      path: "/about",
    },
    // {
    //   title: "Blog",
    //   href: "/blog",
    //   path: "/blog",
    // },
    // {
    //   title: "IndieHub",
    //   href: "https://indiehub.best?ref=opensource",
    //   path: "https://indiehub.best?ref=opensource",
    //   external: true,
    // },
    // {
    //   title: "Mkdirs",
    //   href: "https://mkdirs.com?ref=opensource",
    //   path: "https://mkdirs.com?ref=opensource",
    //   external: true,
    // },
    // {
    //   title: "GitHub",
    //   href: "https://github.com/javayhu/free-directory-boilerplate",
    //   path: "https://github.com/javayhu/free-directory-boilerplate",
    //   external: true,
    // },
  ],
}

const zhNavConfig: NavConfig = {
  mainNav: [
    {
      title: "提示词",
      href: "/group/new",
      path: "/group/",
    },
    // {
    //   title: "应用",
    //   href: "/apptype/new",
    //   path: "/apptype/",
    // },
    // {
    //   title: "搜索",
    //   href: "https://link.indiehackers.site/saas101",
    //   path: "https://link.indiehackers.site/saas101",
    //   external: true,
    // },
    // {
    //   title: "教程",
    //   href: "/guides",
    //   path: "/guides",
    // },
    // {
    //   title: "博客",
    //   href: "/blog",
    //   path: "/blog",
    // },
    {
      title: "提示词教程",
      href: "https://learningprompt.wiki/zh-Hans/docs/midjourney-learning-path",
      path: "https://learningprompt.wiki/zh-Hans/docs/midjourney-learning-path",
      external: true,
    },
    {
      title: "关于",
      href: "/about-zh",
      path: "/about-zh",
    },
    // {
    //   title: "IndieHub",
    //   href: "https://indiehub.best",
    //   path: "https://indiehub.best",
    //   external: true,
    // },
    // {
    //   title: "Mkdirs",
    //   href: "https://mkdirs.com",
    //   path: "https://mkdirs.com",
    //   external: true,
    // },
  ],
}

export const AllNavConfigs: { [key: string]: NavConfig } = {
  en: enNavConfig,
  zh: zhNavConfig,
}