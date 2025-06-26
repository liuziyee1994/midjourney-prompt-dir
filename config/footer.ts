import { SidebarNavItem } from "@/types";

const enFooterConfig: SidebarNavItem[] = [
  {
    title: "Info",
    items: [
      { title: "About Site", href: "/about" },
      // { title: "Privacy Policy", href: "/privacy" },
      // { title: "Terms of Service", href: "/terms" },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Prompt", href: "/group/new" },
      // { title: "Applications", href: "/apptype/new" },
    ],
  },
  {
    title: "Links",
    items: [
      {
        title: "Mkdirs",
        external: true,
        href: "https://mkdirs.com?ref=opensource",
      },
      {
        title: "Brat Generator",
        external: true,
        href: "https://xcxbratgenerator.xyz/",
      },
      // { title: "IndieHub", external: true, href: "https://indiehub.best?ref=opensource" },
      // { title: "Free OG Generator", external: true, href: "https://og.indiehub.best?ref=opensource" },
    ],
  },
];

const zhFooterConfig: SidebarNavItem[] = [
  {
    title: "站点信息",
    items: [
      { title: "关于本站", href: "/about-zh" },
      // { title: "隐私政策", href: "/privacy" },
      // { title: "服务条款", href: "/terms" },
    ],
  },
  {
    title: "功能",
    items: [
      { title: "提示词", href: "/group/new" },
      // { title: "独立应用", href: "/apptype/new" },
    ],
  },
  {
    title: "友情链接",
    items: [
      {
        title: "Mkdirs",
        external: true,
        href: "https://mkdirs.com?ref=opensource",
      },
      {
        title: "Brat Generator",
        external: true,
        href: "https://xcxbratgenerator.xyz/",
      },
      // { title: "IndieHub", external: true, href: "https://indiehub.best?ref=opensource" },
      // { title: "Free OG Generator", external: true, href: "https://og.indiehub.best?ref=opensource" },
    ],
  },
];

export const AllFooterConfigs: { [key: string]: SidebarNavItem[] } = {
  en: enFooterConfig,
  zh: zhFooterConfig,
};
