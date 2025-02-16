import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Products & Services",
    links: [
      { title: "RosterMaster", href: "https://roster-master.vercel.app" },
      { title: "EasyAssess", href: "https://easy-assess.com.au" },
      // {
      //   title: (
      //     <>
      //       See all <span aria-hidden="true">&rarr;</span>
      //     </>
      //   ),
      //   href: "/work",
      // },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Process", href: "/process" },
      { title: "Blog", href: "/blog" },
      { title: "Positions", href: "/positions" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles,
  },
];
