import { ExtendedNavLink, NavLink } from "../interfaces";
import telegramIcon from "../assets/icons/telegram.png";
import discordIcon from "../assets/icons/discord.png";
import githubIcon from "../assets/icons/github.png";
import twitterIcon from "../assets/icons/twitter.png";

export const taskExamples: string[] = [
  "Take out the trash",
  "Buy a milk",
  "Walk a dog",
];

export const descriptionExamples: string[] = [
  "Jimmy said to do it",
  "After work I must do it",
];

export const motivationalPhrases: string[] = [
  "Rise and shine, task conqueror! Today is your canvas, paint it boldly.",
  "Embrace the chaos of productivity; it's the symphony of success.",
  "Small steps, big victories. Every to-do is a triumph in the making.",
  "You're not just a doer, you're a Todojo warrior. Own your tasks!",
  "Your to-dos are stepping stones to your dreams. Keep stepping!",
  "In the dance of productivity, every move counts. Dance like everyone's watching!",
  "Task by task, you're building your masterpiece. Keep sculpting!",
  "The journey of a thousand tasks begins with a single to-do. Start strong!",
  "Challenge accepted! Your to-dos are the path to your personal summit.",
  "Unlock your potential with every completed task. You're unstoppable!"
]

export const headerNavLinks: NavLink[] = [
  {
    name: "<A/> ABOUT",
    path: "/about"
  },
  {
    name: "<A/> CAREERS",
    path: "/careers"
  },
  {
    name: "<A/> COMMUNITY",
    path: "/community"
  },
]

export const footerSocialMediaLinks: NavLink[] = [
  {
    name: "</A> X (TWITTER)",
    path: "https://twitter.com/home"
  },
  {
    name: "</A> DISCORD",
    path: "https://discord.com/"
  },
  {
    name: "</A> TELEGRAM",
    path: "https://web.telegram.org/a/"
  },
  {
    name: "</A> GITHUB",
    path: "https://github.com/"
  },
]

export const footerMainLinks: NavLink[] = [
  {
    name: "Privacy Policy",
    path: "/privacy_policy"
  },
  {
    name: "Cookie Policy",
    path: "/cookie_policy"
  },
  {
    name: "Terms of Use",
    path: "/terms_of_use"
  }
]

export const communityNavLinks: ExtendedNavLink[] = [
  {
    id: "01",
    name: "Telegram",
    path: "https://web.telegram.org/a/",
    icon: telegramIcon,
    linkText: "JOIN TELEGRAM"
  },
  {
    id: "02",
    name: "Discord",
    path: "https://discord.com/",
    icon: discordIcon,
    linkText: "JOIN DISCORD"
  },
  {
    id: "03",
    name: "X (Previously Twitter)",
    path: "https://twitter.com/home",
    icon: twitterIcon,
    linkText: "FOLLOW US ON X"
  },
  {
    id: "04",
    name: "Github",
    path: "https://github.com/",
    icon: githubIcon,
    linkText: "FOLLOW US ON GITHUB"
  }
]