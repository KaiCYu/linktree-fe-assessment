export interface UserProfile {
  username: string;
  profileImgUrl: string;
  bio: string;
  socials: TSocials[];
  links: LinkGroup[]
}

export interface LinkGroup {
  layout: "list" | "grid";
  title?: string;
  items: LinkItem[];
}

export interface LinkItem {
  title: string;
  linkImgUrl: string;
}

export type TSocials = "twitter" | "instagram" | "apple-music" | "bandcamp" | "bands-in-town" | "facebook" | "soundcloud" | "spotify" | "tidal" | "youtube";

export type UserProfileContextType = {
  user: UserProfile;
}