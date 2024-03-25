import { ExtendedNavLink, NavLink } from "../interfaces";
import telegramIcon from "../assets/icons/telegram.png";
import discordIcon from "../assets/icons/discord.png";
import githubIcon from "../assets/icons/github.png";
import twitterIcon from "../assets/icons/twitter.png";

export const headerNavLinksDesktop: NavLink[] = [
  {
    name: "<A/> OVERVIEW",
    path: "/overview",
  },
  {
    name: "<A/> ABOUT",
    path: "/about",
  },
  {
    name: "<A/> CAREERS",
    path: "/careers",
  },
  {
    name: "<A/> COMMUNITY",
    path: "/community",
  },
];

export const headerNavLinksMobile: NavLink[] = [
  {
    name: "Overview",
    path: "/overview",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Careers",
    path: "/careers",
  },
  {
    name: "Community",
    path: "/community",
  },
];

export const footerSocialMediaLinks: NavLink[] = [
  {
    name: "</A> X (TWITTER)",
    path: "https://twitter.com/home",
  },
  {
    name: "</A> DISCORD",
    path: "https://discord.com/",
  },
  {
    name: "</A> TELEGRAM",
    path: "https://web.telegram.org/a/",
  },
  {
    name: "</A> GITHUB",
    path: "https://github.com/",
  },
];

export const footerMainLinks: NavLink[] = [
  {
    name: "Privacy Policy",
    path: "/privacy_policy",
  },
  {
    name: "Cookie Policy",
    path: "/cookie_policy",
  },
  {
    name: "Terms of Use",
    path: "/terms_of_use",
  },
];

export const communityNavLinks: ExtendedNavLink[] = [
  {
    id: "01",
    name: "Telegram",
    path: "https://web.telegram.org/a/",
    icon: telegramIcon,
    linkText: "JOIN TELEGRAM",
  },
  {
    id: "02",
    name: "Discord",
    path: "https://discord.com/",
    icon: discordIcon,
    linkText: "JOIN DISCORD",
  },
  {
    id: "03",
    name: "X",
    path: "https://twitter.com/home",
    icon: twitterIcon,
    linkText: "FOLLOW US ON X",
  },
  {
    id: "04",
    name: "Github",
    path: "https://github.com/",
    icon: githubIcon,
    linkText: "FOLLOW US ON GITHUB",
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
