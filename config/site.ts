import { env } from "@/env.mjs";
import { SiteConfig } from "types";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const enSiteConfig: SiteConfig = {
  name: "Midjourney Prompt Library",
  title: "Midjourney Prompt Library",
  description: "",
  url: site_url,
  ogImage: `${site_url}/og.png`,
  links: {
    twitter: "https://x.com/javay_hu",
    github: "https://github.com/javayhu/free-directory-boilerplate",
    // coffee: "https://buymeacoffee.com/javayhu",
  },
  mailSupport: "dorohedoro1994@gmail.com",
  creator: "dorohedoro1994",
  subtitle: "Collect high-quality Midjourney prompt, Make you create image faster and better",
};

const zhSiteConfig: SiteConfig = {
  name: "Midjourney提示词导航站",
  title: "Midjourney提示词导航站",
  description: "",
  url: site_url,
  ogImage: `${site_url}/og.png`,
  links: {
    twitter: "https://x.com/javay_hu",
    github: "https://github.com/javayhu/free-directory-boilerplate",
    // coffee: "https://buymeacoffee.com/javayhu",
  },
  mailSupport: "dorohedoro1994@gmail.com",
  creator: "dorohedoro1994",
  subtitle: "收录高质量Midjourney提示词，助力更快更好地生成图片",
};

export const AllSiteConfigs: { [key: string]: SiteConfig } = {
  en: enSiteConfig,
  zh: zhSiteConfig,
}