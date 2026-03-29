import { Profile } from "../types";
import { siteConfig } from "../config/site";

export const profileData: Profile = {
  name: "Tran Ngoc Tan",
  title: "Software Engineer",
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  website: siteConfig.url,
  location: siteConfig.contact.location,
  about: "A motivated Software Engineer with strong programming skills and hands-on experience in modern development tools. I'm a team player, quick to adapt, and always eager to learn. With a background in Information Security, I'm equipped to build software that is not only functional but also secure — because what's better than a developer? A developer who studied security.",
};
